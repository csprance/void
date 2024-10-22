export const isProd = Boolean(
  process.env.NODE_ENV && process.env.NODE_ENV === "production",
);
