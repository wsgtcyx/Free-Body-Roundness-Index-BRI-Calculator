import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import 'katex/dist/katex.min.css'
import { InlineMath } from 'react-katex'

export default function FAQ() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-center">Frequently Asked Questions (FAQ)</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>How do you calculate BRI?</AccordionTrigger>
            <AccordionContent>
              BRI is calculated using the formula:
              <InlineMath math="BRI = 364.2 - 365.5 \sqrt{1 - \left(\frac{WC}{2\pi}\right)^2 / (0.5H)^2}" />
              , where WC is waist circumference and H is height, both in meters.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is BRI better than BMI?</AccordionTrigger>
            <AccordionContent>
              BRI may be more accurate than BMI in assessing body shape and fat distribution. It takes into account waist circumference, which BMI doesn't consider.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What is the difference between BMI and BRI?</AccordionTrigger>
            <AccordionContent>
              BMI uses only height and weight, while BRI incorporates waist circumference. This allows BRI to better account for body shape and fat distribution.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Is the BRI beneficial?</AccordionTrigger>
            <AccordionContent>
              Yes, BRI can be beneficial as it provides a more comprehensive assessment of body shape and potential health risks compared to BMI alone.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>How to measure waist for BRI?</AccordionTrigger>
            <AccordionContent>
              Measure your waist circumference at the midpoint between the lower margin of the last palpable rib and the top of the iliac crest, usually around the navel level.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>What are the disadvantages of BRI?</AccordionTrigger>
            <AccordionContent>
              BRI may not be as widely recognized as BMI, and like all body measurements, it doesn't account for factors such as muscle mass or bone density.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )
}