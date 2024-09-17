import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Feedback() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Help Us Improve</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">
          We hope you find our BRI calculator useful. As a free tool, our main goal is to provide practical value to everyone.
        </p>
        <p className="mb-4">
          If you have any suggestions or feedback, please don't hesitate to reach out to us.
        </p>
        <Button asChild>
          <a href="mailto:support@bri-calculator.com">Send Feedback</a>
        </Button>
      </CardContent>
    </Card>
  )
}