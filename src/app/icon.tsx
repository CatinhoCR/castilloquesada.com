import { ImageResponse } from "next/og";

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
          background: "#0B0B0C",
          borderRadius: 6,
        }}
      >
        <div
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: "#D6F84C",
            display: "flex",
          }}
        >
          C
        </div>
      </div>
    ),
    { ...size }
  );
}
