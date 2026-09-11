"use client";

import Link from "next/link";
import { useActionState, useEffect, useMemo, useState } from "react";
import { submitDiscoveryForm, type DiscoveryFormState } from "./actions";

const initialState: DiscoveryFormState = { message: "" };
const DRAFT_KEY = "azael-discovery-draft-v1";

type Answers = {
  businessName: string;
  contactName: string;
  role: string;
  workEmail: string;
  phone: string;
  country: string;
  location: string;
  sector: string;
  yearStarted: string;
  website: string;
  businessToday: string;
  businessStage: string;
  proudOf: string;
  realSale: string;
  customerType: string;
  future: string;
  objectives: string[];
  constraint: string;
  constraintAreas: string[];
  capitalHelp: string;
  capitalSupports: string[];
  amountStatus: string;
  capitalAmount: string;
  currency: string;
  capitalTiming: string;
  discoveryGoal: string;
  clarityGoal: string;
  availableInfo: string[];
};

const initialAnswers: Answers = {
  businessName: "",
  contactName: "",
  role: "",
  workEmail: "",
  phone: "",
  country: "",
  location: "",
  sector: "",
  yearStarted: "",
  website: "",
  businessToday: "",
  businessStage: "",
  proudOf: "",
  realSale: "",
  customerType: "",
  future: "",
  objectives: [],
  constraint: "",
  constraintAreas: [],
  capitalHelp: "",
  capitalSupports: [],
  amountStatus: "",
  capitalAmount: "",
  currency: "",
  capitalTiming: "",
  discoveryGoal: "",
  clarityGoal: "",
  availableInfo: [],
};

const businessStages = [
  "Developing or testing the business",
  "Started making sales",
  "Regular customers and sales",
  "Established and seeking growth",
  "Stabilising or rebuilding",
  "Other",
];

const customerTypes = [
  "Individual consumer",
  "Business",
  "Government or public institution",
  "Non-profit or development organisation",
  "Trader, aggregator or exporter",
  "Other",
  "We have not completed a sale yet",
  "I would prefer to discuss this",
];

const objectiveOptions = [
  "Grow the current business",
  "Increase production or delivery capacity",
  "Enter a new market",
  "Launch a new product or service",
  "Improve profitability",
  "Stabilise or recover the business",
  "Strengthen management or systems",
  "Other",
];

const constraintOptions = [
  "Capital or cash flow",
  "Customers or demand",
  "Equipment or production capacity",
  "People or management",
  "Operations or logistics",
  "Technology or systems",
  "Suppliers or inputs",
  "Regulation or licensing",
  "Financial management",
  "I am not sure",
  "Other",
];

const capitalSupportOptions = [
  "Stock or inputs",
  "Customer orders",
  "Equipment",
  "Premises or production",
  "People",
  "Entry into a new market",
  "Product or technology development",
  "Existing obligations",
  "Cash-flow stability",
  "I need help deciding",
  "Other",
];

const amountOptions = [
  "Yes, I have an amount",
  "I have a rough range",
  "I need help determining the amount",
  "I am not sure capital is the right next step",
];

const timingOptions = [
  "Now or within three months",
  "Within three to six months",
  "Within six to twelve months",
  "Later",
  "I am not sure",
];

const clarityOptions = [
  "Understand what is preventing growth",
  "Decide whether capital is the right next step",
  "Determine an appropriate capital amount or type",
  "Decide which opportunity to pursue first",
  "Understand what must improve before approaching a capital provider",
  "I am not yet sure",
  "Other",
];

const informationOptions = [
  "Sales or transaction records",
  "Management accounts or financial statements",
  "Bank or mobile-money records",
  "Customer contracts or purchase orders",
  "Supplier or inventory records",
  "Registration documents and licences",
  "Business plan or projections",
  "I am not sure",
  "Other",
];

