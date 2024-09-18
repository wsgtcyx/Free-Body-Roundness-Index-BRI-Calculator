'use client'

import { BRIResult } from "@/components/home/BRIResult"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from 'react'

export default function BRICalculator() {
  const [units, setUnits] = useState('imperial')
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [waist, setWaist] = useState('')
  const [gender, setGender] = useState('')
  const [age, setAge] = useState('')
  const [bri, setBri] = useState<number | null>(null)
  const [bmi, setBmi] = useState<number | null>(null)

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
      alert("Please fill in all required fields.");
    }
  }

  return (
    <Card className="mb-8" id="calculator">
      <CardHeader>
        <CardTitle>Calculate Your BRI</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={calculateBRI} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="units">Units:</Label>
              <Select onValueChange={(value) => setUnits(value)}>
                <SelectTrigger id="units">
                  <SelectValue placeholder="Select units" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="imperial">Imperial (in, lbs)</SelectItem>
                  <SelectItem value="metric">Metric (cm, kg)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="height">Height:</Label>
              <Input id="height" type="number" value={height} onChange={(e) => setHeight(e.target.value)} required />
              <span>{units === 'imperial' ? 'in' : 'cm'}</span>
            </div>
            <div className="space-y-2">
              <Label htmlFor="weight">Weight:</Label>
              <Input id="weight" type="number" value={weight} onChange={(e) => setWeight(e.target.value)} required />
              <span>{units === 'imperial' ? 'lbs' : 'kg'}</span>
            </div>
            <div className="space-y-2">
              <Label htmlFor="waist">Waist Circumference:</Label>
              <Input id="waist" type="number" value={waist} onChange={(e) => setWaist(e.target.value)} required />
              <span>{units === 'imperial' ? 'in' : 'cm'}</span>
            </div>
            <div className="space-y-2">
              <Label htmlFor="gender">Gender (optional):</Label>
              <Select onValueChange={(value) => setGender(value)}>
                <SelectTrigger id="gender">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="age">Age (optional):</Label>
              <Input id="age" type="number" value={age} onChange={(e) => setAge(e.target.value)} min="18" max="120" />
            </div>
          </div>
          <Button type="submit" className="w-full">Calculate BRI</Button>
        </form>
        {bri !== null && bmi !== null && (
          <BRIResult bri={bri} bmi={bmi} gender={gender} age={age} />
        )}
      </CardContent>
    </Card>
  )
}
