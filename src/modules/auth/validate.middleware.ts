import type { Request, Response, NextFunction } from "express";
import type { ZodTypeAny } from "zod";
import { ZodError } from "zod";
import { errorResponse } from "../../utils/apiResponse.js";

export function validate(schema: ZodTypeAny) {
  return async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      await schema.parseAsync({
        body   : req.body,
        query  : req.query,
        params : req.params,
      });

      next();
    } catch (err) {
      if (err instanceof ZodError) {
        const errors = err.issues.map((e) => ({
          field   : e.path.slice(1).join("."),
          message : e.message,
        }));

        res.status(422).json({
          ...errorResponse("Validation failed"),
          errors,
        });
        return;
      }

      next(err);
    }
  };
}