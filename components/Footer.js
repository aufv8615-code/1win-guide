import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="container">
      <div className="hr" />
      <p className="muted" style={{ margin: 0 }}>
        <strong>Дисклеймер:</strong> сайт носит информационный характер и является независимым обзором.
        Азартные игры несут риск финансовых потерь. <strong>18+</strong>
      </p>
      <p className="muted" style={{ marginTop: 10 }}>
        © {new Date().getFullYear()} · {site.domain.replace("https://", "")} ·{" "}
        <Link href="/otvetstvennaya-igra" className="badge">Ответственная игра</Link>
      </p>
    </footer>
  );
}
