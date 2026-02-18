export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        fontFamily: "system-ui, sans-serif",
        textAlign: "center",
      }}
    >
      <div>
        <div style={{ fontSize: "48px", fontWeight: 700 }}>hello world</div>
        <div style={{ marginTop: "12px", fontSize: "24px" }}>from Rafael</div>
      </div>
    </main>
  );
}
