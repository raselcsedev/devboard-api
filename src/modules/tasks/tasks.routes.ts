import { Router } from "express";
import { successResponse } from "../../utils/apiResponse.js";

const router = Router();

// GET /api/v1/tasks/:id
router.get("/:id", (req, res) => {
  res.json(successResponse("Task fetched successfully", {
    id      : req.params.id,
    title   : "Mock task",
    status  : "TODO",
  }));
});

// PATCH /api/v1/tasks/:id
router.patch("/:id", (req, res) => {
  res.json(successResponse("Task updated successfully", {
    id      : req.params.id,
    updated : true,
  }));
});

// DELETE /api/v1/tasks/:id
router.delete("/:id", (req, res) => {
  res.json(successResponse("Task deleted successfully"));
});

export default router;