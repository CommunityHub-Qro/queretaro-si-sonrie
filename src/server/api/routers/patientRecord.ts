    import { z } from "zod";
    import { db } from "../../db";

    import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
    } from "~/server/api/trpc";
    import UpdatePatientRecord from "~/app/_components/organisms/updatePatientRecord";
    import DeletePatientRecord from "~/app/_components/organisms/deletePatientRecord";

    export const patientRecordRouter = createTRPCRouter({

        createPatientRecord: publicProcedure.input(z.object({
            name:z.string(),
            b_date:z.date().optional(),
            r_date:z.date().optional(),
            dx:z.string(),
            notes:z.string(),
        })).mutation(({input}) => {
            const patientRecord = db.record.create({
                data:{
                    name: input.name,
                    birth_date: input.b_date || new Date(), 
                    register_date: input.r_date || new Date(),
                    dx: input.dx,
                    notes: input.notes
                }
            });
            return   patientRecord;
        }),

        getPatientRecords: publicProcedure.query(async () => {
            const patientRecords = await db.record.findMany();
            return patientRecords;
        }),

        updatePatientRecord: publicProcedure.input(z.object({
            id: z.string(), // ID del registro que se va a actualizar
            name: z.string(),
            birth_date: z.date().optional(),
            register_date: z.date().optional(),
            dx: z.string(),
            notes: z.string(),
          })).mutation(async ({ input }) => {
            const updatedPatientRecord = await db.record.update({
              where: { id: input.id },
              data: {
                name: input.name,
                birth_date: input.birth_date || new Date(),
                register_date: input.register_date || new Date(),
                dx: input.dx,
                notes: input.notes,
              }
            });
            return updatedPatientRecord;
          }),

        deletePatientRecord: publicProcedure
          .input(
            z.object({
              id: z.string(),
            })
          )
          .mutation(async ({input}) => {
            try{
              const deletePatientRecord = await db.record.delete({
                where: {id: input.id},
              });
              return deletePatientRecord;
            }catch(error){
              throw new Error("No se pudo eliminar el registro del paciente");
            }
          }),
    });