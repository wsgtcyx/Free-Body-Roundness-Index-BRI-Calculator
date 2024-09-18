import BRICalculator from '@/components/home/BRICalculator';
import CTA from "@/components/home/CTA";
import FAQ from "@/components/home/FAQ";
import Feedback from '@/components/home/Feedback';
import Hero from "@/components/home/Hero";
import References from '@/components/home/References';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

        <Card className="mb-8 border-t-4 border-[#009b7d]">
          <CardHeader>
            <CardTitle className="text-[#009b7d] text-center">What is the Body Roundness Index (BRI)?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              The Body Roundness Index (BRI) is a measure used to assess body shape
              and health risks. Our free BRI calculator combines height and waist
              circumference measurements to evaluate the "roundness" of the human
              body. BRI can help assess health risks associated with obesity at no
              cost to you.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 border-t-4 border-[#009b7d]">
          <CardHeader>
            <CardTitle className="text-[#009b7d] text-center">How to Use This Calculator</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Choose units and enter height and weight.</li>
              <li>Measure and input waist circumference.</li>
              <li>Optional: Enter gender and age for personalized results.</li>
              <li>Click "Calculate BRI" to see your results.</li>
            </ol>
            <p className="mt-4">
              Remember, for the most accurate waist measurement, measure at the
              midpoint between the lower margin of the last palpable rib and the top
              of the iliac crest, typically around navel level.
            </p>
          </CardContent>
        </Card>

        <BRICalculator />

        <Card className="mb-8 border-t-4 border-[#009b7d]">
          <CardHeader>
            <CardTitle className="text-[#009b7d] text-center">Why BRI may be more accurate than BMI:</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>BRI considers waist circumference, a key indicator of abdominal fat</li>
              <li>More sensitive to changes in body shape and fat distribution</li>
              <li>Potentially better at predicting cardiovascular health risks</li>
              <li>Provides a more accurate assessment for people with high muscle mass</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8 border-t-4 border-[#009b7d]">
          <CardHeader>
            <CardTitle className="text-[#009b7d] text-center">How to Interpret the Results</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Our free calculator provides your BRI value and an interpretation:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>BRI &lt; 1: Extremely lean</li>
              <li>1 ≤ BRI &lt; 2: Normal body shape</li>
              <li>2 ≤ BRI &lt; 3: Overweight</li>
              <li>BRI ≥ 3: Obese</li>
            </ul>
            <p className="mt-4">
              Please note that BRI is just one indicator of health. For a
              comprehensive understanding of your health status, it's recommended to
              consult with a healthcare professional.
            </p>
          </CardContent>
        </Card>

        <Feedback />
        <References />
      </div>
    </>
  );
}
