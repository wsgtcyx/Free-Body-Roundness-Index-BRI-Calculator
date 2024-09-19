import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const Interpret = () => {
  return (
    <div>
      <Card className="mb-8 border-t-4 border-[#009b7d]">
        <CardHeader>
          <CardTitle className="text-[#009b7d] text-center">How to Interpret the Results</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Our free calculator provides your BRI value and an interpretation based on recent research:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>BRI &lt; 3.41: Very lean body shape (lowest 20% of the population)</li>
            <li>3.41 ≤ BRI &lt; 4.45: Lean to average body shape (lower 20-40% of the population)</li>
            <li>4.45 ≤ BRI &lt; 5.46: Average body shape (middle 40-60% of the population)</li>
            <li>5.46 ≤ BRI &lt; 6.91: Above average body roundness (upper 60-80% of the population)</li>
            <li>BRI ≥ 6.91: High body roundness (top 20% of the population)</li>
          </ul>
          <p className="mt-4">To help you understand your results:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>If your BRI is below 3.41, you have a very lean body shape with a relatively small waist circumference.</li>
            <li>A BRI between 3.41 and 4.45 suggests a lean to average body shape, with a waist size smaller than most people.</li>
            <li>If your BRI falls between 4.45 and 5.46, you have an average body shape, neither particularly slim nor round.</li>
            <li>A BRI between 5.46 and 6.91 indicates above-average body roundness, with a waist circumference larger than most people.</li>
            <li>If your BRI is 6.91 or higher, you have high body roundness, which may be associated with increased health risks.</li>
          </ul>
          <p className="mt-4">
            Remember, BRI is just one indicator of health. For a comprehensive understanding of your health status, it's recommended to consult with a healthcare professional. They can consider other factors such as diet, exercise habits, genetics, and overall health when interpreting your BRI.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default Interpret