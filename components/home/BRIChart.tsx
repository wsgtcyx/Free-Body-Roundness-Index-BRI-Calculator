import { Group } from '@visx/group';
import { scaleLinear } from '@visx/scale';
import { Bar } from '@visx/shape';
import React, { useEffect, useRef, useState } from 'react';

interface BRIChartProps {
  bri: number;
}

const BRIChart: React.FC<BRIChartProps> = ({ bri }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const height = 100;
  const segments = [
    { name: 'Very lean', range: [0, 3.41], color: '#8dd3c7' },
    { name: 'Lean to average', range: [3.41, 4.45], color: '#80b1d3' },
    { name: 'Average', range: [4.45, 5.46], color: '#fdb462' },
    { name: 'Above average', range: [5.46, 6.91], color: '#fb8072' },
    { name: 'High', range: [6.91, 16], color: '#e31a1c' },
  ];

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const xScale = scaleLinear({
    domain: [0, 16],
    range: [0, width],
  });

  const barHeight = 30;
  const yOffset = 30;

  return (
    <div ref={containerRef} className="mt-4 w-full">
      <p className="text-sm mb-2">The chart below shows your BRI in relation to different health categories. The red line indicates your current BRI value.</p>
      <svg width={width} height={height} className="mx-auto">
        <Group top={yOffset}>
          {segments.map((segment, index) => (
            <Bar
              key={index}
              x={xScale(segment.range[0])}
              y={0}
              width={xScale(segment.range[1]) - xScale(segment.range[0])}
              height={barHeight}
              fill={segment.color}
            />
          ))}
          <line
            x1={xScale(bri)}
            y1={-15}
            x2={xScale(bri)}
            y2={barHeight + 5}
            stroke="red"
            strokeWidth={2}
          />
          <text
            x={xScale(bri)}
            y={-20}
            textAnchor="middle"
            fontSize={12}
            fill="currentColor"
            className="text-gray-800 dark:text-gray-200"
          >
            Your BRI: {bri.toFixed(2)}
          </text>
          {/* 更新刻度标签为类别分界线 */}
          {[0, 3.41, 4.45, 5.46, 6.91, 16].map((tick, index) => (
            <React.Fragment key={tick}>
              <line
                x1={xScale(tick)}
                y1={barHeight}
                x2={xScale(tick)}
                y2={barHeight + 5}
                stroke="black"
                strokeWidth={1}
              />
              <text
                x={xScale(tick)}
                y={barHeight + 20}
                textAnchor={index === 0 ? "start" : index === 5 ? "end" : "middle"}
                fontSize={10}
                fill="black"
              >
                {tick === 16 ? "16+" : tick.toFixed(2)}
              </text>
            </React.Fragment>
          ))}
        </Group>
      </svg>
      <div className="grid grid-cols-2 gap-2 text-xs mt-2">
        {segments.map((segment, index) => (
          <div key={index} className="flex items-center">
            <div className="w-4 h-4 mr-2" style={{ backgroundColor: segment.color }}></div>
            <span>{segment.name} ({segment.range[0]} ≤ BRI {index === segments.length - 1 ? '≤' : '<'} {segment.range[1]})</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BRIChart;