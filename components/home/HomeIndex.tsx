import AverageBRI from '@/components/home/AverageBRI';
import BRICalculator from '@/components/home/BRICalculator';
import CTA from "@/components/home/CTA";
import FAQ from "@/components/home/FAQ";
import Feedback from '@/components/home/Feedback';
import Hero from "@/components/home/Hero";
import HowToUse from '@/components/home/HowToUse';
import Interpret from '@/components/home/Interpret';
import References from '@/components/home/References';
import WhatIsBRI from '@/components/home/WhatIsBRI';
import WhyBRI from '@/components/home/WhyBRI';
import { defaultLocale, getDictionary } from "@/lib/i18n";

export default async function HomeIndex({ lang }: { lang: string }) {
  const langName = lang || defaultLocale;
  const dict = await getDictionary(langName);

  return (
    <>
      {/* Hero Section */}
      <Hero locale={dict.Hero} CTALocale={dict.CTAButton} />

      {/* FAQ (Frequently Asked Questions) */}
      <FAQ id="FAQ" locale={dict.FAQ} langName={langName} />

      {/* CTA (Call to Action) */}
      <CTA locale={dict.CTA} CTALocale={dict.CTAButton} />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-6 text-[#009b7d]">Free Body Roundness Index (BRI) Calculator</h1>
        <div className="flex justify-center mb-8">
          <div className="bg-[#33af97] text-center text-white px-4 py-2 rounded-full text-lg font-bold inline-block shadow-md hover:bg-[#008068] transition-colors">
            100% Free - No Registration Required
          </div>
        </div>


        <WhatIsBRI />
        <HowToUse />
        <BRICalculator />
        <WhyBRI />
        <Interpret />
        <AverageBRI />
        <Feedback />
        <References />
      </div>
    </>
  );
}
