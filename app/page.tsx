import Link from "next/link";
import { SITE } from "@/lib/site-config";

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        color: "#0f172a",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <header
        style={{
          background: "#ffffff",
          borderBottom: "1px solid #e2e8f0",
          padding: "20px 40px",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <div style={{ fontSize: "28px", fontWeight: 700 }}>
              {SITE.brandName}
            </div>
            <div style={{ marginTop: "6px", color: "#475569" }}>
              {SITE.tagline}
            </div>
          </div>

          <div style={{ display: "flex", gap: "18px", alignItems: "center" }}>
            <Link href="/faq">FAQ</Link>
            <Link href="/cheap-virginia-driver-improvement-course">Guide</Link>
            <a
              href={SITE.primaryCtaUrl}
              style={{
                background: "#2563eb",
                color: "#ffffff",
                padding: "10px 18px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              {SITE.primaryCtaText}
            </a>
          </div>
        </div>
      </header>

      <section style={{ padding: "60px 40px" }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: "32px",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-block",
                background: "#dbeafe",
                color: "#1d4ed8",
                padding: "8px 12px",
                borderRadius: "999px",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              Virginia Driver Improvement Information
            </div>

            <h1
              style={{
                marginTop: "20px",
                fontSize: "48px",
                lineHeight: 1.1,
                fontWeight: 700,
              }}
            >
              Find a Virginia Driver Improvement Course That Fits Your Needs
            </h1>

            <p
              style={{
                marginTop: "20px",
                fontSize: "18px",
                lineHeight: 1.7,
                color: "#475569",
                maxWidth: "700px",
              }}
            >
              Compare options, learn what to expect, and choose a Virginia
              driver improvement course online with confidence.
            </p>

            <div style={{ marginTop: "28px", display: "flex", gap: "14px" }}>
              <a
                href={SITE.primaryCtaUrl}
                style={{
                  background: "#2563eb",
                  color: "#ffffff",
                  padding: "14px 22px",
                  borderRadius: "10px",
                  textDecoration: "none",
                  fontWeight: 700,
                }}
              >
                {SITE.primaryCtaText}
              </a>

              <Link
                href="/cheap-virginia-driver-improvement-course"
                style={{
                  border: "1px solid #cbd5e1",
                  background: "#ffffff",
                  color: "#0f172a",
                  padding: "14px 22px",
                  borderRadius: "10px",
                  textDecoration: "none",
                  fontWeight: 700,
                }}
              >
                Read the Guide
              </Link>
            </div>
          </div>

          <div
            style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "18px",
              padding: "28px",
              boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
            }}
          >
            <div
              style={{
                color: "#1d4ed8",
                fontSize: "13px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              Recommended Option
            </div>

            <h2 style={{ marginTop: "12px", fontSize: "30px", fontWeight: 700 }}>
              {SITE.ownCourse.name}
            </h2>

            <p style={{ marginTop: "12px", color: "#475569", lineHeight: 1.7 }}>
              {SITE.ownCourse.description}
            </p>

            <div style={{ marginTop: "22px", fontSize: "38px", fontWeight: 700 }}>
              {SITE.ownCourse.priceDisplay}
            </div>

            <div style={{ marginTop: "8px", color: "#64748b", fontSize: "14px" }}>
              {SITE.ownCourse.subtext}
            </div>

            <ul style={{ marginTop: "22px", paddingLeft: "20px", lineHeight: 1.9 }}>
              {SITE.ownCourse.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <a
              href={SITE.primaryCtaUrl}
              style={{
                display: "inline-block",
                marginTop: "24px",
                background: "#2563eb",
                color: "#ffffff",
                padding: "14px 22px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              {SITE.primaryCtaText}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}