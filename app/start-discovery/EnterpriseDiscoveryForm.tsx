"use client";

import Link from "next/link";
import { useActionState, useEffect, useState } from "react";
import { submitDiscoveryForm, type DiscoveryFormState } from "./actions";

const initialState: DiscoveryFormState = { message: "" };
const DRAFT_KEY = "azael-enterprise-discovery-v1";

type Answers = {
  contactName: string;
  role: string;
  workEmail: string;
  phone: string;
  businessName: string;
  country: string;
  location: string;
  website: string;
  description: string;
  ambition: string;
  whyNow: string;
  constraintBelief: string;
  managementUncertainty: string;
  capitalCurrentlySought: "yes" | "no" | "";
  capitalPurpose: string;
  capitalWhyNow: string;
  capitalAmount: string;
  capitalCurrency: string;
  capitalTiming: string;
  additionalContext: string;
};

const initialAnswers: Answers = {
  contactName: "",
  role: "",
  workEmail: "",
  phone: "",
  businessName: "",
  country: "",
  location: "",
  website: "",
  description: "",
  ambition: "",
  whyNow: "",
  constraintBelief: "",
  managementUncertainty: "",
  capitalCurrentlySought: "",
  capitalPurpose: "",
  capitalWhyNow: "",
  capitalAmount: "",
  capitalCurrency: "",
  capitalTiming: "",
  additionalContext: "",
};

const roleOptions = [
  "Founder / Co-founder",
  "Owner / Shareholder",
  "CEO / Managing Director",
  "Director / Board Member",
  "Senior Manager",
  "Adviser / Representative",
  "Other",
];

const timingOptions = [
  "Immediately",
  "Within 3 months",
  "Within 6 months",
  "Within 12 months",
  "More than 12 months from now",
  "I don't know yet",
];

const currencyOptions = ["UGX", "USD", "EUR", "GBP", "Other"];

function Field({
  label,
  value,
  onChange,
  type = "text",
  optional = false,
  placeholder = "",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  optional?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-azael-navy">
        {label}
        {optional ? <span className="ml-2 font-normal text-azael-slate">Optional</span> : null}
      </span>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="mt-2 min-h-12 w-full border-0 border-b border-azael-navy/20 bg-transparent px-0 py-3 text-[17px] text-azael-navy outline-none transition-colors placeholder:text-azael-slate/45 focus:border-azael-gold"
      />
    </label>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
  optional = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  optional?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-azael-navy">
        {label}
        {optional ? <span className="ml-2 font-normal text-azael-slate">Optional</span> : null}
      </span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 min-h-12 w-full border-0 border-b border-azael-navy/20 bg-transparent px-0 py-3 text-[17px] text-azael-navy outline-none focus:border-azael-gold"
      >
        <option value="">Select one</option>
        {options.map((option) => <option value={option} key={option}>{option}</option>)}
      </select>
    </label>
  );
}

function TextArea({
  label,
  helper,
  value,
  onChange,
  optional = false,
}: {
  label: string;
  helper?: string;
  value: string;
  onChange: (value: string) => void;
  optional?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-[20px] font-semibold leading-7 text-azael-navy">
        {label}
        {optional ? <span className="ml-2 text-sm font-normal text-azael-slate">Optional</span> : null}
      </span>
      {helper ? <span className="mt-2 block max-w-2xl text-[15px] leading-6 text-azael-slate">{helper}</span> : null}
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Write in your own words…"
        className="mt-4 min-h-[150px] w-full resize-y border-0 border-b-2 border-azael-navy/15 bg-transparent px-0 py-4 text-[18px] leading-8 text-azael-navy outline-none transition-colors placeholder:text-azael-slate/45 focus:border-azael-gold"
      />
    </label>
  );
}

