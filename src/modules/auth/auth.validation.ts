// import { z } from "zod";

// export const loginSchema = z.object({
//   body: z.object({
//     email: z
//       .string({ required_error: "Email is required" })
//       .email("Invalid email format"),

//     password: z
//       .string({ required_error: "Password is required" })
//       .min(8, "Password must be at least 8 characters"),
//   }),
// });

// export type LoginSchema = typeof loginSchema;

import { z } from "zod";

export const loginSchema = z.object({
  body: z.object({
    email: z
      .string({ error: "Email is required" })
      .email("Invalid email format"),

    password: z
      .string({ error: "Password is required" })
      .min(8, "Password must be at least 8 characters"),
  }),
});

export type LoginSchema = typeof loginSchema;