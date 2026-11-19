"use client";
import { useActionState, useEffect, useState } from "react";
import { submitProviderEnquiry } from "./actions";
const types = ["Bank", "Fund", "DFI", "SACCO or MFI", "Specialist financier"];
const instruments = ["Loan", "Equity", "Quasi-equity", "Asset finance", "Trade finance"];
const sectors = ["Agriculture & food", "Manufacturing", "Trade & distribution", "Construction & real estate", "Transport & logistics", "Technology & communications", "Financial services", "Healthcare", "Education & training", "Energy & natural resources", "Hospitality & tourism", "Professional services", "Creative industries", "Other"];
const input = "mt-2 w-full rounded-md border border-azael-navy/20 bg-white px-4 py-3 text-azael-navy";
export function ProviderForm() {
  const [state, action, pending] = useActionState(submitProviderEnquiry, { message: "" });
  const [id, setId] = useState("");
  useEffect(() => { setId(window.crypto.randomUUID()); }, []);
  return <form action={action} className="mt-10 grid max-w-3xl gap-7">
    <input type="hidden" name="submissionId" value={id} />
    <label>Contact name *<input className={input} name="name" required maxLength={160}/></label>
    <label>Contact role *<input className={input} name="role" required maxLength={120}/></label>
    <label>Organisation *<input className={input} name="organisation" required maxLength={160}/></label>
    <label>Provider type *<select className={input} name="providerType" required defaultValue=""><option value="" disabled>Select provider type</option>{types.map(t=><option key={t}>{t}</option>)}</select></label>
    <label>Email *<input className={input} type="email" name="email" required maxLength={254}/></label>
    <label>WhatsApp number (optional)<input className={input} name="whatsapp" placeholder="+256..." maxLength={32}/></label>
    <label>Countries financed *<input className={input} name="countries" required placeholder="Uganda, Kenya, Rwanda"/><span className="block text-sm text-azael-slate">Separate country names with commas.</span></label>
    <fieldset><legend>Sectors financed (optional)</legend><div className="mt-2 grid gap-2 sm:grid-cols-2">{sectors.map(s=><label key={s} className="flex items-center gap-2"><input type="checkbox" name="sectors" value={s}/>{s}</label>)}</div></fieldset>
    <fieldset><legend>Capital instruments * (select at least one)</legend><div className="mt-2 grid gap-2 sm:grid-cols-2">{instruments.map(s=><label key={s} className="flex items-center gap-2"><input type="checkbox" name="instruments" value={s}/>{s}</label>)}</div></fieldset>
    <label>Ticket currency (optional)<select className={input} name="ticketCurrency" defaultValue=""><option value="">Not specified</option>{["UGX","USD","EUR"].map(x=><option key={x}>{x}</option>)}</select></label>
    <div className="grid gap-4 sm:grid-cols-2"><label>Minimum ticket<input className={input} name="ticketMinimum" inputMode="numeric" pattern="[0-9]*"/></label><label>Maximum ticket<input className={input} name="ticketMaximum" inputMode="numeric" pattern="[0-9]*"/></label></div>
    <label>Businesses you want to see<textarea className={input} name="fitRequirements" rows={4} maxLength={4000}/></label>
    <label>Willing to refer businesses not yet ready?<select className={input} name="referralInterest" defaultValue=""><option value="">Not specified</option>{["Yes","No","Open to discussing it"].map(x=><option key={x}>{x}</option>)}</select></label>
    <label className="flex gap-3"><input type="checkbox" name="privacy" value="yes" required/>I acknowledge the privacy notice *</label>
    <label className="flex gap-3"><input type="checkbox" name="contactPermission" value="yes" required/>I agree that Azael may contact me about this enquiry *</label>
    {state.message && <p role="alert" className="text-red-700">{state.message}</p>}
    <button disabled={pending || !id} className="rounded-md bg-azael-navy px-7 py-4 font-semibold text-white disabled:opacity-50">{pending ? "Submitting..." : "Submit provider enquiry"}</button>
  </form>;
}
