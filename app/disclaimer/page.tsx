export default function DisclaimerPage() {
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
          Disclaimer
        </h1>

        <p style={{ marginTop: "18px", color: "#475569", lineHeight: 1.8 }}>
          Virginia Driver Course Guide is an informational website. Course
          availability, pricing, acceptance, support options, and provider
          policies may vary and may change over time.
        </p>

        <p style={{ marginTop: "18px", color: "#475569", lineHeight: 1.8 }}>
          Visitors should review the current details, requirements, and policies
          of any provider before purchasing a course or relying on course
          information.
        </p>

        <p style={{ marginTop: "18px", color: "#475569", lineHeight: 1.8 }}>
          This website may receive compensation when visitors click certain
          links or complete purchases through third-party providers.
        </p>

        <p style={{ marginTop: "18px", color: "#475569", lineHeight: 1.8 }}>
          Nothing on this website should be interpreted as legal advice,
          regulatory advice, or a guarantee regarding court, DMV, or provider
          acceptance.
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