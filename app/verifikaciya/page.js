import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
import { site } from "@/lib/site";
import { PageFaq } from "@/components/PageFaq";
import { faqCommon } from "@/lib/content";

export const metadata = {
  title: "Верификация: зачем нужна и как пройти без отказа",
  description: "Причины отказа, требования к документам и советы для успешной верификации. 18+"
};

export default function Page() {
  return (
    <div className="grid grid-2">
      <div className="card">
        <Breadcrumbs items={[{ href: "/", label: "Главная" }, { href: "/verifikaciya", label: "Верификация" }]} />
        <h1>Верификация: частые причины отказа и чек-лист</h1>
        <p className="muted">Точные требования зависят от партнёра. Ниже — универсальные правила, которые чаще всего помогают пройти проверку.</p>
        
        <h2 id="why">Зачем нужна верификация</h2>
        <ul>
          <li>Защита аккаунта от мошенничества</li>
          <li>Соблюдение правил партнёра и платежных систем</li>
          <li>Ускорение решения спорных ситуаций</li>
        </ul>

        <h2 id="reasons">Частые причины отказа</h2>
        <ul>
          <li>Нечитаемое фото/скан (блики, обрезанные края)</li>
          <li>Данные профиля не совпадают с документом</li>
          <li>Просроченный документ или не тот тип документа</li>
        </ul>

        <h2 id="tips">Как повысить шанс одобрения</h2>
        <ol>
          <li>Сфотографируйте документ при хорошем освещении без бликов</li>
          <li>Проверьте совпадение ФИО/даты рождения в профиле</li>
          <li>Отправляйте только запрошенные документы</li>
        </ol>



        <PageFaq title="FAQ по верификации" items={faqCommon} />
      </div>
      <div className="grid" style={{ alignContent: "start" }}>
        <CTA />
      </div>
    </div>
  );
}