// import type { Request, Response } from "express";
// import { successResponse } from "../../utils/apiResponse.js";
// import * as authService from "./auth.service.js";

// export async function login(
//   req: Request,
//   res: Response,
// ): Promise<void> {
//   console.log("🎮 Controller: Login request");

//   const { email } = req.body;

//   const result = await authService.login(email);

//   res.json(
//     successResponse("Login successful", result),
//   );
// }

import type { Request, Response } from "express";
import { successResponse } from "../../utils/apiResponse.js";
import * as authService from "./auth.service.js";
import type { LoginInput } from "./auth.types.js";
import type { LoginResponseDto } from "./auth.dto.js";

export async function login(req: Request, res: Response): Promise<void> {
  console.log("🎮 Controller: Login request");

  const input: LoginInput = {
    email: req.body.email,
    password: req.body.password,
    ipAddress: req.ip ?? "",
    userAgent: req.headers["user-agent"] ?? "",
  };

  const result = await authService.login(input);

  // res.json(successResponse("Login successful", result));

  const response: LoginResponseDto = {
    accessToken: result.accessToken,
    user: result.user,
  };

  res.json(successResponse("Login successful", response));
}
