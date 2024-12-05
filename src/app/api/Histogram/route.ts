import { NextResponse } from "next/server";
import { db } from "~/server/db";

function getYearFromQuery(params: Record<string, string | string[]>): number {
  const year = params?.year
    ? parseInt(params.year as string, 10)
    : new Date().getFullYear();
  if (isNaN(year)) {
    throw new Error("Invalid year parameter");
  }
  return year;
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const year = getYearFromQuery(Object.fromEntries(searchParams));

    const treatments = await db.record.groupBy({
      by: ["register_date"],
      _count: {
        id: true,
      },
      where: {
        register_date: {
          gte: new Date(`${year}-01-01`),
          lt: new Date(`${year + 1}-01-01`),
        },
      },
    });

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const monthlyData = Array(12).fill(0);

    treatments.forEach((record) => {
      const month = new Date(record.register_date).getMonth();
      monthlyData[month] += record._count.id;
    });

    const formattedData = months.map((month, index) => ({
      month,
      pacientes: monthlyData[index] as number,
    }));

    return NextResponse.json(formattedData);
  } catch (error) {
    console.error("Error fetching monthly reports:", error);
    return NextResponse.json(
      { error: "Failed to fetch monthly reports" },
      { status: 500 },
    );
  }
}
