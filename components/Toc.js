export function Toc({ items }) {
  return (
    <div className="card">
      <h2 style={{ marginTop: 0 }}>Оглавление</h2>
      <ul>
        {items.map((i) => (
          <li key={i.id}>
            <a href={`#${i.id}`} className="muted" style={{ textDecoration: "underline" }}>
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
