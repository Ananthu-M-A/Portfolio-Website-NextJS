import { CONTACT } from "@/config/constants";

export const createMailto = (subject: string, body: string, email = CONTACT.email) =>
  `mailto:${email ?? ""}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export const TEACHING_EMAIL_HREF = createMailto(
  "Technical instruction interview",
  "Hi Ananthu,\n\nI would like to discuss a technical instruction, mentoring, or curriculum role.\n\nContext:\nPreferred time:\n"
);

export const MVP_EMAIL_HREF = createMailto(
  "MVP architecture consultation",
  "Hi Ananthu,\n\nI would like to discuss an MVP architecture review.\n\nProduct context:\nCurrent stack:\nBiggest concern:\nPreferred time:\n"
);

export const GENERAL_EMAIL_HREF = createMailto(
  "Conversation from ananthuma.com",
  "Hi Ananthu,\n\nI found your portfolio and would like to connect.\n"
);
