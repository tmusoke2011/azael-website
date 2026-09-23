"use client";

type CommonProps = {
  label: string;
  optional?: boolean;
  helper?: string;
};

function Label({ label, optional }: Pick<CommonProps, "label" | "optional">) {
  return (
    <span className="azael-form-label">
      {label}
      {optional ? <span className="ml-2 font-normal text-azael-slate">Optional</span> : null}
    </span>
  );
}

export function TextField({
  label,
  value,
  onChange,
  type = "text",
  optional = false,
  helper,
  placeholder = "",
  inputMode,
  autoComplete,
}: CommonProps & {
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
  inputMode?: "text" | "email" | "tel" | "url" | "numeric" | "decimal";
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <Label label={label} optional={optional} />
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        inputMode={inputMode}
        autoComplete={autoComplete}
        required={!optional}
        className="azael-form-control"
      />
      {helper ? <span className="azael-form-helper">{helper}</span> : null}
    </label>
  );
}

export function SelectField({
  label,
  value,
  onChange,
  options,
  optional = false,
}: CommonProps & {
  value: string;
  onChange: (value: string) => void;
  options: readonly string[];
}) {
  return (
    <label className="block">
      <Label label={label} optional={optional} />
      <select value={value} onChange={(event) => onChange(event.target.value)} required={!optional} className="azael-form-control">
        <option value="">Select one</option>
        {options.map((option) => <option value={option} key={option}>{option}</option>)}
      </select>
    </label>
  );
}

export function TextAreaField({
  label,
  helper,
  value,
  onChange,
  optional = false,
}: CommonProps & {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="azael-form-question">
        {label}
        {optional ? <span className="ml-2 text-sm font-normal text-azael-slate">Optional</span> : null}
      </span>
      {helper ? <span className="azael-form-helper !mt-2 max-w-2xl">{helper}</span> : null}
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        required={!optional}
        placeholder="Write in your own words…"
        className="azael-form-control min-h-[150px] resize-y !border-b-2 !py-4 !text-[18px] !leading-8"
      />
    </label>
  );
}

export function PhoneField({
  label,
  countryCode,
  value,
  onCountryCodeChange,
  onChange,
  optional = false,
}: CommonProps & {
  countryCode: string;
  value: string;
  onCountryCodeChange: (value: string) => void;
  onChange: (value: string) => void;
}) {
  return (
    <fieldset>
      <legend><Label label={label} optional={optional} /></legend>
      <div className="grid grid-cols-[88px_1fr] gap-4">
        <label>
          <span className="sr-only">Country calling code</span>
          <input
            value={countryCode}
            onChange={(event) => onCountryCodeChange(`+${event.target.value.replace(/\D/g, "").slice(0, 4)}`)}
            inputMode="tel"
            autoComplete="tel-country-code"
            aria-label="Country calling code"
            className="azael-form-control"
            placeholder="+256"
          />
        </label>
        <label>
          <span className="sr-only">Phone number</span>
          <input
            value={value}
            onChange={(event) => onChange(event.target.value)}
            inputMode="tel"
            autoComplete="tel-national"
            aria-label="Phone number"
            required={!optional}
            className="azael-form-control"
            placeholder="772 123 456"
          />
        </label>
      </div>
      <span className="azael-form-helper">Use your local number. A leading zero is fine—we will format it for you.</span>
    </fieldset>
  );
}
