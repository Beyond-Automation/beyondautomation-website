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
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#020611",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <div
            style={{
              width: "84px",
              height: "84px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "3px solid #22d3ee",
              borderRadius: "22px",
              color: "#67e8f9",
              fontSize: "28px",
              fontWeight: 900,
            }}
          >
            BA
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: "28px",
                fontWeight: 900,
                letterSpacing: "5px",
              }}
            >
              BEYOND
            </div>

            <div
              style={{
                display: "flex",
                marginTop: "6px",
                fontSize: "18px",
                fontWeight: 800,
                letterSpacing: "7px",
                color: "#22d3ee",
              }}
            >
              AUTOMATION
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "1000px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: "82px",
              lineHeight: 1,
              letterSpacing: "-4px",
              fontWeight: 900,
            }}
          >
            Engineering smarter&nbsp;
            <span style={{ color: "#22d3ee" }}>IT operations.</span>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: "38px",
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
