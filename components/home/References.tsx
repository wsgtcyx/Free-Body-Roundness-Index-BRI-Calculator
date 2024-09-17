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
          {/* 添加更多参考文献 */}
        </ol>
      </CardContent>
    </Card>
  )
}