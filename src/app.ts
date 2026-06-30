// import express from "express";

// import { env } from "./config/env.js";
// import routes from "./routes/index.js";
// import { loggerMiddleware } from "./middleware/logger.middleware.js";
// import { errorMiddleware } from "./middleware/error.middleware.js";
// import { notFoundMiddleware } from "./middleware/notFound.middleware.js";

// const app = express();

// // Global Middleware
// app.use(express.json());
// app.use(loggerMiddleware);

// // Root Route
// app.get("/", (_req, res) => {
//   res.json({
//     success: true,
//     message: "Welcome to DevBoard API",
//   });
// });

// // Health Check
// app.get("/health", (_req, res) => {
//   res.json({
//     success: true,
//     status: "OK",
//     uptime: process.uptime(),
//   });
// });

// // API Info
// app.get("/api/info", (_req, res) => {
//   res.json({
//     name: env.appName,
//     version: env.apiVersion,
//     environment: env.nodeEnv,
//   });
// });

// // Versioned Routes
// app.use("/api/v1", routes);

// // Must come AFTER all routes
// app.use(notFoundMiddleware);

// // Must be LAST
// app.use(errorMiddleware);

// export default app;






import express from "express";
import router from "./routes/index.js";
import { errorMiddleware } from "./middleware/error.middleware.js";
import { notFoundMiddleware } from "./middleware/notFound.middleware.js";

const app = express();
app.use(express.json());
app.use("/api/v1", router);

app.use(notFoundMiddleware);   // 404 for unmatched routes
app.use(errorMiddleware);      // must be LAST

export default app;