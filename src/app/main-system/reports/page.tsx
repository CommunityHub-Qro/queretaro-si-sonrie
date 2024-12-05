"use client";

import React, { useState, useEffect } from "react";
import HistogramChart from "~/app/_components/organisms/charts/Histogram";
import AgePieChart from "~/app/_components/organisms/charts/Pie";
import DiseaseDonutChart from "~/app/_components/organisms/charts/Donut";
import GenerateReport from "~/app/_components/atoms/GenerateReport";

export default function Reports() {
  const [selectedYear, setSelectedYear] = useState<number>(
    new Date().getFullYear(),
  );
  const [availableYears, setAvailableYears] = useState<number[]>([]);
  const [pieData, setPieData] = useState<{ name: string; value: number }[]>([]);
  const [monthlyReports, setMonthlyReports] = useState<
    { month: string; pacientes: number }[]
  >([]);
  const [donutData, setDonutData] = useState<{ name: string; value: number }[]>(
    [],
  );

  // Fetch available years from the API
  useEffect(() => {
    async function fetchAvailableYears() {
      try {
        const response = await fetch("/api/Year-selection");
        const years: number[] = (await response.json()) as number[];
        setAvailableYears(years);
        // Default to the latest year if available
        if (years.length > 0 && years[0]) {
          setSelectedYear(years[0]);
        }
      } catch (error) {
        console.error("Error fetching available years:", error);
      }
    }

    void fetchAvailableYears();
  }, []);

  // Fetch chart data
  useEffect(() => {
    async function fetchData() {
      try {
        const pieResponse = await fetch("/api/Pie");
        const pieData = (await pieResponse.json()) as {
          name: string;
          value: number;
        }[];
        setPieData(pieData);

        const reportsResponse = await fetch(
          `/api/Histogram?year=${selectedYear}`,
        );
        const reportsData = (await reportsResponse.json()) as {
          month: string;
          pacientes: number;
        }[];
        setMonthlyReports(reportsData);

        // const donutResponse = await fetch("/api/Donut");
        // const donutData = (await donutResponse.json()) as {
        //   name: string;
        //   value: number;
        // }[];
        // setDonutData(donutData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    if (selectedYear) {
      void fetchData();
    }
  }, [selectedYear]);

  // Handle year change
  const handleYearChange = async (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSelectedYear(parseInt(event.target.value, 10));
  };

  return (
    <div>
      <section className="invisible h-3"></section>
      <div className="absolute right-10 h-8">
        <GenerateReport />
      </div>
      <section className="invisible h-8"></section>
      <div className="flex flex-row">
        <div className="border-primary-1 m-8 flex w-2/5 flex-col items-center rounded-lg border-4 p-4">
          <AgePieChart data={pieData} />
        </div>
        <div className="border-primary-1 m-8 flex w-3/5 flex-col items-center rounded-lg border-4 p-4">
          {/* Dropdown for selecting the year */}
          <div className="mb-4 flex items-center justify-center">
            <label htmlFor="year-select" className="mr-2 text-lg font-semibold">
              Seleccionar año:
            </label>
            <select
              id="year-select"
              className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedYear}
              onChange={handleYearChange}
            >
              {availableYears.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          {/* Histogram chart */}
          <HistogramChart data={monthlyReports} />
        </div>
      </div>
      {/* <div className="border-primary-1 m-8 flex flex-col items-center rounded-lg border-4 p-4">
        <DiseaseDonutChart data={donutData} />
      </div> */}
    </div>
  );
}
