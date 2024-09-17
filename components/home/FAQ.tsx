import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function FAQ() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Frequently Asked Questions (FAQ)</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>How do you calculate BRI?</AccordionTrigger>
            <AccordionContent>
              BRI is calculated using the formula: BRI = 364.2 - 365.5 * √(1 - ((WC / (2π))² / (0.5 * H)²), where WC is waist circumference and H is height, both in meters.
            </AccordionContent>
          </AccordionItem>
          {/* 添加更多 FAQ 项目 */}
        </Accordion>
      </CardContent>
    </Card>
  )
}