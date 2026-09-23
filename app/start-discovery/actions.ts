"use server";

import { redirect } from "next/navigation";

export type DiscoveryFormState = { message: string };

function value(formData: FormData, key: string, maxLength = 3000) {
  return String(formData.get(key) ?? "").trim().slice(0, maxLength);
}

export async function submitDiscoveryForm(
  _previousState: DiscoveryFormState,
  formData: FormData,
): Promise<DiscoveryFormState> {
  if (value(formData, "companyUrl")) redirect("/start-discovery/thank-you");

  const capitalCurrentlySought = value(formData, "capitalCurrentlySought") === "yes";
  const payload = {
    channel: "web",
    formVersion: "enterprise-discovery-v1",
    sourceReference: `azael.africa:start-discovery:${Date.now()}`,
    contactName: value(formData, "contactName"),
    contactEmail: value(formData, "workEmail"),
    contactPhone: value(formData, "phone"),
    role: value(formData, "role"),
    businessName: value(formData, "businessName"),
    country: value(formData, "country"),
    location: value(formData, "location"),
    website: value(formData, "website"),
    description: value(formData, "description"),
    ambition: value(formData, "ambition"),
    whyNow: value(formData, "whyNow"),
    constraintBelief: value(formData, "constraintBelief"),
    managementUncertainty: value(formData, "managementUncertainty"),
    capitalCurrentlySought,
    capitalPurpose: capitalCurrentlySought ? value(formData, "capitalPurpose") : "",
    capitalWhyNow: capitalCurrentlySought ? value(formData, "capitalWhyNow") : "",
    capitalAmount: capitalCurrentlySought && value(formData, "capitalAmount") ? Number(value(formData, "capitalAmount")) : null,
    capitalCurrency: capitalCurrentlySought ? value(formData, "capitalCurrency") : "",
    capitalTiming: capitalCurrentlySought ? value(formData, "capitalTiming") : "",
    additionalContext: value(formData, "additionalContext"),
    consent: {
      confirmed: formData.get("accepted") === "yes",
      consentTextVersion: "enterprise-discovery-v1",
      capturedAt: new Date().toISOString(),
      source: "website",
    },
  };

  const required = [payload.contactName, payload.contactEmail, payload.role, payload.businessName, payload.country, payload.location, payload.description, payload.ambition, payload.whyNow, payload.constraintBelief];
  if (required.some((item) => !item) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.contactEmail) || !payload.consent.confirmed) {
    return { message: "Please complete every required field and confirm that Azael may review your enquiry." };
  }
  if (capitalCurrentlySought && (!payload.capitalPurpose || !payload.capitalWhyNow)) {
    return { message: "Please tell us what the capital would be used for and why it is needed now." };
  }

  const endpoint = process.env.AZOS_INTAKE_URL;
  const apiKey = process.env.AZOS_INTERNAL_API_KEY;
  if (!endpoint || !apiKey) {
    console.error("AZOS intake connection is not configured");
    return { message: "We could not submit your enquiry just now. Please try again or email hello@azael.africa." };
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-azos-key": apiKey },
      body: JSON.stringify(payload),
      cache: "no-store",
    });
    if (!response.ok) throw new Error(`AZOS intake failed: ${response.status}`);
  } catch (error) {
    console.error("Unable to submit intake to AZOS", error);
    return { message: "We could not submit your enquiry just now. Please try again or email hello@azael.africa." };
  }

  redirect("/start-discovery/thank-you");
}
