import { NextResponse } from "next/server";
import { db } from "~/server/db";

export async function GET() {
  try {
    const treatments = await db.treatment.groupBy({
      by: ["title"], 
      _count: {
        id: true, 
      },
    });

    const formattedData = treatments.map((treatment) => ({
      title: treatment.title, 
      count: treatment._count.id, 
    }));

    return NextResponse.json(formattedData);
  } catch (error) {
    console.error("Error fetching diagnosis data:", error);
    return NextResponse.json(
      { error: "Failed to fetch treatment data" },
      { status: 500 }
    );
  }
}
