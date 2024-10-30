'use client';
// HistogramChart.tsx
import React, { useRef } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from 'recharts';
import html2canvas from 'html2canvas';

const data = [
  { month: 'Jan', patients: 30 },
  { month: 'Feb', patients: 45 },
  { month: 'Mar', patients: 28 },
  { month: 'Apr', patients: 50 },
  { month: 'May', patients: 38 },
  { month: 'Jun', patients: 60 },
  { month: 'Jul', patients: 55 },
  { month: 'Aug', patients: 65 },
  { month: 'Sep', patients: 40 },
  { month: 'Oct', patients: 70 },
  { month: 'Nov', patients: 48 },
  { month: 'Dec', patients: 80 },
];

const HistogramChart: React.FC = () => {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);

  const handleDownload = async () => {
    if (chartContainerRef.current) {
      const canvas = await html2canvas(chartContainerRef.current, {
        scale: 2,
      });
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'atenciones_por_mes.png';
      link.click();
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 'auto', marginBottom: 'auto' }}>
      <div ref={chartContainerRef} style={{ width: 'fit-content' }}>
        <h1 className='text-2xl text-center'><strong>Atenciones por mes</strong></h1>
        <br></br>
        <BarChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis label={{ value: 'Patients', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="patients" fill="#8884d8" />
        </BarChart>
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

export default HistogramChart;
