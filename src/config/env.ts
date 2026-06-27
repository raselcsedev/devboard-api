// export const env = {
//   nodeEnv: process.env.NODE_ENV || "development",

//   port: Number(process.env.PORT) || 5000,

//   appName: process.env.APP_NAME || "DevBoard API",
// };

export const env = {
  port: Number(process.env.PORT) || 5000,
  nodeEnv: process.env.NODE_ENV || "development",
  appName: process.env.APP_NAME || "DevBoard API",
  apiVersion: process.env.API_VERSION || "v1",
} as const;