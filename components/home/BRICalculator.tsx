'use client'

import { BRIResult } from "@/components/home/BRIResult"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Ruler, RulerIcon, Scale, Users, Weight } from 'lucide-react'
import { useEffect, useState } from 'react'

const translations = {
  "en": {
    "title": "Calculate Your BRI",
    "units": "Units:",
    "imperial": "Imperial (in, lbs)",
    "metric": "Metric (cm, kg)",
    "height": "Height:",
    "weight": "Weight:",
    "waist": "Waist Circumference:",
    "gender": "Gender (optional):",
    "age": "Age (optional):",
    "male": "Male",
    "female": "Female",
    "calculate": "Calculate BRI",
    "fillAllFields": "Please fill in all required fields."
  },
  "nl": {
    "title": "Bereken uw BRI",
    "units": "Eenheden:",
    "imperial": "Imperiaal (in, lbs)",
    "metric": "Metrisch (cm, kg)",
    "height": "Lengte:",
    "weight": "Gewicht:",
    "waist": "Tailleomtrek:",
    "gender": "Geslacht (optioneel):",
    "age": "Leeftijd (optioneel):",
    "male": "Man",
    "female": "Vrouw",
    "calculate": "Bereken BRI",
    "fillAllFields": "Vul alstublieft alle verplichte velden in."
  },
  "de": {
    "title": "Berechnen Sie Ihren BRI",
    "units": "Einheiten:",
    "imperial": "Imperial (in, lbs)",
    "metric": "Metrisch (cm, kg)",
    "height": "Größe:",
    "weight": "Gewicht:",
    "waist": "Taillenumfang:",
    "gender": "Geschlecht (optional):",
    "age": "Alter (optional):",
    "male": "Männlich",
    "female": "Weiblich",
    "calculate": "BRI berechnen",
    "fillAllFields": "Bitte füllen Sie alle erforderlichen Felder aus."
  }
};

export default function BRICalculator({ locale }: { locale: string }) {
  const [units, setUnits] = useState('imperial')
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [waist, setWaist] = useState('')
  const [gender, setGender] = useState('')
  const [age, setAge] = useState('')
  const [bri, setBri] = useState<number | null>(null)
  const [bmi, setBmi] = useState<number | null>(null)

  const [placeholders, setPlaceholders] = useState({
    height: '70',
    weight: '160',
    waist: '32',
  })

  const t = translations[locale as keyof typeof translations];

  const inputClassName = "border-2 border-[#009b7d] dark:border-[#33af97] focus:ring-2 focus:ring-[#009b7d] dark:focus:ring-[#33af97]"

  useEffect(() => {
    if (units === 'imperial') {
      setPlaceholders({
        height: '70',
        weight: '160',
        waist: '32',
      })
    } else {
      setPlaceholders({
        height: '175',
        weight: '70',
        waist: '80',
      })
    }
  }, [units])

  const calculateBRI = (e: React.FormEvent) => {
    e.preventDefault()

    if (height && weight && waist) {
      let heightM: number, waistM: number, weightKg: number;

      if (units === 'imperial') {
        heightM = parseFloat(height) * 0.0254;
        waistM = parseFloat(waist) * 0.0254;
        weightKg = parseFloat(weight) * 0.453592;
      } else {
        heightM = parseFloat(height) / 100;
        waistM = parseFloat(waist) / 100;
        weightKg = parseFloat(weight);
      }

      const bri = 364.2 - 365.5 * Math.sqrt(1 - (waistM / (2 * Math.PI)) ** 2 / (0.5 * heightM) ** 2);
      const bmi = weightKg / (heightM * heightM);

      setBri(bri);
      setBmi(bmi);
    } else {
      alert(t.fillAllFields);
    }
  }

  return (
    <Card className="w-full max-w-full mx-auto mb-8 border-2 border-[#009b7d] dark:border-[#33af97]" id="calculator">
      <CardHeader>
        <CardTitle className="text-[#009b7d] dark:text-[#33af97] text-center">{t.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={calculateBRI} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="units" className="flex items-center gap-2">
                <Scale className="w-5 h-5" />
                {t.units}
              </Label>
              <Select onValueChange={(value) => setUnits(value)}>
                <SelectTrigger id="units" className={inputClassName}>
                  <SelectValue placeholder={t.units} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="imperial">{t.imperial}</SelectItem>
                  <SelectItem value="metric">{t.metric}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="height" className="flex items-center gap-2">
                <RulerIcon className="w-5 h-5" />
                {t.height}
              </Label>
              <Input
                id="height"
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
                className={inputClassName}
                placeholder={placeholders.height}
              />
              <span>{units === 'imperial' ? 'in' : 'cm'}</span>
            </div>
            <div className="space-y-2">
              <Label htmlFor="weight" className="flex items-center gap-2">
                <Weight className="w-5 h-5" />
                {t.weight}
              </Label>
              <Input
                id="weight"
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
                className={inputClassName}
                placeholder={placeholders.weight}
              />
              <span>{units === 'imperial' ? 'lbs' : 'kg'}</span>
            </div>
            <div className="space-y-2">
              <Label htmlFor="waist" className="flex items-center gap-2">
                <Ruler className="w-5 h-5" />
                {t.waist}
              </Label>
              <Input
                id="waist"
                type="number"
                value={waist}
                onChange={(e) => setWaist(e.target.value)}
                required
                className={inputClassName}
                placeholder={placeholders.waist}
              />
              <span>{units === 'imperial' ? 'in' : 'cm'}</span>
            </div>
            <div className="space-y-2">
              <Label htmlFor="gender" className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                {t.gender}
              </Label>
              <Select onValueChange={(value) => setGender(value)}>
                <SelectTrigger id="gender" className={inputClassName}>
                  <SelectValue placeholder={t.gender} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">{t.male}</SelectItem>
                  <SelectItem value="female">{t.female}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="age" className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {t.age}
              </Label>
              <Input
                id="age"
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                min="18"
                max="120"
                className={inputClassName}
                placeholder="30"
              />
            </div>
          </div>
          <Button type="submit" className="w-full bg-[#19a58a] hover:bg-[#148f77] text-white">{t.calculate}</Button>
        </form>
        {bri !== null && bmi !== null && (
          <BRIResult locale={locale} bri={bri} bmi={bmi} gender={gender} age={age} />
        )}
      </CardContent>
    </Card>
  )
}
