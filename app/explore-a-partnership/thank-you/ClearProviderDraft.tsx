"use client";

import { useEffect } from "react";

export function ClearProviderDraft() {
  useEffect(() => {
    try {
      window.localStorage.removeItem("azael-capital-provider-enquiry-v1");
    } catch {}
  }, []);

  return null;
}
