// import { z } from "zod";

// export const listBoardsSchema = z.object({
//   query: z.object({
//     page: z
//       .string()
//       .optional()
//       .default("1")
//       .pipe(
//         z.coerce
//           .number({ error: "page must be a number" })
//           .int("page must be an integer")
//           .min(1, "page must be at least 1"),
//       ),

//     limit: z
//       .string()
//       .optional()
//       .default("10")
//       .pipe(
//         z.coerce
//           .number({ error: "limit must be a number" })
//           .int("limit must be an integer")
//           .min(1,  "limit must be at least 1")
//           .max(100, "limit must not exceed 100"),
//       ),

//     search: z.string().optional().default(""),

//     sort: z
//       .enum(["createdAt", "updatedAt", "title"], {
//         error: "sort must be createdAt, updatedAt, or title",
//       })
//       .optional()
//       .default("createdAt"),

//     order: z
//       .enum(["asc", "desc"], {
//         error: "order must be asc or desc",
//       })
//       .optional()
//       .default("desc"),
//   }),
// });

// export type ListBoardsSchema = typeof listBoardsSchema;

import { z } from "zod";

export const listBoardsSchema = z.object({
  query: z.object({
    page: z.coerce
      .number({ error: "page must be a number" })
      .int("page must be an integer")
      .min(1, "page must be at least 1")
      .optional()
      .default(1),

    limit: z.coerce
      .number({ error: "limit must be a number" })
      .int("limit must be an integer")
      .min(1,   "limit must be at least 1")
      .max(100, "limit must not exceed 100")
      .optional()
      .default(10),

    search: z.string().optional().default(""),

    sort: z
      .enum(["createdAt", "updatedAt", "title"])
      .optional()
      .default("createdAt"),

    order: z
      .enum(["asc", "desc"])
      .optional()
      .default("desc"),
  }),
});

export type ListBoardsSchema = typeof listBoardsSchema;