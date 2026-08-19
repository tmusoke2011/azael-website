"use client";

import Link from "next/link";
import {
  useActionState,
  useRef,
  useState,
  type FormEvent,
} from "react";
import { submitDiscoveryForm, type DiscoveryFormState } from "./actions";

const initialState: DiscoveryFormState = { message: "" };

const steps = [
  {
    title: "About you",
    shortTitle: "You",
    description: "Who should we contact about this enquiry?",
  },
  {
    title: "Enterprise snapshot",
    shortTitle: "Enterprise",
    description: "A light profile of the business as it stands today.",
  },
  {
    title: "Where the business is going",
    shortTitle: "Direction",
    description: "The business today and the transition you are pursuing.",
  },
  {
    title: "What capital must accomplish",
    shortTitle: "Capital",
    description: "The outcome capital may need to make possible.",
  },
  {
    title: "Review and submit",
    shortTitle: "Review",
    description: "Check your answers before sending them to Azael.",
  },
] as const;

const initialValues = {
  contactName: "",
  role: "",
  workEmail: "",
  phone: "",
  businessName: "",
  country: "",
  sector: "",
  website: "",
  activeSales: "",
  businessToday: "",
  intendedTransition: "",
  capitalPurpose: "",
  capitalRange: "",
  capitalTiming: "",
  accepted: false,
};

type FormValues = typeof initialValues;
type FieldName = keyof FormValues;
type FormErrors = Partial<Record<FieldName, string>>;

const requiredByStep: readonly (readonly FieldName[])[] = [
  ["contactName", "role", "workEmail"],
  ["businessName", "country", "sector", "activeSales"],
  ["businessToday", "intendedTransition"],
  ["capitalPurpose"],
  ["accepted"],
];

const fieldLabels: Record<FieldName, string> = {
  contactName: "your full name",
  role: "your role in the business",
  workEmail: "your work email",
  phone: "your phone or WhatsApp number",
  businessName: "the business name",
  country: "the primary country of operation",
  sector: "the sector",
  website: "the website or company profile",
  activeSales: "whether the business has active sales",
  businessToday: "a description of the business today",
  intendedTransition: "the transition or goal you are pursuing",
  capitalPurpose: "what capital may need to accomplish",
  capitalRange: "an indicative capital range",
  capitalTiming: "indicative timing",
  accepted: "your confirmation",
};

const controlBase =
  "mt-2 min-h-12 w-full border bg-white px-4 py-3 text-base text-azael-charcoal transition-[border-color,box-shadow] placeholder:text-azael-slate/65 focus:border-azael-gold focus:outline-none focus:ring-2 focus:ring-azael-gold/15";
const labelClass = "block text-sm font-semibold text-azael-navy";
const helpClass = "mt-2 text-sm leading-6 text-azael-slate";

function RequiredMark() {
  return (
    <span className="text-azael-gold" aria-hidden="true">
      {" "}*
    </span>
  );
}

function FieldError({ name, errors }: { name: FieldName; errors: FormErrors }) {
  const error = errors[name];

  return error ? (
    <span className="mt-2 block text-sm font-medium leading-5 text-red-700" id={`${name}-error`} role="alert">
      {error}
    </span>
  ) : null;
}

function ReviewSection({
  title,
  onEdit,
  children,
}: {
  title: string;
  onEdit: () => void;
  children: React.ReactNode;
}) {
  return (
    <section className="border border-azael-navy/10 bg-white p-5 md:p-6">
      <div className="flex items-start justify-between gap-4 border-b border-azael-navy/10 pb-4">
        <h3 className="font-display text-lg font-semibold text-azael-navy">{title}</h3>
        <button className="text-xs font-bold uppercase tracking-[0.1em] text-azael-gold underline-offset-4 hover:underline" onClick={onEdit} type="button">
          Edit
        </button>
      </div>
      <dl className="mt-5 grid gap-x-6 gap-y-5 sm:grid-cols-2">{children}</dl>
    </section>
  );
}

function ReviewItem({ label, value, wide = false }: { label: string; value: string; wide?: boolean }) {
  return (
    <div className={wide ? "sm:col-span-2" : undefined}>
      <dt className="text-[11px] font-bold uppercase tracking-[0.1em] text-azael-slate">{label}</dt>
      <dd className="mt-1.5 whitespace-pre-wrap text-[15px] leading-6 text-azael-charcoal">{value || "Not provided"}</dd>
    </div>
  );
}

