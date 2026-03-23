import { SITE } from "@/lib/site-config";

export default function GuidePage() {
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
        <article style={{ maxWidth: "950px", margin: "0 auto" }}>
          
          <div style={{ background: "#fff", padding: "36px", borderRadius: "16px", border: "1px solid #e2e8f0" }}>
            <h1 style={{ fontSize: "40px", fontWeight: 700 }}>
              Cheap Virginia Driver Improvement Course (Online Options Explained)
            </h1>

            <p style={{ marginTop: "18px", fontSize: "18px", lineHeight: 1.8, color: "#475569" }}>
              Looking for a cheap Virginia driver improvement course? This guide explains affordable online options,
              what is included, and how to choose the best Virginia driver improvement course for your situation.
            </p>
          </div>

          <div style={{ marginTop: "24px", background: "#eff6ff", padding: "28px", borderRadius: "16px", border: "1px solid #bfdbfe" }}>
            <h2 style={{ fontSize: "26px", fontWeight: 700 }}>
              Recommended Option
            </h2>

            <h3 style={{ marginTop: "10px", fontSize: "22px" }}>
              {SITE.ownCourse.name}
            </h3>

            <p style={{ marginTop: "10px", color: "#475569" }}>
              {SITE.ownCourse.description}
            </p>

            <div style={{ marginTop: "12px", fontSize: "30px", fontWeight: 700 }}>
              {SITE.ownCourse.priceDisplay}
            </div>
          </div>

          <section style={{ marginTop: "24px", background: "#fff", padding: "30px", borderRadius: "16px", border: "1px solid #e2e8f0" }}>
            <h2 style={{ fontSize: "26px", fontWeight: 700 }}>
              What to look for in a Virginia driver improvement course
            </h2>

            <ul style={{ marginTop: "16px", paddingLeft: "20px", lineHeight: 1.8 }}>
              <li>Look at total cost, not just the advertised price</li>
              <li>Choose a course that is easy to complete</li>
              <li>Check support and certificate delivery</li>
              <li>Make sure the process is clearly explained</li>
            </ul>
          </section>

          <section style={{ marginTop: "24px", background: "#fff", padding: "30px", borderRadius: "16px", border: "1px solid #e2e8f0" }}>
            <h2 style={{ fontSize: "26px", fontWeight: 700 }}>
              Other options
            </h2>

            <div style={{ marginTop: "16px" }}>
              {SITE.otherOptions.map((o) => (
                <a key={o.name} href={o.url} style={{
                  display: "block",
                  border: "1px solid #e2e8f0",
                  padding: "18px",
                  borderRadius: "10px",
                  marginBottom: "10px",
                  textDecoration: "none",
                  color: "#0f172a",
                  background: "#fff"
                }}>
                  <div style={{ fontWeight: 700 }}>{o.name}</div>
                  <div style={{ color: "#475569", marginTop: "4px" }}>{o.description}</div>
                </a>
              ))}
            </div>
          </section>

        </article>
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