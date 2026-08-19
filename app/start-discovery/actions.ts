"use server";

import { redirect } from "next/navigation";
import { submitIntakeToSpreadsheet } from "@/lib/intake-spreadsheet";

export type DiscoveryFormState = {
  message: string;
};

const requiredFields = [
  "contactName",
  "workEmail",
  "role",
  "businessName",
  "country",
  "sector",
  "activeSales",
  "businessToday",
  "intendedTransition",
  "capitalPurpose",
] as const;

function value(formData: FormData, key: string, maxLength = 1600) {
  return String(formData.get(key) ?? "").trim().slice(0, maxLength);
}

export async function submitDiscoveryForm(
  _previousState: DiscoveryFormState,
  formData: FormData,
): Promise<DiscoveryFormState> {
  if (value(formData, "companyUrl")) {
    redirect("/start-discovery/thank-you");
  }

  const fields = Object.fromEntries(
    [...requiredFields, "phone", "website", "capitalRange", "capitalTiming"].map((key) => [key, value(formData, key)]),
  );

  const hasMissingField = requiredFields.some((key) => !fields[key]);
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.workEmail);
  const accepted = formData.get("accepted") === "yes";

  if (hasMissingField || !validEmail || !accepted) {
    return { message: "Please complete every required field and confirm that Azael may review your enquiry." };
  }

  try {
    await submitIntakeToSpreadsheet({
      contactName: fields.contactName,
      workEmail: fields.workEmail,
      role: fields.role,
      phone: fields.phone,
      businessName: fields.businessName,
      country: fields.country,
      sector: fields.sector,
      website: fields.website,
      activeSales: fields.activeSales,
      businessToday: fields.businessToday,
      intendedTransition: fields.intendedTransition,
      capitalPurpose: fields.capitalPurpose,
      capitalRange: fields.capitalRange,
      capitalTiming: fields.capitalTiming,
      consentConfirmed: "Yes",
    });
  } catch {
    return {
      message: "We could not submit your enquiry just now. Please try again or email hello@azael.africa.",
    };
  }

  redirect("/start-discovery/thank-you");
}
