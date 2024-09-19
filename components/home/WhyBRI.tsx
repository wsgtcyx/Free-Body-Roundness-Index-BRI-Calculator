import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const translations = {
  en: {
    title: "Why BRI may be more accurate than BMI:",
    points: [
      "BRI considers waist circumference, a key indicator of abdominal fat",
      "More sensitive to changes in body shape and fat distribution",
      "Potentially better at predicting cardiovascular health risks",
      "Provides a more accurate assessment for people with high muscle mass"
    ]
  },
  nl: {
    title: "Waarom BRI mogelijk nauwkeuriger is dan BMI:",
    points: [
      "BRI houdt rekening met de tailleomtrek, een belangrijke indicator van buikvet",
      "Gevoeliger voor veranderingen in lichaamsvorm en vetverdeling",
      "Mogelijk beter in het voorspellen van cardiovasculaire gezondheidsrisico's",
      "Geeft een nauwkeurigere beoordeling voor mensen met een hoge spiermassa"
    ]
  },
  de: {
    title: "Warum BRI möglicherweise genauer ist als BMI:",
    points: [
      "BRI berücksichtigt den Taillenumfang, einen wichtigen Indikator für Bauchfett",
      "Empfindlicher gegenüber Veränderungen der Körperform und Fettverteilung",
      "Möglicherweise besser in der Vorhersage kardiovaskulärer Gesundheitsrisiken",
      "Bietet eine genauere Bewertung für Menschen mit hoher Muskelmasse"
    ]
  }
}

const WhyBRI = ({ locale }: { locale: string }) => {
  const content = translations[locale as keyof typeof translations] || translations.en

  return (
    <div className="w-full max-w-full">
      <Card className="mt-8 border-2 border-[#009b7d] dark:border-[#33af97] w-full max-w-full">
        <CardHeader>
          <CardTitle className="text-[#009b7d] text-center">{content.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            {content.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

export default WhyBRI