function Choice({
  selected,
  children,
  onClick,
}: {
  selected: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={`w-full border-b px-1 py-4 text-left text-[16px] leading-6 transition-colors ${selected ? "border-azael-gold text-azael-navy" : "border-azael-navy/15 text-azael-slate hover:border-azael-navy/35 hover:text-azael-navy"}`}
    >
      <span className="flex items-start justify-between gap-5">
        <span>{children}</span>
        <span className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${selected ? "bg-azael-gold" : "bg-azael-navy/15"}`} />
      </span>
    </button>
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
        if (parsed.screen && parsed.screen >= 1 && parsed.screen <= 5) setScreen(parsed.screen);
      }
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(DRAFT_KEY, JSON.stringify({ answers, screen }));
    } catch {}
  }, [answers, screen, hydrated]);

  const update = <K extends keyof Answers>(key: K, value: Answers[K]) =>
    setAnswers((current) => ({ ...current, [key]: value }));

  const validate = () => {
    if (screen === 1) {
      const required = [
        answers.contactName,
        answers.role,
        answers.workEmail,
        answers.phone,
        answers.businessName,
        answers.country,
        answers.location,
        answers.description,
      ];
      if (required.some((item) => !item.trim())) return "Please complete the required details before continuing.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answers.workEmail)) return "Please enter a valid email address.";
    }
    if (screen === 2 && (!answers.ambition.trim() || !answers.whyNow.trim())) {
      return "Tell us what you are trying to achieve and why it matters now.";
    }
    if (screen === 3 && !answers.constraintBelief.trim()) {
      return "Tell us what you think is making this difficult.";
    }
    if (screen === 4) {
      if (!answers.capitalCurrentlySought) return "Tell us whether you are currently looking for capital.";
      if (answers.capitalCurrentlySought === "yes" && (!answers.capitalPurpose.trim() || !answers.capitalWhyNow.trim())) {
        return "Tell us what the capital would be used for and why it is needed now.";
      }
    }
    return "";
  };

  const next = () => {
    const issue = validate();
    if (issue) {
      setMessage(issue);
      return;
    }
    setMessage("");
    setScreen((current) => Math.min(5, current + 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const back = () => {
    setMessage("");
    setScreen((current) => Math.max(1, current - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const stepTitle = ["You & your business", "Where you're going", "What's getting in the way", "Capital", "Review & submit"][screen - 1];
  const progress = (screen / 5) * 100;

  return (
    <form action={formAction} className="mx-auto max-w-4xl">
      <input type="hidden" name="contactName" value={answers.contactName} />
      <input type="hidden" name="role" value={answers.role} />
      <input type="hidden" name="workEmail" value={answers.workEmail} />
      <input type="hidden" name="phone" value={answers.phone} />
      <input type="hidden" name="businessName" value={answers.businessName} />
      <input type="hidden" name="country" value={answers.country} />
      <input type="hidden" name="location" value={answers.location} />
      <input type="hidden" name="website" value={answers.website} />
      <input type="hidden" name="description" value={answers.description} />
      <input type="hidden" name="ambition" value={answers.ambition} />
      <input type="hidden" name="whyNow" value={answers.whyNow} />
      <input type="hidden" name="constraintBelief" value={answers.constraintBelief} />
      <input type="hidden" name="managementUncertainty" value={answers.managementUncertainty} />
      <input type="hidden" name="capitalCurrentlySought" value={answers.capitalCurrentlySought} />
      <input type="hidden" name="capitalPurpose" value={answers.capitalPurpose} />
      <input type="hidden" name="capitalWhyNow" value={answers.capitalWhyNow} />
      <input type="hidden" name="capitalAmount" value={answers.capitalAmount} />
      <input type="hidden" name="capitalCurrency" value={answers.capitalCurrency} />
      <input type="hidden" name="capitalTiming" value={answers.capitalTiming} />
      <input type="hidden" name="additionalContext" value={answers.additionalContext} />
      <section className="mb-12 border-b border-azael-navy/10 pb-9">
        <p className="kicker">ENTERPRISE DISCOVERY</p>
        <h1 className="approved-title mt-4 max-w-3xl">Tell us about your business and what you are trying to achieve.</h1>
        <p className="approved-copy mt-5 max-w-2xl">This should take about 5 minutes. You don't need to prepare any documents.</p>
      </section>

      <div className="mb-12">
        <div className="flex items-center justify-between gap-6 text-xs font-semibold uppercase tracking-[.12em] text-azael-slate">
          <span>{stepTitle}</span>
          <span>{screen} / 5</span>
        </div>
        <div className="mt-4 h-px bg-azael-navy/10">
          <div className="h-px bg-azael-gold transition-all duration-300" style={{ width: `${progress}%` }} />
        </div>
        <p className="mt-3 text-xs text-azael-slate">Saved on this device</p>
      </div>

      {screen === 1 ? (
        <section>
          <p className="kicker">STEP 1</p>
          <h2 className="approved-title mt-4">You & your business</h2>
          <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
            <Field label="What is your name?" value={answers.contactName} onChange={(v) => update("contactName", v)} />
            <SelectField label="What is your role in the business?" value={answers.role} onChange={(v) => update("role", v)} options={roleOptions} />
            <Field label="What is your email address?" type="email" value={answers.workEmail} onChange={(v) => update("workEmail", v)} />
            <Field label="What is your phone number?" value={answers.phone} onChange={(v) => update("phone", v)} placeholder="+256…" />
            <Field label="What is the name of your business?" value={answers.businessName} onChange={(v) => update("businessName", v)} />
            <Field label="Country" value={answers.country} onChange={(v) => update("country", v)} />
            <Field label="City or town" value={answers.location} onChange={(v) => update("location", v)} />
            <Field label="Does your business have a website?" optional type="url" value={answers.website} onChange={(v) => update("website", v)} placeholder="https://" />
          </div>
          <div className="mt-12">
            <TextArea
              label="What does your business do?"
              helper="Tell us what you sell, who buys from you and where you operate."
              value={answers.description}
              onChange={(v) => update("description", v)}
            />
          </div>
        </section>
      ) : null}

      {screen === 2 ? (
        <section>
          <p className="kicker">STEP 2</p>
          <h2 className="approved-title mt-4">Where you're going</h2>
          <div className="mt-10 space-y-12">
            <TextArea
              label="What are you trying to achieve next?"
              helper="For example: grow sales, increase production, enter a new market, launch something new or make an important change in the business."
              value={answers.ambition}
              onChange={(v) => update("ambition", v)}
            />
            <TextArea
              label="What is happening now that makes this important?"
              helper="Tell us what has changed, what opportunity you see, or why you want to act now."
              value={answers.whyNow}
              onChange={(v) => update("whyNow", v)}
            />
          </div>
        </section>
      ) : null}

      {screen === 3 ? (
        <section>
          <p className="kicker">STEP 3</p>
          <h2 className="approved-title mt-4">What's getting in the way</h2>
          <div className="mt-10 space-y-12">
            <TextArea
              label="What is making this difficult today?"
              helper="Tell us what you think is getting in the way, or what could make this difficult."
              value={answers.constraintBelief}
              onChange={(v) => update("constraintBelief", v)}
            />
            <TextArea
              label="What are you unsure about as you try to achieve this?"
              helper="Tell us about anything you are still trying to understand or decide."
              optional
              value={answers.managementUncertainty}
              onChange={(v) => update("managementUncertainty", v)}
            />
          </div>
        </section>
      ) : null}

      {screen === 4 ? (
        <section>
          <p className="kicker">STEP 4</p>
          <h2 className="approved-title mt-4">Capital</h2>
          <div className="mt-10">
            <h3 className="text-[20px] font-semibold leading-7 text-azael-navy">Are you currently looking for capital for the business?</h3>
            <div className="mt-4 grid gap-x-10 md:grid-cols-2">
              <Choice selected={answers.capitalCurrentlySought === "yes"} onClick={() => update("capitalCurrentlySought", "yes")}>Yes</Choice>
              <Choice selected={answers.capitalCurrentlySought === "no"} onClick={() => update("capitalCurrentlySought", "no")}>No, not currently</Choice>
            </div>
          </div>

          {answers.capitalCurrentlySought === "yes" ? (
            <div className="mt-12 space-y-12">
              <TextArea
                label="What would you use additional capital for?"
                helper="Tell us what the money would allow the business to do."
                value={answers.capitalPurpose}
                onChange={(v) => update("capitalPurpose", v)}
              />
              <TextArea
                label="Why do you need the capital now?"
                helper="Tell us why the funding is important at this point."
                value={answers.capitalWhyNow}
                onChange={(v) => update("capitalWhyNow", v)}
              />
              <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
                <Field label="How much capital do you think you need?" optional value={answers.capitalAmount} onChange={(v) => update("capitalAmount", v.replace(/[^0-9.]/g, ""))} placeholder="Amount" />
                <SelectField label="Currency" optional value={answers.capitalCurrency} onChange={(v) => update("capitalCurrency", v)} options={currencyOptions} />
                <div className="md:col-span-2">
                  <SelectField label="When would you need the capital?" optional value={answers.capitalTiming} onChange={(v) => update("capitalTiming", v)} options={timingOptions} />
                </div>
              </div>
            </div>
          ) : null}

          <div className="mt-12">
            <TextArea
              label="Is there anything else you think we should know?"
              helper="You can share anything that would help us better understand your situation."
              optional
              value={answers.additionalContext}
              onChange={(v) => update("additionalContext", v)}
            />
          </div>
        </section>
      ) : null}

      {screen === 5 ? (
        <section>
          <p className="kicker">REVIEW</p>
          <h2 className="approved-title mt-4">Review your answers</h2>
          <p className="approved-copy mt-5">Make sure this reflects what you want Azael to understand before you submit.</p>

          <div className="mt-10 border-t border-azael-navy/15">
            {[
              [1, "You & your business", `${answers.businessName} · ${answers.contactName} · ${answers.country}`],
              [2, "What you are trying to achieve", answers.ambition],
              [3, "What is making this difficult", answers.constraintBelief],
              [4, "Capital", answers.capitalCurrentlySought === "yes" ? answers.capitalPurpose : "Not currently looking for capital"],
            ].map(([target, label, summary]) => (
              <div key={String(label)} className="grid gap-3 border-b border-azael-navy/10 py-6 md:grid-cols-[190px_1fr_auto] md:gap-7">
                <h3 className="text-sm font-semibold text-azael-navy">{label}</h3>
                <p className="line-clamp-3 text-[15px] leading-6 text-azael-slate">{summary}</p>
                <button type="button" onClick={() => setScreen(Number(target))} className="text-left text-sm font-semibold text-azael-gold hover:text-azael-navy">Edit</button>
              </div>
            ))}
          </div>

          <div className="mt-10 border-t border-azael-navy/10 pt-8">
            <h3 className="font-display text-xl font-semibold text-azael-navy">Before you submit</h3>
            <label className="mt-5 flex items-start gap-3 text-[15px] leading-6 text-azael-slate">
              <input name="accepted" type="checkbox" value="yes" required className="mt-1 h-5 w-5 shrink-0 accent-azael-gold" />
              <span>
                I confirm that the information I have provided is accurate to the best of my knowledge and I agree that Azael may use it to review this enquiry and contact me about the next steps. I have read the <Link href="/privacy" className="underline underline-offset-4">Privacy Policy</Link>.
              </span>
            </label>
            <p className="mt-5 text-sm leading-6 text-azael-slate">Submitting this information is not a funding application and does not guarantee an advisory engagement or capital connection.</p>
          </div>
          {state.message ? <p className="mt-6 border-l-2 border-azael-gold bg-azael-cream px-4 py-3 text-sm leading-6 text-azael-navy" role="alert">{state.message}</p> : null}
        </section>
      ) : null}

      {message ? <p className="mt-8 border-l-2 border-azael-gold bg-azael-cream px-4 py-3 text-sm leading-6 text-azael-navy" role="alert">{message}</p> : null}

      <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-azael-navy/10 pt-7">
        {screen > 1 ? <button type="button" onClick={back} className="text-sm font-semibold text-azael-slate hover:text-azael-navy">← Back</button> : <span />}
        {screen < 5 ? (
          <button type="button" onClick={next} className="primary-cta !bg-azael-navy !text-white hover:!bg-azael-gold hover:!text-azael-navy">
            {screen === 4 ? "Review your answers →" : "Continue →"}
          </button>
        ) : (
          <button disabled={pending} type="submit" className="primary-cta !bg-azael-gold-bright !text-azael-navy-deep hover:!bg-azael-navy hover:!text-white disabled:cursor-wait disabled:opacity-60">
            {pending ? "Submitting…" : "Submit to Azael →"}
          </button>
        )}
      </div>
    </form>
  );
}
