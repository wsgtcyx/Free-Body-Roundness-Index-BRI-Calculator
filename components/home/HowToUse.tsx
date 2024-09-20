import CTAButton from '@/components/home/CTAButton';
import MeasureButton from '@/components/home/MeasureButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';


const HowToUse = ({ locale }: { locale: string }) => {
  const translations = {
    en: {
      title: "How to Use This Calculator",
      steps: [
        "Choose units and enter height and weight.",
        "Measure and input waist circumference.",
        "Optional: Enter gender and age for personalized results.",
        "Click \"Calculate BRI\" to see your results."
      ],
    },
    de: {
      title: "Wie man diesen Rechner benutzt",
      steps: [
        "Wählen Sie Einheiten und geben Sie Größe und Gewicht ein.",
        "Messen und geben Sie den Taillenumfang ein.",
        "Optional: Geben Sie Geschlecht und Alter für personalisierte Ergebnisse ein.",
        "Klicken Sie auf \"BRI berechnen\", um Ihre Ergebnisse zu sehen."
      ],
    },
    nl: {
      title: "Hoe deze calculator te gebruiken",
      steps: [
        "Kies eenheden en voer lengte en gewicht in.",
        "Meet en voer de tailleomtrek in.",
        "Optioneel: Voer geslacht en leeftijd in voor gepersonaliseerde resultaten.",
        "Klik op \"BRI berekenen\" om uw resultaten te zien."
      ],
    }
  };

  const { title, steps, } = translations[locale as keyof typeof translations] || translations.en;

  return (
    <div>
      <Card className="w-full py-3 mb-10 bg-gray-50 border-2 border-[#009b7d] rounded-lg">
        <CardHeader>
          <CardTitle className="text-[#009b7d] dark:text-[#19a58a] text-center">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal pl-5 space-y-2">
            {steps.map((step, index) => (
              <li key={index} className="flex items-center mb-6 bg-gradient-to-r from-[#e6f7f5] to-white dark:from-[#1a2e2b] dark:to-[#1f2937] p-2 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
                <span className="flex-shrink-0 w-6 h-6 bg-[#009b7d] text-white rounded-full flex items-center justify-center mr-4 text-lg font-bold">
                  {index + 1}
                </span>
                <span className="text-gray-800 dark:text-gray-200">{step}</span>
                {index === 1 && <MeasureButton locale={locale} />}
              </li>
            ))}
          </ol>
        </CardContent>

        <div className="mb-6 flex justify-center">
          <CTAButton locale={locale} />
        </div>
      </Card>
    </div >
  )
}

export default HowToUse