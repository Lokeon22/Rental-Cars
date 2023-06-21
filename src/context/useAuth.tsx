"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { setCookie, parseCookies } from "nookies";

import { User, UserInfo } from "@/@types/User";

interface AuthContextProps {
  user?: UserInfo;
  handleLogin: ({ email, password }: { email: string; password: string }) => void;
}

const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserInfo>();

  useEffect(() => {
    const { "rentals.token": token, "rentals.user": user } = parseCookies();

    if (token) {
      const userConvert: UserInfo = JSON.parse(user);
      setUser(userConvert);
    }
  }, []);

  async function handleLogin({ email, password }: { email: string; password: string }) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_POMBAL_STORE_API}/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { user, token }: User = await res.json();

    if (!res.ok) {
      return alert("Email e/ou senha incorretos");
    }

    if (res.ok) {
      setCookie(null, "rentals.token", token, {
        maxAge: 60 * 60 * 6, //6 hours
        path: "/",
      });

      setCookie(null, "rentals.user", JSON.stringify(user), {
        maxAge: 60 * 60 * 6,
        path: "/",
      });

      const win: Window = window;
      win.location = "/home";

      setUser(user);
    }
  }

  return <AuthContext.Provider value={{ user, handleLogin }}>{children}</AuthContext.Provider>;
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