export function EnterpriseDiscoveryForm() {
  const [state, formAction, pending] = useActionState(submitDiscoveryForm, initialState);
  const [currentStep, setCurrentStep] = useState(0);
  const [furthestStep, setFurthestStep] = useState(0);
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const formRef = useRef<HTMLFormElement>(null);

  const current = steps[currentStep];
  const progress = ((currentStep + 1) / steps.length) * 100;

  function updateValue<Name extends FieldName>(name: Name, value: FormValues[Name]) {
    setValues((previous) => ({ ...previous, [name]: value }));
    setErrors((previous) => {
      if (!previous[name]) return previous;
      const next = { ...previous };
      delete next[name];
      return next;
    });
  }

  function getError(name: FieldName) {
    const fieldValue = values[name];

    if (name === "accepted") {
      return fieldValue ? "" : "Please confirm that Azael may review and respond to your enquiry.";
    }

    if (!String(fieldValue).trim()) {
      return `Please enter ${fieldLabels[name]}.`;
    }

    if (name === "workEmail" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.workEmail)) {
      return "Please enter a valid work email address.";
    }

    return "";
  }

  function validateStep(stepIndex: number) {
    const names = requiredByStep[stepIndex];
    const nextErrors = { ...errors };

    names.forEach((name) => {
      const error = getError(name);
      if (error) nextErrors[name] = error;
      else delete nextErrors[name];
    });

    if (stepIndex === 1 && values.website) {
      try {
        const website = new URL(values.website);
        if (!website.protocol.startsWith("http")) throw new Error("Invalid protocol");
        delete nextErrors.website;
      } catch {
        nextErrors.website = "Please enter a complete web address beginning with http:// or https://.";
      }
    } else if (stepIndex === 1) {
      delete nextErrors.website;
    }

    setErrors(nextErrors);
    return !names.some((name) => nextErrors[name]) && (stepIndex !== 1 || !nextErrors.website);
  }

  function moveToStep(stepIndex: number) {
    setCurrentStep(stepIndex);

    window.requestAnimationFrame(() => {
      const heading = document.getElementById(`discovery-step-${stepIndex + 1}`);
      heading?.focus();
      formRef.current?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        block: "start",
      });
    });
  }

  function continueJourney() {
    if (!validateStep(currentStep)) return;

    const nextStep = Math.min(currentStep + 1, steps.length - 1);
    setFurthestStep((previous) => Math.max(previous, nextStep));
    moveToStep(nextStep);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const firstInvalidStep = requiredByStep.findIndex((_, index) => !validateStep(index));

    if (firstInvalidStep >= 0) {
      event.preventDefault();
      moveToStep(firstInvalidStep);
    }
  }

  function autoResize(event: FormEvent<HTMLTextAreaElement>) {
    const textarea = event.currentTarget;
    textarea.style.height = "auto";
    textarea.style.height = `${Math.min(textarea.scrollHeight, 360)}px`;
  }

  function controlClass(name: FieldName, extra = "") {
    return `${controlBase} ${errors[name] ? "border-red-600" : "border-azael-navy/20"} ${extra}`;
  }

  return (
    <form action={formAction} className="scroll-mt-28" noValidate onSubmit={handleSubmit} ref={formRef}>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="companyUrl">Company URL</label>
        <input id="companyUrl" name="companyUrl" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="border-b border-azael-navy/10 pb-7">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-azael-gold">
              Step {currentStep + 1} of {steps.length}
            </p>
            <p className="mt-1 font-display text-lg font-semibold text-azael-navy md:hidden">{current.shortTitle}</p>
          </div>
          <p className="hidden text-xs text-azael-slate sm:block">Your answers stay with you as you move between sections.</p>
        </div>

        <div className="mt-4 h-1.5 overflow-hidden bg-azael-navy/8" aria-hidden="true">
          <div className="h-full bg-azael-gold transition-[width] duration-300" style={{ width: `${progress}%` }} />
        </div>

        <ol className="mt-5 hidden grid-cols-5 gap-2 md:grid">
          {steps.map((step, index) => {
            const isCurrent = index === currentStep;
            const isAvailable = index <= furthestStep;

            return (
              <li key={step.shortTitle}>
                <button
                  aria-current={isCurrent ? "step" : undefined}
                  className={`w-full border-t pt-3 text-left transition-colors ${
                    isCurrent
                      ? "border-azael-gold text-azael-navy"
                      : isAvailable
                        ? "border-azael-navy/20 text-azael-slate hover:border-azael-gold hover:text-azael-navy"
                        : "cursor-default border-azael-navy/10 text-azael-slate/55"
                  }`}
                  disabled={!isAvailable}
                  onClick={() => moveToStep(index)}
                  type="button"
                >
                  <span className="block text-[10px] font-bold tracking-[0.12em] text-azael-gold/80">0{index + 1}</span>
                  <span className="mt-1 block text-xs font-semibold leading-4">{step.shortTitle}</span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="py-9 md:py-11">
        <div className="mb-8 max-w-2xl">
          <p className="kicker">{currentStep === 4 ? "FINAL CHECK" : `SECTION 0${currentStep + 1}`}</p>
          <h2 className="mt-3 scroll-mt-32 font-display text-2xl font-semibold leading-tight text-azael-navy md:text-[2rem]" id={`discovery-step-${currentStep + 1}`} tabIndex={-1}>
            {current.title}
          </h2>
          <p className="mt-3 text-[15px] leading-6 text-azael-slate">{current.description}</p>
        </div>

        <fieldset hidden={currentStep !== 0}>
          <legend className="sr-only">About you</legend>
          <div className="grid gap-6 md:grid-cols-2">
            <label className={labelClass}>
              Full name<RequiredMark />
              <input aria-describedby={errors.contactName ? "contactName-error" : undefined} aria-invalid={Boolean(errors.contactName)} autoComplete="name" className={controlClass("contactName")} maxLength={120} name="contactName" onChange={(event) => updateValue("contactName", event.target.value)} value={values.contactName} />
              <FieldError errors={errors} name="contactName" />
            </label>
            <label className={labelClass}>
              Role in the business<RequiredMark />
              <input aria-describedby={errors.role ? "role-error" : undefined} aria-invalid={Boolean(errors.role)} autoComplete="organization-title" className={controlClass("role")} maxLength={120} name="role" onChange={(event) => updateValue("role", event.target.value)} value={values.role} />
              <FieldError errors={errors} name="role" />
            </label>
            <label className={labelClass}>
              Work email<RequiredMark />
              <input aria-describedby={errors.workEmail ? "workEmail-error" : undefined} aria-invalid={Boolean(errors.workEmail)} autoComplete="email" className={controlClass("workEmail")} maxLength={180} name="workEmail" onChange={(event) => updateValue("workEmail", event.target.value)} type="email" value={values.workEmail} />
              <FieldError errors={errors} name="workEmail" />
            </label>
            <label className={labelClass}>
              Phone or WhatsApp
              <input autoComplete="tel" className={controlClass("phone")} maxLength={60} name="phone" onChange={(event) => updateValue("phone", event.target.value)} type="tel" value={values.phone} />
              <span className={`${helpClass} block`}>Optional, but helpful if email is not the best way to reach you.</span>
            </label>
          </div>
        </fieldset>

        <fieldset hidden={currentStep !== 1}>
          <legend className="sr-only">Enterprise snapshot</legend>
          <div className="grid gap-6 md:grid-cols-2">
            <label className={labelClass}>
              Business name<RequiredMark />
              <input aria-describedby={errors.businessName ? "businessName-error" : undefined} aria-invalid={Boolean(errors.businessName)} autoComplete="organization" className={controlClass("businessName")} maxLength={160} name="businessName" onChange={(event) => updateValue("businessName", event.target.value)} value={values.businessName} />
              <FieldError errors={errors} name="businessName" />
            </label>
            <label className={labelClass}>
              Primary country of operation<RequiredMark />
              <input aria-describedby={errors.country ? "country-error" : undefined} aria-invalid={Boolean(errors.country)} autoComplete="country-name" className={controlClass("country")} maxLength={100} name="country" onChange={(event) => updateValue("country", event.target.value)} value={values.country} />
              <FieldError errors={errors} name="country" />
            </label>
            <label className={labelClass}>
              Sector<RequiredMark />
              <input aria-describedby={errors.sector ? "sector-error" : undefined} aria-invalid={Boolean(errors.sector)} className={controlClass("sector")} maxLength={120} name="sector" onChange={(event) => updateValue("sector", event.target.value)} value={values.sector} />
              <FieldError errors={errors} name="sector" />
            </label>
            <label className={labelClass}>
              Website or company profile
              <input aria-describedby={errors.website ? "website-error" : undefined} aria-invalid={Boolean(errors.website)} className={controlClass("website")} inputMode="url" maxLength={240} name="website" onChange={(event) => updateValue("website", event.target.value)} placeholder="https://" type="url" value={values.website} />
              <FieldError errors={errors} name="website" />
            </label>
          </div>

          <div className="mt-8">
            <p className={labelClass} id="activeSales-label">
              Does the business currently have paying customers and active sales?<RequiredMark />
            </p>
            <div aria-describedby={errors.activeSales ? "activeSales-error" : undefined} aria-labelledby="activeSales-label" className="mt-3 grid gap-3 sm:grid-cols-2" role="radiogroup">
              {["Yes", "No"].map((option) => {
                const selected = values.activeSales === option;
                return (
                  <label className={`flex min-h-16 cursor-pointer items-center gap-3 border px-4 py-3 transition-[border-color,background-color,box-shadow] ${selected ? "border-azael-gold bg-azael-cream shadow-[inset_3px_0_0_#b87808]" : "border-azael-navy/15 bg-white hover:border-azael-gold/60"}`} key={option}>
                    <input checked={selected} className="h-5 w-5 shrink-0 accent-azael-gold" name="activeSales" onChange={(event) => updateValue("activeSales", event.target.value)} type="radio" value={option} />
                    <span className="text-[15px] font-semibold text-azael-navy">{option}</span>
                  </label>
                );
              })}
            </div>
            <FieldError errors={errors} name="activeSales" />
          </div>
        </fieldset>

        <fieldset hidden={currentStep !== 2}>
          <legend className="sr-only">Where the business is going</legend>
          <div className="space-y-8">
            <label className={labelClass}>
              Briefly describe the business as it operates today.<RequiredMark />
              <textarea aria-describedby={errors.businessToday ? "businessToday-help businessToday-error" : "businessToday-help"} aria-invalid={Boolean(errors.businessToday)} className={controlClass("businessToday", "min-h-36 resize-y")} maxLength={1200} name="businessToday" onChange={(event) => updateValue("businessToday", event.target.value)} onInput={autoResize} value={values.businessToday} />
              <span className={`${helpClass} block`} id="businessToday-help">What do you sell, who are your customers and how does the business currently operate?</span>
              <div className="mt-1 flex items-start justify-between gap-4">
                <FieldError errors={errors} name="businessToday" />
                <span className="ml-auto text-xs text-azael-slate">{values.businessToday.length}/1,200</span>
              </div>
            </label>
            <label className={labelClass}>
              What significant transition or goal are you pursuing?<RequiredMark />
              <textarea aria-describedby={errors.intendedTransition ? "intendedTransition-help intendedTransition-error" : "intendedTransition-help"} aria-invalid={Boolean(errors.intendedTransition)} className={controlClass("intendedTransition", "min-h-36 resize-y")} maxLength={1200} name="intendedTransition" onChange={(event) => updateValue("intendedTransition", event.target.value)} onInput={autoResize} value={values.intendedTransition} />
              <span className={`${helpClass} block`} id="intendedTransition-help">For example: growth, expansion, stronger systems, recovery or a major strategic change.</span>
              <div className="mt-1 flex items-start justify-between gap-4">
                <FieldError errors={errors} name="intendedTransition" />
                <span className="ml-auto text-xs text-azael-slate">{values.intendedTransition.length}/1,200</span>
              </div>
            </label>
          </div>
        </fieldset>

        <fieldset hidden={currentStep !== 3}>
          <legend className="sr-only">What capital must accomplish</legend>
          <div className="space-y-8">
            <label className={labelClass}>
              What may capital need to accomplish?<RequiredMark />
              <textarea aria-describedby={errors.capitalPurpose ? "capitalPurpose-help capitalPurpose-error" : "capitalPurpose-help"} aria-invalid={Boolean(errors.capitalPurpose)} className={controlClass("capitalPurpose", "min-h-36 resize-y")} maxLength={1200} name="capitalPurpose" onChange={(event) => updateValue("capitalPurpose", event.target.value)} onInput={autoResize} value={values.capitalPurpose} />
              <span className={`${helpClass} block`} id="capitalPurpose-help">Focus on the business outcome rather than a preferred funding product.</span>
              <div className="mt-1 flex items-start justify-between gap-4">
                <FieldError errors={errors} name="capitalPurpose" />
                <span className="ml-auto text-xs text-azael-slate">{values.capitalPurpose.length}/1,200</span>
              </div>
            </label>
            <div className="grid gap-6 md:grid-cols-2">
              <label className={labelClass}>
                Indicative capital range
                <input className={controlClass("capitalRange")} maxLength={120} name="capitalRange" onChange={(event) => updateValue("capitalRange", event.target.value)} placeholder="Amount and currency, if known" value={values.capitalRange} />
                <span className={`${helpClass} block`}>Optional. A rough range is enough at this stage.</span>
              </label>
              <label className={labelClass}>
                Indicative timing
                <input className={controlClass("capitalTiming")} maxLength={120} name="capitalTiming" onChange={(event) => updateValue("capitalTiming", event.target.value)} placeholder="When might it be needed?" value={values.capitalTiming} />
                <span className={`${helpClass} block`}>Optional. Tell us what the business timeline requires.</span>
              </label>
            </div>
          </div>
        </fieldset>

        <fieldset hidden={currentStep !== 4}>
          <legend className="sr-only">Review and submit</legend>
          <div className="space-y-4">
            <ReviewSection onEdit={() => moveToStep(0)} title="About you">
              <ReviewItem label="Full name" value={values.contactName} />
              <ReviewItem label="Role" value={values.role} />
              <ReviewItem label="Work email" value={values.workEmail} />
              <ReviewItem label="Phone or WhatsApp" value={values.phone} />
            </ReviewSection>
            <ReviewSection onEdit={() => moveToStep(1)} title="Enterprise snapshot">
              <ReviewItem label="Business name" value={values.businessName} />
              <ReviewItem label="Country" value={values.country} />
              <ReviewItem label="Sector" value={values.sector} />
              <ReviewItem label="Active sales" value={values.activeSales} />
              <ReviewItem label="Website or profile" value={values.website} wide />
            </ReviewSection>
            <ReviewSection onEdit={() => moveToStep(2)} title="Where the business is going">
              <ReviewItem label="Business today" value={values.businessToday} wide />
              <ReviewItem label="Transition or goal" value={values.intendedTransition} wide />
            </ReviewSection>
            <ReviewSection onEdit={() => moveToStep(3)} title="What capital must accomplish">
              <ReviewItem label="Capital purpose" value={values.capitalPurpose} wide />
              <ReviewItem label="Indicative range" value={values.capitalRange} />
              <ReviewItem label="Indicative timing" value={values.capitalTiming} />
            </ReviewSection>
          </div>

          <div className="mt-6 border-l-2 border-azael-gold bg-azael-cream px-5 py-5">
            <label className="flex items-start gap-3 text-[15px] leading-6 text-azael-slate">
              <input aria-describedby={errors.accepted ? "accepted-error" : undefined} aria-invalid={Boolean(errors.accepted)} checked={values.accepted} className="mt-0.5 h-5 w-5 shrink-0 accent-azael-gold" name="accepted" onChange={(event) => updateValue("accepted", event.target.checked)} type="checkbox" value="yes" />
              <span>
                I confirm that the information provided is accurate to the best of my knowledge and authorize Azael to review it and contact me about this enquiry. I have read the{" "}
                <Link className="font-semibold text-azael-navy underline underline-offset-4" href="/privacy">Privacy Policy</Link>.<RequiredMark />
              </span>
            </label>
            <FieldError errors={errors} name="accepted" />
          </div>

          {state.message ? (
            <p className="mt-6 border-l-2 border-red-700 bg-red-50 px-4 py-3 text-sm leading-6 text-azael-navy" role="alert">
              {state.message}
            </p>
          ) : null}
        </fieldset>
      </div>

      <div className="sticky bottom-0 z-10 -mx-6 flex items-center justify-between gap-4 border-t border-azael-navy/10 bg-white/95 px-6 py-4 shadow-[0_-10px_28px_rgba(7,29,53,0.07)] backdrop-blur md:static md:mx-0 md:bg-transparent md:px-0 md:pb-0 md:pt-6 md:shadow-none">
        <div>
          {currentStep > 0 ? (
            <button className="min-h-12 px-1 text-sm font-bold uppercase tracking-[0.08em] text-azael-navy underline decoration-azael-gold underline-offset-4" disabled={pending} onClick={() => moveToStep(currentStep - 1)} type="button">
              Back
            </button>
          ) : (
            <span className="hidden text-sm text-azael-slate sm:inline">No documents required</span>
          )}
        </div>

        {currentStep < steps.length - 1 ? (
          <button className="primary-cta !min-h-12 !bg-azael-navy !text-white hover:!bg-azael-gold hover:!text-azael-navy" onClick={continueJourney} type="button">
            Continue
          </button>
        ) : (
          <button className="primary-cta !min-h-12 !bg-azael-navy !text-white hover:!bg-azael-gold hover:!text-azael-navy disabled:cursor-wait disabled:opacity-60" disabled={pending} type="submit">
            {pending ? "Submitting…" : "Submit enquiry"}
          </button>
        )}
      </div>

      <p className="mt-5 text-sm leading-6 text-azael-slate">
        This is an initial enquiry—not a funding application or guarantee of funding.
      </p>
    </form>
  );
}
