import BRIChart from "@/components/home/BRIChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, BarChart2, Info, ThumbsUp } from 'lucide-react';
import { FC } from 'react';


const translations = {
  "en": {
    "title": "Your Body Composition Results",
    "bri": "Body Roundness Index (BRI):",
    "healthStatus": "Health Status:",
    "bmi": "Body Mass Index (BMI):",
    "bmiCategory": "BMI Category:",
    "interpretation": "What does this mean?",
    "risks": "Potential Health Risks",
    "recommendations": "Recommendations",
    "bmiComparison": "BRI vs BMI"
  },
  "de": {
    "title": "Ihre Körperzusammensetzungsergebnisse",
    "bri": "Körperrundheitsindex (BRI):",
    "healthStatus": "Gesundheitszustand:",
    "bmi": "Body-Mass-Index (BMI):",
    "bmiCategory": "BMI-Kategorie:",
    "interpretation": "Was bedeutet das?",
    "risks": "Potenzielle Gesundheitsrisiken",
    "recommendations": "Empfehlungen",
    "bmiComparison": "BRI vs BMI"
  },
  "nl": {
    "title": "Uw lichaamscompositieresultaten",
    "bri": "Body Roundness Index (BRI):",
    "healthStatus": "Gezondheidsstatus:",
    "bmi": "Body Mass Index (BMI):",
    "bmiCategory": "BMI-categorie:",
    "interpretation": "Wat betekent dit?",
    "risks": "Potentiële gezondheidsrisico's",
    "recommendations": "Aanbevelingen",
    "bmiComparison": "BRI vs BMI"
  }
}

interface BRIResultProps {
  bri: number;
  bmi: number;
  gender?: string;
  age?: string;
  locale: string;
}

