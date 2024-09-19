import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const locales = {
  en: {
    title: "Your Feedback Matters",
    description: "Help us improve the BRI Calculator. Your opinion is valuable to us.",
    satisfiedButton: "Support Us with a Coffee",
    feedbackButton: "Send Feedback",
  },
  de: {
    title: "Ihr Feedback ist wichtig",
    description: "Helfen Sie uns, den BRI-Rechner zu verbessern. Ihre Meinung ist uns wertvoll.",
    satisfiedButton: "Unterstützen Sie uns mit einem Kaffee",
    feedbackButton: "Feedback senden",
  },
  nl: {
    title: "Uw feedback is belangrijk",
    description: "Help ons het BRI-rekenmachine te verbeteren. Uw mening is voor ons waardevol.",
    satisfiedButton: "Steun ons met een koffie",
    feedbackButton: "Feedback sturen",
  }
};

export default function Feedback({ locale }: { locale: string }) {
  const text = locales[locale as keyof typeof locales] || locales.en;

  return (
    <Card className="w-full max-w-full mt-10 border-2 border-[#009b7d] dark:border-[#33af97] bg-gradient-to-br from-[#e6f7f4] to-white dark:from-[#1a2e2b] dark:to-gray-900 shadow-lg hover:shadow-xl transition-all duration-300">
      <CardHeader className="bg-[#009b7d] dark:bg-[#33af97] py-6">
        <CardTitle className="text-center text-2xl font-bold text-white">{text.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center p-8 bg-opacity-20 bg-[#009b7d] dark:bg-opacity-20 dark:bg-[#33af97]">
        <p className="mb-8 text-center text-lg text-gray-800 dark:text-gray-200 font-medium">
          {text.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
          <Button asChild className="w-full sm:w-auto bg-[#009b7d] hover:bg-[#007a63] text-white text-lg py-4 px-6 rounded-md shadow-md hover:shadow-lg transition-all duration-300">
            <a href="https://yxstore.lemonsqueezy.com/buy/18c1219f-4182-40dd-bea6-7147c7a30de6" target="_blank" rel="noopener noreferrer">
              ☕ {text.satisfiedButton}
            </a>
          </Button>
          <Button asChild variant="outline" className="w-full sm:w-auto border-2 border-[#009b7d] text-[#009b7d] hover:bg-[#009b7d] hover:text-white text-lg py-4 px-6 rounded-md shadow-md hover:shadow-lg transition-all duration-300">
            <a href="mailto:support@bri-calculator.com">
              ✉️ {text.feedbackButton}
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}