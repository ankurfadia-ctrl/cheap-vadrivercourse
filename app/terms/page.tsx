export default function TermsPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        color: "#0f172a",
        fontFamily: "Arial, Helvetica, sans-serif",
        padding: "50px 30px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
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
          Legal Information
        </div>

        <h1 style={{ marginTop: "12px", fontSize: "40px", fontWeight: 700 }}>
          Terms and Conditions
        </h1>

        <p style={{ marginTop: "18px", color: "#475569", lineHeight: 1.8 }}>
          By using this website, you agree to use it only for lawful purposes.
          Information on this website is provided for general informational
          purposes and may be changed, updated, or removed at any time without
          notice.
        </p>

        <p style={{ marginTop: "18px", color: "#475569", lineHeight: 1.8 }}>
          This website may contain links to third-party providers or external
          websites. We are not responsible for the content, pricing,
          availability, policies, or services of third-party websites.
        </p>

        <p style={{ marginTop: "18px", color: "#475569", lineHeight: 1.8 }}>
          Use of this website does not create any professional, legal, or
          advisory relationship. Visitors are responsible for reviewing current
          provider information before making any purchase decision.
        </p>

        <p style={{ marginTop: "18px", color: "#475569", lineHeight: 1.8 }}>
          We reserve the right to modify these Terms and Conditions at any time.
          Continued use of the website means you accept the current version.
        </p>

        <div
          style={{
            marginTop: "28px",
            paddingTop: "18px",
            borderTop: "1px solid #e2e8f0",
            color: "#64748b",
            fontSize: "14px",
          }}
        >
          Last updated: January 1, 2026
        </div>
      </div>
    </main>
  );
}