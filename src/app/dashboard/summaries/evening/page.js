"use client";

import { useEffect, useState } from "react";

export default function EveningSummaryPage() {
  const [data, setData] = useState({ content: "Loading...", updatedAt: null });

  useEffect(() => {
    fetch("/api/summaries?name=summary", { cache: "no-store" })
      .then((r) => r.json())
      .then((d) => setData(d))
      .catch(() => setData({ content: "Failed to load evening summary." }));
  }, []);

  return (
    <main style={styles.page}>
      <h1 style={styles.title}>Evening Summary</h1>
      {data.updatedAt && <p style={styles.meta}>Updated: {new Date(data.updatedAt).toLocaleString()}</p>}
      <pre style={styles.pre}>{data.content || "No content yet."}</pre>
    </main>
  );
}

const styles = {
  page: { minHeight: "100vh", padding: "24px", background: "#f8fafc", color: "#0f172a", fontFamily: "Inter, system-ui, sans-serif" },
  title: { margin: 0, fontSize: "30px", fontWeight: 900 },
  meta: { color: "#64748b" },
  pre: { marginTop: "16px", background: "#fff", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "16px", whiteSpace: "pre-wrap", lineHeight: 1.5 },
};
