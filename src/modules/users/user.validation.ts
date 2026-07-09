import { z } from "zod";

export const getUserSchema = z.object({
  params: z.object({
    id: z
      .string({ error: "User ID is required" })
      .uuid("Invalid user ID — must be a valid UUID"),
  }),
});

export type GetUserSchema = typeof getUserSchema;