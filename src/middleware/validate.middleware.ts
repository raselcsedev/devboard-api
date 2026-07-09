import type { Request, Response, NextFunction } from "express";
import type { ZodTypeAny } from "zod";
import { ZodError } from "zod";
import { errorResponse } from "../utils/apiResponse.js";

export function validate(schema: ZodTypeAny) {
  return async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });

      next();
    } catch (err) {
      if (err instanceof ZodError) {
        // take the first issue message only
        const message = err.issues[0]?.message ?? "Validation failed";

        res.status(400).json(errorResponse(message));
        return;
      }

      next(err);
    }
  };
}
