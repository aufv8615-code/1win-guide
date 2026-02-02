import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
import { site } from "@/lib/site";
import { PageFaq } from "@/components/PageFaq";
import { faqVhod } from "@/lib/content";

export const metadata = {
  title: "1win: вход в аккаунт — как войти, ошибки и восстановление доступа",
  description: "Пошаговая инструкция по входу в аккаунт 1win: как войти, актуальное зеркало на сегодня 1вин."
};

export default function Page() {
  return (
    <div className="grid grid-2">
      <div className="card">
        <Breadcrumbs items={[{ href: "/", label: "Главная" }, { href: "/vhod", label: "Вход" }]} />
        <h1>{site.brandName}: как войти в аккаунт</h1>
        <p className="muted">Ниже — универсальная инструкция по запросам вроде «1win вход», «1win официальный сайт войти», «официальное зеркало 1вин», «актуальное зеркало на сегодня». Интерфейс может отличаться в зависимости от версии сайта/приложения.</p>
        
        <h2 id="steps">Пошагово</h2>
        <ol>
          <li>Откройте форму входа на стороне партнёра</li>
          <li>Введите email/телефон/логин и пароль</li>
          <li>Если включено 2FA — подтвердите код</li>
        </ol>

        <h2 id="problems">Частые проблемы</h2>
        <ul>
          <li><strong>Неверный пароль</strong> — проверьте раскладку, пробелы, используйте «Забыли пароль?»</li>
          <li><strong>Код не приходит</strong> — проверьте спам, задержки, корректность номера/почты</li>
          <li><strong>Блокировка/ограничения</strong> — решается через поддержку и проверку данных</li>
        </ul>

        <h2 id="security">Мини-чеклист безопасности</h2>
        <ul>
          <li>Уникальный пароль (не как в соцсетях)</li>
          <li>Не сообщайте коды никому</li>
          <li>Сверяйте домен перед вводом данных</li>
        </ul>



        <PageFaq title="FAQ по входу" items={faqVhod} />
      </div>
      <div className="grid" style={{ alignContent: "start" }}>
        <CTA />
      </div>
    </div>
  );
}