import Link from "next/link";
import { SITE } from "@/lib/site-config";

export default function HomePage() {
  return (
    <main style={{ fontFamily: "Arial, Helvetica, sans-serif", background: "#f8fafc" }}>
      
      {/* HEADER */}
      <header style={{ background: "#fff", borderBottom: "1px solid #e2e8f0", padding: "16px 32px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", justifyContent: "space-between" }}>
          <div style={{ fontWeight: 700, fontSize: "22px" }}>
            Virginia Driver Improvement Course Guide
          </div>
          <div style={{ display: "flex", gap: "16px" }}>
            <Link href="/faq">FAQ</Link>
            <Link href="/cheap-virginia-driver-improvement-course">Guide</Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section style={{ padding: "60px 30px", maxWidth: "1100px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "42px", fontWeight: 700 }}>
          Virginia Driver Improvement Course (Online & Court Approved)
        </h1>

        <p style={{ marginTop: "16px", fontSize: "18px", lineHeight: 1.8, color: "#475569" }}>
          Compare Virginia driver improvement course options, including online and court-approved programs.
          Learn how the course works, what to expect, and choose the best Virginia driver improvement course for your needs.
        </p>

        <p style={{ marginTop: "10px", fontSize: "14px", color: "#64748b" }}>
          Information for Virginia drivers seeking DMV-approved and court-accepted driver improvement courses.
        </p>

        <a
          href={SITE.primaryCtaUrl}
          style={{
            display: "inline-block",
            marginTop: "24px",
            background: "#2563eb",
            color: "#fff",
            padding: "14px 24px",
            borderRadius: "8px",
            fontWeight: 700,
            textDecoration: "none"
          }}
        >
          Start Virginia Driver Improvement Course
        </a>
      </section>

      {/* RECOMMENDED */}
      <section style={{ padding: "40px 30px", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ background: "#fff", padding: "30px", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
          <div style={{ color: "#2563eb", fontWeight: 700, fontSize: "14px" }}>
            RECOMMENDED OPTION
          </div>

          <h2 style={{ fontSize: "26px", marginTop: "10px" }}>
            {SITE.ownCourse.name}
          </h2>

          <p style={{ marginTop: "10px", color: "#475569" }}>
            {SITE.ownCourse.description}
          </p>

          <div style={{ fontSize: "32px", marginTop: "16px", fontWeight: 700 }}>
            {SITE.ownCourse.priceDisplay}
          </div>

          <ul style={{ marginTop: "16px" }}>
            {SITE.ownCourse.bullets.map((b) => (
              <li key={b}>• {b}</li>
            ))}
          </ul>

          <a
            href={SITE.primaryCtaUrl}
            style={{
              display: "inline-block",
              marginTop: "20px",
              background: "#2563eb",
              color: "#fff",
              padding: "12px 20px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 700
            }}
          >
            Enroll Now
          </a>
        </div>
      </section>

      {/* OTHER OPTIONS */}
      <section style={{ padding: "40px 30px", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "26px" }}>
          Other Virginia Driver Improvement Course Options
        </h2>

        <div style={{ marginTop: "20px" }}>
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

      {/* FOOTER */}
      <footer style={{ padding: "30px", background: "#f1f5f9", marginTop: "40px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", justifyContent: "space-between" }}>
          <div>© Virginia Driver Course Guide</div>
          <div style={{ display: "flex", gap: "12px" }}>
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/disclaimer">Disclaimer</Link>
          </div>
        </div>
      </footer>

    </main>
  );
}