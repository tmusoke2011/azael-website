export type EnterpriseDiscoverySubmission = {
  contactName: string;
  workEmail: string;
  role: string;
  phone: string;
  businessName: string;
  country: string;
  sector: string;
  website: string;
  activeSales: string;
  businessToday: string;
  intendedTransition: string;
  capitalPurpose: string;
  capitalRange: string;
  capitalTiming: string;
  consentConfirmed: "Yes";
};

export type CapitalProviderSubmission = {
  contactName: string;
  workEmail: string;
  role: string;
  phone: string;
  organizationName: string;
  providerType: string;
  headquartersCountry: string;
  markets: string;
  website: string;
  instruments: string;
  typicalTicketSize: string;
  sectorFocus: string;
  targetBusinessProfile: string;
  assessmentRequirements: string;
  originationChallenge: string;
  partnershipInterest: string;
  consentConfirmed: "Yes";
};

type SubmissionResponse = {
  ok?: boolean;
  submissionId?: string;
  error?: string;
};

async function postIntake(payload: Record<string, string>) {
  const webhookUrl = process.env.AZAEL_INTAKE_WEBHOOK_URL;
  const webhookSecret = process.env.AZAEL_INTAKE_WEBHOOK_SECRET;
  const submissionType = payload.submissionType || "unknown";

  if (!webhookUrl || !webhookSecret) {
    console.error("[intake] configuration missing", {
      submissionType,
      hasWebhookUrl: Boolean(webhookUrl),
      hasWebhookSecret: Boolean(webhookSecret),
    });
    throw new Error("Intake spreadsheet delivery is not configured.");
  }

  const url = new URL(webhookUrl);
  if (url.protocol !== "https:" || url.hostname !== "script.google.com") {
    console.error("[intake] webhook URL rejected", {
      submissionType,
      protocol: url.protocol,
      hostname: url.hostname,
    });
    throw new Error("Intake spreadsheet delivery is misconfigured.");
  }

  let response: Response;

  try {
    response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, secret: webhookSecret }),
      cache: "no-store",
      redirect: "follow",
      signal: AbortSignal.timeout(12_000),
    });
  } catch (error) {
    console.error("[intake] webhook request failed", {
      submissionType,
      errorName: error instanceof Error ? error.name : "UnknownError",
      errorMessage: error instanceof Error ? error.message : "Unknown webhook error",
    });
    throw error;
  }

  const raw = await response.text();
  let result: SubmissionResponse = {};

  try {
    result = JSON.parse(raw) as SubmissionResponse;
  } catch {
    console.error("[intake] webhook returned invalid JSON", {
      submissionType,
      status: response.status,
      contentType: response.headers.get("content-type") || "unknown",
    });
    throw new Error("Intake spreadsheet returned an invalid response.");
  }

  if (!response.ok || !result.ok || !result.submissionId) {
    console.error("[intake] webhook rejected submission", {
      submissionType,
      status: response.status,
      scriptError: result.error || "unknown",
      hasSubmissionId: Boolean(result.submissionId),
    });
    throw new Error("Intake spreadsheet could not record the submission.");
  }

  console.info("[intake] submission recorded", {
    submissionType,
    status: response.status,
    submissionId: result.submissionId,
  });

  return result.submissionId;
}

export function submitIntakeToSpreadsheet(payload: EnterpriseDiscoverySubmission) {
  return postIntake({ submissionType: "enterpriseDiscovery", ...payload });
}

export function submitProviderIntakeToSpreadsheet(payload: CapitalProviderSubmission) {
  return postIntake({ submissionType: "capitalProvider", ...payload });
}
