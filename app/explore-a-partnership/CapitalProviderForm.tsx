"use client";

import Link from "next/link";
import type { FormEvent } from "react";
import { useActionState, useEffect, useState } from "react";
import { PhoneField, SelectField, TextAreaField, TextField } from "@/components/FormFields";
import { isValidPhone, isValidWebsite, normalizePhone, normalizeWebsite } from "@/lib/form-normalization";
import { submitPartnershipForm, type PartnershipFormState } from "./actions";

const initialState: PartnershipFormState = { message: "" };
export const PROVIDER_DRAFT_KEY = "azael-capital-provider-enquiry-v1";

type Answers = {
  contactName: string;
  workEmail: string;
  role: string;
  phoneCountryCode: string;
  phone: string;
  organizationName: string;
  providerType: string;
  headquartersCountry: string;
  markets: string;
  website: string;
  instruments: string[];
  typicalTicketSize: string;
  sectorFocus: string;
  targetBusinessProfile: string;
  assessmentRequirements: string;
  originationChallenge: string;
  partnershipInterest: string;
  accepted: boolean;
};

const initialAnswers: Answers = {
  contactName: "",
  workEmail: "",
  role: "",
  phoneCountryCode: "+256",
  phone: "",
  organizationName: "",
  providerType: "",
  headquartersCountry: "",
  markets: "",
  website: "",
  instruments: [],
  typicalTicketSize: "",
  sectorFocus: "",
  targetBusinessProfile: "",
  assessmentRequirements: "",
  originationChallenge: "",
  partnershipInterest: "",
  accepted: false,
};

const providerTypes = [
  "Bank",
  "Development finance institution",
  "Private credit or debt fund",
  "Private equity or venture capital",
  "Impact investor or fund",
  "Family office",
  "Corporate or strategic investor",
  "Foundation or grant maker",
  "Other",
] as const;

const instrumentOptions = [
  "Debt",
  "Equity",
  "Mezzanine or hybrid capital",
  "Trade or working-capital facilities",
  "Guarantees or risk-sharing instruments",
  "Grants or catalytic capital",
  "Other",
] as const;

