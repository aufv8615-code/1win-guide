import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
import { PageFaq } from "@/components/PageFaq";
import { faqBezopasnost } from "@/lib/content";

export const metadata = {
  title: "Как найти официальный сайт 1win и войти безопасно — антифишинг",
  description: "Как найти официальный сайт 1win, проверить домен и зайти без риска: пароли, 2FA и защита от фишинга. 18+"
};

export default function Page() {
  return (
    <div className="grid grid-2">
      <div className="card">
        <Breadcrumbs items={[{ href: "/", label: "Главная" }, { href: "/bezopasnost", label: "Безопасность" }]} />
        <h1>Как найти официальный сайт 1win и войти безопасно</h1>
        <p className="muted">Собрали практичные советы: как найти официальный сайт, проверить домен и снизить риск фишинга при входе.</p>
        
        <h2 id="phishing">Как избегать фишинга</h2>
        <ul>
          <li>Сверяйте домен и HTTPS-сертификат</li>
          <li>Не вводите данные по ссылкам из сомнительных сообщений</li>
          <li>Не устанавливайте неизвестные расширения и приложения</li>
        </ul>

        <h2 id="account">Защита аккаунта</h2>
        <ul>
          <li>Уникальный пароль + менеджер паролей</li>
          <li>2FA (двухфакторная защита), если доступно</li>
          <li>Проверка устройств и активных сессий</li>
        </ul>

        <h2 id="limits">Лимиты</h2>
        <p className="muted">
          Устанавливайте лимиты на депозиты/ставки и делайте паузы. Это снижает риск импульсивных решений.
        </p>



        <PageFaq title="FAQ по безопасности" items={faqBezopasnost} />
      </div>
      <div className="grid" style={{ alignContent: "start" }}>
        <CTA />
      </div>
    </div>
  );
}