import Link from "next/link";
import { nav } from "@/lib/content";
import { site } from "@/lib/site";

export function Header() {
  return (
    <header className="container" style={{ paddingBottom: 8 }}>
      <div style={{ display: "flex", gap: 12, alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ fontWeight: 900, letterSpacing: "-0.02em" }}>
          {site.brandName} · обзор
        </Link>
        <nav style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "flex-end" }}>
          {nav.map((i) => (
            <Link key={i.href} href={i.href} className="badge">
              {i.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mobileCtaTop">
        <a className="btn" href={site.affiliateUrl} rel="sponsored nofollow noopener" target="_blank">
          Перейти на сайт 1win
        </a>
      </div>

      <div className="hr" />
    </header>
  );
}
