import { postRouter } from "~/server/api/routers/post";
import { patientRecordRouter, treatmentRouter } from "~/server/api/routers/patientRecord";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { newUser } from "./routers/newUser";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  patientRecord: patientRecordRouter,
  newUser: newUser,
  treatment: treatmentRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
