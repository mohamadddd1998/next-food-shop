"use client";
import { RequestAuthInternalApi } from "@/lib/api";
import { useRouter } from "next/navigation";
import React, { createContext,useEffect, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  useEffect(() => {
    checkIsLogin();
  }, []);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [user, setUser] = useState(null);

  const login = (cellphone) => {
    RequestAuthInternalApi(
      `${process.env.NEXT_PUBLIC_FRONTEND_API_URL}/auth/login`,
      { cellphone },
      setUser,
      setLoading,
      () => setShow(true),
      () => {}
    );
  };
  const checkOtp = (otp) => {
    RequestAuthInternalApi(
      `${process.env.NEXT_PUBLIC_FRONTEND_API_URL}/auth/checkOtp`,
      { otp },
      setUser,
      setLoading,
      () => setShow(false),
      () => router.push("/")
    );
  };

  const checkIsLogin = () => {
    RequestAuthInternalApi(
      `${process.env.NEXT_PUBLIC_FRONTEND_API_URL}/auth/me`,
      {},
      setUser,
      () => {},
      () => setShow(false),
      () => {}
    );
  };

  const logout = () => {
    RequestAuthInternalApi(
      `${process.env.NEXT_PUBLIC_FRONTEND_API_URL}/auth/logout`,
      {},
      setUser,
      () => {},
      () => setShow(false),
      () => router.push("/")
    );
  };

  return (
    <AuthContext.Provider
      value={{ login, loading, show, checkOtp, user, logout, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
