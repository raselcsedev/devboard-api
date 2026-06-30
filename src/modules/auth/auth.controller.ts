import type { Request, Response } from "express";
import { successResponse } from "../../utils/apiResponse.js";
import * as authService from "./auth.service.js";

export async function login(
  _req: Request,
  res: Response,
): Promise<void> {
  console.log("🎮 Controller: Login request");

  const result = await authService.login();

  res.json(
    successResponse("Login successful", result),
  );
}