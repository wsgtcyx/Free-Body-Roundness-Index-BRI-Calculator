import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const WhatIsBRI = () => {
  return (
    <div>
      <Card className="mb-8 border-t-4 border-[#009b7d]">
        <CardHeader>
          <CardTitle className="text-[#009b7d] text-center">What is the Body Roundness Index (BRI)?</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            The Body Roundness Index (BRI) is a measure used to assess body shape
            and health risks. Our free BRI calculator combines height and waist
            circumference measurements to evaluate the "roundness" of the human
            body. BRI can help assess health risks associated with obesity at no
            cost to you.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default WhatIsBRI