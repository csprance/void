import { Next } from "@tsed/common";
import { Middleware, MiddlewareMethods } from "@tsed/platform-middlewares";
import { Context } from "@tsed/platform-params";
import rateLimit, { Options } from "express-rate-limit";
import ms from "ms";

export enum RateLimits {
  // These are things like login/logout/signup/signin
  AUTH = "AUTH",
  // These are things like creating/deleting/updating accounts
  ACCOUNT = "ACCOUNT",
  // This is anything the public should be able to access
  PUBLIC = "PUBLIC",
}
const RateLimitConfig: Record<RateLimits, Partial<Options>> = {
  [RateLimits.AUTH]: {
    windowMs: ms("1 minute"),
    max: 30,
    handler: (req, res) => {
      console.log("Rate limit exceeded for auth");
      res.status(429).send("Too many requests, please try again later.");
    },
  },
  [RateLimits.ACCOUNT]: {
    windowMs: ms("15 minutes"),
    max: 100,
    handler: (req, res) => {
      console.log("Rate limit exceeded for account");
      res
        .status(429)
        .send("Too many account creation attempts, please try again later.");
    },
  },
  [RateLimits.PUBLIC]: {
    windowMs: ms("30 minutes"),
    max: 200,
    handler: (req, res) => {
      console.log("Rate limit exceeded for public API");
      res.status(429).send("Too many requests, please try again later.");
    },
  },
  // Add more configurations as needed
};

export function makeRateLimitMiddleware(name: RateLimits) {
  const config = RateLimitConfig[name];

  if (!config) {
    throw new Error(`No rate limit configuration found for name: ${name}`);
  }

  const limiter = rateLimit(config);

  @Middleware()
  class RateLimitMiddleware implements MiddlewareMethods {
    public use(@Context() ctx: Context, @Next() next: Next) {
      return limiter(ctx.request as any, ctx.response as any, next);
    }
  }

  return RateLimitMiddleware;
}
