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


import { Router } from "express";
import { successResponse } from "../../utils/apiResponse.js";

const router = Router();

router.post("/register", (_req, res) => {
  res.status(201).json(
    successResponse("User registered successfully", { userId: "123" })
  );
});

router.post("/login", (_req, res) => {
  res.json(
    successResponse("Login successful", { accessToken: "mock-token" })
  );
});

router.post("/logout", (_req, res) => {
  res.json(successResponse("Logged out successfully"));
});

export default router;