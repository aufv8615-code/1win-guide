export function PageFaq({ title = "FAQ по странице", items = [] }) {
  if (!items?.length) return null;

  return (
    <div className="card" style={{ marginTop: 16 }}>
      <h2 style={{ marginTop: 0 }}>{title}</h2>
      {items.map((x) => (
        <div key={x.q} className="card" style={{ marginTop: 12 }}>
          <h3 style={{ marginTop: 0 }}>{x.q}</h3>
          <p className="muted" style={{ margin: 0 }}>{x.a}</p>
        </div>
      ))}
    </div>
  );
}
