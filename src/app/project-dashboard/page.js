"use client";

import { useMemo, useState } from "react";

const roadmap = [
  { phase: "Phase 1", window: "Week 1-2", goal: "Foundation & Scope", status: "In Progress" },
  { phase: "Phase 2", window: "Week 3-4", goal: "MVP Build", status: "Planned" },
  { phase: "Phase 3", window: "Week 5-6", goal: "Integrations & QA", status: "Planned" },
  { phase: "Phase 4", window: "Week 7-8", goal: "Launch & Iteration", status: "Planned" },
];

const seedTasks = [
  { id: 1, title: "Finalize project scope and KPIs", owner: "Raf", area: "Strategy", done: true, due: "2026-02-22" },
  { id: 2, title: "Define compliance workflow (KYC/KYB/AML)", owner: "Kite", area: "Product", done: false, due: "2026-02-24" },
  { id: 3, title: "Wallet + Google connect architecture", owner: "Kite", area: "Engineering", done: false, due: "2026-02-25" },
  { id: 4, title: "Investment dashboard v1", owner: "Kite", area: "Engineering", done: true, due: "2026-02-23" },
  { id: 5, title: "Offerings and subscription flow", owner: "Both", area: "Product", done: false, due: "2026-02-27" },
  { id: 6, title: "Pilot test with internal team", owner: "Both", area: "Operations", done: false, due: "2026-03-01" },
];

const updates = [
  { day: "Mon", text: "Scope and structure agreed." },
  { day: "Tue", text: "Dashboard baseline completed." },
  { day: "Wed", text: "Integration planning in progress." },
  { day: "Thu", text: "Team sync and blockers review." },
];

export default function ProjectDashboard() {
  const [tasks, setTasks] = useState(seedTasks);

  const doneCount = useMemo(() => tasks.filter((t) => t.done).length, [tasks]);
  const progress = Math.round((doneCount / tasks.length) * 100);

  const toggle = (id) => setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));

  return (
    <main style={s.page}>
      <header style={s.header}>
        <div>
          <h1 style={s.h1}>Project Command Dashboard</h1>
          <p style={s.sub}>Strategic overview, key tasks, roadmap, and transparent team execution.</p>
        </div>
      </header>

      <section style={s.kpis}>
        <Kpi label="Overall Progress" value={`${progress}%`} />
        <Kpi label="Completed Tasks" value={`${doneCount}/${tasks.length}`} />
        <Kpi label="Current Phase" value="Foundation" />
        <Kpi label="Team Visibility" value="Live" />
      </section>

      <section style={s.grid2}>
        <article style={s.card}>
          <h3 style={s.h3}>Strategic Overview</h3>
          <ul style={s.ul}>
            <li>Build investor-grade platform with transparent compliance and execution.</li>
            <li>Ship modular product areas: onboarding, offerings, dashboard, settings.</li>
            <li>Track every milestone publicly for team alignment and accountability.</li>
            <li>Prioritize speed without sacrificing trust and governance quality.</li>
          </ul>
        </article>

        <article style={s.card}>
          <h3 style={s.h3}>Roadmap</h3>
          {roadmap.map((r) => (
            <div key={r.phase} style={s.roadRow}>
              <div>
                <b>{r.phase}</b>
                <div style={s.muted}>{r.window} • {r.goal}</div>
              </div>
              <span style={r.status === "In Progress" ? s.liveBadge : s.planBadge}>{r.status}</span>
            </div>
          ))}
        </article>
      </section>

      <section style={s.grid2}>
        <article style={s.card}>
          <h3 style={s.h3}>Key Tasks (Step-by-step)</h3>
          {tasks.map((t) => (
            <label key={t.id} style={s.taskRow}>
              <input type="checkbox" checked={t.done} onChange={() => toggle(t.id)} />
              <div>
                <b style={{ textDecoration: t.done ? "line-through" : "none" }}>{t.title}</b>
                <div style={s.muted}>{t.area} • Owner: {t.owner} • Due: {t.due}</div>
              </div>
            </label>
          ))}
        </article>

        <article style={s.card}>
          <h3 style={s.h3}>Transparency Feed</h3>
          {updates.map((u, i) => (
            <div key={i} style={s.feedRow}>
              <span style={s.feedDay}>{u.day}</span>
              <span>{u.text}</span>
            </div>
          ))}
        </article>
      </section>
    </main>
  );
}

function Kpi({ label, value }) {
  return (
    <div style={s.kpi}>
      <div style={s.kpiValue}>{value}</div>
      <div style={s.kpiLabel}>{label}</div>
    </div>
  );
}

const s = {
  page: { minHeight: "100vh", background: "#071126", color: "#e5ecff", padding: 24, fontFamily: "Inter, system-ui, sans-serif" },
  header: { maxWidth: 1100, margin: "0 auto" },
  h1: { margin: 0, fontSize: 36 },
  sub: { marginTop: 8, color: "#9fb2d8" },
  kpis: { maxWidth: 1100, margin: "14px auto 0", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 10 },
  kpi: { background: "#0d1a37", border: "1px solid #243b69", borderRadius: 12, padding: 12 },
  kpiValue: { fontSize: 28, fontWeight: 900 },
  kpiLabel: { color: "#8ea4d1", fontSize: 12 },
  grid2: { maxWidth: 1100, margin: "12px auto 0", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: 12 },
  card: { background: "#0d1a37", border: "1px solid #243b69", borderRadius: 12, padding: 14 },
  h3: { margin: "0 0 10px" },
  ul: { margin: 0, paddingLeft: 20, lineHeight: 1.8, color: "#c8d5f5" },
  roadRow: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid #1f3258", gap: 10 },
  muted: { color: "#8ea4d1", fontSize: 13 },
  liveBadge: { background: "#065f46", color: "#a7f3d0", border: "1px solid #10b981", borderRadius: 999, padding: "4px 8px", fontWeight: 700, fontSize: 12 },
  planBadge: { background: "#1e293b", color: "#cbd5e1", border: "1px solid #334155", borderRadius: 999, padding: "4px 8px", fontWeight: 700, fontSize: 12 },
  taskRow: { display: "grid", gridTemplateColumns: "20px 1fr", gap: 10, alignItems: "start", padding: "10px 0", borderBottom: "1px solid #1f3258" },
  feedRow: { display: "grid", gridTemplateColumns: "52px 1fr", gap: 10, alignItems: "start", padding: "10px 0", borderBottom: "1px solid #1f3258" },
  feedDay: { color: "#93c5fd", fontWeight: 800 },
};
