export default function PrivacyPolicyPage() {
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
          Privacy Policy
        </h1>

        <p style={{ marginTop: "18px", color: "#475569", lineHeight: 1.8 }}>
          Virginia Driver Course Guide values your privacy. This website may
          collect basic website usage information, including analytics,
          referral activity, and standard technical information, to improve
          website performance and user experience.
        </p>

        <p style={{ marginTop: "18px", color: "#475569", lineHeight: 1.8 }}>
          This website may include links to third-party websites, including
          course providers and affiliate partners. If you click a third-party
          link, you may be directed to a website with its own privacy practices
          and policies.
        </p>

        <p style={{ marginTop: "18px", color: "#475569", lineHeight: 1.8 }}>
          We do not control the privacy practices of third-party websites and
          encourage users to review the policies of any external website they
          visit.
        </p>

        <p style={{ marginTop: "18px", color: "#475569", lineHeight: 1.8 }}>
          This Privacy Policy may be updated from time to time. Continued use of
          this website means you accept the current version of this policy.
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