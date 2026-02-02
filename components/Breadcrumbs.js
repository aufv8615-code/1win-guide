import Link from "next/link";

export function Breadcrumbs({ items }) {
  return (
    <div className="muted" style={{ fontSize: 13, marginBottom: 12 }}>
      {items.map((it, idx) => (
        <span key={it.href}>
          {idx > 0 ? " / " : ""}
          <Link href={it.href} style={{ textDecoration: "underline" }}>{it.label}</Link>
        </span>
      ))}
    </div>
  );
}
