// import express from "express";

// const app = express();

// const PORT = 5000;

// app.get("/", (req, res) => {
//   res.json({
//     success: true,
//     message: "Welcome to DevBoard API",
//   });
// });

// app.get("/health", (req, res) => {
//   res.status(200).json({
//     success: true,
//     status: "OK",
//     uptime: process.uptime(),
//     timestamp: new Date().toISOString(),
//   });
// });

// app.get("/api/info", (req, res) => {
//   res.json({
//     name: "DevBoard API",
//     version: "1.0.0",
//     environment: process.env.NODE_ENV ?? "development",
//   });
// });

// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });

import "dotenv/config";

import app from "./app.js";
import { env } from "./config/env.js";

app.listen(env.port, () => {
  console.log("=================================");
  console.log(`🚀 ${env.appName} started`);
  console.log(`🌍 Environment : ${env.nodeEnv}`);
  console.log(`📦 API Version : ${env.apiVersion}`);
  console.log(`🔗 Port        : ${env.port}`);
  console.log("=================================");
});

const server = app.listen(env.port, () => {
  console.log(`🚀 ${env.appName} running on port ${env.port}`);
});

process.on("SIGTERM", () => {
  console.log("SIGTERM received. Shutting down gracefully...");

  server.close(() => {
    console.log("Server closed.");
    process.exit(0);
  });
});