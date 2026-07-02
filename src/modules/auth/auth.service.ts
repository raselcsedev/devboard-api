// import { AppError } from "../../errors/AppError.js";
// import * as authRepository from "./auth.repository.js";

// export async function login(email: string) {
//   console.log("📦 Service: Checking user...");

//   const user = await authRepository.findByEmail(email);

// if (!user) {
//   throw new AppError(
//     404,
//     "Invalid email or passwor",
//   );
// }

//   return {
//     accessToken: "mock-token",
//     user,
//   };
// }

import { AppError } from "../../errors/AppError.js";
import * as authRepository from "./auth.repository.js";
import type { LoginInput, LoginResult } from "./auth.types.js";

export async function login(input: LoginInput): Promise<LoginResult> {
  console.log("📦 Service: Checking user...");

  const user = await authRepository.findByEmail(input.email);

  if (!user) {
    throw new AppError(401, "Invalid email or password");
  }

  return {
    accessToken: "mock-token",
    user,
  };
}
