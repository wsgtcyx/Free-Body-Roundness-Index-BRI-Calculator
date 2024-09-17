import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { FC } from 'react';

interface BRIResultProps {
  bri: number;
  bmi: number;
  gender?: string;
  age?: string;
}

export const BRIResult: FC<BRIResultProps> = ({ bri, bmi, gender, age }) => {
  return (
    <div className="space-y-6 mt-6">
      <Card>
        <CardHeader>
          <CardTitle>Your BRI Results</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p>Your Body Roundness Index (BRI): <strong>{bri.toFixed(2)}</strong></p>
            <p>Health Status: <span className={`font-semibold ${getHealthStatusColor(bri)}`}>{getHealthStatus(bri)}</span></p>
            <Progress value={getBRIProgressValue(bri)} className="w-full" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>What does this mean?</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{getBRIInterpretation(bri, gender, age)}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Potential Health Risks</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-1">
            {getHealthRisks(bri)}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-1">
            {getRecommendations(bri)}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>BRI vs BMI Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Your Body Mass Index (BMI): <strong>{bmi.toFixed(2)}</strong></p>
          <p className="mt-2">{getBMIComparison(bmi, bri)}</p>
        </CardContent>
      </Card>
    </div>
  );
};

function getHealthStatusColor(bri: number): string {
  if (bri < 1) return "text-blue-500";
  if (bri < 2) return "text-green-500";
  if (bri < 3) return "text-yellow-500";
  return "text-red-500";
}

function getBRIProgressValue(bri: number): number {
  return Math.min(bri / 5 * 100, 100);
}

function getHealthStatus(bri: number): string {
  if (bri < 1) return "Extremely lean";
  if (bri < 2) return "Normal body shape";
  if (bri < 3) return "Overweight";
  return "Obese";
}

function getBRIInterpretation(bri: number, gender?: string, age?: string): string {
  let interpretation = "";
  if (bri < 1) {
    interpretation = "Your BRI indicates that you are extremely lean. This may pose certain health risks.";
  } else if (bri < 2) {
    interpretation = "Your BRI is within the normal range, indicating a healthy body shape.";
  } else if (bri < 3) {
    interpretation = "Your BRI suggests you are overweight, which may increase certain health risks.";
  } else {
    interpretation = "Your BRI indicates obesity, which is associated with various health risks.";
  }

  if (age && gender) {
    interpretation += ` As a ${age}-year-old ${gender}, ${parseInt(age) > 65
      ? "it's crucial to focus on maintaining muscle mass and bone density while managing weight."
      : "maintaining a healthy lifestyle is key to preventing future health issues."
      }`;
  }

  return interpretation;
}

function getHealthRisks(bri: number): JSX.Element {
  let risks: string[] = [];
  if (bri < 1) {
    risks = [
      "Increased risk of nutrient deficiencies, particularly vitamins and minerals",
      "Potential for compromised immune function",
      "Possible hormonal imbalances affecting reproductive health",
    ];
  } else if (bri < 2) {
    risks = [
      "Generally low risk for obesity-related health issues",
      "Maintain awareness of family history for potential genetic health risks",
    ];
  } else if (bri < 3) {
    risks = [
      "Elevated risk of type 2 diabetes and insulin resistance",
      "Increased likelihood of developing high blood pressure",
      "Higher risk of sleep apnea and breathing problems",
    ];
  } else {
    risks = [
      "Significantly increased risk of cardiovascular diseases, including heart attack and stroke",
      "Higher likelihood of developing certain cancers, such as colon and breast cancer",
      "Increased risk of osteoarthritis and joint problems due to excess weight",
    ];
  }
  return <>{risks.map((risk, index) => <li key={index}>{risk}</li>)}</>;
}

function getRecommendations(bri: number): JSX.Element {
  let recommendations: string[] = [];
  if (bri < 1) {
    recommendations = [
      "Consult with a registered dietitian to ensure adequate nutrient intake",
      "Gradually increase calorie intake with nutrient-dense foods",
      "Consider strength training to build muscle mass",
    ];
  } else if (bri < 2) {
    recommendations = [
      "Maintain a balanced diet rich in fruits, vegetables, lean proteins, and whole grains",
      "Engage in regular physical activity, aiming for at least 150 minutes of moderate exercise per week",
      "Schedule regular health check-ups to monitor overall health",
    ];
  } else if (bri < 3) {
    recommendations = [
      "Aim to reduce daily calorie intake by 500 calories through healthier food choices",
      "Increase physical activity, targeting 30 minutes of moderate exercise most days of the week",
      "Consider consulting a nutritionist for a personalized meal plan",
    ];
  } else {
    recommendations = [
      "Consult with a healthcare professional to develop a comprehensive weight loss plan",
      "Start with small, achievable goals like reducing portion sizes and eliminating sugary drinks",
      "Incorporate both cardio and strength training exercises, starting with low-impact activities",
      "Consider joining a support group or working with a health coach for motivation and accountability",
    ];
  }
  return <>{recommendations.map((recommendation, index) => <li key={index}>{recommendation}</li>)}</>;
}

function getBMIComparison(bmi: number, bri: number): string {
  let bmiCategory = "";
  if (bmi < 18.5) bmiCategory = "underweight";
  else if (bmi < 25) bmiCategory = "normal weight";
  else if (bmi < 30) bmiCategory = "overweight";
  else bmiCategory = "obese";

  return `Your BMI is ${bmi.toFixed(2)}, which falls into the ${bmiCategory} category. While BMI is widely used, BRI provides a more comprehensive assessment by considering your body shape. Your BRI of ${bri.toFixed(2)} takes into account your waist circumference, offering a more nuanced view of your body composition and potential health risks.`;
}