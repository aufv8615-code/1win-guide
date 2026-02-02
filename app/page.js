import Link from "next/link";
import { site } from "@/lib/site";
import { CTA } from "@/components/CTA";
import { Toc } from "@/components/Toc";

export default function HomePage() {
  const toc = [
    { id: "what", label: "Что это за сайт" },
    { id: "login", label: "Вход и доступ" },
    { id: "bonus", label: "Бонусы и условия" },
    { id: "payments", label: "Пополнение и вывод" },
    { id: "safety", label: "Безопасность" },
    { id: "faq", label: "FAQ" }
  ];

  return (
    <div className="grid grid-2">
      <div className="card">
        <span className="badge">RU · независимый обзор · 18+</span>
        <h1 style={{ marginTop: 10 }}>
          {site.brandName}: вход, регистрация, бонусы и справка по аккаунту
        </h1>
        <p className="muted">
          Это информационный сайт-обзор. Мы не являемся официальным сайтом бренда и не представляем службу поддержки.
        </p>

        <div id="what">
          <h2>Что здесь есть</h2>
          <ul>
            <li>Пошаговые инструкции: вход, регистрация, восстановление доступа</li>
            <li>Разбор типовых вопросов: бонусы, верификация, выплаты</li>
            <li>Рекомендации по безопасности и ответственная игра</li>
          </ul>
        </div>

        <div id="login">
          <h2>Быстрый старт</h2>
          <ul>
            <li><Link href="/vhod" style={{ textDecoration: "underline" }}>Как войти в аккаунт</Link></li>
            <li><Link href="/registraciya" style={{ textDecoration: "underline" }}>Как зарегистрироваться</Link></li>
            <li><Link href="/ne-otkryvaetsya" style={{ textDecoration: "underline" }}>Если не открывается: диагностика</Link></li>
            <li><Link href="/faq" style={{ textDecoration: "underline" }}>Частые проблемы и решения</Link></li>
          </ul>
        </div>

        <div id="bonus">
          <h2>Бонусы и условия</h2>
          <p className="muted">
            Условия бонусов могут меняться. Перед активацией внимательно читайте требования по отыгрышу и срокам.
          </p>
          <Link href="/bonusy" className="badge">Перейти к разбору бонусов</Link>
        </div>

        <div id="payments">
          <h2>Платежи</h2>
          <p className="muted">
            Сроки зависят от метода и проверок. Верификация часто ускоряет решение спорных ситуаций.
          </p>
          <Link href="/vyvod-sredstv" className="badge">Гайд по выводу</Link>
        </div>

        <div id="safety">
          <h2>Безопасность</h2>
          <ul>
            <li>Уникальный пароль + 2FA (если доступно)</li>
            <li>Не переходить по подозрительным ссылкам</li>
            <li>Сверять домен и сертификат</li>
          </ul>
          <Link href="/bezopasnost" className="badge">Подробнее</Link>
        </div>

        <div id="faq">
          <h2>FAQ</h2>
          <p className="muted">
            Ответы на вопросы про доступ, бонусы, верификацию и поддержку.
          </p>
          <Link href="/faq" className="badge">Открыть FAQ</Link>
        </div>
      </div>

      <div className="grid" style={{ alignContent: "start" }}>
        <Toc items={toc} />
        <CTA />
        <div className="card">
          <h2 style={{ marginTop: 0 }}>Важно</h2>
          <p className="muted" style={{ marginTop: 0 }}>
            Мы не даём гарантий выигрыша и не принимаем платежи. Это справочный ресурс.
          </p>
        </div>
      </div>
    </div>
  );
}
