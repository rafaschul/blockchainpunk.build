"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY || 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const floatingOffset = Math.min(scrollY * 0.08, 26);

  return (
    <main style={styles.page}>
      <button
        style={{
          ...styles.subscribeBtn,
          transform: `translateY(${floatingOffset}px)`,
        }}
      >
        Subscribe
      </button>

      <div style={styles.leftVisual} />
      <div style={styles.heroGlow} />

      <section style={styles.centerWrap}>
        <h1 style={styles.title}>hello world</h1>
        <p style={styles.subtitle}>
          Dear fahd and all humans all over the world. From today onwards I can
          build webpages and browser applications to the whole world, out of my
          Telegram Kite agent. by mental help by Rick 😊
        </p>
      </section>

      <section style={styles.scrollSpace}>
        <p style={styles.hint}>Scroll to see the floating subscribe button movement.</p>
      </section>
    </main>
  );
}

const styles = {
  page: {
    position: "relative",
    minHeight: "200vh",
    overflow: "hidden",
    color: "#f5f7ff",
    fontFamily: "system-ui, sans-serif",
    background:
      "radial-gradient(1200px 600px at 20% 10%, rgba(74, 124, 255, 0.28), transparent 70%), radial-gradient(1000px 500px at 80% 20%, rgba(159, 61, 255, 0.22), transparent 70%), linear-gradient(180deg, #070a17 0%, #090f25 45%, #05070f 100%)",
  },
  subscribeBtn: {
    position: "fixed",
    top: "20px",
    right: "20px",
    zIndex: 20,
    border: "1px solid rgba(170, 190, 255, 0.45)",
    borderRadius: "999px",
    padding: "10px 18px",
    color: "#e9eeff",
    fontWeight: 700,
    letterSpacing: "0.2px",
    background: "linear-gradient(135deg, rgba(76, 112, 255, 0.75), rgba(168, 77, 255, 0.75))",
    boxShadow: "0 8px 26px rgba(60, 95, 255, 0.35)",
    backdropFilter: "blur(8px)",
    cursor: "pointer",
    transition: "transform 140ms ease-out",
  },
  leftVisual: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: "42%",
    background:
      "linear-gradient(180deg, rgba(80, 130, 255, 0.22), rgba(15, 24, 52, 0.8)), linear-gradient(90deg, rgba(22, 31, 63, 0.95) 0%, rgba(22, 31, 63, 0.25) 100%)",
    clipPath: "polygon(0 0, 100% 0, 75% 100%, 0 100%)",
    boxShadow: "40px 0 120px rgba(95, 120, 255, 0.2)",
    pointerEvents: "none",
  },
  heroGlow: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(82, 141, 255, 0.10) 0%, rgba(255,255,255,0.02) 40%, rgba(139,92,246,0.12) 100%)",
    pointerEvents: "none",
  },
  centerWrap: {
    minHeight: "100vh",
    display: "grid",
    placeItems: "center",
    textAlign: "center",
    position: "relative",
    zIndex: 2,
    padding: "0 20px",
    maxWidth: "960px",
    margin: "0 auto",
  },
  title: {
    margin: 0,
    fontSize: "clamp(40px, 7vw, 84px)",
    fontWeight: 800,
    textShadow: "0 0 30px rgba(120,160,255,0.35)",
  },
  subtitle: {
    marginTop: "14px",
    fontSize: "clamp(16px, 1.8vw, 24px)",
    color: "#d7deff",
    lineHeight: 1.45,
    maxWidth: "900px",
  },
  scrollSpace: {
    height: "100vh",
    display: "grid",
    placeItems: "center",
    position: "relative",
    zIndex: 2,
  },
  hint: {
    color: "rgba(216, 224, 255, 0.85)",
    fontSize: "14px",
  },
};
