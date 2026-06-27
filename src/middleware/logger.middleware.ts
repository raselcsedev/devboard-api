import { Router } from "express";
import type { NextFunction, Request, Response } from "express";
export function loggerMiddleware(
  req: Request,
  _res: Response,
  next: NextFunction,
): void {
  console.log("========== REQUEST ==========");
  console.log("Method :", req.method);
  console.log("URL    :", req.originalUrl);
  console.log("Time   :", new Date().toISOString());

  next();
}