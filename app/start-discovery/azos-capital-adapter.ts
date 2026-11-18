import { randomUUID } from "node:crypto";

/** Server-side adapter. Never expose the AZOS endpoint or credentials to the browser. */
const countryCodes: Record<string, string> = {
  uganda: "UG", kenya: "KE", tanzania: "TZ", rwanda: "RW",
  burundi: "BI", "south sudan": "SS", "democratic republic of the congo": "CD",
  drc: "CD", congo: "CG", ethiopia: "ET", nigeria: "NG",
  ghana: "GH", zambia: "ZM", malawi: "MW", "south africa": "ZA",
};
const timingCodes: Record<string, string> = {
  "Immediately": "within_3_months",
  "Within 3 months": "within_3_months",
  "Within 6 months": "three_to_six_months",
  "Within 12 months": "six_to_twelve_months",
  "More than 12 months from now": "not_sure_yet",
  "I don't know yet": "not_sure_yet",
};
function field(data: FormData, name: string) {
  return String(data.get(name) ?? "").trim();
}
export async function submitCapitalEnquiryV11(data: FormData): Promise<{ ok: boolean; message?: string; reference?: string }> {
  const endpoint = process.env.AZOS_CAPITAL_ENQUIRY_API_URL;
  if (!endpoint) return { ok: false, message: "The capital enquiry connection is not configured." };
  const country = countryCodes[field(data, "country").toLowerCase()];
  if (!country) return { ok: false, message: "This country is not yet supported by the capital enquiry connection." };
  const sought = field(data, "capitalCurrentlySought") === "yes";
  if (!sought) return { ok: false, message: "This enquiry does not request capital." };
  const rawAmount = field(data, "capitalAmount");
  const currency = field(data, "capitalCurrency");
  const amountKnown = /^[1-9][0-9]*$/.test(rawAmount) && ["UGX", "USD", "EUR"].includes(currency);
  const purpose = field(data, "capitalPurpose");
  if (!purpose) return { ok: false, message: "Please describe what the capital would be used for." };
  const submissionId = field(data, "submissionId") || randomUUID();
  const payload = {
    schema_version: "1.1",
    submission_id: submissionId,
    source: "azael_website",
    contact: {
      full_name: field(data, "contactName"), role: field(data, "role"),
      email: field(data, "workEmail"), whatsapp_e164: field(data, "phone"),
    },
    business: {
      name: field(data, "businessName"), country_code: country,
      website_url: field(data, "website") || null,
      activity_description: field(data, "description"),
    },
    growth: { ambition_one_to_three_years: field(data, "ambition") },
    capital: {
      amount_known: amountKnown,
      currency: amountKnown ? currency : null,
      amount: amountKnown ? rawAmount : null,
      intended_use_description: purpose,
      ...(timingCodes[field(data, "capitalTiming")] ? { timing: timingCodes[field(data, "capitalTiming")] } : {}),
    },
    consent: {
      privacy_notice_acknowledged: field(data, "accepted") === "yes",
      contact_permission: field(data, "accepted") === "yes",
      // Existing website consent does not grant WhatsApp notifications or provider sharing.
      whatsapp_notification_consent: false,
      capital_provider_sharing_permission: false,
    },
  };
  try {
    const response = await fetch(endpoint, {
      method: "POST", cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        "Idempotency-Key": submissionId,
        "Origin": process.env.AZOS_WEBSITE_ORIGIN || "https://azael.africa",
      },
      body: JSON.stringify(payload),
    });
    const result = await response.json();
    if (!response.ok || !result.success) {
      console.error("AZOS capital enquiry rejected", { status: response.status, code: result.error?.code });
      return { ok: false, message: "We could not submit your capital enquiry. Please try again." };
    }
    return { ok: true, reference: result.submission?.reference };
  } catch {
    return { ok: false, message: "The capital enquiry service is temporarily unavailable. Please try again." };
  }
}
