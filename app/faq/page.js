import { faq } from "@/lib/content";
import { JsonLd } from "@/components/Schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata = {
  title: "1win не открывается: что делать — ответы на частые вопросы (FAQ)",
  description: "Что делать, если 1вин не открывается, не приходит код или возникли проблемы со входом: ответы в формате FAQ. 18+"
};

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((x) => ({
      "@type": "Question",
      name: x.q,
      acceptedAnswer: { "@type": "Answer", text: x.a }
    }))
  };

  return (
    <div className="card">
      <JsonLd data={faqSchema} />
      <Breadcrumbs items={[{ href: "/", label: "Главная" }, { href: "/faq", label: "FAQ" }]} />
      <h1>FAQ</h1>
      <p className="muted">Ответы на типовые запросы: «1win не открывается», «1вин зеркало», «не приходит код», «проблемы со входом 1win» и т.п.</p>
      {faq.map((x) => (
        <div key={x.q} className="card" style={{ marginTop: 12 }}>
          <h2 style={{ marginTop: 0 }}>{x.q}</h2>
          <p className="muted" style={{ margin: 0 }}>{x.a}</p>
        </div>
      ))}
    </div>
  );
}
