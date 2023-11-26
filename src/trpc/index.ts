import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  anyAPiRoute: publicProcedure.query(() => {
    return "Hello";
  }),
});

export type AppRouter = typeof appRouter;
