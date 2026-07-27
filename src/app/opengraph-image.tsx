import { ImageResponse } from "next/og";

export const alt = "Beyond Automation — Engineering Smarter IT Operations";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#020611",
          color: "white",
          fontFamily: "Arial, sans-serif",
          padding: "74px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 18% 30%, rgba(37,99,235,.42), transparent 34%), radial-gradient(circle at 82% 72%, rgba(34,211,238,.25), transparent 30%)",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", zIndex: 1 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              fontSize: "28px",
              fontWeight: 900,
              letterSpacing: "5px",
            }}
          >
            <div
              style={{
                width: "82px",
                height: "82px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "3px solid #22d3ee",
                borderRadius: "22px",
                color: "#67e8f9",
              }}
            >
              BA
            </div>
            BEYOND AUTOMATION
          </div>

          <div
            style={{
              maxWidth: "940px",
              marginTop: "72px",
              fontSize: "82px",
              lineHeight: 1,
              letterSpacing: "-4px",
              fontWeight: 950,
            }}
          >
            Engineering smarter
            <span style={{ color: "#22d3ee" }}> IT operations.</span>
          </div>

          <div
            style={{
              marginTop: "42px",
              fontSize: "28px",
              color: "#cbd5e1",
            }}
          >
            Practical automation. Human-guided AI. PowerShell-first engineering.
          </div>
        </div>
      </div>
    ),
    size
  );
}
