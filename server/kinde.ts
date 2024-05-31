import {
  createKindeServerClient,
  GrantType,
  SessionManager,
  type UserType,
} from "@kinde-oss/kinde-typescript-sdk";
import type { Context, Next } from "hono";
import { getCookie, setCookie, deleteCookie } from "hono/cookie";
import { createMiddleware } from "hono/factory";

type Env = {
  Variables: {
    user: UserType;
  };
};
export const kindeClient = createKindeServerClient(
  GrantType.AUTHORIZATION_CODE,
  {
    authDomain: process.env.KINDE_DOMAIN!,
    clientId: process.env.KINDE_CLIENT_ID!,
    clientSecret: process.env.KINDE_CLIENT_SECRET!,
    redirectURL: process.env.KINDE_REDIRECT_URI!,
    logoutRedirectURL: process.env.KINDE_LOGOUT_REDIRECT_URI!,
  },
);

export const sessionManager = (c: Context): SessionManager => ({
  async getSessionItem(key: string) {
    const result = getCookie(c, key);
    return result;
  },
  async setSessionItem(key: string, value: unknown) {
    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Lax",
    } as const;
    if (typeof value === "string") {
      setCookie(c, key, value, cookieOptions);
    } else {
      setCookie(c, key, JSON.stringify(value), cookieOptions);
    }
  },
  async removeSessionItem(key: string) {
    deleteCookie(c, key);
  },
  async destroySession() {
    ["id_token", "refresh_token", "access_token", "user"].forEach((key) => {
      deleteCookie(c, key);
    });
  },
});

//auth middleware
export const getUser = createMiddleware<Env>(async (c: Context, next: Next) => {
  try {
    const manager = sessionManager(c);
    const isAuthenticated = await kindeClient.isAuthenticated(manager);
    if (!isAuthenticated) {
      // Need to implement, e.g: call an api, etc...
      return c.json({ error: "unauthorized" }, 401);
    }
    const user = await kindeClient.getUserProfile(manager);
    c.set("user", user);
    await next();
  } catch (err) {
    console.error(err);
    return c.json({ error: "unauthorized" }, 401);
  }
});
