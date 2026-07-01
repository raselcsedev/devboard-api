
import { AppError } from "../../errors/AppError.js";
import * as authRepository from "./auth.repository.js";

export async function login(email: string) {
  console.log("📦 Service: Checking user...");

  const user = await authRepository.findByEmail(email);

if (!user) {
  throw new AppError(
    404,
    "Invalid email or passwor",
  );
}

  return {
    accessToken: "mock-token",
    user,
  };
}