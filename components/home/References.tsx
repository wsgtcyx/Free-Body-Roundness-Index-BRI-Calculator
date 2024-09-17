import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function References() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>References</CardTitle>
      </CardHeader>
      <CardContent>
        <ol className="list-decimal pl-5 space-y-2">
          <li>
            Thomas, D. M., et al. (2013). Relationships between body roundness with body fat and visceral adipose tissue emerging from a new geometrical model. <em>Obesity</em>, 21(11), 2264-2271.
          </li>
          <li>
            Chang, Y., et al. (2018). Body roundness index and its association with metabolic syndrome in type 2 diabetes mellitus. <em>Diabetes, Metabolic Syndrome and Obesity: Targets and Therapy</em>, 11, 827-833.
          </li>
          <li>
            Rico-Martín, S., et al. (2020). Effectiveness of body roundness index in predicting metabolic syndrome: A systematic review and meta-analysis. <em>Obesity Reviews</em>, 21(9), e13023.
          </li>
          <li>
            Perona, J. S., et al. (2019). Waist circumference and abdominal volume index are the strongest anthropometric discriminators of metabolic syndrome in Spanish adolescents. <em>European Journal of Clinical Investigation</em>, 49(3), e13060.
          </li>
        </ol>
      </CardContent>
    </Card>
  )
}