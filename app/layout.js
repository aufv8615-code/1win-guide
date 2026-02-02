import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";
import { OrganizationSchema } from "@/components/Schema";

export const metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: `${site.brandName} — независимый обзор: вход (как войти), регистрация, бонусы, FAQ`,
    template: `%s · ${site.brandName} обзор`
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.domain,
    title: `${site.brandName} — независимый обзор`,
    description: site.description
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <OrganizationSchema />
        <Header />
        <main className="container" style={{ paddingTop: 0 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
