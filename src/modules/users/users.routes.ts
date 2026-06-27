// import { Router } from "express";

// const router = Router();

// router.get("/", (_req, res) => {
//   res.json({ message: "Get all users" });
// });

// router.get("/:id", (req, res) => {
//   const { id } = req.params;

//   res.json({
//     message: `Get user by id: ${id}`,
//   });
// });

// export default router;

import { Router } from "express";
import { successResponse } from "../../utils/apiResponse.js";

const router = Router();

router.get("/", (_req, res) => {
  res.json(successResponse("Users fetched successfully", []));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  res.json(
    successResponse("User fetched successfully", {
      id,
    }),
  );
});

export default router;
