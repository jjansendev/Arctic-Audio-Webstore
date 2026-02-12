import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64
};

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
          background: "linear-gradient(135deg, #0a0f14, #0f1c26, #111e2e)",
          color: "#6fe8ff",
          fontSize: 30,
          fontFamily: "sans-serif",
          letterSpacing: "0.2em"
        }}
      >
        AA
      </div>
    ),
    {
      ...size
    }
  );
}
