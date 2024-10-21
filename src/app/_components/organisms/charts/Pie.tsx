'use client';
// AgeGroupPieChart.tsx
import React, { useRef } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import html2canvas from 'html2canvas';

const data = [
  { name: '0-5', value: 30 },
  { name: '5-9', value: 45 },
  { name: '10-15', value: 28 },
  { name: '15-17', value: 20 },
  { name: '17+', value: 50 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

const AgePieChart: React.FC = () => {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);

  const handleDownload = async () => {
    if (chartContainerRef.current) {
      const canvas = await html2canvas(chartContainerRef.current, {
        scale: 2,
      });
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'edades_atendidas.png';
      link.click();
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 'auto', marginBottom: 'auto' }}>
      <div ref={chartContainerRef} style={{ width: 'fit-content' }}>
        <h1 className='text-2xl text-center'><strong>Edades atendidas</strong></h1> 
        <br></br>
        <PieChart width={450} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
      <br></br>
      <button
        onClick={handleDownload}
        className="px-8 py-3 text-lg font-bold rounded-full border border-gray-600 hover:text-white hover:bg-gray-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2"
        style={{ alignSelf: 'center' }}
      >
        Descargar Gráfica
      </button>
    </div>
  );
};

export default AgePieChart;
