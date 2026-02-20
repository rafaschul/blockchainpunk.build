"use client";

import Link from "next/link";

const holdings = [
  { asset: "BCPP Tokenized VC I", value: "€124,500", pnl: "+8.2%" },
  { asset: "RWA Credit Pool", value: "€42,300", pnl: "+3.9%" },
  { asset: "Infra Growth Index", value: "€18,900", pnl: "-1.1%" },
];

const txs = [
  { id: "TX-8821", type: "Subscription", amount: "€12,000", status: "Completed" },
  { id: "TX-8820", type: "Payment", amount: "€3,500", status: "Completed" },
  { id: "TX-8812", type: "KYC Review", amount: "-", status: "Pending" },
];

export default function Dashboard() {
  return (
    <main style={s.page}>
      <TopNav />
      <section style={s.wrap}>
        <h1 style={s.h1}>Product Overview Dashboard</h1>
        <div style={s.kpis}>
          <Kpi label="Portfolio Value" value="€185,700" />
          <Kpi label="Active Subscriptions" value="7" />
          <Kpi label="Marketplace Offers" value="22" />
          <Kpi label="Compliance Status" value="Verified" />
        </div>

        <div style={s.split}>
          <article style={s.card}>
            <h3 style={s.h3}>Holdings</h3>
            {holdings.map((h) => (
              <div key={h.asset} style={s.row}>
                <div><b>{h.asset}</b><div style={s.muted}>{h.value}</div></div>
                <span style={s.good}>{h.pnl}</span>
              </div>
            ))}
          </article>

          <article style={s.card}>
            <h3 style={s.h3}>Recent Transactions</h3>
            {txs.map((t) => (
              <div key={t.id} style={s.row}>
                <div><b>{t.id}</b><div style={s.muted}>{t.type} • {t.amount}</div></div>
                <span style={t.status === "Pending" ? s.pending : s.ok}>{t.status}</span>
              </div>
            ))}
          </article>
        </div>
      </section>
    </main>
  );
}

function TopNav() {
  return (
    <header style={s.nav}>
      <div style={s.brand}>BlockchainPunk Build</div>
      <nav style={s.links}>
        <Link href="/" style={s.link}>Home</Link>
        <Link href="/offerings" style={s.link}>Offerings</Link>
        <Link href="/settings" style={s.link}>Settings</Link>
      </nav>
    </header>
  );
}

function Kpi({ label, value }) {
  return <div style={s.kpi}><div style={s.kpiVal}>{value}</div><div style={s.kpiLab}>{label}</div></div>;
}

const s = {
  page: { minHeight: "100vh", background: "#071126", color: "#e5ecff", padding: 24, fontFamily: "Inter,system-ui,sans-serif" },
  wrap: { maxWidth: 1100, margin: "18px auto 0" },
  nav: { maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 },
  brand: { fontWeight: 900, fontSize: 22 },
  links: { display: "flex", gap: 12 },
  link: { color: "#c7d2fe", textDecoration: "none", fontWeight: 700 },
  h1: { margin: 0, fontSize: 34 },
  kpis: { marginTop: 14, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 10 },
  kpi: { background: "#0d1a37", border: "1px solid #243b69", borderRadius: 12, padding: 12 },
  kpiVal: { fontSize: 28, fontWeight: 900 },
  kpiLab: { color: "#8ea4d1", fontSize: 12 },
  split: { marginTop: 14, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 12 },
  card: { background: "#0d1a37", border: "1px solid #243b69", borderRadius: 12, padding: 14 },
  h3: { margin: "0 0 8px" },
  row: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid #1f3258" },
  muted: { color: "#8ea4d1", fontSize: 13 },
  good: { color: "#34d399", fontWeight: 800 },
  ok: { color: "#34d399", fontWeight: 700 },
  pending: { color: "#fbbf24", fontWeight: 700 },
};
