'use client';
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Flu', value: 120 },
  { name: 'Cold', value: 90 },
  { name: 'COVID-19', value: 75 },
  { name: 'Chickenpox', value: 60 },
  { name: 'Measles', value: 30 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

const DiseaseDonutChart: React.FC = () => (
  <PieChart width={400} height={400}>
    <Pie
      data={data}
      cx="50%"
      cy="50%"
      innerRadius={80}
      outerRadius={150}
      fill="#8884d8"
      paddingAngle={5}
      dataKey="value"
      label
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
    <Tooltip />
    <Legend />
  </PieChart>
);

export default DiseaseDonutChart;
