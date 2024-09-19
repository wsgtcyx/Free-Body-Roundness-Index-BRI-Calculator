/* eslint-disable react/no-unescaped-entities */
import CTAButton from "@/components/home/CTAButton";
import { RoughNotation } from "react-rough-notation";

const locales = {
  en: {
    title: "Unlock Your Body's True Potential with BRI",
    description: "Discover the power of the Body Roundness Index.",
    highlight1: "More accurate",
    highlight2: "more insightful",
    highlight3: "comprehensive view",
    content1: "than BMI for your health journey.",
    content2: "BRI offers a",
    content3: "of your body composition,",
    content4: "empowering you to make informed decisions about your wellness.",
    cta: "Calculate Your BRI Now"
  },
  nl: {
    title: "Ontgrendel het ware potentieel van uw lichaam met BRI",
    description: "Ontdek de kracht van de Body Roundness Index.",
    highlight1: "Nauwkeuriger",
    highlight2: "meer inzichtelijk",
    highlight3: "uitgebreid beeld",
    content1: "dan BMI, voor uw gezondheidsreis.",
    content2: "BRI biedt een",
    content3: "van uw lichaamssamenstelling, waardoor u geïnformeerde beslissingen kunt nemen over uw welzijn.",
    cta: "Bereken nu uw BRI"
  },
  de: {
    title: "Entfesseln Sie das wahre Potenzial Ihres Körpers mit BRI",
    description: "Entdecken Sie die Kraft des Body Roundness Index.",
    highlight1: "Genauer",
    highlight2: "aufschlussreicher",
    highlight3: "umfassenden Überblick",
    content1: "als BMI für Ihre Gesundheitsreise.",
    content2: "BRI bietet einen",
    content3: "über Ihre Körperzusammensetzung und ermöglicht es Ihnen, fundierte Entscheidungen über Ihr Wohlbefinden zu treffen.",
    cta: "Berechnen Sie jetzt Ihren BRI"
  }
};

const CTA = ({ locale = "en" }: { locale: string }) => {
  const text = locales[locale as keyof typeof locales] || locales.en;

  return (
    <section className="mt-10 max-w-full flex flex-col justify-center items-center py-16 gap-12 border-2 border-[#009b7d] dark:border-[#33af97] rounded-lg">
      <div className="flex flex-col text-center gap-4">
        <h2 className="text-center">{text.title}</h2>
        <p className="text-large text-default-500">
          {text.description}{" "}
          <RoughNotation type="box" color="#b71c1c" show={true}>
            {text.highlight1}
          </RoughNotation>{" "}
          {text.content1} {text.content2}{" "}
          <RoughNotation type="box" color="#b71c1c" show={true}>
            {text.highlight2}
          </RoughNotation>{" "}
          and{" "}
          <RoughNotation type="box" color="#b71c1c" show={true}>
            {text.highlight3}
          </RoughNotation>{" "}
          {text.content3} {text.content4}
        </p>
      </div>
      <CTAButton locale={text.cta} />
    </section>
  );
};

export default CTA;
