import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const translations = {
  en: {
    title: "Average BRI by Age and Gender",
    description: "Data from the study \"Body Roundness Index and All-Cause Mortality Among US Adults\" (Zhang et al.)",
    males: "Males",
    females: "Females",
    years: "years",
    footnote: "These averages can help you compare your BRI to others in your age and gender group. However, remember that individual health factors are complex and these averages should be used as a general reference only."
  },
  nl: {
    title: "Gemiddelde BRI per leeftijd en geslacht",
    description: "Gegevens uit de studie \"Body Roundness Index en totale sterfte onder Amerikaanse volwassenen\" (Zhang et al.)",
    males: "Mannen",
    females: "Vrouwen",
    years: "jaar",
    footnote: "Deze gemiddelden kunnen u helpen uw BRI te vergelijken met anderen in uw leeftijds- en geslachtsgroep. Onthoud echter dat individuele gezondheidsfactoren complex zijn en deze gemiddelden alleen als algemene referentie moeten worden gebruikt."
  },
  de: {
    title: "Durchschnittlicher BRI nach Alter und Geschlecht",
    description: "Daten aus der Studie \"Body Roundness Index und Gesamtmortalität bei US-Erwachsenen\" (Zhang et al.)",
    males: "Männer",
    females: "Frauen",
    years: "Jahre",
    footnote: "Diese Durchschnittswerte können Ihnen helfen, Ihren BRI mit anderen in Ihrer Alters- und Geschlechtsgruppe zu vergleichen. Denken Sie jedoch daran, dass individuelle Gesundheitsfaktoren komplex sind und diese Durchschnittswerte nur als allgemeine Referenz verwendet werden sollten."
  }
};

const AverageBRI = ({ locale }: { locale: string }) => {
  const t = translations[locale as keyof typeof translations] || translations.en;

  return (
    <div>
      {/* Average BRI by Age and Gender */}
      <Card className="mt-8 border-2 border-[#009b7d] dark:border-[#33af97]">
        <CardHeader>
          <CardTitle className="text-[#009b7d] dark:text-[#33af97] text-center">{t.title}</CardTitle>
          <CardDescription className="text-center dark:text-gray-300">
            {t.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#009b7d] dark:text-[#33af97]">{t.males}</h3>
              <ul className="space-y-1">
                <li className="flex items-center">
                  <span className="w-28 dark:text-gray-300">18-29 {t.years}:</span>
                  <span className="font-medium dark:text-white">2.91 ± 0.98</span>
                </li>
                <li className="flex items-center">
                  <span className="w-28 dark:text-gray-300">30-39 years:</span>
                  <span className="font-medium dark:text-white">3.54 ± 1.12</span>
                </li>
                <li className="flex items-center">
                  <span className="w-28 dark:text-gray-300">40-49 years:</span>
                  <span className="font-medium dark:text-white">3.92 ± 1.18</span>
                </li>
                <li className="flex items-center">
                  <span className="w-28 dark:text-gray-300">50-59 years:</span>
                  <span className="font-medium dark:text-white">4.21 ± 1.23</span>
                </li>
                <li className="flex items-center">
                  <span className="w-28 dark:text-gray-300">60-69 years:</span>
                  <span className="font-medium dark:text-white">4.35 ± 1.25</span>
                </li>
                <li className="flex items-center">
                  <span className="w-28 dark:text-gray-300">≥70 years:</span>
                  <span className="font-medium dark:text-white">4.31 ± 1.27</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#009b7d] dark:text-[#33af97]">{t.females}</h3>
              <ul className="space-y-1">
                <li className="flex items-center">
                  <span className="w-28 dark:text-gray-300">18-29 {t.years}:</span>
                  <span className="font-medium dark:text-white">2.61 ± 0.89</span>
                </li>
                <li className="flex items-center">
                  <span className="w-28 dark:text-gray-300">30-39 years:</span>
                  <span className="font-medium dark:text-white">3.13 ± 1.12</span>
                </li>
                <li className="flex items-center">
                  <span className="w-28 dark:text-gray-300">40-49 years:</span>
                  <span className="font-medium dark:text-white">3.67 ± 1.30</span>
                </li>
                <li className="flex items-center">
                  <span className="w-28 dark:text-gray-300">50-59 years:</span>
                  <span className="font-medium dark:text-white">4.25 ± 1.40</span>
                </li>
                <li className="flex items-center">
                  <span className="w-28 dark:text-gray-300">60-69 years:</span>
                  <span className="font-medium dark:text-white">4.61 ± 1.46</span>
                </li>
                <li className="flex items-center">
                  <span className="w-28 dark:text-gray-300">≥70 years:</span>
                  <span className="font-medium dark:text-white">4.71 ± 1.51</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
            {t.footnote}
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default AverageBRI