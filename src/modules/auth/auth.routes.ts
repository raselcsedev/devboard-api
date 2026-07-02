// import { Router } from "express";

// const router = Router();

// router.post("/register", (_req, res) => {
//   res.json({
//     message: "Register API",
//   });
// });

// router.post("/login", (_req, res) => {
//   res.json({
//     message: "Login API",
//   });
// });

// router.post("/logout", (_req, res) => {
//   res.json({
//     message: "Logout API",
//   });
// });

// export default router;


// import { Router } from "express";
// import { successResponse } from "../../utils/apiResponse.js";

// const router = Router();

// router.post("/register", (_req, res) => {
//   res.status(201).json(
//     successResponse("User registered successfully", { userId: "123" })
//   );
// });

// router.post("/login", (_req, res) => {
//   res.json(
//     successResponse("Login successful", { accessToken: "mock-token" })
//   );
// });

// router.post("/logout", (_req, res) => {
//   res.json(successResponse("Logged out successfully"));
// });

// export default router;




import { Router } from "express";
import { successResponse } from "../../utils/apiResponse.js";
import { env } from "../../config/env.js";
import * as authController from "./auth.controller.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { AppError } from "../../errors/AppError.js";
import { validate } from "./validate.middleware.js";
import { loginSchema } from "./auth.validation.js";

const router = Router();

// router.post("/register", (_req, _res, next) => {
//   next(new AppError(409, "Email already exists"));
// });

router.post("/register", (req, res, next) => {
  const { email } = req.body;

  if (email === "taken@example.com") {
    return next(new AppError(409, "Email already exists"));
  }

  res.status(201).json(
    successResponse("User registered successfully", { userId: "123" })
  );
});

// router.post("/login", (_req, res) => {
//   res.json(successResponse("Login successful", { accessToken: "mock-token" }));
// });

// router.post("/login", authController.login);
router.post(
  "/login",
  validate(loginSchema),
  asyncHandler(authController.login),
);

// router.post("/logout", (_req, res) => {
//   res.json(successResponse("Logged out successfully"));
// });


// router.post("/logout", (_req, res) => {
//   res.clearCookie("refreshToken", {
//     httpOnly : true,
//     secure   : process.env.NODE_ENV === "production",
//     sameSite : "strict",
//     path     : "/api/v1/auth",
//   });

//   res.sendStatus(204);
// });

router.post("/logout", (_req, res) => {
  res.clearCookie("refreshToken", {
    httpOnly : true,
    secure   : env.nodeEnv === "production",
    sameSite : "strict",
    path     : "/api/v1/auth",
  });

  res.sendStatus(204);
});

router.get("/headers", (req, res) => {
  res.json(
    successResponse("Request headers", {
      headers: req.headers,
    }),
  );
});

export default router;