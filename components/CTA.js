import { site } from "@/lib/site";

export function CTA({ title = "Перейти на сайт партнёра" }) {
  return (
    <div className="card">
      <h2 style={{ marginTop: 0 }}>Быстрый переход</h2>
      <p className="muted" style={{ marginTop: 0 }}>
        Нажимая кнопку, вы переходите на сайт партнёра. Условия и правила уточняйте на стороне партнёра.
      </p>
      <a className="btn" href={site.affiliateUrl} rel="sponsored nofollow noopener" target="_blank">
        {title}
      </a>
    </div>
  );
}
