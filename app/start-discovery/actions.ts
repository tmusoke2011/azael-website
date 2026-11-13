"use server";

import { randomUUID } from "node:crypto";
import { redirect } from "next/navigation";

export type DiscoveryFormState = { message: string };
const value = (data: FormData, key: string, max = 3000) =>
  String(data.get(key) ?? "").trim().slice(0, max);

const countryCodes: Record<string, string> = {
  uganda: "UG", kenya: "KE", tanzania: "TZ", rwanda: "RW",
  burundi: "BI", "south sudan": "SS", "democratic republic of the congo": "CD",
  drc: "CD", congo: "CG", nigeria: "NG", ghana: "GH",
  ethiopia: "ET", zambia: "ZM", malawi: "MW", "south africa": "ZA",
  united_states: "US", "united states": "US", "united kingdom": "GB",
};
function countryCode(country: string) {
  const trimmed = country.trim();
  return /^[A-Za-z]{2}$/.test(trimmed)
    ? trimmed.toUpperCase()
    : countryCodes[trimmed.toLowerCase()] ?? null;
}
function timing(input: string) {
  if (input === "Immediately" || input === "Within 3 months") return "within_3_months";
  if (input === "Within 6 months") return "three_to_six_months";
  if (input === "Within 12 months") return "six_to_twelve_months";
  return "not_sure_yet";
}
export async function submitDiscoveryForm(
  _previousState: DiscoveryFormState, data: FormData,
): Promise<DiscoveryFormState> {
  const accepted = data.get("accepted") === "yes";
  const sought = value(data, "capitalCurrentlySought") === "yes";
  const code = countryCode(value(data, "country"));
  const phone = value(data, "phone");
  const token = value(data, "cf-turnstile-response", 4096);
  const required = ["contactName", "role", "workEmail", "businessName",
    "description", "ambition", "constraintBelief"];
  if (!accepted || !code || required.some(k => !value(data, k)) ||
      !/^\+?[1-9]\d{7,14}$/.test(phone.replace(/[\s()-]/g, ""))) {
    return { message: "Please complete the required information, use a supported country, and confirm your consent." };
  }
  if (!token) return { message: "Please complete the security verification before submitting." };
  const currency = value(data, "capitalCurrency");
  const rawAmount = value(data, "capitalAmount");
  const amountKnown = sought && ["UGX", "USD", "EUR"].includes(currency) &&
    /^[1-9]\d*$/.test(rawAmount);
  const intendedUse = sought
    ? [value(data, "capitalPurpose"), value(data, "capitalWhyNow")].filter(Boolean).join("\n")
    : [value(data, "constraintBelief"), value(data, "additionalContext")].filter(Boolean).join("\n");
  if (!intendedUse || (sought && !value(data, "capitalPurpose")))
    return { message: "Please describe what additional capital would help the business achieve." };

  const submissionId = value(data, "submissionId") || randomUUID();
  const payload = {
    schema_version: "1.1", submission_id: submissionId,
    source: "azael_website",
    contact: {
      full_name: value(data, "contactName", 160),
      role: value(data, "role", 120),
      email: value(data, "workEmail", 254),
      whatsapp_e164: phone.replace(/[\s()-]/g, "").replace(/^00/, "+"),
    },
    business: {
      name: value(data, "businessName", 160),
      country_code: code,
      website_url: value(data, "website", 2048) || null,
      activity_description: [value(data, "description"), value(data, "location") ? "Location: " + value(data, "location") : ""].filter(Boolean).join("\n").slice(0, 1500),
    },
    growth: {
      ambition_one_to_three_years: [
        value(data, "ambition"), value(data, "whyNow") ? "Why now: " + value(data, "whyNow") : "",
        value(data, "managementUncertainty") ? "Uncertainty: " + value(data, "managementUncertainty") : "",
      ].filter(Boolean).join("\n").slice(0, 2000),
    },
    capital: {
      amount_known: amountKnown,
      currency: amountKnown ? currency : null,
      amount: amountKnown ? rawAmount : null,
      intended_use_description: intendedUse.slice(0, 2000),
      timing: timing(value(data, "capitalTiming")),
    },
    consent: {
      privacy_notice_acknowledged: true, contact_permission: true,
      whatsapp_notification_consent: false,
      capital_provider_sharing_permission: false,
    },
  };
  const endpoint = process.env.AZOS_CAPITAL_ENQUIRY_API_URL;
  const origin = process.env.AZAEL_WEBSITE_ORIGIN;
  if (!endpoint || !origin) {
    console.error("AZOS public enquiry integration not configured");
    return { message: "We could not submit your enquiry just now. Please try again later." };
  }
  try {
    const response = await fetch(endpoint, {
      method: "POST", cache: "no-store",
      headers: {
        "Content-Type": "application/json", Origin: origin,
        "Idempotency-Key": submissionId, "X-Turnstile-Token": token,
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(12000),
    });
    const result = await response.json() as {
      success?: boolean; submission?: { reference?: string };
      error?: { code?: string; message?: string };
    };
    if (!response.ok || !result.success || !result.submission?.reference) {
      console.error("AZOS enquiry rejected", { status: response.status, code: result.error?.code });
      return { message: result.error?.message || "We could not submit your enquiry just now. Please try again." };
    }
    redirect("/start-discovery/thank-you?reference=" + encodeURIComponent(result.submission.reference));
  } catch (error) {
    // Next.js redirect throws internally and must propagate.
    if (error && typeof error === "object" && "digest" in error &&
        String(error.digest).startsWith("NEXT_REDIRECT")) throw error;
    console.error("AZOS enquiry request failed");
    return { message: "We could not submit your enquiry just now. Your answers remain saved. Please try again." };
  }
}
