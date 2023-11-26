import { initTRPC } from "@trpc/server";

const t = initTRPC.context<any>().create();

export const router = t.router;

export const publicProcedure = t.procedure;
