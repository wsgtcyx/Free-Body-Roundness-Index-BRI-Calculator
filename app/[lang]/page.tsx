import HomeIndex from "@/components/home/HomeIndex";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const translations = {
    en: {
      title: siteConfig.name,
      description: siteConfig.description,
    },
    nl: {
      title: "Gratis Body Roundness Index (BRI) Calculator",
      description: "Gebruik onze 100% gratis Body Roundness Index (BRI) calculator om uw lichaamsvorm en gezondheidsrisico's te beoordelen. Eenvoudig te gebruiken, geen registratie vereist.",
    },
    de: {
      title: "Kostenloser Body Roundness Index (BRI) Rechner",
      description: "Nutzen Sie unseren 100% kostenlosen Body Roundness Index (BRI) Rechner, um Ihre Körperform und Gesundheitsrisiken zu bewerten. Einfach zu bedienen, keine Registrierung erforderlich.",
    },
  };

  const t = translations[lang as keyof typeof translations] || translations.en;

  return {
    title: t.title,
    description: t.description,
    openGraph: {
      ...siteConfig.openGraph,
      title: t.title,
      description: t.description,
      url: lang === 'en' ? `${siteConfig.url}/` : `${siteConfig.url}/${lang}`,
    },
    twitter: {
      ...siteConfig.twitter,
      title: t.title,
      description: t.description,
    },
    alternates: {
      canonical: lang === 'en' ? siteConfig.url : `${siteConfig.url}/${lang}`,
      languages: {
        'en': siteConfig.url,
        'nl': `${siteConfig.url}/nl`,
        'de': `${siteConfig.url}/de`,
      },
    },
  };
}

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  return <HomeIndex lang={lang} />;
}
