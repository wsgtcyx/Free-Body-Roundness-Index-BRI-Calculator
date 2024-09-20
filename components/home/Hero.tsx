"use client";
import { LineText } from "@/components/LineText";
import CTAButton from "@/components/home/CTAButton";
import Image from "next/image";

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
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10 pt-16 md:pt-24">
      <div className="flex flex-col md:flex-row items-center justify-between space-x-0 md:space-x-8">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1>
            <LineText>BRI</LineText> {title}
          </h1>
          <p className="mt-6 max-w-2xl text-2xl tracking-tight text-slate-700 dark:text-slate-400">
            {description}
          </p>
          <div className="mt-8 flex justify-center">
            <CTAButton locale={locale} />
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300 border-4 border-gray-200 dark:border-gray-700">
            <div className="relative p-6">
              <div className="absolute top-0 left-0 right-0 h-8 bg-gray-100 dark:bg-gray-700 flex items-center px-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="pt-8">
                <Image
                  src={`/images/screenshot/${locale}_light.png`}
                  alt="BRI Calculator Screenshot in light mode"
                  width={600}
                  height={800}
                  className="w-full rounded-lg shadow-lg dark:hidden"
                />
                <Image
                  src={`/images/screenshot/${locale}_dark.png`}
                  alt="BRI Calculator Screenshot in dark mode"
                  width={600}
                  height={800}
                  className="w-full rounded-lg shadow-lg hidden dark:block"
                />
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
