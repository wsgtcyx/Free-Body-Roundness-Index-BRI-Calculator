import CTAButton from "@/components/home/CTAButton";

const measureWaistContent = {
  en: {
    title: "Quick Guide to Accurate Waist Measurement",
    step1: "Stand straight, feet together, and exhale naturally.",
    step2: "Locate your natural waistline: the narrowest part between your ribs and hips.",
    step3: "Measure your waist:",
    step3a: "With a tape measure: Wrap it around your waist, keeping it parallel to the floor.",
    step3b: "Without a tape measure: Use a string, mark where it meets, then measure with a ruler.",
    step4: "After a normal exhale, take the measurement without sucking in or expanding your stomach.",
    tip: "For consistency, measure in the morning before eating and wearing light clothing."
  },
  de: {
    title: "Kurzanleitung zur genauen Taillenumfangmessung",
    step1: "Stehen Sie aufrecht, Füße zusammen, und atmen Sie natürlich aus.",
    step2: "Lokalisieren Sie Ihre natürliche Taille: den schmalsten Teil zwischen Ihren Rippen und Hüften.",
    step3: "Messen Sie Ihren Taillenumfang:",
    step3a: "Mit einem Maßband: Wickeln Sie es um Ihre Taille, parallel zum Boden.",
    step3b: "Ohne Maßband: Verwenden Sie eine Schnur, markieren Sie die Stelle, wo sie sich trifft, und messen Sie dann mit einem Lineal.",
    step4: "Nehmen Sie die Messung nach einem normalen Ausatmen, ohne den Bauch einzuziehen oder auszudehnen.",
    tip: "Für Konsistenz messen Sie morgens vor dem Essen und in leichter Kleidung."
  },
  nl: {
    title: "Snelgids voor nauwkeurige taillemetingen",
    step1: "Sta rechtop, voeten bij elkaar, en adem natuurlijk uit.",
    step2: "Lokaliseer uw natuurlijke taille: het smalste deel tussen uw ribben en heupen.",
    step3: "Meet uw taille:",
    step3a: "Met een meetlint: Wikkel het om uw taille, parallel aan de vloer.",
    step3b: "Zonder meetlint: Gebruik een touwtje, markeer waar het samenkomt, en meet dan met een liniaal.",
    step4: "Na een normale uitademing, neem de meting zonder uw buik in te trekken of uit te zetten.",
    tip: "Voor consistentie, meet 's ochtends voor het eten en in lichte kleding."
  }
};

export default function MeasureWaist({ locale }: { locale: string }) {
  const content = measureWaistContent[locale as keyof typeof measureWaistContent] || measureWaistContent.en;

  return (
    <section className="w-full py-3 pt-10 mb-10 bg-gray-50 dark:bg-gray-900 border-2 border-[#009b7d] rounded-lg" id="measure-waist">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#009b7d] dark:text-[#33af97]">{content.title}</h2>
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <ol className="space-y-6">
            {[content.step1, content.step2, content.step3, content.step4].map((step, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-[#009b7d] text-white rounded-full flex items-center justify-center mr-4 text-lg font-bold">
                  {index + 1}
                </span>
                <div className="flex-grow">
                  <p className="text-lg text-gray-800 dark:text-gray-200">{step}</p>
                  {index === 2 && (
                    <ul className="mt-4 space-y-3">
                      {[content.step3a, content.step3b].map((subStep, subIndex) => (
                        <li key={subIndex} className="flex items-center">
                          <span className="w-2 h-2 bg-[#009b7d] rounded-full mr-3"></span>
                          <p className="text-gray-700 dark:text-gray-300">{subStep}</p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-8 bg-[#e6f7f5] dark:bg-[#1a2e2b] rounded-lg p-4">
            <p className="text-sm text-gray-700 dark:text-gray-300 italic">{content.tip}</p>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <CTAButton locale={locale} />
        </div>
      </div>
    </section>
  );
}