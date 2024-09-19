import BRIChart from "@/components/home/BRIChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, BarChart2, Info, ThumbsUp } from 'lucide-react';
import { FC } from 'react';

const translations = {
  "en": {
    "title": "Your Body Composition Results",
    "bri": "Body Roundness Index (BRI):",
    "healthStatus": "Health Status:",
    "bmi": "Body Mass Index (BMI):",
    "bmiCategory": "BMI Category:",
    "interpretation": "What does this mean?",
    "risksTitle": "Potential Health Risks",
    "recommendationsTitle": "Recommendations",
    "bmiComparison": "BRI vs BMI",
    "healthStatuses": {
      "veryLean": "Very lean",
      "leanToAverage": "Lean to average",
      "average": "Average",
      "aboveAverage": "Above average",
      "high": "High"
    },
    "bmiCategories": {
      "underweight": "Underweight",
      "normalWeight": "Normal weight",
      "overweight": "Overweight",
      "obese": "Obese"
    },
    "interpretations": {
      "veryLean": "Your BRI indicates that you have a very lean body shape with a relatively small waist circumference. This may pose certain health risks.",
      "leanToAverage": "Your BRI suggests a lean to average body shape, with a waist size smaller than most people.",
      "average": "Your BRI falls into the average body shape range, neither particularly slim nor round.",
      "aboveAverage": "Your BRI indicates above-average body roundness, with a waist circumference larger than most people.",
      "high": "Your BRI indicates high body roundness, which is associated with various health risks."
    },
    "ageGenderInterpretation": {
      "young": "As a {age}-year-old {gender}, maintaining a healthy lifestyle is key to preventing future health issues.",
      "old": "As a {age}-year-old {gender}, it's crucial to focus on maintaining muscle mass and bone density while managing weight."
    },
    "risks": {
      "veryLean": [
        "Increased risk of nutrient deficiencies, particularly vitamins and minerals",
        "Potential for compromised immune function",
        "Possible hormonal imbalances affecting reproductive health"
      ],
      "leanToAverage": [
        "Generally low risk for obesity-related health issues",
        "Maintain awareness of family history for potential genetic health risks"
      ],
      "average": [
        "Elevated risk of type 2 diabetes and insulin resistance",
        "Increased likelihood of developing high blood pressure",
        "Higher risk of sleep apnea and breathing problems"
      ],
      "high": [
        "Significantly increased risk of cardiovascular diseases, including heart attack and stroke",
        "Higher likelihood of developing certain cancers, such as colon and breast cancer",
        "Increased risk of osteoarthritis and joint problems due to excess weight"
      ]
    },
    "recommendations": {
      "veryLean": [
        "Consult with a registered dietitian to ensure adequate nutrient intake",
        "Gradually increase calorie intake with nutrient-dense foods",
        "Consider strength training to build muscle mass"
      ],
      "leanToAverage": [
        "Maintain a balanced diet rich in fruits, vegetables, lean proteins, and whole grains",
        "Engage in regular physical activity, aiming for at least 150 minutes of moderate exercise per week",
        "Schedule regular health check-ups to monitor overall health"
      ],
      "average": [
        "Aim to reduce daily calorie intake by 500 calories through healthier food choices",
        "Increase physical activity, targeting 30 minutes of moderate exercise most days of the week",
        "Consider consulting a nutritionist for a personalized meal plan"
      ],
      "high": [
        "Consult with a healthcare professional to develop a comprehensive weight loss plan",
        "Start with small, achievable goals like reducing portion sizes and eliminating sugary drinks",
        "Incorporate both cardio and strength training exercises, starting with low-impact activities",
        "Consider joining a support group or working with a health coach for motivation and accountability"
      ]
    },
    "bmiComparisonText": "While BMI ({bmi}) is widely used, BRI ({bri}) provides a more comprehensive assessment by considering your body shape and waist circumference, offering a more nuanced view of your body composition and potential health risks."
  },
  "nl": {
    "title": "Uw lichaamscompositieresultaten",
    "bri": "Body Roundness Index (BRI):",
    "healthStatus": "Gezondheidsstatus:",
    "bmi": "Body Mass Index (BMI):",
    "bmiCategory": "BMI-categorie:",
    "interpretation": "Wat betekent dit?",
    "risksTitle": "Potentiële gezondheidsrisico's",
    "recommendationsTitle": "Aanbevelingen",
    "bmiComparison": "BRI vs BMI",
    "healthStatuses": {
      "veryLean": "Zeer slank",
      "leanToAverage": "Slank tot gemiddeld",
      "average": "Gemiddeld",
      "aboveAverage": "Bovengemiddeld",
      "high": "Hoog"
    },
    "bmiCategories": {
      "underweight": "Ondergewicht",
      "normalWeight": "Normaal gewicht",
      "overweight": "Overgewicht",
      "obese": "Obesitas"
    },
    "interpretations": {
      "veryLean": "Uw BRI geeft aan dat u een zeer slanke lichaamsvorm heeft met een relatief kleine tailleomtrek. Dit kan bepaalde gezondheidsrisico's met zich meebrengen.",
      "leanToAverage": "Uw BRI suggereert een slanke tot gemiddelde lichaamsvorm, met een tailleomvang kleiner dan de meeste mensen.",
      "average": "Uw BRI valt in het gemiddelde lichaamsvormgebied, niet bijzonder slank of rond.",
      "aboveAverage": "Uw BRI geeft een bovengemiddelde lichaamsrondheid aan, met een tailleomtrek groter dan de meeste mensen.",
      "high": "Uw BRI geeft een hoge lichaamsrondheid aan, wat geassocieerd wordt met verschillende gezondheidsrisico's."
    },
    "ageGenderInterpretation": {
      "young": "Als {age}-jarige {gender} is het behouden van een gezonde levensstijl essentieel om toekomstige gezondheidsproblemen te voorkomen.",
      "old": "Als {age}-jarige {gender} is het cruciaal om te focussen op het behoud van spiermassa en botdichtheid terwijl u uw gewicht beheert."
    },
    "risks": {
      "veryLean": [
        "Verhoogd risico op voedingstekorten, vooral vitaminen en mineralen",
        "Mogelijke verzwakking van de immuunfunctie",
        "Mogelijke hormonale disbalans die de voortplantingsgezondheid beïnvloedt"
      ],
      "leanToAverage": [
        "Over het algemeen laag risico op obesitas-gerelateerde gezondheidsproblemen",
        "Blijf bewust van familiegeschiedenis voor potentiële genetische gezondheidsrisico's"
      ],
      "average": [
        "Verhoogd risico op type 2 diabetes en insulineresistentie",
        "Verhoogde kans op het ontwikkelen van hoge bloeddruk",
        "Hoger risico op slaapapneu en ademhalingsproblemen"
      ],
      "high": [
        "Aanzienlijk verhoogd risico op hart- en vaatziekten, waaronder hartaanval en beroerte",
        "Hogere kans op het ontwikkelen van bepaalde kankers, zoals darm- en borstkanker",
        "Verhoogd risico op artrose en gewrichtsproblemen door overgewicht"
      ]
    },
    "recommendations": {
      "veryLean": [
        "Raadpleeg een geregistreerde diëtist om voldoende inname van voedingsstoffen te garanderen",
        "Verhoog geleidelijk de calorie-inname met voedingsmiddelen rijk aan voedingsstoffen",
        "Overweeg krachttraining om spiermassa op te bouwen"
      ],
      "leanToAverage": [
        "Handhaaf een evenwichtig dieet rijk aan fruit, groenten, magere eiwitten en volkoren granen",
        "Doe regelmatig aan lichaamsbeweging, streef naar ten minste 150 minuten matige inspanning per week",
        "Plan regelmatige gezondheidscontroles om uw algehele gezondheid te monitoren"
      ],
      "average": [
        "Probeer de dagelijkse calorie-inname met 500 calorieën te verminderen door gezondere voedselkeuzes",
        "Verhoog de lichaamsbeweging, richt op 30 minuten matige inspanning op de meeste dagen van de week",
        "Overweeg een voedingsdeskundige te raadplegen voor een gepersonaliseerd voedingsplan"
      ],
      "high": [
        "Raadpleeg een zorgprofessional om een uitgebreid gewichtsverliesplan te ontwikkelen",
        "Begin met kleine, haalbare doelen zoals het verkleinen van porties en het elimineren van suikerhoudende dranken",
        "Integreer zowel cardio als krachttraining, begin met activiteiten met lage impact",
        "Overweeg om lid te worden van een ondersteuningsgroep of werk samen met een gezondheidscoach voor motivatie en verantwoording"
      ]
    },
    "bmiComparisonText": "Hoewel BMI ({bmi}) veel wordt gebruikt, biedt BRI ({bri}) een uitgebreidere beoordeling door rekening te houden met uw lichaamsvorm en tailleomtrek, wat een genuanceerder beeld geeft van uw lichaamssamenstelling en potentiële gezondheidsrisico's."
  },
  "de": {
    "title": "Ihre Körperzusammensetzungsergebnisse",
    "bri": "Körperrundheitsindex (BRI):",
    "healthStatus": "Gesundheitszustand:",
    "bmi": "Body-Mass-Index (BMI):",
    "bmiCategory": "BMI-Kategorie:",
    "interpretation": "Was bedeutet das?",
    "risksTitle": "Potenzielle Gesundheitsrisiken",
    "recommendationsTitle": "Empfehlungen",
    "bmiComparison": "BRI vs BMI",
    "healthStatuses": {
      "veryLean": "Sehr schlank",
      "leanToAverage": "Schlank bis durchschnittlich",
      "average": "Durchschnittlich",
      "aboveAverage": "Überdurchschnittlich",
      "high": "Hoch"
    },
    "bmiCategories": {
      "underweight": "Untergewicht",
      "normalWeight": "Normalgewicht",
      "overweight": "Übergewicht",
      "obese": "Adipositas"
    },
    "interpretations": {
      "veryLean": "Ihr BRI zeigt, dass Sie eine sehr schlanke Körperform mit einem relativ kleinen Taillenumfang haben. Dies kann bestimmte Gesundheitsrisiken bergen.",
      "leanToAverage": "Ihr BRI deutet auf eine schlanke bis durchschnittliche Körperform hin, mit einem Taillenumfang, der kleiner ist als bei den meisten Menschen.",
      "average": "Ihr BRI fällt in den durchschnittlichen Körperformbereich, weder besonders schlank noch rund.",
      "aboveAverage": "Ihr BRI zeigt eine überdurchschnittliche Körperrundheit an, mit einem Taillenumfang, der größer ist als bei den meisten Menschen.",
      "high": "Ihr BRI zeigt eine hohe Körperrundheit an, die mit verschiedenen Gesundheitsrisiken verbunden ist."
    },
    "ageGenderInterpretation": {
      "young": "Als {age}-jährige(r) {gender} ist die Aufrechterhaltung eines gesunden Lebensstils der Schlüssel zur Vorbeugung zukünftiger Gesundheitsprobleme.",
      "old": "Als {age}-jährige(r) {gender} ist es entscheidend, sich auf den Erhalt von Muskelmasse und Knochendichte zu konzentrieren, während Sie Ihr Gewicht managen."
    },
    "risks": {
      "veryLean": [
        "Erhöhtes Risiko für Nährstoffmängel, insbesondere Vitamine und Mineralstoffe",
        "Mögliche Beeinträchtigung der Immunfunktion",
        "Mögliche hormonelle Ungleichgewichte, die die reproduktive Gesundheit beeinflussen"
      ],
      "leanToAverage": [
        "Generell geringes Risiko für adipositasbedingte Gesundheitsprobleme",
        "Bleiben Sie sich der Familiengeschichte für potenzielle genetische Gesundheitsrisiken bewusst"
      ],
      "average": [
        "Erhöhtes Risiko für Typ-2-Diabetes und Insulinresistenz",
        "Erhöhte Wahrscheinlichkeit, Bluthochdruck zu entwickeln",
        "Höheres Risiko für Schlafapnoe und Atemprobleme"
      ],
      "high": [
        "Deutlich erhöhtes Risiko für Herz-Kreislauf-Erkrankungen, einschließlich Herzinfarkt und Schlaganfall",
        "Höhere Wahrscheinlichkeit, bestimmte Krebsarten wie Darm- und Brustkrebs zu entwickeln",
        "Erhöhtes Risiko für Arthrose und Gelenkprobleme aufgrund von Übergewicht"
      ]
    },
    "recommendations": {
      "veryLean": [
        "Konsultieren Sie einen registrierten Ernährungsberater, um eine ausreichende Nährstoffaufnahme sicherzustellen",
        "Erhöhen Sie schrittweise die Kalorienaufnahme mit nährstoffreichen Lebensmitteln",
        "Erwägen Sie Krafttraining zum Aufbau von Muskelmasse"
      ],
      "leanToAverage": [
        "Halten Sie eine ausgewogene Ernährung reich an Obst, Gemüse, mageren Proteinen und Vollkornprodukten",
        "Betreiben Sie regelmäßig körperliche Aktivität, streben Sie mindestens 150 Minuten moderate Bewegung pro Woche an",
        "Planen Sie regelmäßige Gesundheitsuntersuchungen, um Ihre allgemeine Gesundheit zu überwachen"
      ],
      "average": [
        "Versuchen Sie, die tägliche Kalorienaufnahme durch gesündere Lebensmittelauswahl um 500 Kalorien zu reduzieren",
        "Erhöhen Sie die körperliche Aktivität, zielen Sie auf 30 Minuten moderate Bewegung an den meisten Tagen der Woche",
        "Erwägen Sie die Konsultation eines Ernährungsberaters für einen personalisierten Ernährungsplan"
      ],
      "high": [
        "Konsultieren Sie einen Gesundheitsexperten, um einen umfassenden Gewichtsverlustplan zu entwickeln",
        "Beginnen Sie mit kleinen, erreichbaren Zielen wie der Reduzierung von Portionsgrößen und dem Verzicht auf zuckerhaltige Getränke",
        "Integrieren Sie sowohl Cardio- als auch Krafttraining, beginnen Sie mit Aktivitäten mit geringer Belastung",
        "Erwägen Sie, einer Unterstützungsgruppe beizutreten oder mit einem Gesundheitscoach für Motivation und Verantwortlichkeit zusammenzuarbeiten"
      ]
    },
    "bmiComparisonText": "Während der BMI ({bmi}) weit verbreitet ist, bietet der BRI ({bri}) eine umfassendere Bewertung, indem er Ihre Körperform und den Taillenumfang berücksichtigt und so einen nuancierteren Blick auf Ihre Körperzusammensetzung und potenzielle Gesundheitsrisiken ermöglicht."
  }
};

