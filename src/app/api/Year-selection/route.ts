import { NextResponse } from "next/server";
import { db } from "~/server/db";

export async function GET() {
  try {
    // Fetch distinct years from the `register_date` column
    const years = await db.record.findMany({
      select: {
        register_date: true,
      },
      distinct: ["register_date"],
    });

    // Extract years from the dates
    const yearSet = new Set(
      years.map((record) => new Date(record.register_date).getFullYear())
    );

    // Convert the Set to an array and sort in descending order
    const sortedYears = Array.from(yearSet).sort((a, b) => b - a);

    return NextResponse.json(sortedYears);
  } catch (error) {
    console.error("Error fetching years:", error);
    return NextResponse.json(
      { error: "Failed to fetch years" },
      { status: 500 }
    );
  }
}
