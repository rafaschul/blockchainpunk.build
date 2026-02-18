export default function Home() {
  return (
    <main style={styles.page}>
      <div style={styles.container}>
        <aside style={styles.sidebar}>
          <h1 style={styles.name}>RICHARD SWART</h1>
          <p style={styles.role}>MARKETING MANAGER</p>

          <SectionTitle text="CONTACT" color="#0ea5e9" />
          <p style={styles.sidebarText}>+123-456-7890</p>
          <p style={styles.sidebarText}>123 Anywhere St., Any City</p>

          <SectionTitle text="SKILLS" color="#8b5cf6" />
          <ul style={styles.list}>
            <li>Project Management</li>
            <li>Public Relations</li>
            <li>Teamwork</li>
            <li>Time Management</li>
            <li>Leadership</li>
            <li>Effective Communication</li>
            <li>Critical Thinking</li>
          </ul>

          <SectionTitle text="LANGUAGES" color="#16a34a" />
          <ul style={styles.list}>
            <li>English (Fluent)</li>
            <li>French (Fluent)</li>
            <li>German (Basics)</li>
            <li>Spanish (Intermediate)</li>
          </ul>
        </aside>

        <section style={styles.main}>
          <SectionTitle text="PROFILE" color="#f97316" />
          <p style={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation. Ut enim ad minim veniam quis nostrud exercitation.
          </p>

          <SectionTitle text="WORK EXPERIENCE" color="#ef4444" />
          <Job
            title="Borcelle Studio"
            subtitle="Marketing Manager & Specialist"
            period="2030 - PRESENT"
            items={[
              "Develop and execute comprehensive marketing strategies and campaigns that align with the company’s goals and objectives.",
              "Lead, mentor, and manage a high-performing marketing team, fostering a collaborative and results-driven work environment.",
              "Monitor brand consistency across marketing channels and materials.",
            ]}
          />
          <Job
            title="Fauget Studio"
            subtitle="Marketing Manager & Specialist"
            period="2025 - 2029"
            items={[
              "Create and manage the marketing budget, ensuring efficient allocation of resources and optimizing ROI.",
              "Oversee market research to identify emerging trends, customer needs, and competitor strategies.",
              "Monitor brand consistency across marketing channels and materials.",
            ]}
          />
          <Job
            title="Studio Shodwe"
            subtitle="Marketing Manager & Specialist"
            period="2024 - 2025"
            items={[
              "Develop and maintain strong relationships with partners, agencies, and vendors to support marketing initiatives.",
              "Monitor and maintain brand consistency across all marketing channels and materials.",
            ]}
          />

          <SectionTitle text="EDUCATION" color="#2563eb" />
          <div style={styles.eduItem}>
            <p style={styles.eduYear}>2029 - 2030</p>
            <p style={styles.eduSchool}>WARDIERE UNIVERSITY</p>
            <p style={styles.eduLine}>• Master of Business</p>
            <p style={styles.eduLine}>• Management</p>
          </div>
          <div style={styles.eduItem}>
            <p style={styles.eduYear}>2025 - 2029</p>
            <p style={styles.eduSchool}>WARDIERE UNIVERSITY</p>
            <p style={styles.eduLine}>• Bachelor of Business</p>
            <p style={styles.eduLine}>• GPA: 3.8 / 4.0</p>
          </div>

          <SectionTitle text="REFERENCE" color="#7c3aed" />
          <div style={styles.referenceWrap}>
            <div>
              <p style={styles.refName}>Estelle Darcy</p>
              <p style={styles.refText}>Wardiere Inc. / CTO</p>
              <p style={styles.refText}>Phone: 123-456-7890</p>
              <p style={styles.refText}>Email: hello@reallygreatsite.com</p>
            </div>
            <div>
              <p style={styles.refName}>Harper Richard</p>
              <p style={styles.refText}>Wardiere Inc. / CEO</p>
              <p style={styles.refText}>Phone: 123-456-7890</p>
              <p style={styles.refText}>Email: hello@reallygreatsite.com</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function SectionTitle({ text, color }) {
  return <h2 style={{ ...styles.sectionTitle, color }}>{text}</h2>;
}

function Job({ title, subtitle, period, items }) {
  return (
    <div style={styles.job}>
      <p style={styles.jobHeader}>
        <span style={styles.jobTitle}>{title}</span> — <span style={styles.jobSub}>{subtitle}</span> — <span style={styles.jobPeriod}>{period}</span>
      </p>
      <ul style={styles.jobList}>
        {items.map((i, idx) => (
          <li key={idx}>{i}</li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #f8fbff 0%, #eef4ff 50%, #fdfcff 100%)",
    padding: "32px 16px",
    fontFamily: "Inter, system-ui, -apple-system, sans-serif",
    color: "#0f172a",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "320px 1fr",
    gap: "24px",
  },
  sidebar: {
    background: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "20px",
    padding: "24px",
    boxShadow: "0 12px 40px rgba(15, 23, 42, 0.08)",
    height: "fit-content",
    position: "sticky",
    top: "16px",
  },
  name: {
    margin: 0,
    fontSize: "34px",
    lineHeight: 1.05,
    fontWeight: 900,
    letterSpacing: "0.4px",
    color: "#111827",
  },
  role: {
    margin: "8px 0 18px",
    fontWeight: 700,
    color: "#334155",
    letterSpacing: "0.3px",
  },
  sidebarText: { margin: "4px 0", color: "#334155" },
  main: {
    background: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "20px",
    padding: "28px",
    boxShadow: "0 12px 40px rgba(15, 23, 42, 0.08)",
  },
  sectionTitle: {
    margin: "18px 0 10px",
    fontSize: "16px",
    fontWeight: 900,
    letterSpacing: "0.9px",
  },
  paragraph: { margin: 0, lineHeight: 1.65, color: "#1f2937" },
  list: { margin: "8px 0 0 18px", padding: 0, lineHeight: 1.8, color: "#1f2937" },
  job: { marginBottom: "14px" },
  jobHeader: { margin: "0 0 8px", lineHeight: 1.4 },
  jobTitle: { fontWeight: 900, color: "#111827" },
  jobSub: { fontWeight: 700, color: "#374151" },
  jobPeriod: { fontWeight: 700, color: "#2563eb" },
  jobList: { margin: 0, paddingLeft: "18px", lineHeight: 1.7, color: "#1f2937" },
  eduItem: { marginBottom: "10px" },
  eduYear: { margin: 0, fontWeight: 700, color: "#334155" },
  eduSchool: { margin: "2px 0", fontWeight: 900, color: "#111827" },
  eduLine: { margin: "1px 0", color: "#1f2937" },
  referenceWrap: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" },
  refName: { margin: 0, fontWeight: 900, color: "#111827" },
  refText: { margin: "2px 0", color: "#334155" },
};
