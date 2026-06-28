import express from "express";
import { env } from "./config/env.js";

const app = express();

// // Built-in middleware
// app.use(express.json());

// app.get("/", (_req, res) => {
//   res.status(200).json({
//     success: true,
//     message: "Welcome to DevBoard API",
//   });
// });

// app.get("/health", (_req, res) => {
//   res.status(200).json({
//     success: true,
//     status: "OK",
//     uptime: process.uptime(),
//     timestamp: new Date().toISOString(),
//   });
// });

// app.get("/api/info", (_req, res) => {
//   res.status(200).json({
//     name: env.appName,
//     version: env.apiVersion,
//     environment: env.nodeEnv,
//   });
// });

// app.use((req, _res, next) => {
//   console.log("========== REQUEST ==========");
//   console.log("Method :", req.method);
//   console.log("URL    :", req.originalUrl);
//   console.log("Time   :", new Date().toISOString());

//   next();
// });

// export default app;

import { loggerMiddleware } from "./middleware/logger.middleware.js";

app.use(loggerMiddleware);