import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'


const Interpret = () => {
  return (
    <div>
      <Card className="mb-8 border-t-4 border-[#009b7d]">
        <CardHeader>
          <CardTitle className="text-[#009b7d] text-center">How to Interpret the Results</CardTitle>
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
    </div>
  )
}

export default Interpret