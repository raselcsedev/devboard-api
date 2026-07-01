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



// import { Router } from "express";
// import { successResponse } from "../../utils/apiResponse.js";

// const router = Router();

// router.get("/", (_req, res) => {
//   res.json(successResponse("Users fetched successfully", []));
// });

// router.get("/profile", (_req, res) => {
//   res.json(
//     successResponse("Profile fetched successfully", {
//       id: "user-1",
//       name: "Md. Rasel",
//       role: "USER",
//     }),
//   );
// });

// router.get("/:id", (req, res) => {
//   const { id } = req.params;

//   res.json(
//     successResponse("User fetched successfully", {
//       id,
//     }),
//   );
// });

// export default router;




import { Router } from "express";
import { successResponse } from "../../utils/apiResponse.js";
import { AppError } from "../../errors/AppError.js";

const router = Router();

router.get("/", (_req, res) => {
  res.json(successResponse("Users fetched successfully", []));
});

router.get("/profile", (_req, res) => {
  res.json(successResponse("Profile fetched successfully", {
    id: "user-1", name: "Md. Rasel", role: "USER",
  }));
});

router.get("/:id", (req, res) => {
  res.json(successResponse("User fetched successfully", { id: req.params.id }));
});

router.patch("/:id", (_req, _res, next) => {
  next(new AppError(422, "Invalid email format"));
});

export default router;