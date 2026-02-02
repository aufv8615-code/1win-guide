import { site } from "@/lib/site";

const routes = [
  "/ne-otkryvaetsya",
  "",
  "/vhod",
  "/registraciya",
  "/bonusy",
  "/vyvod-sredstv",
  "/verifikaciya",
  "/bezopasnost",
  "/kontakty",
  "/faq",
  "/otvetstvennaya-igra"
];

export default function sitemap() {
  const now = new Date();
  return routes.map((path) => ({
    url: `${site.domain}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7
  }));
}
