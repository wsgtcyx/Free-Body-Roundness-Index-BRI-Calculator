import { Button } from "@/components/ui/button";
import { CalculatorIcon } from "lucide-react";
import Link from "next/link";

const CTAButton = ({ locale }: { locale: string }) => {
  return (
    <Link
      href="#calculator"
    >
      <Button
        variant="default"
        className="flex items-center gap-2 bg-[#19a58a] hover:bg-[#148f77] text-white text-base"
        aria-label="Calculate BRI now"
      >
        <CalculatorIcon />
        {(() => {
          const ctaText = {
            en: "Calculate BRI now",
            de: "BRI jetzt berechnen",
            nl: "Bereken BRI nu"
          };
          return ctaText[locale as keyof typeof ctaText] || ctaText.en;
        })()}
      </Button>
    </Link>
  );
};

export default CTAButton;
