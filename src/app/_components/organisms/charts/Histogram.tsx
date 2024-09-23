'use client';
// HistogramChart.tsx
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from 'recharts';

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

const HistogramChart: React.FC = () => (
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
);

export default HistogramChart;
