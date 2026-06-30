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
import { AppError } from "../../utils/AppError.js";
import { env } from "../../config/env.js";
const router = Router();

router.post("/register", (_req, _res, next) => {
  next(new AppError(409, "Email already exists"));
});

router.post("/login", (_req, res) => {
  res.json(successResponse("Login successful", { accessToken: "mock-token" }));
});

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

export default router;