import BRICalculator from '@/components/home/BRICalculator'
import FAQ from '@/components/home/FAQ'
import Feedback from '@/components/home/Feedback'
import References from '@/components/home/References'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">Free Body Roundness Index (BRI) Calculator</h1>
      <Badge variant="secondary" className="mx-auto mb-8">100% Free - No Registration Required</Badge>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>What is the Body Roundness Index (BRI)?</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            The Body Roundness Index (BRI) is a measure used to assess body shape
            and health risks. Our free BRI calculator combines height and waist
            circumference measurements to evaluate the "roundness" of the human
            body. BRI can help assess health risks associated with obesity at no
            cost to you.
          </p>
        </CardContent>
      </Card>

      <BRICalculator />

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Why BRI may be more accurate than BMI:</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>BRI considers waist circumference, a key indicator of abdominal fat</li>
            <li>More sensitive to changes in body shape and fat distribution</li>
            <li>Potentially better at predicting cardiovascular health risks</li>
            <li>Provides a more accurate assessment for people with high muscle mass</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>How to Interpret the Results</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Our free calculator provides your BRI value and an interpretation:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>BRI &lt; 1: Extremely lean</li>
            <li>1 ≤ BRI &lt; 2: Normal body shape</li>
            <li>2 ≤ BRI &lt; 3: Overweight</li>
            <li>BRI ≥ 3: Obese</li>
          </ul>
          <p className="mt-4">
            Please note that BRI is just one indicator of health. For a
            comprehensive understanding of your health status, it's recommended to
            consult with a healthcare professional.
          </p>
        </CardContent>
      </Card>

      <FAQ />
      <Feedback />
      <References />
    </div>
  )
}
