import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
import { site } from "@/lib/site";
import { PageFaq } from "@/components/PageFaq";
import { faqCommon } from "@/lib/content";

export const metadata = {
  title: "Вывод средств: факторы сроков и чек-лист",
  description: "От чего зависят сроки вывода на официальном зеркале 1win? Какой актуальный сайт 1win?"
};

export default function Page() {
  return (
    <div className="grid grid-2">
      <div className="card">
        <Breadcrumbs items={[{ href: "/", label: "Главная" }, { href: "/vyvod-sredstv", label: "Вывод" }]} />
        <h1>Вывод средств: что влияет на сроки</h1>
        <p className="muted">Эта страница помогает понять, почему вывод может занимать разное время и что сделать, чтобы снизить число проблем.</p>
        
        <h2 id="time">От чего зависит срок вывода</h2>
        <ul>
          <li>Метод вывода и время обработки платежной системой</li>
          <li>Верификация аккаунта и проверки безопасности</li>
          <li>Соответствие данных профиля и документов</li>
        </ul>

        <h2 id="before">Что сделать перед запросом</h2>
        <ol>
          <li>Проверьте актуальность данных профиля</li>
          <li>Пройдите верификацию заранее (если требуется)</li>
          <li>Уточните лимиты и комиссии для выбранного метода</li>
        </ol>

        <h2 id="problems">Если возникла задержка</h2>
        <p className="muted">
          Сначала проверьте статус операции в личном кабинете, затем — обратитесь в поддержку на сайте партнёра,
          указав время, сумму и метод вывода.
        </p>



        <PageFaq title="FAQ по выводу" items={faqCommon} />
      </div>
      <div className="grid" style={{ alignContent: "start" }}>
        <CTA />
      </div>
    </div>
  );
}