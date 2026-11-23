"use client";

import { FormEvent, useState } from "react";
import { Mail, Send } from "lucide-react";
import { createMailto } from "@/lib/mailto";
import CopyEmailButton from "@/components/CopyEmailButton";

const INTENTS = [
  "Technical instruction",
  "MVP architecture consultation",
  "Project collaboration",
  "General conversation",
] as const;

const fieldClass =
  "rounded-xl border border-white/10 bg-ink-950/60 px-4 py-3 text-white outline-none transition placeholder:text-neutral-600 focus:border-cyan-300/50 focus:bg-ink-950";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    intent: INTENTS[0] as string,
    message: "",
  });

  const update =
    (field: keyof typeof form) =>
    (event: { target: { value: string } }) =>
      setForm((current) => ({ ...current, [field]: event.target.value }));

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Intent: ${form.intent}`,
      "",
      form.message,
    ].join("\n");

    window.location.href = createMailto(
      `${form.intent} inquiry from ${form.name || "ananthuma.com"}`,
      body
    );
  };

  return (
    <form onSubmit={handleSubmit} className="card p-6 sm:p-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Mail className="text-cyan-300" size={24} aria-hidden="true" />
          <div>
            <h3 className="text-xl font-semibold text-white">Send a Focused Inquiry</h3>
            <p className="text-sm text-neutral-500">
              Opens your email client with the context filled in. No mail app? Copy the address instead.
            </p>
          </div>
        </div>
        <CopyEmailButton />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm text-neutral-300">
          Name
          <input
            required
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={update("name")}
            className={fieldClass}
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm text-neutral-300">
          Email
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            value={form.email}
            onChange={update("email")}
            className={fieldClass}
            placeholder="you@company.com"
          />
        </label>
      </div>

      <label className="mt-4 grid gap-2 text-sm text-neutral-300">
        Inquiry type
        <select name="intent" value={form.intent} onChange={update("intent")} className={fieldClass}>
          {INTENTS.map((intent) => (
            <option key={intent}>{intent}</option>
          ))}
        </select>
      </label>

      <label className="mt-4 grid gap-2 text-sm text-neutral-300">
        Message
        <textarea
          required
          name="message"
          rows={5}
          value={form.message}
          onChange={update("message")}
          className={`resize-none ${fieldClass}`}
          placeholder="Share the role, product, architecture question, or mentoring need."
        />
      </label>

      <button
        type="submit"
        className="btn-primary mt-6 w-full"
      >
        Prepare Email <Send size={17} aria-hidden="true" />
      </button>
    </form>
  );
};

export default ContactForm;
