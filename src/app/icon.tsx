import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #D97757, #8B5CF6)",
          color: "white",
          fontFamily: "sans-serif",
          fontWeight: 700,
          fontSize: 16,
          borderRadius: 6,
        }}
      >
        AK
      </div>
    ),
    { ...size },
  );
}
