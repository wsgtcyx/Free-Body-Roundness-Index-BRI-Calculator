import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'


const WhyBRI = () => {
  return (
    <div>
      <Card className="mb-8 border-t-4 border-[#009b7d]">
        <CardHeader>
          <CardTitle className="text-[#009b7d] text-center">Why BRI may be more accurate than BMI:</CardTitle>
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
    </div>
  )
}

export default WhyBRI