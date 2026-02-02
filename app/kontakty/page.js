import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
import { site } from "@/lib/site";
import { PageFaq } from "@/components/PageFaq";
import { faqCommon } from "@/lib/content";

export const metadata = {
  title: "Контакты и поддержка: куда обращаться",
  description: "Куда обращаться по вопросам аккаунта и как устроен этот информационный сайт. 18+"
};

export default function Page() {
  return (
    <div className="grid grid-2">
      <div className="card">
        <Breadcrumbs items={[{ href: "/", label: "Главная" }, { href: "/kontakty", label: "Контакты" }]} />
        <h1>Контакты</h1>
        <p className="muted">Здесь — пояснение, как работает сайт и куда писать по вопросам, связанным с аккаунтом.</p>
        
        <h2 id="support">Поддержка</h2>
        <p className="muted">
          Мы не являемся службой поддержки бренда. Для вопросов по аккаунту, выплатам и верификации обращайтесь
          в поддержку на стороне партнёра (через личный кабинет/чат/почту, если они доступны).
        </p>

        <h2 id="about">О сайте</h2>
        <p className="muted">
          Этот ресурс — независимый обзор и сборник инструкций. Если вы нашли ошибку в тексте — обновите страницу позже,
          требования могут меняться.
        </p>



        <PageFaq title="FAQ: поддержка и контакты" items={faqCommon} />
      </div>
      <div className="grid" style={{ alignContent: "start" }}>
        <CTA />
      </div>
    </div>
  );
}