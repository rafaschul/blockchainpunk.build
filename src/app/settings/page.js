"use client";

import Link from "next/link";
import { useState } from "react";

export default function Settings() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [googleConnected, setGoogleConnected] = useState(false);

  return (
    <main style={s.page}>
      <header style={s.nav}>
        <div style={s.brand}>Settings & Profile</div>
        <nav style={s.links}>
          <Link href="/" style={s.link}>Home</Link>
          <Link href="/dashboard" style={s.link}>Dashboard</Link>
          <Link href="/offerings" style={s.link}>Offerings</Link>
        </nav>
      </header>

      <section style={s.wrap}>
        <h1 style={s.h1}>Onboarding & Connectivity</h1>
        <div style={s.card}>
          <h3>Compliance Checklist</h3>
          <ul style={s.ul}>
            <li>Registration: complete</li>
            <li>PEP & Eligibility checks: pending review</li>
            <li>KYC/KYB/AML: upload required docs</li>
          </ul>
        </div>

        <div style={s.card}>
          <h3>Connections</h3>
          <div style={s.row}>
            <span>Wallet Connect</span>
            <button style={s.btn} onClick={() => setWalletConnected((v) => !v)}>{walletConnected ? "Connected" : "Connect"}</button>
          </div>
          <div style={s.row}>
            <span>Google Email Connect</span>
            <button style={s.btn} onClick={() => setGoogleConnected((v) => !v)}>{googleConnected ? "Connected" : "Connect"}</button>
          </div>
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
  wrap: { maxWidth: 1100, margin: "20px auto 0", display: "grid", gap: 12 },
  h1: { margin: 0, fontSize: 34 },
  card: { background: "#0d1a37", border: "1px solid #243b69", borderRadius: 12, padding: 14 },
  ul: { margin: "8px 0 0", paddingLeft: 20, lineHeight: 1.8, color: "#c8d5f5" },
  row: { display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #1f3258", padding: "10px 0" },
  btn: { background: "#111d3c", color: "#dbeafe", border: "1px solid #29406f", padding: "8px 12px", borderRadius: 10, fontWeight: 700, cursor: "pointer" },
};
