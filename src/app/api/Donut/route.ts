import { NextResponse } from "next/server";
import { db } from "~/server/db";

export async function GET() {
  try {
    const diagnoses = await db.diagnosis.groupBy({
      by: ["title"], 
      _count: {
        id: true, 
      },
    });

    const formattedData = diagnoses.map((diagnosis) => ({
      name: diagnosis.title, 
      value: diagnosis._count.id, 
    }));

    return NextResponse.json(formattedData);
  } catch (error) {
    console.error("Error fetching diagnosis data:", error);
    return NextResponse.json(
      { error: "Failed to fetch diagnosis data" },
      { status: 500 }
    );
  }
}
