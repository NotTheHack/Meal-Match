import { router } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import { apiRouter } from "./api";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  api: apiRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
