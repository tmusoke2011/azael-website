"use client";

import Link from "next/link";
import { useActionState } from "react";
import { submitPartnershipForm, type PartnershipFormState } from "./actions";

const initialState: PartnershipFormState = { message: "" };

const inputClass =
  "mt-2 min-h-12 w-full border border-azael-navy/20 bg-white px-4 py-3 text-base text-azael-charcoal transition-colors placeholder:text-azael-slate/65 focus:border-azael-gold focus:outline-none";
const labelClass = "block text-sm font-semibold text-azael-navy";
const helpClass = "mt-2 text-sm leading-6 text-azael-slate";

const instrumentOptions = [
  "Debt",
  "Equity",
  "Mezzanine or hybrid capital",
  "Trade or working-capital facilities",
  "Guarantees or risk-sharing instruments",
  "Grants or catalytic capital",
  "Other",
] as const;

function RequiredMark() {
  return <span className="text-azael-gold" aria-hidden="true"> *</span>;
}

export function CapitalProviderForm() {
  const [state, formAction, pending] = useActionState(submitPartnershipForm, initialState);

  return (
    <form action={formAction} className="space-y-12">
      <div className="hidden" aria-hidden="true">
        <label htmlFor="companyUrl">Company URL</label>
        <input id="companyUrl" name="companyUrl" tabIndex={-1} autoComplete="off" />
      </div>

      <fieldset>
        <legend className="font-display text-2xl font-semibold text-azael-navy">About you</legend>
        <p className={helpClass}>Tell us who should lead the initial conversation from your organisation.</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <label className={labelClass}>
            Full name<RequiredMark />
            <input className={inputClass} name="contactName" autoComplete="name" required maxLength={120} />
          </label>
          <label className={labelClass}>
            Role in the organisation<RequiredMark />
            <input className={inputClass} name="role" autoComplete="organization-title" required maxLength={120} />
          </label>
          <label className={labelClass}>
            Work email<RequiredMark />
            <input className={inputClass} name="workEmail" type="email" autoComplete="email" required maxLength={180} />
          </label>
          <label className={labelClass}>
            Phone or WhatsApp
            <input className={inputClass} name="phone" type="tel" autoComplete="tel" maxLength={60} />
          </label>
        </div>
      </fieldset>

      <fieldset className="border-t border-azael-navy/10 pt-10">
        <legend className="font-display text-2xl font-semibold text-azael-navy">About the capital provider</legend>
        <p className={helpClass}>A light organisational profile helps us understand where a partnership conversation may be relevant.</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <label className={labelClass}>
            Organisation name<RequiredMark />
            <input className={inputClass} name="organizationName" autoComplete="organization" required maxLength={160} />
          </label>
          <label className={labelClass}>
            Type of capital provider<RequiredMark />
            <select className={inputClass} name="providerType" required defaultValue="">
              <option value="" disabled>Select an answer</option>
              <option value="Bank">Bank</option>
              <option value="Development finance institution">Development finance institution</option>
              <option value="Private credit or debt fund">Private credit or debt fund</option>
              <option value="Private equity or venture capital">Private equity or venture capital</option>
              <option value="Impact investor or fund">Impact investor or fund</option>
              <option value="Family office">Family office</option>
              <option value="Corporate or strategic investor">Corporate or strategic investor</option>
              <option value="Foundation or grant maker">Foundation or grant maker</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <label className={labelClass}>
            Headquarters or primary country<RequiredMark />
            <input className={inputClass} name="headquartersCountry" autoComplete="country-name" required maxLength={100} />
          </label>
          <label className={labelClass}>
            Countries or regions you finance<RequiredMark />
            <input className={inputClass} name="markets" required placeholder="For example: Uganda, East Africa" maxLength={240} />
          </label>
          <label className={`${labelClass} md:col-span-2`}>
            Website or mandate profile
            <input className={inputClass} name="website" type="url" inputMode="url" placeholder="https://" maxLength={240} />
          </label>
        </div>
      </fieldset>

      <fieldset className="border-t border-azael-navy/10 pt-10">
        <legend className="font-display text-2xl font-semibold text-azael-navy">Your capital mandate</legend>
        <p className={helpClass}>We are looking for a practical view of what you can finance and what must be present before serious assessment.</p>

        <div className="mt-6">
          <p className={labelClass}>Capital instruments you provide<RequiredMark /></p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {instrumentOptions.map((instrument) => (
              <label className="flex items-start gap-3 border border-azael-navy/10 bg-white px-4 py-3 text-[15px] leading-6 text-azael-slate" key={instrument}>
                <input className="mt-1 h-5 w-5 shrink-0 accent-azael-gold" name="instruments" type="checkbox" value={instrument} />
                <span>{instrument}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mt-7 grid gap-6 md:grid-cols-2">
          <label className={labelClass}>
            Typical ticket or facility size
            <input className={inputClass} name="typicalTicketSize" placeholder="Amount and currency, or a range" maxLength={160} />
          </label>
          <label className={labelClass}>
            Sector focus<RequiredMark />
            <input className={inputClass} name="sectorFocus" required placeholder="Sectors considered or excluded" maxLength={300} />
          </label>
        </div>

        <div className="mt-7 space-y-7">
          <label className={labelClass}>
            What profile of business can you support?<RequiredMark />
            <textarea className={`${inputClass} min-h-36 resize-y`} name="targetBusinessProfile" required maxLength={1200} />
            <span className={`${helpClass} block`}>For example: operating history, revenue profile, business maturity, ownership or the type of transition being financed.</span>
          </label>
          <label className={labelClass}>
            What must usually be present before you begin a serious assessment?<RequiredMark />
            <textarea className={`${inputClass} min-h-36 resize-y`} name="assessmentRequirements" required maxLength={1200} />
            <span className={`${helpClass} block`}>Describe the information, evidence, eligibility requirements or non-negotiable conditions that matter early.</span>
          </label>
        </div>
      </fieldset>

      <fieldset className="border-t border-azael-navy/10 pt-10">
        <legend className="font-display text-2xl font-semibold text-azael-navy">The partnership conversation</legend>
        <p className={helpClass}>Help us understand the specific use case—not a request for unrestricted enterprise access or a guaranteed pipeline.</p>
        <div className="mt-6 space-y-7">
          <label className={labelClass}>
            What discovery, qualification or origination problem are you trying to solve?<RequiredMark />
            <textarea className={`${inputClass} min-h-36 resize-y`} name="originationChallenge" required maxLength={1200} />
          </label>
          <label className={labelClass}>
            What would you like to explore with Azael?<RequiredMark />
            <textarea className={`${inputClass} min-h-36 resize-y`} name="partnershipInterest" required maxLength={1200} />
            <span className={`${helpClass} block`}>For example: structuring mandate requirements, improving early qualification or designing a small Enterprise Intelligence pilot.</span>
          </label>
        </div>
      </fieldset>

      <div className="border-t border-azael-navy/10 pt-8">
        <label className="flex items-start gap-3 text-[15px] leading-6 text-azael-slate">
          <input className="mt-1 h-5 w-5 shrink-0 accent-azael-gold" name="accepted" type="checkbox" value="yes" required />
          <span>
            I confirm that the information provided is accurate to the best of my knowledge and authorize Azael to review it and contact me about this enquiry. I have read the{" "}
            <Link className="text-link !inline underline underline-offset-4" href="/privacy">Privacy Policy</Link>.<RequiredMark />
          </span>
        </label>

        {state.message ? (
          <p className="mt-6 border-l-2 border-azael-gold bg-azael-cream px-4 py-3 text-sm leading-6 text-azael-navy" role="alert">
            {state.message}
          </p>
        ) : null}

        <button
          className="primary-cta mt-8 !bg-azael-navy !text-white hover:!bg-azael-gold hover:!text-azael-navy disabled:cursor-wait disabled:opacity-60"
          disabled={pending}
          type="submit"
        >
          {pending ? "Submitting…" : "Submit partnership enquiry"}
        </button>
        <p className="mt-4 text-sm leading-6 text-azael-slate">
          This enquiry does not create a partnership, guarantee pipeline or provide access to enterprise information.
        </p>
      </div>
    </form>
  );
}
