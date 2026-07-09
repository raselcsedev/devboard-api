import { z } from "zod";

export const requestSchema = z.object({
  body: z.object({}).optional(),
  params: z.object({}).optional(),
  query: z.object({}).optional(),
  headers: z.object({}).optional(),
});

export type RequestSchema = typeof requestSchema;