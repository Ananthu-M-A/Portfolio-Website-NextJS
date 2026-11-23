import { ImageResponse } from "next/og";
import { SITE } from "@/config/constants";

export const alt = SITE.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(160deg, #08111f 0%, #05070d 60%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, color: "#67e8f9", letterSpacing: 4, textTransform: "uppercase" }}>
          Production-grade engineer + technical educator
        </div>
        <div style={{ marginTop: 28, fontSize: 68, fontWeight: 700, lineHeight: 1.1, maxWidth: 1000 }}>
          I Build Complex Systems - And Make Them Understandable.
        </div>
        <div style={{ marginTop: 40, fontSize: 32, color: "#a3a3a3" }}>
          {`${SITE.name} · Next.js · Nest.js · TypeScript`}
        </div>
      </div>
    ),
    size
  );
}
