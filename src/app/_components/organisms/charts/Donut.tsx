'use client';
import React, { useRef } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import html2canvas from 'html2canvas';

// const data = [
//   { name: 'Flu', value: 120 },
//   { name: 'Cold', value: 90 },
//   { name: 'COVID-19', value: 75 },
//   { name: 'Chickenpox', value: 60 },
//   { name: 'Measles', value: 30 },
// ];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF"];

const DiseaseDonutChart: React.FC<{ data: { name: string; value: number }[] }> = ({ data }) => {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);

  const handleDownload = async () => {
    if (chartContainerRef.current) {
      const canvas = await html2canvas(chartContainerRef.current, {
        scale: 2,
      });
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "clientes_por_tratamiento.png";
      link.click();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "auto",
        marginBottom: "auto",
      }}
    >
      <div ref={chartContainerRef} style={{ width: "fit-content" }}>
        <h1 className="text-2xl text-center">
          <strong>Clientes atendidos por tratamiento</strong>
        </h1>
        <br />
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
      </div>
      <br />
      <button
        onClick={handleDownload}
        className="px-8 py-3 text-lg font-bold rounded-full border border-gray-600 hover:text-white hover:bg-gray-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2"
        style={{ alignSelf: "center" }}
      >
        Descargar Gráfica
      </button>
    </div>
  );
};

export default DiseaseDonutChart;
