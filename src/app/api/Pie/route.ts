import { NextResponse } from "next/server";
import { db } from "~/server/db";

export async function GET() {
  const records = await db.record.findMany({
    distinct: ["name"],
    select: {
      name: true,
      birth_date: true,
    },
  });

  const currentDate = new Date();
  const ageGroups = {
    "0-5": 0,
    "5-9": 0,
    "10-15": 0,
    "15-17": 0,
    "17+": 0,
  };

  records.forEach((record) => {
    let age = currentDate.getFullYear() - record.birth_date.getFullYear();
    const monthDifference = currentDate.getMonth() - record.birth_date.getMonth();
    const dayDifference = currentDate.getDate() - record.birth_date.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      age--;
    }

    if (age <= 5) {
      ageGroups["0-5"]++;
    } else if (age <= 9) {
      ageGroups["5-9"]++;
    } else if (age <= 15) {
      ageGroups["10-15"]++;
    } else if (age <= 17) {
      ageGroups["15-17"]++;
    } else {
      ageGroups["17+"]++;
    }
  });

  const result = Object.entries(ageGroups)
    .filter(([_, value]) => value > 0) 
    .map(([name, value]) => ({
      name,
      value,
    }));

  return NextResponse.json(result);
}
