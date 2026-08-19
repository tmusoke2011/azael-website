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

type SubmissionResponse = {
  ok?: boolean;
  submissionId?: string;
};

export async function submitIntakeToSpreadsheet(payload: EnterpriseDiscoverySubmission) {
  const webhookUrl = process.env.AZAEL_INTAKE_WEBHOOK_URL;
  const webhookSecret = process.env.AZAEL_INTAKE_WEBHOOK_SECRET;

  if (!webhookUrl || !webhookSecret) {
    throw new Error("Intake spreadsheet delivery is not configured.");
  }

  const url = new URL(webhookUrl);
  if (url.protocol !== "https:" || url.hostname !== "script.google.com") {
    throw new Error("Intake spreadsheet delivery is misconfigured.");
  }

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...payload, secret: webhookSecret }),
    cache: "no-store",
    redirect: "follow",
    signal: AbortSignal.timeout(12_000),
  });

  const raw = await response.text();
  let result: SubmissionResponse = {};

  try {
    result = JSON.parse(raw) as SubmissionResponse;
  } catch {
    throw new Error("Intake spreadsheet returned an invalid response.");
  }

  if (!response.ok || !result.ok || !result.submissionId) {
    throw new Error("Intake spreadsheet could not record the submission.");
  }

  return result.submissionId;
}
