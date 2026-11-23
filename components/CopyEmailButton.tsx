"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";
import { CONTACT } from "@/config/constants";

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timeout = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  if (!CONTACT.email) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email ?? "");
      setCopied(true);
    } catch {
      window.prompt("Copy this email address:", CONTACT.email);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-neutral-200 transition hover:border-cyan-300/40 hover:bg-white/5"
    >
      {copied ? (
        <Check size={16} className="text-cyan-300" aria-hidden="true" />
      ) : (
        <Copy size={16} aria-hidden="true" />
      )}
      <span aria-live="polite">{copied ? "Copied!" : CONTACT.email}</span>
    </button>
  );
};

export default CopyEmailButton;
