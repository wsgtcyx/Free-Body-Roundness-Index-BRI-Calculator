'use client'

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

  const calculateBRI = (e: React.FormEvent) => {
    e.preventDefault()
    // 实现 BRI 计算逻辑
    // ...
    // setBri(calculatedBRI)
  }

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Calculate Your BRI</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={calculateBRI} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="units">Units</Label>
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
              <Label htmlFor="height">Height ({units === 'imperial' ? 'inches' : 'cm'})</Label>
              <Input id="height" type="number" value={height} onChange={(e) => setHeight(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="waist">Waist Circumference ({units === 'imperial' ? 'inches' : 'cm'})</Label>
              <Input id="waist" type="number" value={waist} onChange={(e) => setWaist(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="gender">Gender (optional)</Label>
              <Select onValueChange={(value) => setGender(value)}>
                <SelectTrigger id="gender">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="age">Age (optional)</Label>
              <Input id="age" type="number" value={age} onChange={(e) => setAge(e.target.value)} />
            </div>
          </div>
          <Button type="submit" className="w-full">Calculate BRI</Button>
        </form>
        {bri && (
          <div id="result" className="mt-4 p-4 bg-secondary rounded-md">
            <h3 className="font-semibold">Your BRI Result:</h3>
            <p>BRI: {bri.toFixed(2)}</p>
            {/* 添加更多结果解释 */}
          </div>
        )}
      </CardContent>
    </Card>
  )
}