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
  const height = 100; // 增加 SVG 的高度
  const segments = [
    { name: 'Extremely Lean', range: [0, 1], color: '#8dd3c7' },
    { name: 'Normal', range: [1, 2], color: '#80b1d3' },
    { name: 'Overweight', range: [2, 3], color: '#fdb462' },
    { name: 'Obese', range: [3, 5], color: '#fb8072' },
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
    domain: [0, 5],
    range: [0, width],
  });

  const barHeight = 30;
  const yOffset = 30; // 增加顶部偏移量

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
            y1={-15} // 调整线的起点
            x2={xScale(bri)}
            y2={barHeight + 5}
            stroke="red"
            strokeWidth={2}
          />
          <text
            x={xScale(bri)}
            y={-20} // 调整文本的位置
            textAnchor="middle"
            fontSize={12}
            fill="currentColor"
            className="text-gray-800 dark:text-gray-200"
          >
            Your BRI: {bri.toFixed(2)}
          </text>
          {/* 添加刻度标签 */}
          {[0, 1, 2, 3, 5].map((tick) => (
            <text
              key={tick}
              x={xScale(tick)}
              y={barHeight + 20}
              textAnchor="middle"
              fontSize={12}
              fill="black"
            >
              {tick}{tick === 5 ? '+' : ''}
            </text>
          ))}
        </Group>
      </svg>
      <div className="grid grid-cols-2 gap-2 text-xs mt-2">
        {segments.map((segment, index) => (
          <div key={index} className="flex items-center">
            <div className="w-4 h-4 mr-2" style={{ backgroundColor: segment.color }}></div>
            <span>{segment.name} ({segment.range[0]} ≤ BRI {'<'} {segment.range[1]})</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BRIChart;