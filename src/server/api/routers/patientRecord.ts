import { z } from "zod";
import { db } from "../../db";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const patientRecordRouter = createTRPCRouter({
  createPatientRecord: publicProcedure
    .input(
      z.object({
        name: z.string(),
        b_date: z.date().optional(),
        r_date: z.date().optional(),
        dx: z.string(),
        notes: z.string(),
        photoUrl: z.string(),
        active: z.boolean(),
      }),
    )
    .mutation(({ input }) => {
      const patientRecord = db.record.create({
        data: {
          name: input.name,
          birth_date: input.b_date ?? new Date(),
          register_date: input.r_date ?? new Date(),
          dx: input.dx,
          notes: input.notes,
          photoUrl: input.photoUrl,
          active: true,
        },
      });
      return patientRecord;
    }),

  getPatientRecords: publicProcedure.query(async () => {
    const patientRecords = await db.record.findMany();
    return patientRecords;
  }),

  updatePatientRecord: publicProcedure
    .input(
      z.object({
        id: z.string(), // ID del registro que se va a actualizar
        name: z.string(),
        birth_date: z.date().optional(),
        register_date: z.date().optional(),
        dx: z.string(),
        notes: z.string(),
        record_link: z.string(),
        sex: z.boolean(),
        active: z.boolean(),
      }),
    )
    .mutation(async ({ input }) => {
      const updatedPatientRecord = await db.record.update({
        where: { id: input.id },
        data: {
          name: input.name,
          birth_date: input.birth_date ?? new Date(),
          register_date: input.register_date ?? new Date(),
          dx: input.dx,
          notes: input.notes,
          record_link: input.record_link,
          sex: input.sex,
          active: input.active,
        },
      });
      return updatedPatientRecord;
    }),

  deletePatientRecord: publicProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      try {
        const deletePatientRecord = await db.record.delete({
          where: { id: input.id },
        });
        return deletePatientRecord;
      } catch (error) {
        throw new Error("No se pudo eliminar el registro del paciente");
      }
    }),
});

export const treatmentRouter = createTRPCRouter({
  // Crear un tratamiento
  createTreatment: publicProcedure
    .input(
      z.object({
        title: z.string(),
        report: z.string(),
        patientId: z.string(),
        doctor: z.string(),
        external: z.boolean().optional(),
        // photoUrl: z.string(),
        diagnosis: z.string(),
        date: z.date(),
      }),
    )
    .mutation(async ({ input }) => {
      const createdTreatment = await db.treatment.create({
        data: {
          title: input.title,
          report: input.report,
          patientId: input.patientId,
          doctor: input.doctor,
          external: input.external ?? true, // Valor por defecto
          diagnosis: input.diagnosis,
          date: input.date,
        },
      });

      return createdTreatment;
    }),

  getTreatments: publicProcedure
    .input(
      z
        .object({
          patientId: z.string().optional(),
        })
        .optional(),
    )
    .query(async ({ input }) => {
      const treatments = await db.treatment.findMany({
        where: input?.patientId ? { patientId: input.patientId } : undefined,
      });
      return treatments;
    }),

  getTreatmentsByPatientId: publicProcedure
    .input(
      z.object({
        patientId: z.string(),
      }),
    )
    .query(async ({ input }) => {
      const treatments = await db.treatment.findMany({
        where: { patientId: input.patientId },
      });
      return treatments;
    }),

  // Actualizar un tratamiento
  updateTreatment: publicProcedure
    .input(
      z.object({
        id: z.string(),
        title: z.string(),
        report: z.string(),
        doctor: z.string(),
        external: z.boolean().optional(),
        diagnosis: z.string(),
        date: z.date(),
        // photoUrlTreatment: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      const updatedTreatment = await db.treatment.update({
        where: { id: input.id },
        data: {
          title: input.title,
          report: input.report,
          doctor: input.doctor,
          external: input.external ?? false,
          date: input.date,
          // photoUrl: input.photoUrlTreatment,
        },
      });
      console.log(input);
      return updatedTreatment;
    }),

  // Eliminar un tratamiento
  deleteTreatment: publicProcedure
    .input(
      z.object({
        id: z.string(), // ID del tratamiento a eliminar
      }),
    )
    .mutation(async ({ input }) => {
      await db.treatment.delete({
        where: { id: input.id },
      });
      return { message: "Tratamiento eliminado con éxito" };
    }),
});
