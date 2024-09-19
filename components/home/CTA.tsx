/* eslint-disable react/no-unescaped-entities */
import CTAButton from "@/components/home/CTAButton";
import { RoughNotation } from "react-rough-notation";


const CTA = () => {
  return (
    <section className="mt-10 max-w-full flex flex-col justify-center items-center py-16 gap-12 border-2 border-[#009b7d] dark:border-[#33af97] rounded-lg">
      <div className="flex flex-col text-center gap-4">
        <h2 className="text-center">Unlock Your Body's True Potential with BRI</h2>
        <p className="text-large text-default-500">
          Discover the power of the Body Roundness Index.{" "}
          <RoughNotation type="box" color="#b71c1c" show={true}>
            More accurate
          </RoughNotation>{" "}
          than BMI,{" "}
          <RoughNotation type="box" color="#b71c1c" show={true}>
            more insightful
          </RoughNotation>{" "}
          for your health journey. BRI offers a{" "}
          <RoughNotation type="box" color="#b71c1c" show={true}>
            comprehensive view
          </RoughNotation>{" "}
          of your body composition, empowering you to make informed decisions about your wellness.
        </p>
      </div>
      <CTAButton locale="Calculate Your BRI Now" />
    </section>
  );
};

export default CTA;
