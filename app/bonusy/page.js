import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
import { site } from "@/lib/site";
import { PageFaq } from "@/components/PageFaq";
import { faqBonusy } from "@/lib/content";

export const metadata = {
  title: "1win крипто казино: бонусы и промокод POISK600 — условия",
  description: "Разбор бонусов в 1win (крипто казино): как читать правила, вейджер, сроки, лимиты и как применять промокод POISK600. 18+"
};

export default function Page() {
  return (
    <div className="grid grid-2">
      <div className="card">
        <Breadcrumbs items={[{ href: "/", label: "Главная" }, { href: "/bonusy", label: "Бонусы" }]} />
        <h1>Бонусы в {site.brandName}: разбор условий</h1>
        <p className="muted">Условия бонусов зависят от партнёра и могут меняться. Ниже — универсальные принципы и чек-лист.</p>
        
        <h2 id="rules">Как читать условия бонусов</h2>
        <ul>
          <li><strong>Вейджер</strong>: сколько раз нужно отыграть бонус/депозит</li>
          <li><strong>Срок действия</strong>: время, за которое нужно выполнить условия</li>
          <li><strong>Лимиты</strong>: максимальная ставка/вывод по бонусу</li>
          <li><strong>Исключения</strong>: не все игры/события учитываются в отыгрыше</li>
        </ul>

        <h2 id="checklist">Чек-лист перед активацией</h2>
        <ol>
          <li>Откройте правила бонуса на стороне партнёра</li>
          <li>Проверьте вейджер и срок</li>
          <li>Уточните ограничения по играм/ставкам</li>
        </ol>


        <h2 id="crypto">Акцент: крипто казино и платежи</h2>
        <p className="muted">
          {site.brandName} часто используют как <strong>крипто казино</strong>: пополнение и вывод могут быть доступны в криптовалютах (например, USDT и др.).
          Условия зависят от партнёра, поэтому перед депозитом проверьте комиссии, минимальные суммы и скорость обработки.
        </p>
        <ul>
          <li><strong>Проверяйте сеть</strong> (TRC20/ERC20 и т.п.) — ошибка сети может привести к потере средств.</li>
          <li><strong>Сверяйте адрес</strong> и делайте тестовый перевод на небольшую сумму.</li>
          <li><strong>Сохраняйте хэши транзакций</strong> — это помогает поддержке быстрее разбирать кейсы.</li>
        </ul>

        <h2 id="promo">Промокод POISK600</h2>
        <div className="card" style={{ marginTop: 12 }}>
          <p style={{ margin: 0 }}>
            <strong>Промокод:</strong> <span className="badge">POISK600</span>
          </p>
          <p className="muted" style={{ marginTop: 10, marginBottom: 0 }}>
            Если промокод активен у партнёра, он может открыть/усилить приветственный бонус (вплоть до пакета «до 600%» — зависит от текущих правил).
            Мы рекомендуем использовать именно <strong>POISK600</strong>, потому что это универсальный код для новых пользователей, который обычно подходит под «поисковый» трафик:
            вводится один раз при регистрации/первом депозите и помогает корректно привязать бонус к аккаунту.
          </p>
        </div>
        <p className="muted" style={{ marginTop: 10 }}>
          Важно: точный размер бонуса, лимиты, вейджер и сроки всегда смотрите на стороне партнёра — условия могут меняться.
        </p>

        <p className="muted">
          Мы не обещаем результат и не даём гарантий выигрыша. Игра связана с риском финансовых потерь. 18+
        </p>



        <PageFaq title="FAQ по бонусам" items={faqBonusy} />
      </div>
      <div className="grid" style={{ alignContent: "start" }}>
        <CTA />
      </div>
    </div>
  );
}