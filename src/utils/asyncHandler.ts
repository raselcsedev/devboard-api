// import type {
//   NextFunction,
//   Request,
//   RequestHandler,
//   Response,
// } from "express";

// export function asyncHandler(
//   handler: (
//     req: Request,
//     res: Response,
//     next: NextFunction,
//   ) => Promise<void>,
// ): RequestHandler {
//   return (req, res, next) => {
//     Promise.resolve(handler(req, res, next)).catch(next);
//   };
// }

import type { Request, Response, NextFunction } from "express";

type AsyncFn = (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<void>;

export function asyncHandler(fn: AsyncFn) {
  return (req: Request, res: Response, next: NextFunction): void => {
    fn(req, res, next).catch(next);
  };
}