export const BRIResult: FC<BRIResultProps> = ({ locale, bri, bmi, gender, age }) => {
  const t = translations[locale as keyof typeof translations];
  const healthStatus = getHealthStatus(bri);
  const interpretation = getBRIInterpretation(bri, gender, age);
  const risks = getHealthRisks(bri);
  const recommendations = getRecommendations(bri);
  const bmiCategory = getBMICategory(bmi);

  return (
    <div className="space-y-6 mt-6">
      <Card className="bg-gradient-to-r from-primary/10 to-primary/5">
        <CardHeader>
          <CardTitle className="text-primary">{t.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div>
                <span className="text-lg">{t.bri}</span>
                <span className="text-2xl font-bold text-primary ml-2">{bri.toFixed(2)}</span>
              </div>
              <div>
                <span className="text-lg">{t.healthStatus}</span>
                <span className={`text-xl font-semibold ml-2 ${getHealthStatusColor(bri)}`}>{healthStatus}</span>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <span className="text-lg">{t.bmi}</span>
                <span className="text-2xl font-bold text-primary ml-2">{bmi.toFixed(2)}</span>
              </div>
              <div>
                <span className="text-lg">{t.bmiCategory}</span>
                <span className={`text-xl font-semibold ml-2 ${getBMICategoryColor(bmi)}`}>{bmiCategory}</span>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <BRIChart bri={bri} />
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-blue-50 dark:bg-blue-900">
          <CardHeader className="p-4">
            <CardTitle className="flex items-center text-blue-600 dark:text-blue-300">
              <Info className="mr-2 h-5 w-5" />
              {t.interpretation}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <p className="text-gray-800 dark:text-gray-200">{interpretation}</p>
          </CardContent>
        </Card>

        <Card className="bg-yellow-50 dark:bg-yellow-900">
          <CardHeader className="p-4">
            <CardTitle className="flex items-center text-yellow-600 dark:text-yellow-300">
              <AlertTriangle className="mr-2 h-5 w-5" />
              {t.risks}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <ul className="list-disc pl-5 space-y-1 text-gray-800 dark:text-gray-200">
              {risks.map((risk, index) => <li key={index}>{risk}</li>)}
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-green-50 dark:bg-green-900">
          <CardHeader className="p-4">
            <CardTitle className="flex items-center text-green-600 dark:text-green-300">
              <ThumbsUp className="mr-2 h-5 w-5" />
              {t.recommendations}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <ul className="list-disc pl-5 space-y-1 text-gray-800 dark:text-gray-200">
              {recommendations.map((recommendation, index) => <li key={index}>{recommendation}</li>)}
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-purple-50 dark:bg-purple-900">
          <CardHeader className="p-4">
            <CardTitle className="flex items-center text-purple-600 dark:text-purple-300">
              <BarChart2 className="mr-2 h-5 w-5" />
              {t.bmiComparison}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <p className="text-gray-800 dark:text-gray-200">{getBMIComparison(bmi, bri)}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

function getHealthStatusColor(bri: number): string {
  if (bri < 3.41) return "text-teal-500";
  if (bri < 4.45) return "text-blue-500";
  if (bri < 5.46) return "text-yellow-500";
  if (bri < 6.91) return "text-red-500";
  return "text-red-700";
}


function getHealthStatus(bri: number): string {
  if (bri < 3.41) return "Very lean";
  if (bri < 4.45) return "Lean to average";
  if (bri < 5.46) return "Average";
  if (bri < 6.91) return "Above average";
  return "High";
}

function getBRIInterpretation(bri: number, gender?: string, age?: string): string {
  let interpretation = "";
  if (bri < 3.41) {
    interpretation = "Your BRI indicates that you have a very lean body shape with a relatively small waist circumference. This may pose certain health risks.";
  } else if (bri < 4.45) {
    interpretation = "Your BRI suggests a lean to average body shape, with a waist size smaller than most people.";
  } else if (bri < 5.46) {
    interpretation = "Your BRI falls into the average body shape range, neither particularly slim nor round.";
  } else if (bri < 6.91) {
    interpretation = "Your BRI indicates above-average body roundness, with a waist circumference larger than most people.";
  } else {
    interpretation = "Your BRI indicates high body roundness, which is associated with various health risks.";
  }

  if (age && gender) {
    interpretation += ` As a ${age}-year-old ${gender}, ${parseInt(age) > 65
      ? "it's crucial to focus on maintaining muscle mass and bone density while managing weight."
      : "maintaining a healthy lifestyle is key to preventing future health issues."
      }`;
  }

  return interpretation;
}

function getHealthRisks(bri: number): string[] {
  let risks: string[] = [];
  if (bri < 3.41) {
    risks = [
      "Increased risk of nutrient deficiencies, particularly vitamins and minerals",
      "Potential for compromised immune function",
      "Possible hormonal imbalances affecting reproductive health",
    ];
  } else if (bri < 4.45) {
    risks = [
      "Generally low risk for obesity-related health issues",
      "Maintain awareness of family history for potential genetic health risks",
    ];
  } else if (bri < 5.46) {
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
  return risks;
}

function getRecommendations(bri: number): string[] {
  let recommendations: string[] = [];
  if (bri < 3.41) {
    recommendations = [
      "Consult with a registered dietitian to ensure adequate nutrient intake",
      "Gradually increase calorie intake with nutrient-dense foods",
      "Consider strength training to build muscle mass",
    ];
  } else if (bri < 4.45) {
    recommendations = [
      "Maintain a balanced diet rich in fruits, vegetables, lean proteins, and whole grains",
      "Engage in regular physical activity, aiming for at least 150 minutes of moderate exercise per week",
      "Schedule regular health check-ups to monitor overall health",
    ];
  } else if (bri < 5.46) {
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
  return recommendations;
}

function getBMICategory(bmi: number): string {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Normal weight";
  if (bmi < 30) return "Overweight";
  return "Obese";
}

function getBMICategoryColor(bmi: number): string {
  if (bmi < 18.5) return "text-blue-500";
  if (bmi < 25) return "text-green-500";
  if (bmi < 30) return "text-yellow-500";
  return "text-red-500";
}

function getBMIComparison(bmi: number, bri: number): string {
  return `While BMI (${bmi.toFixed(2)}) is widely used, BRI (${bri.toFixed(2)}) provides a more comprehensive assessment by considering your body shape and waist circumference, offering a more nuanced view of your body composition and potential health risks.`;
}