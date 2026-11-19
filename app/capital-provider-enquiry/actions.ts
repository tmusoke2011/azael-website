"use server";
import { redirect } from "next/navigation";
export type ProviderState = { message: string };
const get = (form: FormData, key: string) => String(form.get(key) ?? "").trim();
export async function submitProviderEnquiry(_state: ProviderState, form: FormData): Promise<ProviderState> {
  const endpoint = process.env.AZOS_CAPITAL_PROVIDER_ENQUIRY_API_URL;
  if (!endpoint) return { message: "This enquiry service is not yet available. Please try again later." };
  const id = get(form, "submissionId");
  if (!/^[0-9a-f-]{36}$/i.test(id)) return { message: "Please refresh this page and try again." };
  const countries = get(form, "countries").split(",").map(x => x.trim()).filter(Boolean);
  const instruments = form.getAll("instruments").map(String);
  const ticketMinimum = get(form, "ticketMinimum");
  const ticketMaximum = get(form, "ticketMaximum");
  if (countries.length === 0 || instruments.length === 0 || !get(form, "name") || !get(form, "organisation") ||
    !get(form, "role") || !get(form, "email") || get(form, "privacy") !== "yes" || get(form, "contactPermission") !== "yes")
    return { message: "Please complete the required fields and permissions." };
  if ([ticketMinimum, ticketMaximum].some(x => x && !/^\d+$/.test(x))) return { message: "Ticket amounts must contain digits only." };
  const payload = {
    schema_version: "1.0", submission_id: id, source: "azael_website",
    contact: { full_name: get(form, "name"), role: get(form, "role"), email: get(form, "email"),
      whatsapp_e164: get(form, "whatsapp") || null },
    organisation: { name: get(form, "organisation"), provider_type: get(form, "providerType") },
    mandate: { country_codes: countries, sectors: form.getAll("sectors").map(String), instruments,
      ticket_currency: get(form, "ticketCurrency") || null,
      ticket_minimum: ticketMinimum || null, ticket_maximum: ticketMaximum || null,
      fit_requirements: get(form, "fitRequirements") || null,
      referral_interest: get(form, "referralInterest") || null },
    consent: { privacy_notice_acknowledged: true, contact_permission: true },
  };
  try {
    const response = await fetch(endpoint, { method: "POST", cache: "no-store",
      headers: { "Content-Type": "application/json", "Idempotency-Key": id, "Origin": process.env.AZOS_WEBSITE_ORIGIN || "https://azael.africa" },
      body: JSON.stringify(payload) });
    if (!response.ok) return { message: response.status === 422 ? "Please check your entries and try again." : "We could not submit your enquiry. Please try again." };
  } catch { return { message: "The enquiry service is temporarily unavailable. Please try again." }; }
  redirect("/capital-provider-enquiry/thank-you");
}
