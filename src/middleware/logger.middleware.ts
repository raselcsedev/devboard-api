// Runtime values
import express from "express";
import { Router } from "express";
import type { Request, Response, NextFunction } from "express";

export function loggerMiddleware(
  req: Request,
  _res: Response,
  next: NextFunction,
): void {
  console.log("========== REQUEST ==========");
  console.log("Method:", req.method);
  console.log("URL:", req.originalUrl);
  console.log("Time:", new Date().toISOString());

  next();
}