function compose(parts: Array<[string, string | string[]]>) {
  return parts
    .filter(([, value]) => Array.isArray(value) ? value.length : value.trim())
    .map(([label, value]) => `${label}: ${Array.isArray(value) ? value.join(", ") : value}`)
    .join("\n\n");
}

function Choice({ selected, children, onClick }: { selected: boolean; children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={`w-full border-b px-1 py-4 text-left text-[16px] leading-6 transition-colors ${selected ? "border-azael-gold text-azael-navy" : "border-azael-navy/15 text-azael-slate hover:border-azael-navy/35 hover:text-azael-navy"}`}
    >
      <span className="flex items-start justify-between gap-5"><span>{children}</span><span className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${selected ? "bg-azael-gold" : "bg-azael-navy/15"}`} /></span>
    </button>
  );
}

function TextArea({ value, onChange, placeholder }: { value: string; onChange: (value: string) => void; placeholder?: string }) {
  return (
    <div>
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder || "Write in your own words…"}
        className="min-h-[210px] w-full resize-y border-0 border-b-2 border-azael-navy/15 bg-transparent px-0 py-4 text-[18px] leading-8 text-azael-navy outline-none transition-colors placeholder:text-azael-slate/45 focus:border-azael-gold"
      />
      {value.trim().length > 0 && value.trim().length < 45 ? <p className="mt-3 text-sm leading-6 text-azael-slate">A little more context may help us prepare, but continue when this says what you mean.</p> : null}
      <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
        <button type="button" className="text-azael-slate underline decoration-azael-navy/20 underline-offset-4 hover:text-azael-navy" onClick={() => onChange("I am not sure yet.")}>I&apos;m not sure yet</button>
        <button type="button" className="text-azael-slate underline decoration-azael-navy/20 underline-offset-4 hover:text-azael-navy" onClick={() => onChange("I would prefer to discuss this with Azael.")}>Prefer to discuss this</button>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, type = "text", optional = false, placeholder = "" }: { label: string; value: string; onChange: (value: string) => void; type?: string; optional?: boolean; placeholder?: string }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-azael-navy">{label}{optional ? <span className="ml-2 font-normal text-azael-slate">Optional</span> : null}</span>
      <input type={type} value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} className="mt-2 min-h-12 w-full border-0 border-b border-azael-navy/20 bg-transparent px-0 py-3 text-[17px] text-azael-navy outline-none transition-colors placeholder:text-azael-slate/45 focus:border-azael-gold" />
    </label>
  );
}

export function EnterpriseDiscoveryForm() {
  const [state, formAction, pending] = useActionState(submitDiscoveryForm, initialState);
  const [screen, setScreen] = useState(1);
  const [answers, setAnswers] = useState<Answers>(initialAnswers);
  const [message, setMessage] = useState("");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(DRAFT_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as { answers?: Partial<Answers>; screen?: number };
        setAnswers({ ...initialAnswers, ...(parsed.answers || {}) });
        if (parsed.screen && parsed.screen > 1 && parsed.screen < 10) setScreen(parsed.screen);
      }
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try { window.localStorage.setItem(DRAFT_KEY, JSON.stringify({ answers, screen })); } catch {}
  }, [answers, screen, hydrated]);

  const update = <K extends keyof Answers>(key: K, value: Answers[K]) => setAnswers((current) => ({ ...current, [key]: value }));
  const toggle = (key: "objectives" | "constraintAreas" | "capitalSupports" | "availableInfo", value: string, max?: number) => {
    setAnswers((current) => {
      const existing = current[key];
      if (existing.includes(value)) return { ...current, [key]: existing.filter((item) => item !== value) };
      if (max && existing.length >= max) return current;
      return { ...current, [key]: [...existing, value] };
    });
  };

  const requiresAmount = answers.amountStatus === "Yes, I have an amount" || answers.amountStatus === "I have a rough range";

  const backend = useMemo(() => ({
    activeSales: answers.businessStage === "Developing or testing the business" ? "No / pre-regular sales" : answers.businessStage ? `Yes / ${answers.businessStage}` : "",
    businessToday: compose([
      ["Business today", answers.businessToday],
      ["Business stage", answers.businessStage],
      ["What management is proud of", answers.proudOf],
      ["Main operating location", answers.location],
      ["Year operations began", answers.yearStarted],
      ["Real sale", answers.realSale],
      ["Customer type in example", answers.customerType],
    ]),
    intendedTransition: compose([
      ["What comes next", answers.future],
      ["Main objectives", answers.objectives],
      ["What is getting in the way", answers.constraint],
      ["Current view of constraints", answers.constraintAreas],
      ["What Azael should help work out", answers.discoveryGoal],
      ["Most useful clarity", answers.clarityGoal],
      ["Information that may already exist", answers.availableInfo],
    ]),
    capitalPurpose: compose([
      ["How management thinks capital would help", answers.capitalHelp],
      ["What capital may support", answers.capitalSupports],
      ["Amount status", answers.amountStatus],
      ["Amount or range", answers.capitalAmount],
      ["Currency", answers.currency],
      ["Timing", answers.capitalTiming],
    ]),
    capitalRange: [answers.capitalAmount, answers.currency].filter(Boolean).join(" "),
  }), [answers]);

  const validate = () => {
    if (screen === 2) {
      if (![answers.businessName, answers.contactName, answers.role, answers.workEmail, answers.country, answers.location, answers.sector, answers.yearStarted].every((item) => item.trim())) return "Please complete the required details before continuing.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answers.workEmail)) return "Please enter a valid email address.";
    }
    if (screen === 3 && (!answers.businessToday.trim() || !answers.businessStage)) return "Tell us about the business today and choose the description that comes closest.";
    if (screen === 4 && (!answers.realSale.trim() || !answers.customerType)) return "Tell us about a real sale and choose the closest customer description.";
    if (screen === 5 && (!answers.future.trim() || answers.objectives.length === 0)) return "Tell us what you are trying to achieve and choose at least one main objective.";
    if (screen === 6 && (!answers.constraint.trim() || answers.constraintAreas.length === 0)) return "Tell us what may be getting in the way and choose at least one area.";
    if (screen === 7) {
      if (!answers.capitalHelp.trim() || answers.capitalSupports.length === 0 || !answers.amountStatus) return "Tell us how you think capital would help and complete the choices below.";
      if (requiresAmount && (!answers.capitalAmount.trim() || !answers.currency.trim() || !answers.capitalTiming)) return "Add the amount or range, currency and timing before continuing.";
    }
    if (screen === 8 && (!answers.discoveryGoal.trim() || !answers.clarityGoal || answers.availableInfo.length === 0)) return "Tell us what would be most useful and complete the choices below.";
    return "";
  };

  const next = () => {
    const issue = validate();
    if (issue) { setMessage(issue); return; }
    setMessage("");
    setScreen((current) => Math.min(9, current + 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const back = () => {
    setMessage("");
    setScreen((current) => Math.max(1, current - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const screenMeta = [
    "Getting started",
    "About you and the business",
    "Business today · 1 of 6",
    "A real sale · 2 of 6",
    "What comes next · 3 of 6",
    "What&apos;s getting in the way · 4 of 6",
    "Capital · 5 of 6",
    "What do you need help with? · 6 of 6",
    "Review",
  ];

  const progress = screen === 1 ? 0 : ((screen - 1) / 8) * 100;

  return (
    <form action={formAction} className="mx-auto max-w-4xl">
      <input type="hidden" name="contactName" value={answers.contactName} />
      <input type="hidden" name="workEmail" value={answers.workEmail} />
      <input type="hidden" name="role" value={answers.role} />
      <input type="hidden" name="phone" value={answers.phone} />
      <input type="hidden" name="businessName" value={answers.businessName} />
      <input type="hidden" name="country" value={answers.country} />
      <input type="hidden" name="sector" value={answers.sector} />
      <input type="hidden" name="website" value={answers.website} />
      <input type="hidden" name="activeSales" value={backend.activeSales} />
      <input type="hidden" name="businessToday" value={backend.businessToday} />
      <input type="hidden" name="intendedTransition" value={backend.intendedTransition} />
      <input type="hidden" name="capitalPurpose" value={backend.capitalPurpose} />
      <input type="hidden" name="capitalRange" value={backend.capitalRange} />
      <input type="hidden" name="capitalTiming" value={answers.capitalTiming} />
      <div className="hidden" aria-hidden="true"><label>Company URL<input name="companyUrl" tabIndex={-1} autoComplete="off" /></label></div>

      {screen > 1 ? (
        <div className="mb-12">
          <div className="flex items-center justify-between gap-6 text-xs font-semibold uppercase tracking-[.12em] text-azael-slate"><span dangerouslySetInnerHTML={{ __html: screenMeta[screen - 1] }} /><span>{screen} / 9</span></div>
          <div className="mt-4 h-px bg-azael-navy/10"><div className="h-px bg-azael-gold transition-all duration-300" style={{ width: `${progress}%` }} /></div>
          <p className="mt-3 text-xs text-azael-slate">Saved on this device</p>
        </div>
      ) : null}

      {screen === 1 ? (
        <section className="py-4 md:py-10">
          <p className="kicker">GETTING STARTED</p>
          <h1 className="approved-title mt-4 max-w-3xl">Tell us about the business behind the capital need.</h1>
          <div className="mt-7 max-w-2xl space-y-5 text-[18px] leading-8 text-azael-slate">
            <p>Before a capital provider can make a serious decision, it needs to understand the business, what you are trying to achieve and what the money needs to accomplish.</p>
            <p>These questions give Azael a starting point. Answer in your own words—practical examples are more useful than polished answers.</p>
            <p className="font-semibold text-azael-navy">No documents are required at this stage.</p>
          </div>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[.1em] text-azael-slate">About 15–20 minutes</p>
          <button type="button" onClick={next} className="primary-cta mt-8 !bg-azael-gold-bright !text-azael-navy-deep hover:!bg-azael-navy hover:!text-white">Begin →</button>
        </section>
      ) : null}

      {screen === 2 ? (
        <section>
          <p className="kicker">ABOUT YOU AND THE BUSINESS</p>
          <h2 className="approved-title mt-4">First, tell us who we&apos;re speaking with.</h2>
          <p className="approved-copy mt-5">A few basic details help us understand who is behind the enquiry and where the business operates.</p>
          <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
            <Field label="Business name" value={answers.businessName} onChange={(v) => update("businessName", v)} />
            <Field label="Your name" value={answers.contactName} onChange={(v) => update("contactName", v)} />
            <Field label="Your role in the business" value={answers.role} onChange={(v) => update("role", v)} />
            <Field label="Email address" type="email" value={answers.workEmail} onChange={(v) => update("workEmail", v)} />
            <Field label="Phone or WhatsApp" optional value={answers.phone} onChange={(v) => update("phone", v)} />
            <Field label="Country" value={answers.country} onChange={(v) => update("country", v)} />
            <Field label="Main operating location" value={answers.location} onChange={(v) => update("location", v)} placeholder="City, district or region" />
            <Field label="Sector" value={answers.sector} onChange={(v) => update("sector", v)} />
            <Field label="Year operations began" value={answers.yearStarted} onChange={(v) => update("yearStarted", v)} placeholder="e.g. 2018" />
            <Field label="Website or company profile" optional type="url" value={answers.website} onChange={(v) => update("website", v)} placeholder="https://" />
          </div>
        </section>
      ) : null}

      {screen === 3 ? (
        <section>
          <p className="kicker">BUSINESS TODAY · 1 OF 6</p>
          <h2 className="approved-title mt-4">Tell us about your business today.</h2>
          <p className="approved-copy mt-5">What does your business do, who does it serve and how does it make money?</p>
          <div className="mt-7 border-l-2 border-azael-gold pl-5 text-[15px] leading-7 text-azael-slate">A useful answer might include the products or services you sell, who normally buys from you, and how you find customers, deliver what they buy and get paid.</div>
          <div className="mt-7"><TextArea value={answers.businessToday} onChange={(v) => update("businessToday", v)} /></div>
          <h3 className="mt-12 font-display text-xl font-semibold text-azael-navy">Which description comes closest to where the business is today?</h3>
          <div className="mt-4 grid gap-x-10 md:grid-cols-2">{businessStages.map((item) => <Choice key={item} selected={answers.businessStage === item} onClick={() => update("businessStage", item)}>{item}</Choice>)}</div>
          <div className="mt-12"><p className="text-sm font-semibold text-azael-navy">What are you most proud of in the business today? <span className="font-normal text-azael-slate">Optional</span></p><textarea value={answers.proudOf} onChange={(e) => update("proudOf", e.target.value)} className="mt-2 min-h-28 w-full resize-y border-0 border-b border-azael-navy/20 bg-transparent py-3 text-[17px] leading-7 text-azael-navy outline-none focus:border-azael-gold" placeholder="A short answer is enough…" /></div>
        </section>
      ) : null}

      {screen === 4 ? (
        <section>
          <p className="kicker">A REAL SALE · 2 OF 6</p>
          <h2 className="approved-title mt-4">Tell us about a real sale.</h2>
          <p className="approved-copy mt-5">Think about a recent or typical sale and describe how it worked from beginning to end.</p>
          <div className="mt-7 border-l-2 border-azael-gold pl-5 text-[15px] leading-7 text-azael-slate">A useful answer might include what the customer bought and approximately how much was involved, what the business needed to do or pay for before completing the sale, and when and how the customer paid you.</div>
          <div className="mt-7"><TextArea value={answers.realSale} onChange={(v) => update("realSale", v)} /></div>
          <h3 className="mt-12 font-display text-xl font-semibold text-azael-navy">Who was the customer in this example?</h3>
          <div className="mt-4 grid gap-x-10 md:grid-cols-2">{customerTypes.map((item) => <Choice key={item} selected={answers.customerType === item} onClick={() => update("customerType", item)}>{item}</Choice>)}</div>
        </section>
      ) : null}

      {screen === 5 ? (
        <section>
          <p className="kicker">WHAT COMES NEXT · 3 OF 6</p>
          <h2 className="approved-title mt-4">What are you trying to achieve next?</h2>
          <p className="approved-copy mt-5">Imagine we visit your business two years from now and things have gone well. What would you want to show us?</p>
          <div className="mt-7 border-l-2 border-azael-gold pl-5 text-[15px] leading-7 text-azael-slate">You might include whether you would be serving more customers, entering a new market or selling something new; how your operations, team, equipment or systems would be different; and why this matters now.</div>
          <div className="mt-7"><TextArea value={answers.future} onChange={(v) => update("future", v)} /></div>
          <h3 className="mt-12 font-display text-xl font-semibold text-azael-navy">What are the main objectives? <span className="font-sans text-sm font-normal text-azael-slate">Choose up to two.</span></h3>
          <div className="mt-4 grid gap-x-10 md:grid-cols-2">{objectiveOptions.map((item) => <Choice key={item} selected={answers.objectives.includes(item)} onClick={() => toggle("objectives", item, 2)}>{item}</Choice>)}</div>
        </section>
      ) : null}

      {screen === 6 ? (
        <section>
          <p className="kicker">WHAT&apos;S GETTING IN THE WAY · 4 OF 6</p>
          <h2 className="approved-title mt-4">What is making it difficult to get there?</h2>
          <p className="approved-copy mt-5">Tell us what you believe is most likely to prevent the business from reaching the next stage.</p>
          <div className="mt-7 border-l-2 border-azael-gold pl-5 text-[15px] leading-7 text-azael-slate">You might include where the business is losing opportunities, customers, time or money; what you have already tried; and what concerns you most if the problem remains unresolved for another year.</div>
          <div className="mt-7"><TextArea value={answers.constraint} onChange={(v) => update("constraint", v)} /></div>
          <h3 className="mt-12 font-display text-xl font-semibold text-azael-navy">Where does the main difficulty appear to be? <span className="font-sans text-sm font-normal text-azael-slate">Choose up to two.</span></h3>
          <div className="mt-4 grid gap-x-10 md:grid-cols-2">{constraintOptions.map((item) => <Choice key={item} selected={answers.constraintAreas.includes(item)} onClick={() => toggle("constraintAreas", item, 2)}>{item}</Choice>)}</div>
          <p className="mt-5 text-sm leading-6 text-azael-slate">It&apos;s fine if you&apos;re not certain. This is your current view, and we&apos;ll explore it further with you.</p>
        </section>
      ) : null}

      {screen === 7 ? (
        <section>
          <p className="kicker">CAPITAL · 5 OF 6</p>
          <h2 className="approved-title mt-4">How do you think capital would help?</h2>
          <p className="approved-copy mt-5">If you received the money you believe you need, what would you use it for and what would it allow the business to do?</p>
          <div className="mt-7 border-l-2 border-azael-gold pl-5 text-[15px] leading-7 text-azael-slate">Think about what you would spend the money on first, how that would change the business, and this question: <strong className="text-azael-navy">if the money arrived tomorrow, what could still stop the plan from succeeding?</strong></div>
          <div className="mt-7"><TextArea value={answers.capitalHelp} onChange={(v) => update("capitalHelp", v)} /></div>
          <h3 className="mt-12 font-display text-xl font-semibold text-azael-navy">What would the capital mainly support?</h3>
          <div className="mt-4 grid gap-x-10 md:grid-cols-2">{capitalSupportOptions.map((item) => <Choice key={item} selected={answers.capitalSupports.includes(item)} onClick={() => toggle("capitalSupports", item)}>{item}</Choice>)}</div>
          <h3 className="mt-12 font-display text-xl font-semibold text-azael-navy">Do you already have an amount in mind?</h3>
          <div className="mt-4 grid gap-x-10 md:grid-cols-2">{amountOptions.map((item) => <Choice key={item} selected={answers.amountStatus === item} onClick={() => update("amountStatus", item)}>{item}</Choice>)}</div>
          {requiresAmount ? <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2"><Field label="Amount or range" value={answers.capitalAmount} onChange={(v) => update("capitalAmount", v)} placeholder="e.g. 200–300 million" /><Field label="Currency" value={answers.currency} onChange={(v) => update("currency", v)} placeholder="e.g. UGX, USD" /><div className="md:col-span-2"><h3 className="mb-3 text-sm font-semibold text-azael-navy">When would the capital be needed?</h3>{timingOptions.map((item) => <Choice key={item} selected={answers.capitalTiming === item} onClick={() => update("capitalTiming", item)}>{item}</Choice>)}</div></div> : null}
        </section>
      ) : null}

      {screen === 8 ? (
        <section>
          <p className="kicker">WHAT DO YOU NEED HELP WITH? · 6 OF 6</p>
          <h2 className="approved-title mt-4">What would be most useful for Azael to help you work out?</h2>
          <p className="approved-copy mt-5">Tell us what you most want to understand or decide as we look at the business and the capital need.</p>
          <div className="mt-7"><TextArea value={answers.discoveryGoal} onChange={(v) => update("discoveryGoal", v)} /></div>
          <h3 className="mt-12 font-display text-xl font-semibold text-azael-navy">Which kind of clarity would be most useful?</h3>
          <div className="mt-4 grid gap-x-10 md:grid-cols-2">{clarityOptions.map((item) => <Choice key={item} selected={answers.clarityGoal === item} onClick={() => update("clarityGoal", item)}>{item}</Choice>)}</div>
          <h3 className="mt-12 font-display text-xl font-semibold text-azael-navy">What information may already exist?</h3>
          <p className="mt-2 text-sm leading-6 text-azael-slate">Don&apos;t upload anything now. This just tells us what information may already be available if we need it later.</p>
          <div className="mt-4 grid gap-x-10 md:grid-cols-2">{informationOptions.map((item) => <Choice key={item} selected={answers.availableInfo.includes(item)} onClick={() => toggle("availableInfo", item)}>{item}</Choice>)}</div>
        </section>
      ) : null}

      {screen === 9 ? (
        <section>
          <p className="kicker">REVIEW</p>
          <h2 className="approved-title mt-4">Does this reflect your business?</h2>
          <p className="approved-copy mt-5">Review the story you are about to send to Azael. You can return to any section to make changes.</p>
          <div className="mt-10 border-t border-azael-navy/15">
            {[
              [2, "About you and the business", `${answers.businessName} · ${answers.contactName} · ${answers.country}`],
              [3, "The business today", answers.businessToday],
              [4, "A real sale", answers.realSale],
              [5, "What you are trying to achieve", answers.future],
              [6, "What is getting in the way", answers.constraint],
              [7, "How capital may help", answers.capitalHelp],
              [8, "What you want Azael to help work out", answers.discoveryGoal],
            ].map(([target, label, summary]) => <div key={String(label)} className="grid gap-3 border-b border-azael-navy/10 py-6 md:grid-cols-[190px_1fr_auto] md:gap-7"><h3 className="text-sm font-semibold text-azael-navy">{label}</h3><p className="line-clamp-3 text-[15px] leading-6 text-azael-slate">{summary}</p><button type="button" onClick={() => setScreen(Number(target))} className="text-left text-sm font-semibold text-azael-gold hover:text-azael-navy">Edit</button></div>)}
          </div>
          <div className="mt-10 border-t border-azael-navy/10 pt-8">
            <h3 className="font-display text-xl font-semibold text-azael-navy">Permission</h3>
            <label className="mt-5 flex items-start gap-3 text-[15px] leading-6 text-azael-slate"><input name="accepted" type="checkbox" value="yes" required className="mt-1 h-5 w-5 shrink-0 accent-azael-gold" /><span>I agree that Azael may use these responses to understand my enquiry and determine the appropriate next step. I have read the <Link href="/privacy" className="underline underline-offset-4">Privacy Policy</Link>.</span></label>
            <p className="mt-5 text-sm leading-6 text-azael-slate">Submitting this information is not a funding application and does not guarantee an advisory engagement or capital connection.</p>
          </div>
          {state.message ? <p className="mt-6 border-l-2 border-azael-gold bg-azael-cream px-4 py-3 text-sm leading-6 text-azael-navy" role="alert">{state.message}</p> : null}
        </section>
      ) : null}

      {message ? <p className="mt-8 border-l-2 border-azael-gold bg-azael-cream px-4 py-3 text-sm leading-6 text-azael-navy" role="alert">{message}</p> : null}

      {screen > 1 ? <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-azael-navy/10 pt-7"><button type="button" onClick={back} className="text-sm font-semibold text-azael-slate hover:text-azael-navy">← Back</button>{screen < 9 ? <button type="button" onClick={next} className="primary-cta !bg-azael-navy !text-white hover:!bg-azael-gold hover:!text-azael-navy">{screen === 8 ? "Review your answers →" : "Continue →"}</button> : <button disabled={pending} type="submit" className="primary-cta !bg-azael-gold-bright !text-azael-navy-deep hover:!bg-azael-navy hover:!text-white disabled:cursor-wait disabled:opacity-60">{pending ? "Submitting…" : "Submit to Azael →"}</button>}</div> : null}
    </form>
  );
}
