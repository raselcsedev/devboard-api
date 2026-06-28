import type {
  ErrorRequestHandler,
} from "express";

import { AppError } from "../errors/AppError.js";
import { errorResponse } from "../utils/apiResponse.js";

export const errorMiddleware: ErrorRequestHandler = (
  error,
  _req,
  res,
  _next,
) => {
  console.error(error);

  if (error instanceof AppError) {
    res.status(error.statusCode).json(
      errorResponse(error.message),
    );

    return;
  }

  res.status(500).json(
    errorResponse(
      "Internal Server Error",
    ),
  );
};