export default function DisclaimerPage() {
  return (
    <>
      <header style={{ background: "#fff", borderBottom: "1px solid #e2e8f0", padding: "16px 32px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
          <a href="/" style={{ fontWeight: 700, fontSize: "22px", textDecoration: "none", color: "#0f172a" }}>
            Virginia Driver Course Guide
          </a>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="/">Home</a>
            <a href="/faq">FAQ</a>
            <a href="/cheap-virginia-driver-improvement-course">Guide</a>
          </div>
        </div>
      </header>

      <main style={{ background: "#f8fafc", padding: "50px 30px", minHeight: "100vh", fontFamily: "Arial, Helvetica, sans-serif" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", background: "#fff", padding: "36px", borderRadius: "16px", border: "1px solid #e2e8f0" }}>
          <h1 style={{ fontSize: "36px", fontWeight: 700 }}>Disclaimer</h1>

          <p style={{ marginTop: "16px", color: "#475569", lineHeight: 1.8 }}>
            Virginia Driver Course Guide is an informational website. Course availability, pricing, support options,
            and provider policies may change over time.
          </p>

          <h2 style={{ marginTop: "24px", fontSize: "22px", fontWeight: 700 }}>No Guarantee</h2>
          <p style={{ color: "#475569", lineHeight: 1.8 }}>
            We do not guarantee acceptance, approval, pricing, or outcomes from any third-party course provider.
          </p>

          <h2 style={{ marginTop: "24px", fontSize: "22px", fontWeight: 700 }}>Affiliate Disclosure</h2>
          <p style={{ color: "#475569", lineHeight: 1.8 }}>
            This website may receive compensation when visitors click links or purchase from third-party providers.
          </p>

          <h2 style={{ marginTop: "24px", fontSize: "22px", fontWeight: 700 }}>External Providers</h2>
          <p style={{ color: "#475569", lineHeight: 1.8 }}>
            Visitors should always review the current information and policies of any provider before enrolling.
          </p>
        </div>
      </main>

      <footer style={{ padding: "30px", background: "#f1f5f9", borderTop: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
          <div style={{ color: "#64748b", fontSize: "14px" }}>
            © {new Date().getFullYear()} Virginia Driver Course Guide. All rights reserved.
          </div>

          <div style={{ display: "flex", gap: "16px", fontSize: "14px", flexWrap: "wrap" }}>
            <a href="/faq">FAQ</a>
            <a href="/privacy-policy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="/disclaimer">Disclaimer</a>
          </div>
        </div>
      </footer>
    </>
  );
}