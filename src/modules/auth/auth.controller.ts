import type { Request, Response } from "express";
import { successResponse } from "../../utils/apiResponse.js";
import * as authService from "./auth.service.js";

export async function login(
  req: Request,
  res: Response,
): Promise<void> {
  console.log("🎮 Controller: Login request");

  const { email } = req.body;

  const result = await authService.login(email);

  res.json(
    successResponse("Login successful", result),
  );
}