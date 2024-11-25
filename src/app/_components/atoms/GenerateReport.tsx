'use client';
import React from 'react';
import { getRecords } from "../hooks/getRecords";
import moment from 'moment';

const GenerateReport: React.FC = () => {
      const records = getRecords(); // { data, error, isLoading }
      moment().format("MM/DD/YYYY");
  
      const generateCSV = async () => {
        // Encabezados
        const headers = ['', 'Pacientes atendidos'];
        const day = new Date();

        // Unir los encabezados y los datos en formato CSV
        let rows = [[`Total`, `${records.data?records.data.length:0}`],
          [`Sexo:`],
          [`Hombres`, `NA`],
          [`Mujeres`, `NA`],
          [`Ingresos recientes:`],
          [`este mes`, `${records.data?records.data.filter(
              item => item.register_date.getMonth()==day.getMonth()
            ).length:0}`],
          [`este anio`, `${records.data?records.data.filter(
              item => item.register_date.getFullYear()==day.getFullYear()
            ).length:0}`],
          [`Edades atendidas:`]
        ].join('\n');

        for (let i = 0; i < 18; i++) {
          rows = [rows, [`${i} anios`, `${records.data?records.data.filter(
              item => moment().diff(item.birth_date, 'years') == i
            ).length:0}`]].join('\n');
        }

        try {
          const response = await fetch('/api/Report'); // Llama al endpoint
          if (!response.ok) {
            throw new Error('Error fetching treatment data');
          }
          const treatments = await response.json();

          // Añade las filas de tratamientos al CSV
          rows = [rows, ['Tratamientos:', '']].join('\n');
          treatments.forEach((treatment: { title: string; count: number }) => {
            rows = [rows, [treatment.title, treatment.count.toString()]].join('\n');
          });
        } catch (error) {
          console.error('Error fetching treatments:', error);
          rows = [rows, ['Error fetching treatments', '']].join('\n');
        }

        // agregar cuantos pacientes hay por tratamiento/etapa
        // **                                diagnostico
        
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
