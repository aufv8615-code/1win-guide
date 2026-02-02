import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
import { PageFaq } from "@/components/PageFaq";
import { faqNeOtkryvaetsya } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata = {
  title: "1win не открывается: что делать — диагностика и быстрые решения",
  description:
    "Пошаговая диагностика, если 1win не открывается или не загружается: браузер, кэш, DNS, сеть, коды ошибок. 18+"
};

export default function Page() {
  return (
    <div className="grid grid-2">
      <div className="card">
        <Breadcrumbs items={[{ href: "/", label: "Главная" }, { href: "/ne-otkryvaetsya", label: "Не открывается" }]} />
        <h1>{site.brandName} не открывается: быстрый чек‑лист</h1>
        <p className="muted">
          Это информационная страница-диагностика. Мы не являемся «официальным сайтом» бренда. 18+
        </p>

        <h2 id="fast">1) Быстрые шаги (2 минуты)</h2>
        <ol>
          <li>Откройте любой другой сайт — убедитесь, что интернет работает.</li>
          <li>Перезапустите браузер/приложение и попробуйте ещё раз.</li>
          <li>Отключите расширения (AdBlock/антибаннеры) и режим «экономии трафика».</li>
          <li>Очистите кэш и cookies для сайта, затем перезагрузите страницу.</li>
        </ol>

        <h2 id="browser">2) Если проблема в браузере</h2>
        <ul>
          <li>Попробуйте другой браузер (Chrome/Firefox/Edge) или режим инкогнито.</li>
          <li>Обновите браузер до последней версии.</li>
          <li>Проверьте дату/время на устройстве — из-за этого иногда ломается HTTPS.</li>
        </ul>

        <h2 id="dns">3) Если ошибка похожа на DNS/сеть</h2>
        <ul>
          <li>Перезапустите роутер (выключить на 10–15 секунд).</li>
          <li>Попробуйте другую сеть (мобильный интернет вместо Wi‑Fi).</li>
          <li>Если умеете: временно смените DNS на публичный в настройках устройства/роутера.</li>
        </ul>

        <h2 id="account">4) Если страница открылась, но не получается войти</h2>
        <ul>
          <li>Перейдите на страницу <Link href="/vhod" style={{ textDecoration: "underline" }}>«Вход»</Link> и проверьте типовые ошибки.</li>
          <li>Если не приходит код — смотрите <Link href="/faq" style={{ textDecoration: "underline" }}>FAQ</Link>.</li>
        </ul>

        <h2 id="security">5) Безопасность</h2>
        <p className="muted">
          Не вводите данные на подозрительных страницах и не переходите по ссылкам из случайных чатов.
          Проверьте адресную строку и сертификат. Подробнее:{" "}
          <Link href="/bezopasnost" style={{ textDecoration: "underline" }}>как отличить фишинг</Link>.
        </p>

        <PageFaq title="FAQ: не открывается / не загружается" items={faqNeOtkryvaetsya} />
      </div>

      <div className="grid" style={{ alignContent: "start" }}>
        <CTA title="Перейти на сайт 1win" />
        <div className="card">
          <h2 style={{ marginTop: 0 }}>Полезные страницы</h2>
          <ul>
            <li><Link href="/vhod" style={{ textDecoration: "underline" }}>Вход в аккаунт</Link></li>
            <li><Link href="/bezopasnost" style={{ textDecoration: "underline" }}>Безопасность и антифишинг</Link></li>
            <li><Link href="/faq" style={{ textDecoration: "underline" }}>FAQ: коды, ошибки, доступ</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
