// import { Router } from "express";

// const router = Router();

// router.get("/", (_req, res) => {
//   res.json({ message: "Get all boards" });
// });

// router.post("/", (_req, res) => {
//   res.status(201).json({ message: "Create board" });
// });

// export default router;

import { Router } from "express";
import { successResponse } from "../../utils/apiResponse.js";
import { AppError } from "../../errors/AppError.js";
import { asyncHandler } from "../../utils/asyncHandler.js";

const router = Router();

router.get(
  "/",
  asyncHandler(async (_req, res) => {
    res.json(successResponse("Boards fetched successfully", []));
  }),
);

router.post("/", (_req, res) => {
  res
    .status(201)
    .json(successResponse("Board created successfully", { id: "mock-id" }));
});

router.get("/error", (_req, _res) => {
  throw new AppError(404, "Board not found");
});

export default router;
