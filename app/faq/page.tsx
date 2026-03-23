import { SITE } from "@/lib/site-config";

export default function FAQPage() {
  return (
    <>
      <header
        style={{
          background: "#ffffff",
          borderBottom: "1px solid #e2e8f0",
          padding: "16px 32px",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="/"
            style={{
              fontWeight: 700,
              fontSize: "22px",
              textDecoration: "none",
              color: "#0f172a",
            }}
          >
            Virginia Driver Course Guide
          </a>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="/" style={{ color: "#0f172a", textDecoration: "none" }}>
              Home
            </a>
            <a href="/faq" style={{ color: "#0f172a", textDecoration: "none" }}>
              FAQ
            </a>
            <a
              href="/cheap-virginia-driver-improvement-course"
              style={{ color: "#0f172a", textDecoration: "none" }}
            >
              Guide
            </a>
          </div>
        </div>
      </header>

      <main
        style={{
          minHeight: "100vh",
          background: "#f8fafc",
          color: "#0f172a",
          fontFamily: "Arial, Helvetica, sans-serif",
          padding: "50px 30px",
        }}
      >
        <div style={{ maxWidth: "950px", margin: "0 auto" }}>
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "16px",
              padding: "36px",
              boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
            }}
          >
            <div
              style={{
                color: "#2563eb",
                fontSize: "13px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              Help Center
            </div>

            <h1 style={{ marginTop: "12px", fontSize: "40px", fontWeight: 700 }}>
              Frequently Asked Questions
            </h1>

            <p
              style={{
                marginTop: "16px",
                fontSize: "18px",
                lineHeight: 1.8,
                color: "#475569",
              }}
            >
              Common questions about Virginia driver improvement course options and
              how to choose the best fit.
            </p>
          </div>

          <div style={{ marginTop: "24px", display: "grid", gap: "18px" }}>
            {SITE.faqs.map((faq) => (
              <div
                key={faq.question}
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "16px",
                  padding: "24px",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                }}
              >
                <h2 style={{ fontSize: "22px", fontWeight: 700 }}>
                  {faq.question}
                </h2>
                <p
                  style={{
                    marginTop: "10px",
                    color: "#475569",
                    lineHeight: 1.8,
                  }}
                >
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer
        style={{
          padding: "30px",
          background: "#f1f5f9",
          borderTop: "1px solid #e2e8f0",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ color: "#64748b", fontSize: "14px" }}>
            © {new Date().getFullYear()} Virginia Driver Course Guide. All rights reserved.
          </div>

          <div style={{ display: "flex", gap: "16px", fontSize: "14px", flexWrap: "wrap" }}>
            <a href="/faq" style={{ color: "#0f172a", textDecoration: "none" }}>
              FAQ
            </a>
            <a href="/privacy-policy" style={{ color: "#0f172a", textDecoration: "none" }}>
              Privacy
            </a>
            <a href="/terms" style={{ color: "#0f172a", textDecoration: "none" }}>
              Terms
            </a>
            <a href="/disclaimer" style={{ color: "#0f172a", textDecoration: "none" }}>
              Disclaimer
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}