interface BRIResultProps {
  bri: number;
  bmi: number;
  gender?: string;
  age?: string;
  locale: string;
}

export const BRIResult: FC<BRIResultProps> = ({ locale, bri, bmi, gender, age }) => {
  const t = translations[locale as keyof typeof translations];
  const healthStatus = getHealthStatus(bri, t);
  const interpretation = getBRIInterpretation(bri, gender, age, t);
  const risks = getHealthRisks(bri, t);
  const recommendations = getRecommendations(bri, t);
  const bmiCategory = getBMICategory(bmi, t);

  return (
    <div className="space-y-6 mt-6">
      <Card className="bg-gradient-to-r from-primary/10 to-primary/5">
        <CardHeader>
          <CardTitle className="text-primary">{t.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div>
                <span className="text-lg">{t.bri}</span>
                <span className="text-2xl font-bold text-primary ml-2">{bri.toFixed(2)}</span>
              </div>
              <div>
                <span className="text-lg">{t.healthStatus}</span>
                <span className={`text-xl font-semibold ml-2 ${getHealthStatusColor(bri)}`}>{healthStatus}</span>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <span className="text-lg">{t.bmi}</span>
                <span className="text-2xl font-bold text-primary ml-2">{bmi.toFixed(2)}</span>
              </div>
              <div>
                <span className="text-lg">{t.bmiCategory}</span>
                <span className={`text-xl font-semibold ml-2 ${getBMICategoryColor(bmi)}`}>{bmiCategory}</span>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <BRIChart bri={bri} locale={locale} />
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-blue-50 dark:bg-blue-900">
          <CardHeader className="p-4">
            <CardTitle className="flex items-center text-blue-600 dark:text-blue-300">
              <Info className="mr-2 h-5 w-5" />
              {t.interpretation}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <p className="text-gray-800 dark:text-gray-200">{interpretation}</p>
          </CardContent>
        </Card>

        <Card className="bg-yellow-50 dark:bg-yellow-900">
          <CardHeader className="p-4">
            <CardTitle className="flex items-center text-yellow-600 dark:text-yellow-300">
              <AlertTriangle className="mr-2 h-5 w-5" />
              {t.risksTitle}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <ul className="list-disc pl-5 space-y-1 text-gray-800 dark:text-gray-200">
              {risks.map((risk, index) => <li key={index}>{risk}</li>)}
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-green-50 dark:bg-green-900">
          <CardHeader className="p-4">
            <CardTitle className="flex items-center text-green-600 dark:text-green-300">
              <ThumbsUp className="mr-2 h-5 w-5" />
              {t.recommendationsTitle}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <ul className="list-disc pl-5 space-y-1 text-gray-800 dark:text-gray-200">
              {recommendations.map((recommendation, index) => <li key={index}>{recommendation}</li>)}
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-purple-50 dark:bg-purple-900">
          <CardHeader className="p-4">
            <CardTitle className="flex items-center text-purple-600 dark:text-purple-300">
              <BarChart2 className="mr-2 h-5 w-5" />
              {t.bmiComparison}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <p className="text-gray-800 dark:text-gray-200">{getBMIComparison(bmi, bri, t)}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

function getHealthStatusColor(bri: number): string {
  if (bri < 3.41) return "text-teal-500";
  if (bri < 4.45) return "text-blue-500";
  if (bri < 5.46) return "text-yellow-500";
  if (bri < 6.91) return "text-red-500";
  return "text-red-700";
}

function getHealthStatus(bri: number, t: any): string {
  if (bri < 3.41) return t.healthStatuses.veryLean;
  if (bri < 4.45) return t.healthStatuses.leanToAverage;
  if (bri < 5.46) return t.healthStatuses.average;
  if (bri < 6.91) return t.healthStatuses.aboveAverage;
  return t.healthStatuses.high;
}

function getBRIInterpretation(bri: number, gender?: string, age?: string, t: any): string {
  let interpretation = "";
  if (bri < 3.41) {
    interpretation = t.interpretations.veryLean;
  } else if (bri < 4.45) {
    interpretation = t.interpretations.leanToAverage;
  } else if (bri < 5.46) {
    interpretation = t.interpretations.average;
  } else if (bri < 6.91) {
    interpretation = t.interpretations.aboveAverage;
  } else {
    interpretation = t.interpretations.high;
  }

  if (age && gender) {
    const ageNum = parseInt(age);
    const ageGenderText = ageNum > 65 ? t.ageGenderInterpretation.old : t.ageGenderInterpretation.young;
    interpretation += ' ' + ageGenderText.replace('{age}', age).replace('{gender}', gender.toLowerCase());
  }

  return interpretation;
}

function getHealthRisks(bri: number, t: any): string[] {
  if (bri < 3.41) return t.risks.veryLean;
  if (bri < 4.45) return t.risks.leanToAverage;
  if (bri < 5.46) return t.risks.average;
  return t.risks.high;
}

function getRecommendations(bri: number, t: any): string[] {
  if (bri < 3.41) return t.recommendations.veryLean;
  if (bri < 4.45) return t.recommendations.leanToAverage;
  if (bri < 5.46) return t.recommendations.average;
  return t.recommendations.high;
}

function getBMICategory(bmi: number, t: any): string {
  if (bmi < 18.5) return t.bmiCategories.underweight;
  if (bmi < 25) return t.bmiCategories.normalWeight;
  if (bmi < 30) return t.bmiCategories.overweight;
  return t.bmiCategories.obese;
}

function getBMICategoryColor(bmi: number): string {
  if (bmi < 18.5) return "text-blue-500";
  if (bmi < 25) return "text-green-500";
  if (bmi < 30) return "text-yellow-500";
  return "text-red-500";
}

function getBMIComparison(bmi: number, bri: number, t: any): string {
  return t.bmiComparisonText.replace('{bmi}', bmi.toFixed(2)).replace('{bri}', bri.toFixed(2));
}