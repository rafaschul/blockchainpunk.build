"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main style={s.page}>
      <header style={s.nav}>
        <div style={s.brand}>BlockchainPunk Build</div>
        <nav style={s.links}>
          <Link href="/dashboard" style={s.link}>Dashboard</Link>
          <Link href="/offerings" style={s.link}>Offerings</Link>
          <Link href="/settings" style={s.link}>Settings</Link>
        </nav>
      </header>

      <section style={s.hero}>
        <p style={s.kicker}>Inspired by BCPP-style institutional branding</p>
        <h1 style={s.h1}>Build & Investment Platform for Tokenized Opportunities</h1>
        <p style={s.sub}>
          Onboard investors, run compliance checks, connect wallets, and manage subscriptions in one secure platform.
        </p>
        <div style={s.actions}>
          <Link href="/dashboard" style={s.primary}>Open Dashboard</Link>
          <button style={s.secondary} onClick={() => alert("Wallet connect integration placeholder")}>Connect Wallet</button>
          <button style={s.secondary} onClick={() => alert("Google sign-in integration placeholder")}>Connect Google</button>
        </div>
      </section>

      <section style={s.grid}>
        <Card title="Onboarding Process" items={[
          "Registration",
          "Private / Corporate Investor onboarding",
          "PEP & Eligibility checks",
          "KYC / KYB / AML",
          "Wallet connection",
        ]} />
        <Card title="Investment Process" items={[
          "Product overview dashboard",
          "Product selection",
          "Payment & subscription",
          "Investment performance tracking",
          "Marketplace access",
        ]} />
      </section>
    </main>
  );
}

function Card({ title, items }) {
  return (
    <article style={s.card}>
      <h3 style={s.h3}>{title}</h3>
      <ul style={s.ul}>
        {items.map((i) => <li key={i}>{i}</li>)}
      </ul>
    </article>
  );
}

const s = {
  page: { minHeight: "100vh", background: "linear-gradient(180deg,#071126,#0b1736)", color: "#e5ecff", padding: 24, fontFamily: "Inter, system-ui, sans-serif" },
  nav: { maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 },
  brand: { fontWeight: 900, fontSize: 22 },
  links: { display: "flex", gap: 12, flexWrap: "wrap" },
  link: { color: "#c7d2fe", textDecoration: "none", fontWeight: 700 },
  hero: { maxWidth: 1100, margin: "28px auto 0" },
  kicker: { color: "#60a5fa", fontWeight: 700, margin: 0 },
  h1: { fontSize: "clamp(34px,6vw,58px)", margin: "8px 0" },
  sub: { color: "#a9b7d9", maxWidth: 760, lineHeight: 1.6 },
  actions: { display: "flex", gap: 10, flexWrap: "wrap", marginTop: 18 },
  primary: { textDecoration: "none", background: "#16a34a", color: "#fff", padding: "10px 14px", borderRadius: 10, fontWeight: 800 },
  secondary: { background: "#111d3c", color: "#dbeafe", border: "1px solid #29406f", padding: "10px 14px", borderRadius: 10, fontWeight: 700, cursor: "pointer" },
  grid: { maxWidth: 1100, margin: "26px auto 0", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 12 },
  card: { background: "#0d1a37", border: "1px solid #223867", borderRadius: 14, padding: 16 },
  h3: { margin: 0, fontSize: 22 },
  ul: { margin: "10px 0 0", paddingLeft: 20, lineHeight: 1.8, color: "#c8d5f5" },
};
