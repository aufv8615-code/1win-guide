import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
import { site } from "@/lib/site";
import { PageFaq } from "@/components/PageFaq";
import { faqCommon } from "@/lib/content";

export const metadata = {
  title: "Регистрация: как создать аккаунт и избежать ошибок",
  description: "Пошаговая регистрация, официальное зеркало 1вин."
};

export default function Page() {
  return (
    <div className="grid grid-2">
      <div className="card">
        <Breadcrumbs items={[{ href: "/", label: "Главная" }, { href: "/registraciya", label: "Регистрация" }]} />
        <h1>Регистрация в {site.brandName}: пошагово</h1>
        <p className="muted">Эта страница объясняет общий процесс регистрации 1win и на что обратить внимание.</p>
        
        <h2 id="steps">Как зарегистрироваться</h2>
        <ol>
          <li>Перейдите на сайт партнёра и откройте регистрацию</li>
          <li>Выберите способ: телефон или email</li>
          <li>Укажите корректные данные и подтвердите контакт</li>
        </ol>

        <h2 id="tips">Советы, чтобы не ловить ошибки</h2>
        <ul>
          <li>Используйте реальный номер/почту — это поможет восстановить доступ</li>
          <li>Сохраните пароль в менеджере паролей</li>
          <li>Сразу включите 2FA, если доступно</li>
        </ul>

        <h2 id="fair">Ответственная игра</h2>
        <p className="muted">
          Устанавливайте лимиты и относитесь к игре как к развлечению. 18+
        </p>



        <PageFaq title="FAQ по регистрации" items={faqCommon} />
      </div>
      <div className="grid" style={{ alignContent: "start" }}>
        <CTA />
      </div>
    </div>
  );
}