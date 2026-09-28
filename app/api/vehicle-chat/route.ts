import { NextRequest, NextResponse } from "next/server";

type VehicleState = {
  issue?: string;
  findings?: Array<{ text: string; sourceRole: string; sourceText: string; at: string }>;
  recommendation?: string;
  quote?: { amount: number; detail?: string; version: number };
  authorized?: { amount: number; scope?: string };
  additionalIssues?: string[];
  repairComplete?: boolean;
  outcome?: string;
  unresolved?: string[];
};

const SYSTEM = `
You are the reasoning layer for AZOS Vehicle Intelligence, an independent vehicle intelligence assistant.

You serve either the vehicle owner or garage operator named in the input. You are NOT a mechanic replacing physical inspection. You structure what participants report, distinguish reports from established facts, preserve unfinished work, and help the current user take the smallest useful next action.

Core rules:
- Never convert a garage statement directly into an established physical fact. It remains a garage-reported finding unless separately verified.
- Finding != recommendation != quote != owner authorization != work completed != owner-reported outcome.
- Never treat discussed work as authorized. Authorization must come explicitly from the owner.
- Work outside the authorized scope remains unapproved even if a garage says it has been performed.
- A garage saying "done" does not mean the vehicle problem is resolved. Resolution comes from outcome evidence, normally the owner.
- New complaints do not erase unresolved earlier work.
- Contradictions supersede earlier statements only when the user clearly corrects them; preserve history in the response wording.
- Ask only the smallest useful follow-up. Do not expose internal AZOS terminology unless necessary.
- Keep replies concise, natural, and easy for a workshop operator or owner to understand.
- Do not invent market prices, diagnoses, parts brands, inspections, evidence, approvals, or outcomes.

Return ONLY valid JSON with this shape:
{
  "reply": "natural response to the user",
  "actions": [
    { "type": "set_issue", "value": "..." },
    { "type": "add_finding", "value": "..." },
    { "type": "set_recommendation", "value": "..." },
    { "type": "set_quote", "amount": 600000, "detail": "..." },
    { "type": "set_authorized", "amount": 550000, "scope": "..." },
    { "type": "add_additional_issue", "value": "..." },
    { "type": "set_repair_complete", "value": true },
    { "type": "set_outcome", "value": "..." },
    { "type": "set_unresolved", "items": ["..."] }
  ]
}

Only include actions supported directly by the user's message. Use set_unresolved to preserve the most important open items after this turn.
`;

function extractText(payload: any): string {
  if (typeof payload?.output_text === "string") return payload.output_text;
  for (const item of payload?.output ?? []) {
    for (const part of item?.content ?? []) {
      if (part?.type === "output_text" && typeof part?.text === "string") return part.text;
    }
  }
  return "";
}

function parseJson(text: string) {
  const cleaned = text.trim().replace(/^\`\`\`(?:json)?/i, "").replace(/\`\`\`$/, "").trim();
  return JSON.parse(cleaned);
}

export async function POST(req: NextRequest) {
  const key = process.env.OPENAI_API_KEY;
  if (!key) {
    return NextResponse.json(
      { error: "OPENAI_API_KEY is not configured for this preview deployment." },
      { status: 503 }
    );
  }

  const body = await req.json();
  const role = body?.role === "garage" ? "garage" : "owner";
  const message = String(body?.message ?? "").trim();
  const state: VehicleState = body?.state ?? {};
  const history = Array.isArray(body?.history) ? body.history.slice(-12) : [];

  if (!message) return NextResponse.json({ error: "Message is required." }, { status: 400 });

  const context = {
    currentParticipant: role,
    vehicle: { make: "Toyota", model: "Harrier", registration: "UAX 482K" },
    currentState: state,
    recentConversation: history,
    newMessage: message,
  };

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-5.6-luna",
      input: [
        { role: "system", content: [{ type: "input_text", text: SYSTEM }] },
        { role: "user", content: [{ type: "input_text", text: JSON.stringify(context) }] }
      ],
      max_output_tokens: 1400
    }),
  });

  const data = await response.json();
  if (!response.ok) {
    console.error("OpenAI response error", data);
    return NextResponse.json({ error: data?.error?.message ?? "Model request failed." }, { status: 502 });
  }

  try {
    const result = parseJson(extractText(data));
    return NextResponse.json(result);
  } catch (error) {
    console.error("AZOS plan parse failed", error, extractText(data));
    return NextResponse.json({ error: "AZOS could not safely structure this turn. Please try again." }, { status: 502 });
  }
}
