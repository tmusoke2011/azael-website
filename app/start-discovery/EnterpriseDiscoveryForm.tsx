"use client";

import Link from "next/link";
import { useActionState } from "react";
import { submitDiscoveryForm, type DiscoveryFormState } from "./actions";

const initialState: DiscoveryFormState = { message: "" };

const inputClass =
  "mt-2 min-h-12 w-full border border-azael-navy/20 bg-white px-4 py-3 text-base text-azael-charcoal transition-colors placeholder:text-azael-slate/65 focus:border-azael-gold focus:outline-none";
const labelClass = "block text-sm font-semibold text-azael-navy";
const helpClass = "mt-2 text-sm leading-6 text-azael-slate";

function RequiredMark() {
  return <span className="text-azael-gold" aria-hidden="true"> *</span>;
}

export function EnterpriseDiscoveryForm() {
  const [state, formAction, pending] = useActionState(submitDiscoveryForm, initialState);

  return (
    <form action={formAction} className="space-y-12">
      <div className="hidden" aria-hidden="true">
        <label htmlFor="companyUrl">Company URL</label>
        <input id="companyUrl" name="companyUrl" tabIndex={-1} autoComplete="off" />
      </div>

      <fieldset>
        <legend className="font-display text-2xl font-semibold text-azael-navy">About you</legend>
        <p className={helpClass}>Tell us who we should contact about this enquiry.</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <label className={labelClass}>
            Full name<RequiredMark />
            <input className={inputClass} name="contactName" autoComplete="name" required maxLength={120} />
          </label>
          <label className={labelClass}>
            Role in the business<RequiredMark />
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
        <legend className="font-display text-2xl font-semibold text-azael-navy">About the enterprise</legend>
        <p className={helpClass}>A light profile helps us decide whether Enterprise Discovery is an appropriate next step.</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <label className={labelClass}>
            Business name<RequiredMark />
            <input className={inputClass} name="businessName" autoComplete="organization" required maxLength={160} />
          </label>
          <label className={labelClass}>
            Primary country of operation<RequiredMark />
            <input className={inputClass} name="country" autoComplete="country-name" required maxLength={100} />
          </label>
          <label className={labelClass}>
            Sector<RequiredMark />
            <input className={inputClass} name="sector" required maxLength={120} />
          </label>
          <label className={labelClass}>
            Website or company profile
            <input className={inputClass} name="website" type="url" inputMode="url" placeholder="https://" maxLength={240} />
          </label>
        </div>
        <div className="mt-6">
          <label className={labelClass} htmlFor="activeSales">
            Does the business currently have paying customers and active sales?<RequiredMark />
          </label>
          <select className={inputClass} id="activeSales" name="activeSales" required defaultValue="">
            <option value="" disabled>Select an answer</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
      </fieldset>

      <fieldset className="border-t border-azael-navy/10 pt-10">
        <legend className="font-display text-2xl font-semibold text-azael-navy">What you are trying to accomplish</legend>
        <p className={helpClass}>Short, practical answers are enough. Supporting documents can come later if they become relevant.</p>
        <div className="mt-6 space-y-7">
          <label className={labelClass}>
            Briefly describe the business as it operates today.<RequiredMark />
            <textarea className={`${inputClass} min-h-36 resize-y`} name="businessToday" required maxLength={1200} />
            <span className={`${helpClass} block`}>What do you sell, who are your customers and how does the business currently operate?</span>
          </label>
          <label className={labelClass}>
            What significant transition or goal are you pursuing?<RequiredMark />
            <textarea className={`${inputClass} min-h-36 resize-y`} name="intendedTransition" required maxLength={1200} />
            <span className={`${helpClass} block`}>For example: growth, expansion, stronger systems, recovery or a major strategic change.</span>
          </label>
          <label className={labelClass}>
            What may capital need to accomplish?<RequiredMark />
            <textarea className={`${inputClass} min-h-36 resize-y`} name="capitalPurpose" required maxLength={1200} />
            <span className={`${helpClass} block`}>Focus on the business outcome rather than a preferred funding product.</span>
          </label>
          <div className="grid gap-6 md:grid-cols-2">
            <label className={labelClass}>
              Indicative capital range
              <input className={inputClass} name="capitalRange" placeholder="Amount and currency, if known" maxLength={120} />
            </label>
            <label className={labelClass}>
              Indicative timing
              <input className={inputClass} name="capitalTiming" placeholder="When might it be needed?" maxLength={120} />
            </label>
          </div>
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
          {pending ? "Submitting…" : "Submit Enterprise Discovery enquiry"}
        </button>
        <p className="mt-4 text-sm leading-6 text-azael-slate">
          This is an initial enquiry—not a funding application or guarantee of funding.
        </p>
      </div>
    </form>
  );
}
