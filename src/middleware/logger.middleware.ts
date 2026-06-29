import type { NextFunction, Request, Response } from "express";
export function loggerMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const start = Date.now();

  console.log("========== REQUEST ==========");
  console.log("Method :", req.method);
  console.log("URL    :", req.originalUrl);
  console.log("Time   :", new Date().toISOString());

  res.on("finish", () => {
    console.log("========== RESPONSE =========");
    console.log("Status :", res.statusCode);
    console.log("Time   :", `${Date.now() - start} ms`);
    console.log("=============================\n");
  });

  next();
}