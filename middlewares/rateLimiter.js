import config from "config";
import { rateLimit } from "express-rate-limit";

const rateLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: config.get("App.request-limit"),
  message: {
    code: 429,
    status: "Too many requests",
    message: "Too many requests chief, try again later",
    data: {},
  },
});

export { rateLimiter };
