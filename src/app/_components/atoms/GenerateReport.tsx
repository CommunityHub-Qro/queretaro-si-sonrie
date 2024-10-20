'use client';
import React from 'react';

const GenerateReport: React.FC = () => {
    const data = [
        { name: 'Total personas atendidas', value: 120 },
        { name: 'Atendidos actualmente', value: 90 },
        { name: 'Pacientes ortopedia', value: 75 },
        { name: 'Pacientes quieloplastia', value: 60 },
        { name: 'Pacientes ontología general', value: 30 },
      ];    
      const generateCSV = () => {
        // Encabezados
        const headers = ['Atributo', 'Cantidad'];
    
        // Unir los encabezados y los datos en formato CSV
        const rows = data.map(item => `${item.name},${item.value}`).join('\n');
        const csvContent = [headers.join(','), rows].join('\n');
    
        // Crear un enlace para descargar el archivo CSV
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'data.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); // Elimina el enlace después de la descarga
      };    

  return (
    
      <button
        onClick={generateCSV}
        className="px-8 py-3 text-lg font-bold rounded-full border border-gray-600 hover:text-white hover:bg-gray-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2"
        style={{ alignSelf: 'center' }}
      >
        Generar reporte
      </button>
  );
};

export default GenerateReport;
