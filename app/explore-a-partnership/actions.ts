"use server";

import { redirect } from "next/navigation";
import { submitProviderIntakeToSpreadsheet } from "@/lib/intake-spreadsheet";

export type PartnershipFormState = {
  message: string;
};

const requiredFields = [
  "contactName",
  "workEmail",
  "role",
  "organizationName",
  "providerType",
  "headquartersCountry",
  "markets",
  "sectorFocus",
  "targetBusinessProfile",
  "assessmentRequirements",
  "originationChallenge",
  "partnershipInterest",
] as const;

function value(formData: FormData, key: string, maxLength = 1600) {
  return String(formData.get(key) ?? "").trim().slice(0, maxLength);
}

function values(formData: FormData, key: string, maxLength = 800) {
  return formData
    .getAll(key)
    .map((entry) => String(entry).trim())
    .filter(Boolean)
    .join(" | ")
    .slice(0, maxLength);
}

export async function submitPartnershipForm(
  _previousState: PartnershipFormState,
  formData: FormData,
): Promise<PartnershipFormState> {
  if (value(formData, "companyUrl")) {
    redirect("/explore-a-partnership/thank-you");
  }

  const fields = Object.fromEntries(
    [...requiredFields, "phone", "website", "typicalTicketSize"].map((key) => [key, value(formData, key)]),
  );
  const instruments = values(formData, "instruments");

  const hasMissingField = requiredFields.some((key) => !fields[key]) || !instruments;
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.workEmail);
  const accepted = formData.get("accepted") === "yes";

  if (hasMissingField || !validEmail || !accepted) {
    return {
      message: "Please complete every required field, select at least one instrument and confirm that Azael may review your enquiry.",
    };
  }

  try {
    await submitProviderIntakeToSpreadsheet({
      contactName: fields.contactName,
      workEmail: fields.workEmail,
      role: fields.role,
      phone: fields.phone,
      organizationName: fields.organizationName,
      providerType: fields.providerType,
      headquartersCountry: fields.headquartersCountry,
      markets: fields.markets,
      website: fields.website,
      instruments,
      typicalTicketSize: fields.typicalTicketSize,
      sectorFocus: fields.sectorFocus,
      targetBusinessProfile: fields.targetBusinessProfile,
      assessmentRequirements: fields.assessmentRequirements,
      originationChallenge: fields.originationChallenge,
      partnershipInterest: fields.partnershipInterest,
      consentConfirmed: "Yes",
    });
  } catch {
    return {
      message: "We could not submit your enquiry just now. Please try again or email hello@azael.africa.",
    };
  }

  redirect("/explore-a-partnership/thank-you");
}
