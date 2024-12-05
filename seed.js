import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Seed Users
  const john = await prisma.user.create({
    data: {
      email: "john@gmail.com",
      password: "password123",
      name: "John Doe",
      role: "USER",
    },
  });

  const jane = await prisma.user.create({
    data: {
      email: "jane@gmail.com",
      password: "password456",
      name: "Jane Smith",
      role: "USER",
    },
  });

  const alice = await prisma.user.create({
    data: {
      email: "alice@gmail.com",
      password: "password789",
      name: "Alice Johnson",
      role: "USER",
    },
  });

  const bob = await prisma.user.create({
    data: {
      email: "bob@gmail.com",
      password: "password101",
      name: "Bob Brown",
      role: "USER",
    },
  });

  const charlie = await prisma.user.create({
    data: {
      email: "charlie@gmail.com",
      password: "password111",
      name: "Charlie Davis",
      role: "USER",
    },
  });

  const diana = await prisma.user.create({
    data: {
      email: "diana@gmail.com",
      password: "password222",
      name: "Diana Evans",
      role: "USER",
    },
  });

  // Seed Diagnoses
  const diagnosis1 = await prisma.diagnosis.create({
    data: { title: "Diagnosis 1", description: "Description 1" },
  });

  const diagnosis2 = await prisma.diagnosis.create({
    data: { title: "Diagnosis 2", description: "Description 2" },
  });

  const diagnosis3 = await prisma.diagnosis.create({
    data: { title: "Diagnosis 3", description: "Description 3" },
  });

  const diagnosis4 = await prisma.diagnosis.create({
    data: { title: "Diagnosis 4", description: "Description 4" },
  });

  const diagnosis5 = await prisma.diagnosis.create({
    data: {
      title: "Diagnosis 4",
      description: "Description 5, but with diagnosis 4",
    },
  });

  // Seed Records
  const record1 = await prisma.record.create({
    data: {
      name: "John Doe",
      birth_date: new Date("2008-01-01"),
      dx: "Diagnosis 1",
      notes: "Notes 1",
      register_date: new Date("2021-8-01"),
    },
  });

  const record2 = await prisma.record.create({
    data: {
      name: "Jane Smith",
      birth_date: new Date("2019-01-01"),
      dx: "Diagnosis 2",
      notes: "Notes 2",
      register_date: new Date("2021-4-01"),
    },
  });

  const record3 = await prisma.record.create({
    data: {
      name: "Alice Johnson",
      birth_date: new Date("2020-01-01"),
      dx: "Diagnosis 3",
      notes: "Notes 3",
    },
  });

  const record4 = await prisma.record.create({
    data: {
      name: "Bob Brown",
      birth_date: new Date("2000-01-01"),
      dx: "Diagnosis 4",
      notes: "Notes 4",
    },
  });
  const record5 = await prisma.record.create({
    data: {
      name: "Charlie Davis",
      birth_date: new Date("2015-01-01"),
      dx: "Diagnosis 4",
      notes: "Notes 5",
      register_date: new Date("2021-6-01"),
    },
  });

  // Seed Treatments
  await prisma.treatment.create({
    data: {
      title: "Treatment 1",
      report: "Report 1",
      diagnosis: { connect: { id: diagnosis1.id } },
      patient: { connect: { id: record1.id } },
      photoUrl:
        "https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      doctor: "Rick Sanchez",
      external: false,
    },
  });

  await prisma.treatment.create({
    data: {
      title: "Treatment 2",
      report: "Report 2",
      diagnosis: { connect: { id: diagnosis2.id } },
      patient: { connect: { id: record2.id } },
      photoUrl:
        "https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      doctor: "Rick Sanchez",
      external: false,
    },
  });

  await prisma.treatment.create({
    data: {
      title: "Treatment 3",
      report: "Report 3",
      diagnosis: { connect: { id: diagnosis3.id } },
      patient: { connect: { id: record3.id } },
      photoUrl:
        "https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      doctor: "Rick Sanchez",
      external: false,
    },
  });

  await prisma.treatment.create({
    data: {
      title: "Treatment 4",
      report: "Report 4",
      diagnosis: { connect: { id: diagnosis4.id } },
      patient: { connect: { id: record4.id } },
      photoUrl:
        "https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      doctor: "Rick Sanchez",
      external: false,
    },
  });

  await prisma.treatment.create({
    data: {
      title: "Treatment 5",
      report: "Report 5",
      diagnosis: { connect: { id: diagnosis1.id } },
      patient: { connect: { id: record5.id } },
      photoUrl:
        "https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      doctor: "Rick Sanchez",
      external: false,
    },
  });

  await prisma.treatment.create({
    data: {
      title: "Treatment 6",
      report: "Report 6",
      diagnosis: { connect: { id: diagnosis2.id } },
      patient: { connect: { id: record5.id } },
      photoUrl:
        "https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      doctor: "Rick Sanchez",
      external: false,
    },
  });

  // Seed Exams
  await prisma.exam.create({
    data: {
      title: "Exam 1",
      patient: { connect: { id: record1.id } },
    },
  });

  await prisma.exam.create({
    data: {
      title: "Exam 2",
      patient: { connect: { id: record2.id } },
    },
  });

  await prisma.exam.create({
    data: {
      title: "Exam 3",
      patient: { connect: { id: record3.id } },
    },
  });

  await prisma.exam.create({
    data: {
      title: "Exam 4",
      patient: { connect: { id: record4.id } },
    },
  });

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    void prisma.$disconnect();
  });
