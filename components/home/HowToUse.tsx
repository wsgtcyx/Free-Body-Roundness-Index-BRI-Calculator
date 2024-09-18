import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'


const HowToUse = () => {
  return (
    <div>
      <Card className="mb-8 border-t-4 border-[#009b7d]">
        <CardHeader>
          <CardTitle className="text-[#009b7d] text-center">How to Use This Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Choose units and enter height and weight.</li>
            <li>Measure and input waist circumference.</li>
            <li>Optional: Enter gender and age for personalized results.</li>
            <li>Click "Calculate BRI" to see your results.</li>
          </ol>
          <p className="mt-4">
            Remember, for the most accurate waist measurement, measure at the
            midpoint between the lower margin of the last palpable rib and the top
            of the iliac crest, typically around navel level.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default HowToUse