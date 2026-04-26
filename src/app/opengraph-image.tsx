import { ImageResponse } from "next/og";
import { personal } from "@/content/personal";

export const runtime = "edge";
export const alt = `${personal.name} — ${personal.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(circle at 20% 20%, #D97757 0%, transparent 45%), radial-gradient(circle at 85% 30%, #8B5CF6 0%, transparent 45%), radial-gradient(circle at 70% 90%, #3B82F6 0%, transparent 45%), #0A0A0A",
          color: "#FAFAF7",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 22, opacity: 0.8 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 10,
              background: "linear-gradient(135deg, #D97757, #8B5CF6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: 18,
            }}
          >
            AK
          </div>
          <span style={{ letterSpacing: 4, textTransform: "uppercase" }}>{personal.domain}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 700, lineHeight: 1.02, letterSpacing: -2 }}>
            {personal.name}.
          </div>
          <div style={{ marginTop: 22, fontSize: 36, opacity: 0.85, fontWeight: 500 }}>
            {personal.title}
          </div>
          <div style={{ marginTop: 8, fontSize: 28, opacity: 0.7 }}>{personal.subtitle}</div>
        </div>

        <div style={{ display: "flex", gap: 14, fontSize: 22, opacity: 0.85 }}>
          <span>React + TypeScript</span>
          <span>·</span>
          <span>Python · FastAPI</span>
          <span>·</span>
          <span>LangChain · RAG · Multi-Agent AI</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
