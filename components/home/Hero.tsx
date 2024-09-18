"use client";
import { LineText } from "@/components/LineText";
import CTAButton from "@/components/home/CTAButton";

const Hero = ({ locale }: { locale: string }) => {
  const translations = {
    en: {
      title: "Calculator",
      description: "Calculate your Body Roundness Index (BRI) instantly. Free, Fast, and Revealing."
    },
    nl: {
      title: "Berekenen",
      description: "Bereken uw Body Roundness Index (BRI) onmiddellijk. Gratis, Snel en Onthullend."
    },
    de: {
      title: "Rechner",
      description: "Berechnen Sie Ihren Body Roundness Index (BRI) sofort. Kostenlos, Schnell und Aufschlussreich."
    }
  };

  const { title, description } = translations[locale as keyof typeof translations] || translations.en;

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10 pt-16 md:pt-24 text-center">
        <h1>
          <LineText>BRI</LineText> {title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-2xl tracking-tight text-slate-700 dark:text-slate-400">
          {description}
        </p>
      </section>
      <CTAButton locale={locale}></CTAButton>
    </>
  );
};

export default Hero;
