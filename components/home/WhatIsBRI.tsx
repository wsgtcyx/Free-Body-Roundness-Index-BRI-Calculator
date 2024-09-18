import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const WhatIsBRI = ({ locale }: { locale: string }) => {
  const translations = {
    en: {
      title: "What is the Body Roundness Index (BRI)?",
      content: "The Body Roundness Index (BRI) is a measure used to assess body shape and health risks. Our free BRI calculator combines height and waist circumference measurements to evaluate the \"roundness\" of the human body. BRI can help assess health risks associated with obesity at no cost to you."
    },
    de: {
      title: "Was ist der Body Roundness Index (BRI)?",
      content: "Der Body Roundness Index (BRI) ist ein Maß zur Beurteilung der Körperform und gesundheitlicher Risiken. Unser kostenloser BRI-Rechner kombiniert Größe und Taillenumfang, um die \"Rundheit\" des menschlichen Körpers zu bewerten. Der BRI kann Ihnen helfen, gesundheitliche Risiken im Zusammenhang mit Fettleibigkeit kostenlos einzuschätzen."
    },
    nl: {
      title: "Wat is de Body Roundness Index (BRI)?",
      content: "De Body Roundness Index (BRI) is een maatstaf om lichaamsvorm en gezondheidsrisico's te beoordelen. Onze gratis BRI-calculator combineert lengte en tailleomtrek om de \"rondheid\" van het menselijk lichaam te evalueren. BRI kan helpen bij het beoordelen van gezondheidsrisico's geassocieerd met obesitas, zonder kosten voor u."
    }
  };

  const { title, content } = translations[locale as keyof typeof translations] || translations.en;
  return (
    <div>
      <Card className="mt-10 mb-10 border-t-4 border-[#009b7d]">
        <CardHeader>
          <CardTitle className="text-[#009b7d] dark:text-[#19a58a] text-center">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{content}</p>
        </CardContent>
      </Card>
    </div>
  )
}

export default WhatIsBRI