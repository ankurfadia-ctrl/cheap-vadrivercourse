export default function PrivacyPolicyPage() {
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
          
          <h1 style={{ fontSize: "36px", fontWeight: 700 }}>Privacy Policy</h1>

          <p style={{ marginTop: "16px", color: "#475569", lineHeight: 1.8 }}>
            This website provides general information about Virginia driver improvement course options.
            We may collect basic usage data to improve user experience.
          </p>

          <h2 style={{ marginTop: "24px", fontSize: "22px", fontWeight: 700 }}>Information We Collect</h2>
          <p style={{ color: "#475569", lineHeight: 1.8 }}>
            We may collect non-personal information such as browser type, device type, and pages visited.
          </p>

          <h2 style={{ marginTop: "24px", fontSize: "22px", fontWeight: 700 }}>How We Use Information</h2>
          <p style={{ color: "#475569", lineHeight: 1.8 }}>
            Information is used to improve website performance and user experience.
          </p>

          <h2 style={{ marginTop: "24px", fontSize: "22px", fontWeight: 700 }}>Third-Party Links</h2>
          <p style={{ color: "#475569", lineHeight: 1.8 }}>
            This site may contain links to third-party providers. We are not responsible for their policies or practices.
          </p>

          <h2 style={{ marginTop: "24px", fontSize: "22px", fontWeight: 700 }}>Contact</h2>
          <p style={{ color: "#475569", lineHeight: 1.8 }}>
            Contact information will be updated as the business develops.
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