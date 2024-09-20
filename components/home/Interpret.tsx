
const translations = {
  "en": {
    "title": "How to Interpret the Results",
    "intro": "Our free calculator provides your BRI value and an interpretation based on recent research:",
    "categories": [
      "BRI < 3.41: Very lean body shape (lowest 20% of the population)",
      "3.41 ≤ BRI < 4.45: Lean to average body shape (lower 20-40% of the population)",
      "4.45 ≤ BRI < 5.46: Average body shape (middle 40-60% of the population)",
      "5.46 ≤ BRI < 6.91: Above average body roundness (upper 60-80% of the population)",
      "BRI ≥ 6.91: High body roundness (top 20% of the population)"
    ],
    "understanding": "To help you understand your results:",
    "interpretations": [
      "If your BRI is below 3.41, you have a very lean body shape with a relatively small waist circumference.",
      "A BRI between 3.41 and 4.45 suggests a lean to average body shape, with a waist size smaller than most people.",
      "If your BRI falls between 4.45 and 5.46, you have an average body shape, neither particularly slim nor round.",
      "A BRI between 5.46 and 6.91 indicates above-average body roundness, with a waist circumference larger than most people.",
      "If your BRI is 6.91 or higher, you have high body roundness, which may be associated with increased health risks."
    ],
    "reminder": "Remember, BRI is just one indicator of health. For a comprehensive understanding of your health status, it's recommended to consult with a healthcare professional. They can consider other factors such as diet, exercise habits, genetics, and overall health when interpreting your BRI."
  },
  "nl": {
    "title": "Hoe de resultaten te interpreteren",
    "intro": "Onze gratis calculator geeft uw BRI-waarde en een interpretatie op basis van recent onderzoek:",
    "categories": [
      "BRI < 3,41: Zeer slanke lichaamsvorm (laagste 20% van de bevolking)",
      "3,41 ≤ BRI < 4,45: Slank tot gemiddelde lichaamsvorm (lagere 20-40% van de bevolking)",
      "4,45 ≤ BRI < 5,46: Gemiddelde lichaamsvorm (middelste 40-60% van de bevolking)",
      "5,46 ≤ BRI < 6,91: Bovengemiddelde lichaamsrondheid (bovenste 60-80% van de bevolking)",
      "BRI ≥ 6,91: Hoge lichaamsrondheid (top 20% van de bevolking)"
    ],
    "understanding": "Om u te helpen uw resultaten te begrijpen:",
    "interpretations": [
      "Als uw BRI lager is dan 3,41, heeft u een zeer slanke lichaamsvorm met een relatief kleine tailleomtrek.",
      "Een BRI tussen 3,41 en 4,45 suggereert een slanke tot gemiddelde lichaamsvorm, met een tailleomvang kleiner dan de meeste mensen.",
      "Als uw BRI tussen 4,45 en 5,46 valt, heeft u een gemiddelde lichaamsvorm, niet bijzonder slank of rond.",
      "Een BRI tussen 5,46 en 6,91 duidt op een bovengemiddelde lichaamsrondheid, met een tailleomtrek groter dan de meeste mensen.",
      "Als uw BRI 6,91 of hoger is, heeft u een hoge lichaamsrondheid, wat geassocieerd kan zijn met verhoogde gezondheidsrisico's."
    ],
    "reminder": "Onthoud dat BRI slechts één indicator van gezondheid is. Voor een uitgebreid begrip van uw gezondheidstoestand wordt aanbevolen een zorgprofessional te raadplegen. Zij kunnen andere factoren zoals dieet, bewegingsgewoonten, genetica en algehele gezondheid in overweging nemen bij het interpreteren van uw BRI."
  },
  "de": {
    "title": "Wie man die Ergebnisse interpretiert",
    "intro": "Unser kostenloser Rechner liefert Ihren BRI-Wert und eine Interpretation basierend auf aktuellen Forschungsergebnissen:",
    "categories": [
      "BRI < 3,41: Sehr schlanke Körperform (niedrigste 20% der Bevölkerung)",
      "3,41 ≤ BRI < 4,45: Schlanke bis durchschnittliche Körperform (untere 20-40% der Bevölkerung)",
      "4,45 ≤ BRI < 5,46: Durchschnittliche Körperform (mittlere 40-60% der Bevölkerung)",
      "5,46 ≤ BRI < 6,91: Überdurchschnittliche Körperrundheit (obere 60-80% der Bevölkerung)",
      "BRI ≥ 6,91: Hohe Körperrundheit (obere 20% der Bevölkerung)"
    ],
    "understanding": "Um Ihnen beim Verständnis Ihrer Ergebnisse zu helfen:",
    "interpretations": [
      "Wenn Ihr BRI unter 3,41 liegt, haben Sie eine sehr schlanke Körperform mit einem relativ kleinen Taillenumfang.",
      "Ein BRI zwischen 3,41 und 4,45 deutet auf eine schlanke bis durchschnittliche Körperform hin, mit einem Taillenumfang, der kleiner ist als bei den meisten Menschen.",
      "Wenn Ihr BRI zwischen 4,45 und 5,46 liegt, haben Sie eine durchschnittliche Körperform, weder besonders schlank noch rund.",
      "Ein BRI zwischen 5,46 und 6,91 zeigt eine überdurchschnittliche Körperrundheit an, mit einem Taillenumfang, der größer ist als bei den meisten Menschen.",
      "Wenn Ihr BRI 6,91 oder höher ist, haben Sie eine hohe Körperrundheit, die mit erhöhten Gesundheitsrisiken verbunden sein kann."
    ],
    "reminder": "Denken Sie daran, dass der BRI nur ein Indikator für die Gesundheit ist. Für ein umfassendes Verständnis Ihres Gesundheitszustands wird empfohlen, einen Gesundheitsexperten zu konsultieren. Sie können bei der Interpretation Ihres BRI andere Faktoren wie Ernährung, Bewegungsgewohnheiten, Genetik und den allgemeinen Gesundheitszustand berücksichtigen."
  }
};

interface InterpretProps {
  locale: string;
}

const Interpret: React.FC<InterpretProps> = ({ locale }) => {
  const t = translations[locale as keyof typeof translations];

  return (
    <section className="w-full py-3 pt-10 mb-10 bg-gray-50 dark:bg-gray-900 border-2 border-[#009b7d] rounded-lg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#009b7d] dark:text-[#33af97]">{t.title}</h2>
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">{t.intro}</p>
          <ul className="space-y-4 mb-6">
            {t.categories.map((category, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 w-2 h-2 mt-2 bg-[#009b7d] rounded-full mr-3"></span>
                <span className="text-gray-700 dark:text-gray-300">{category}</span>
              </li>
            ))}
          </ul>
          <p className="mb-4 text-lg font-semibold text-[#009b7d] dark:text-[#33af97]">{t.understanding}</p>
          <ul className="space-y-4 mb-6">
            {t.interpretations.map((interpretation, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 w-2 h-2 mt-2 bg-[#009b7d] rounded-full mr-3"></span>
                <p className="text-gray-700 dark:text-gray-300">{interpretation}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8 bg-[#e6f7f5] dark:bg-[#1a2e2b] rounded-lg p-4">
            <p className="text-sm text-gray-700 dark:text-gray-300 italic">
              {t.reminder}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Interpret;