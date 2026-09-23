export function normalizeWebsite(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return "";
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
}

export function isValidWebsite(value: string) {
  if (!value.trim()) return true;
  try {
    const url = new URL(normalizeWebsite(value));
    return Boolean(url.hostname.includes(".") && !url.hostname.includes(" "));
  } catch {
    return false;
  }
}

export function normalizePhone(countryCode: string, value: string) {
  const trimmed = value.trim();
  if (!trimmed) return "";

  if (trimmed.startsWith("+")) {
    return `+${trimmed.replace(/\D/g, "")}`;
  }

  if (trimmed.startsWith("00")) {
    return `+${trimmed.slice(2).replace(/\D/g, "")}`;
  }

  const code = countryCode.replace(/\D/g, "");
  let local = trimmed.replace(/\D/g, "");
  if (code && local.startsWith(code)) local = local.slice(code.length);
  local = local.replace(/^0+/, "");
  return code && local ? `+${code}${local}` : local;
}

export function isValidPhone(countryCode: string, value: string) {
  const normalized = normalizePhone(countryCode, value);
  return /^\+[1-9]\d{7,14}$/.test(normalized);
}
