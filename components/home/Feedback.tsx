import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Feedback() {
  return (
    <Card className="mt-8 border-2 border-[#009b7d] dark:border-[#33af97]">
      <CardHeader>
        <CardTitle className="text-center">Help Us Improve</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">
          We hope you find our BRI calculator useful. As a free tool, our main goal is to provide practical value to everyone.
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>
            If you find <a href="https://bri-calculator.com/" className="text-blue-600 hover:underline">this website</a> helpful, please recommend it to others who might benefit from it.
          </li>
          <li>
            Have suggestions for improvement? Ideas for new services? Or encountered any issues while using our calculator?
          </li>
        </ul>
        <p className="mb-4">
          We'd love to hear from you! Please send your feedback to:
        </p>
        <Button asChild>
          <a href="mailto:support@bri-calculator.com">support@bri-calculator.com</a>
        </Button>
        <p className="mt-4">
          Your input is greatly appreciated and helps us continually improve our service.
        </p>
      </CardContent>
    </Card>
  )
}