function Choice({ selected, children, onClick }: { selected: boolean; children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={`azael-form-choice w-full border-b px-1 py-4 text-left text-[16px] leading-6 transition-colors ${selected ? "border-azael-gold text-azael-navy" : "border-azael-navy/15 text-azael-slate hover:border-azael-navy/35 hover:text-azael-navy"}`}
    >
      <span className="flex items-start justify-between gap-5">
        <span>{children}</span>
        <span className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${selected ? "bg-azael-gold" : "bg-azael-navy/15"}`} />
      </span>
    </button>
  );
}

export function CapitalProviderForm() {
  const [state, formAction, pending] = useActionState(submitPartnershipForm, initialState);
  const [screen, setScreen] = useState(1);
  const [answers, setAnswers] = useState<Answers>(initialAnswers);
  const [message, setMessage] = useState("");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(PROVIDER_DRAFT_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as { answers?: Partial<Answers>; screen?: number };
        setAnswers({ ...initialAnswers, ...(parsed.answers || {}) });
        if (parsed.screen && parsed.screen >= 1 && parsed.screen <= 5) setScreen(parsed.screen);
      }
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(PROVIDER_DRAFT_KEY, JSON.stringify({ answers, screen }));
    } catch {}
  }, [answers, screen, hydrated]);

  const update = <K extends keyof Answers>(key: K, value: Answers[K]) =>
    setAnswers((current) => ({ ...current, [key]: value }));

  const toggleInstrument = (instrument: string) => {
    update("instruments", answers.instruments.includes(instrument)
      ? answers.instruments.filter((item) => item !== instrument)
      : [...answers.instruments, instrument]);
  };

  const validate = () => {
    if (screen === 1) {
      const required = [answers.contactName, answers.role, answers.workEmail, answers.organizationName, answers.providerType, answers.headquartersCountry];
      if (required.some((item) => !item.trim())) return "Please complete the highlighted questions before continuing.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answers.workEmail)) return "Enter a valid email address.";
      if (answers.phone.trim() && !isValidPhone(answers.phoneCountryCode, answers.phone)) return "Enter a valid phone number, for example +256 772 123 456.";
      if (!isValidWebsite(answers.website)) return "Enter a website such as yourbusiness.com, or leave this field blank.";
    }
    if (screen === 2 && (!answers.markets.trim() || !answers.sectorFocus.trim() || answers.instruments.length === 0)) {
      return "Please complete the highlighted questions before continuing.";
    }
    if (screen === 3 && (!answers.targetBusinessProfile.trim() || !answers.assessmentRequirements.trim())) {
      return "Please complete the highlighted questions before continuing.";
    }
    if (screen === 4 && (!answers.originationChallenge.trim() || !answers.partnershipInterest.trim())) {
      return "Please complete the highlighted questions before continuing.";
    }
    return "";
  };

  const goTo = (target: number) => {
    setMessage("");
    setScreen(target);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const next = () => {
    const issue = validate();
    if (issue) {
      setMessage(issue);
      return;
    }
    goTo(Math.min(5, screen + 1));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (!answers.accepted) {
      event.preventDefault();
      setMessage("Please complete the highlighted questions before continuing.");
    }
  };

  const stepTitle = ["About you and your organisation", "Your mandate", "Businesses you support", "Working with Azael", "Review and submit"][screen - 1];
  const progress = (screen / 5) * 100;
  const submissionMessage = state.message.startsWith("We could not submit")
    ? "We could not submit your enquiry. Your answers are still saved on this device. Please try again or email hello@azael.africa."
    : state.message;

  return (
    <form action={formAction} onSubmit={handleSubmit} noValidate className={`mx-auto max-w-4xl ${message ? "form-has-error" : ""}`}>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="companyUrl">Company URL</label>
        <input id="companyUrl" name="companyUrl" tabIndex={-1} autoComplete="off" />
      </div>
      <input type="hidden" name="contactName" value={answers.contactName} />
      <input type="hidden" name="workEmail" value={answers.workEmail} />
      <input type="hidden" name="role" value={answers.role} />
      <input type="hidden" name="phone" value={normalizePhone(answers.phoneCountryCode, answers.phone)} />
      <input type="hidden" name="organizationName" value={answers.organizationName} />
      <input type="hidden" name="providerType" value={answers.providerType} />
      <input type="hidden" name="headquartersCountry" value={answers.headquartersCountry} />
      <input type="hidden" name="markets" value={answers.markets} />
      <input type="hidden" name="website" value={normalizeWebsite(answers.website)} />
      {answers.instruments.map((instrument) => <input type="hidden" name="instruments" value={instrument} key={instrument} />)}
      <input type="hidden" name="typicalTicketSize" value={answers.typicalTicketSize} />
      <input type="hidden" name="sectorFocus" value={answers.sectorFocus} />
      <input type="hidden" name="targetBusinessProfile" value={answers.targetBusinessProfile} />
      <input type="hidden" name="assessmentRequirements" value={answers.assessmentRequirements} />
      <input type="hidden" name="originationChallenge" value={answers.originationChallenge} />
      <input type="hidden" name="partnershipInterest" value={answers.partnershipInterest} />

      <section className="mb-12 border-b border-azael-navy/10 pb-9">
        <p className="kicker">CAPITAL PROVIDER ENQUIRY</p>
        <h1 className="approved-title mt-4 max-w-3xl">Tell us what your organisation finances.</h1>
        <p className="approved-copy mt-5 max-w-3xl">We will ask about your mandate, the businesses you support and where your team needs help. Short, practical answers are enough. Allow about 10 minutes.</p>
      </section>

      <div className="mb-12">
        <div className="flex items-center justify-between gap-6 text-xs font-semibold uppercase tracking-[.12em] text-azael-slate">
          <span>{stepTitle}</span><span>{screen} / 5</span>
        </div>
        <div className="mt-4 h-px bg-azael-navy/10"><div className="h-px bg-azael-gold transition-all duration-300" style={{ width: `${progress}%` }} /></div>
        <p className="mt-3 text-xs text-azael-slate">Saved on this device</p>
      </div>

      {screen === 1 ? (
        <section>
          <p className="kicker">STEP 1 OF 5</p>
          <h2 className="approved-title mt-4">About you and your organisation</h2>
          <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
            <TextField label="What is your name?" value={answers.contactName} onChange={(v) => update("contactName", v)} autoComplete="name" />
            <TextField label="What is your role?" value={answers.role} onChange={(v) => update("role", v)} autoComplete="organization-title" />
            <TextField label="What is your work email?" value={answers.workEmail} onChange={(v) => update("workEmail", v)} type="email" inputMode="email" autoComplete="email" />
            <PhoneField label="Phone or WhatsApp" optional countryCode={answers.phoneCountryCode} value={answers.phone} onCountryCodeChange={(v) => update("phoneCountryCode", v)} onChange={(v) => update("phone", v)} />
            <TextField label="Organisation name" value={answers.organizationName} onChange={(v) => update("organizationName", v)} autoComplete="organization" />
            <SelectField label="Type of capital provider" value={answers.providerType} onChange={(v) => update("providerType", v)} options={providerTypes} />
            <TextField label="Headquarters or primary country" value={answers.headquartersCountry} onChange={(v) => update("headquartersCountry", v)} autoComplete="country-name" />
            <TextField label="Website or mandate profile" optional value={answers.website} onChange={(v) => update("website", v)} inputMode="url" placeholder="yourorganisation.com or mandate page" helper="You do not need to add http:// or https://" />
          </div>
        </section>
      ) : null}

      {screen === 2 ? (
        <section>
          <p className="kicker">STEP 2 OF 5</p>
          <h2 className="approved-title mt-4">Your mandate</h2>
          <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
            <TextField label="Countries or regions you finance" value={answers.markets} onChange={(v) => update("markets", v)} placeholder="For example: Uganda or East Africa" />
            <TextField label="Typical transaction or facility size" optional value={answers.typicalTicketSize} onChange={(v) => update("typicalTicketSize", v)} placeholder="Amount and currency, or a range" />
            <div className="md:col-span-2"><TextField label="Sectors you support" value={answers.sectorFocus} onChange={(v) => update("sectorFocus", v)} placeholder="Include any sectors you do not finance" /></div>
          </div>
          <div className="mt-12">
            <h3 className="azael-form-question">What types of capital do you provide?</h3>
            <div className={`mt-4 grid gap-x-10 sm:grid-cols-2 ${message && answers.instruments.length === 0 ? "form-choice-error" : ""}`}>
              {instrumentOptions.map((instrument) => <Choice key={instrument} selected={answers.instruments.includes(instrument)} onClick={() => toggleInstrument(instrument)}>{instrument}</Choice>)}
            </div>
          </div>
        </section>
      ) : null}

      {screen === 3 ? (
        <section>
          <p className="kicker">STEP 3 OF 5</p>
          <h2 className="approved-title mt-4">Businesses you support</h2>
          <div className="mt-10 space-y-12">
            <TextAreaField label="What kinds of businesses can you support?" helper="For example: business maturity, revenue profile, operating history, ownership or the type of activity being financed." value={answers.targetBusinessProfile} onChange={(v) => update("targetBusinessProfile", v)} />
            <TextAreaField label="What must usually be in place before you assess a business?" helper="Tell us about important information, eligibility rules or conditions your team checks early." value={answers.assessmentRequirements} onChange={(v) => update("assessmentRequirements", v)} />
          </div>
        </section>
      ) : null}

      {screen === 4 ? (
        <section>
          <p className="kicker">STEP 4 OF 5</p>
          <h2 className="approved-title mt-4">Working with Azael</h2>
          <div className="mt-10 space-y-12">
            <TextAreaField label="Where does your team lose the most time finding or screening businesses?" value={answers.originationChallenge} onChange={(v) => update("originationChallenge", v)} />
            <TextAreaField label="How would you like Azael to help?" helper="For example: define a sourcing mandate, improve early screening or run a focused pilot." value={answers.partnershipInterest} onChange={(v) => update("partnershipInterest", v)} />
          </div>
        </section>
      ) : null}

      {screen === 5 ? (
        <section>
          <p className="kicker">STEP 5 OF 5</p>
          <h2 className="approved-title mt-4">Review your answers</h2>
          <p className="approved-copy mt-5">Make sure this reflects what you want Azael to understand before you submit.</p>
          <div className="mt-10 border-t border-azael-navy/15">
            {[
              [1, "You and your organisation", `${answers.organizationName} · ${answers.contactName} · ${answers.providerType}`],
              [2, "Your mandate", `${answers.markets} · ${answers.instruments.join(", ")}`],
              [3, "Businesses you support", answers.targetBusinessProfile],
              [4, "Working with Azael", answers.partnershipInterest],
            ].map(([target, label, summary]) => (
              <div key={String(label)} className="grid gap-3 border-b border-azael-navy/10 py-6 md:grid-cols-[190px_1fr_auto] md:gap-7">
                <h3 className="text-sm font-semibold text-azael-navy">{label}</h3>
                <p className="line-clamp-3 text-[15px] leading-6 text-azael-slate">{summary}</p>
                <button type="button" onClick={() => goTo(Number(target))} className="text-left text-sm font-semibold text-azael-gold hover:text-azael-navy">Edit</button>
              </div>
            ))}
          </div>
          <div className="mt-10 border-t border-azael-navy/10 pt-8">
            <h3 className="font-display text-xl font-semibold text-azael-navy">Before you submit</h3>
            <label className="mt-5 flex items-start gap-3 text-[15px] leading-6 text-azael-slate">
              <input name="accepted" type="checkbox" value="yes" checked={answers.accepted} onChange={(event) => update("accepted", event.target.checked)} className="azael-form-check mt-1 h-5 w-5 shrink-0 accent-azael-gold" />
              <span>I confirm that the information provided is accurate to the best of my knowledge and authorise Azael to review it and contact me about this enquiry. I have read the <Link className="underline underline-offset-4" href="/privacy">Privacy Policy</Link>.</span>
            </label>
            <p className="mt-5 text-sm leading-6 text-azael-slate">This enquiry does not create a partnership or guarantee a pipeline. Your organisation retains its own assessment and final decision.</p>
          </div>
          {submissionMessage ? <p className="mt-6 border-l-2 border-azael-gold bg-azael-cream px-4 py-3 text-sm leading-6 text-azael-navy" role="alert">{submissionMessage}</p> : null}
        </section>
      ) : null}

      {message ? <p className="mt-8 border-l-2 border-azael-gold bg-azael-cream px-4 py-3 text-sm leading-6 text-azael-navy" role="alert">{message}</p> : null}

      <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-azael-navy/10 pt-7">
        {screen > 1 ? <button type="button" onClick={() => goTo(screen - 1)} className="text-sm font-semibold text-azael-slate hover:text-azael-navy">← Back</button> : <span />}
        {screen < 5 ? (
          <button type="button" onClick={next} className="primary-cta !bg-azael-navy !text-white hover:!bg-azael-gold hover:!text-azael-navy">{screen === 4 ? "Review your answers →" : "Continue →"}</button>
        ) : (
          <button disabled={pending} type="submit" className="primary-cta !bg-azael-gold-bright !text-azael-navy-deep hover:!bg-azael-navy hover:!text-white disabled:cursor-wait disabled:opacity-60">{pending ? "Submitting…" : "Submit Provider Enquiry →"}</button>
        )}
      </div>
    </form>
  );
}
