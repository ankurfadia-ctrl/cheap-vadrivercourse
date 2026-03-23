import Link from "next/link";
import { SITE } from "@/lib/site-config";

export default function GuidePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#ffffff",
        color: "#0f172a",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <header
        style={{
          background: "#ffffff",
          borderBottom: "1px solid #e2e8f0",
          padding: "18px 32px",
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
            <div style={{ fontSize: "24px", fontWeight: 700 }}>
              {SITE.brandName}
            </div>
            <div style={{ marginTop: "4px", color: "#475569", fontSize: "14px" }}>
              {SITE.tagline}
            </div>
          </div>

          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <Link href="/">Home</Link>
            <Link href="/faq">FAQ</Link>
          </div>
        </div>
      </header>

      <section style={{ padding: "56px 32px" }}>
        <article style={{ maxWidth: "920px", margin: "0 auto" }}>
          <div
            style={{
              display: "inline-block",
              background: "#dbeafe",
              color: "#1d4ed8",
              padding: "8px 12px",
              borderRadius: "999px",
              fontSize: "14px",
              fontWeight: 700,
            }}
          >
            Virginia Course Guide
          </div>

          <h1 style={{ marginTop: "20px", fontSize: "42px", fontWeight: 700 }}>
            Cheap Virginia Driver Improvement Course Guide
          </h1>

          <p
            style={{
              marginTop: "18px",
              fontSize: "18px",
              lineHeight: 1.8,
              color: "#475569",
            }}
          >
            If you are looking for a cheap Virginia driver improvement course,
            the best choice is not always the one with the lowest headline
            number. It helps to review total value, ease of use, course format,
            and how simple the overall experience will be from start to finish.
          </p>

          <div
            style={{
              marginTop: "32px",
              background: "#eff6ff",
              border: "1px solid #bfdbfe",
              borderRadius: "18px",
              padding: "26px",
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

            <h2 style={{ marginTop: "10px", fontSize: "30px", fontWeight: 700 }}>
              {SITE.ownCourse.name}
            </h2>

            <p
              style={{
                marginTop: "10px",
                color: "#334155",
                lineHeight: 1.7,
              }}
            >
              {SITE.ownCourse.description}
            </p>

            <div style={{ marginTop: "16px", fontSize: "34px", fontWeight: 700 }}>
              {SITE.ownCourse.priceDisplay}
            </div>

            <div style={{ marginTop: "8px", color: "#64748b" }}>
              {SITE.ownCourse.subtext}
            </div>

            <a
              href={SITE.primaryCtaUrl}
              style={{
                display: "inline-block",
                marginTop: "20px",
                background: "#2563eb",
                color: "#ffffff",
                padding: "12px 20px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              {SITE.primaryCtaText}
            </a>
          </div>

          <h2 style={{ marginTop: "42px", fontSize: "28px", fontWeight: 700 }}>
            What to look for
          </h2>

          <ul
            style={{
              marginTop: "18px",
              paddingLeft: "22px",
              lineHeight: 1.9,
              color: "#334155",
            }}
          >
            <li>Look at the full price, not just the headline number.</li>
            <li>Choose a course that is simple to use and easy to finish.</li>
            <li>Make sure the provider clearly explains the process before signup.</li>
            <li>Check how certificate delivery and support are handled.</li>
            <li>Look for a clear, trustworthy course experience.</li>
          </ul>

          <h2 style={{ marginTop: "42px", fontSize: "28px", fontWeight: 700 }}>
            Other options
          </h2>

          <div style={{ marginTop: "18px", display: "grid", gap: "16px" }}>
            {SITE.otherOptions.map((option) => (
              <a
                key={option.name}
                href={option.url}
                style={{
                  display: "block",
                  border: "1px solid #e2e8f0",
                  borderRadius: "14px",
                  padding: "18px",
                  textDecoration: "none",
                  color: "#0f172a",
                  background: "#ffffff",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                }}
              >
                <div style={{ fontSize: "20px", fontWeight: 700 }}>
                  {option.name}
                </div>
                <div style={{ marginTop: "8px", color: "#475569" }}>
                  {option.description}
                </div>
              </a>
            ))}
          </div>
        </article>
      </section>

      <footer
        style={{
          background: "#f8fafc",
          borderTop: "1px solid #e2e8f0",
          padding: "24px 32px",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
            flexWrap: "wrap",
            color: "#475569",
          }}
        >
          <div>
            © {SITE.copyrightYear} {SITE.brandName}. All rights reserved.
          </div>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/disclaimer">Disclaimer</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}