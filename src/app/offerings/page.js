"use client";

import Link from "next/link";

const products = [
  { name: "Tokenized Venture Fund I", type: "Private Market", min: "€10,000", term: "24 months" },
  { name: "RWA Yield Strategy", type: "Credit", min: "€5,000", term: "12 months" },
  { name: "Agent Infrastructure Basket", type: "Equity-like", min: "€2,500", term: "Open" },
];

export default function Offerings() {
  return (
    <main style={s.page}>
      <header style={s.nav}>
        <div style={s.brand}>Offerings</div>
        <nav style={s.links}>
          <Link href="/" style={s.link}>Home</Link>
          <Link href="/dashboard" style={s.link}>Dashboard</Link>
          <Link href="/settings" style={s.link}>Settings</Link>
        </nav>
      </header>

      <section style={s.wrap}>
        <h1 style={s.h1}>Product Selection</h1>
        <p style={s.sub}>Browse available investments and subscribe in a few steps.</p>

        <div style={s.grid}>
          {products.map((p) => (
            <article key={p.name} style={s.card}>
              <h3 style={{ margin: 0 }}>{p.name}</h3>
              <p style={s.meta}>{p.type}</p>
              <p style={s.meta}>Min Investment: {p.min}</p>
              <p style={s.meta}>Term: {p.term}</p>
              <button style={s.btn}>Subscribe</button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

const s = {
  page: { minHeight: "100vh", background: "#071126", color: "#e5ecff", padding: 24, fontFamily: "Inter,system-ui,sans-serif" },
  nav: { maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 },
  brand: { fontWeight: 900, fontSize: 22 },
  links: { display: "flex", gap: 12 },
  link: { color: "#c7d2fe", textDecoration: "none", fontWeight: 700 },
  wrap: { maxWidth: 1100, margin: "20px auto 0" },
  h1: { margin: 0, fontSize: 34 },
  sub: { color: "#9fb2d8" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 12, marginTop: 12 },
  card: { background: "#0d1a37", border: "1px solid #243b69", borderRadius: 12, padding: 14 },
  meta: { color: "#9fb2d8", margin: "8px 0" },
  btn: { marginTop: 8, background: "#16a34a", color: "#fff", border: 0, borderRadius: 10, padding: "10px 12px", fontWeight: 800, cursor: "pointer" },
};
