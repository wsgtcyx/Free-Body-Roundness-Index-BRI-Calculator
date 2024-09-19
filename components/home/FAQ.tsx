import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import 'katex/dist/katex.css';
import { InlineMath } from 'react-katex';

const faqContent = {
  en: {
    title: "Frequently Asked Questions (FAQ)",
    items: [
      {
        question: "How do you calculate BRI?",
        answer: "BRI is calculated using the formula: <math>, where WC is waist circumference and H is height, both in meters."
      },
      {
        question: "Is BRI better than BMI?",
        answer: "BRI may be more accurate than BMI in assessing body shape and fat distribution. It takes into account waist circumference, which BMI doesn't consider."
      },
      {
        question: "What is the difference between BMI and BRI?",
        answer: "BMI uses only height and weight, while BRI incorporates waist circumference. This allows BRI to better account for body shape and fat distribution."
      },
      {
        question: "Is the BRI beneficial?",
        answer: "Yes, BRI can be beneficial as it provides a more comprehensive assessment of body shape and potential health risks compared to BMI alone."
      },
      {
        question: "How to measure waist for BRI?",
        answer: "Measure your waist circumference at the midpoint between the lower margin of the last palpable rib and the top of the iliac crest, usually around the navel level."
      },
      {
        question: "What are the disadvantages of BRI?",
        answer: "BRI may not be as widely recognized as BMI, and like all body measurements, it doesn't account for factors such as muscle mass or bone density."
      }
    ]
  },
  nl: {
    title: "Veelgestelde vragen (FAQ)",
    items: [
      {
        question: "Hoe bereken je BRI?",
        answer: "BRI wordt berekend met de formule: <math>, waarbij WC de tailleomtrek is en H de lengte, beide in meters."
      },
      {
        question: "Is BRI beter dan BMI?",
        answer: "BRI kan nauwkeuriger zijn dan BMI bij het beoordelen van lichaamsvorm en vetverdeling. Het houdt rekening met de tailleomtrek, wat BMI niet doet."
      },
      {
        question: "Wat is het verschil tussen BMI en BRI?",
        answer: "BMI gebruikt alleen lengte en gewicht, terwijl BRI de tailleomtrek meeneemt. Hierdoor kan BRI beter rekening houden met lichaamsvorm en vetverdeling."
      },
      {
        question: "Is de BRI nuttig?",
        answer: "Ja, BRI kan nuttig zijn omdat het een uitgebreidere beoordeling geeft van lichaamsvorm en mogelijke gezondheidsrisico's in vergelijking met alleen BMI."
      },
      {
        question: "Hoe meet je de taille voor BRI?",
        answer: "Meet je tailleomtrek op het middelpunt tussen de onderrand van de laatste voelbare rib en de bovenkant van de heupkam, meestal rond het navelniveau."
      },
      {
        question: "Wat zijn de nadelen van BRI?",
        answer: "BRI is mogelijk minder bekend dan BMI, en net als alle lichaamsmetingen houdt het geen rekening met factoren zoals spiermassa of botdichtheid."
      }
    ]
  },
  de: {
    title: "Häufig gestellte Fragen (FAQ)",
    items: [
      {
        question: "Wie berechnet man den BRI?",
        answer: "Der BRI wird mit der Formel berechnet: <math>, wobei WC der Taillenumfang und H die Körpergröße ist, beides in Metern."
      },
      {
        question: "Ist BRI besser als BMI?",
        answer: "BRI kann genauer sein als BMI bei der Beurteilung von Körperform und Fettverteilung. Es berücksichtigt den Taillenumfang, was der BMI nicht tut."
      },
      {
        question: "Was ist der Unterschied zwischen BMI und BRI?",
        answer: "BMI verwendet nur Größe und Gewicht, während BRI den Taillenumfang einbezieht. Dies ermöglicht es BRI, Körperform und Fettverteilung besser zu berücksichtigen."
      },
      {
        question: "Ist der BRI nützlich?",
        answer: "Ja, BRI kann nützlich sein, da er im Vergleich zum BMI allein eine umfassendere Bewertung der Körperform und möglicher Gesundheitsrisiken liefert."
      },
      {
        question: "Wie misst man den Taillenumfang für BRI?",
        answer: "Messen Sie Ihren Taillenumfang in der Mitte zwischen dem unteren Rand der letzten tastbaren Rippe und der Oberkante des Beckenkamms, normalerweise auf Nabelhöhe."
      },
      {
        question: "Was sind die Nachteile von BRI?",
        answer: "BRI ist möglicherweise nicht so weit verbreitet wie BMI, und wie alle Körpermessungen berücksichtigt er keine Faktoren wie Muskelmasse oder Knochendichte."
      }
    ]
  }
}

export default function FAQ({ locale }: { locale: string }) {
  const content = faqContent[locale as keyof typeof faqContent] || faqContent.en;

  return (
    <Card className="mt-10 w-full max-w-full mx-auto mb-8 border-2 border-[#009b7d] dark:border-[#33af97]">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-[#009b7d] dark:text-[#33af97]">{content.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {content.items.map((item, index) => (
          <div key={index}>
            {index > 0 && <Separator className="my-6 border-t border-[#009b7d]/50 dark:border-[#33af97]/50" />}
            <div>
              <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
              <p>
                {item.answer.includes('<math>') ? (
                  <>
                    {item.answer.split('<math>')[0]}
                    <InlineMath math="BRI = 364.2 - 365.5 \sqrt{1 - \left(\frac{WC}{2\pi}\right)^2 / (0.5H)^2}" />
                    {item.answer.split('<math>')[1]}
                  </>
                ) : (
                  item.answer
                )}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}