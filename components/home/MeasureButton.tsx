'use client'
import { Button } from '@/components/ui/button';

const MeasureButton = ({ locale }: { locale: string }) => {
  return (
    <div>
      <Button
        type="button"
        variant="outline"
        className="text-xs text-[#19a58a] hover:text-white hover:bg-[#19a58a] border-[#19a58a] transition-colors duration-300 py-1 px-2"
        onClick={() => {
          const measureWaistSection = document.getElementById('measure-waist');
          if (measureWaistSection) {
            measureWaistSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        {locale === 'de' ? 'Wie messen?' :
          locale === 'nl' ? 'Hoe meten?' :
            'How to measure?'}
      </Button>
    </div>
  )
}

export default MeasureButton