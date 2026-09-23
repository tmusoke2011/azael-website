"use client";

import { useEffect } from "react";

export function ClearDiscoveryDraft() {
  useEffect(() => {
    try { window.localStorage.removeItem("azael-enterprise-discovery-v1"); } catch {}
  }, []);
  return null;
}
