"use client";
import CheckOtp from "@/components/auth/CheckOtp";
import Login from "@/components/auth/Login";
import AuthContext from "@/context/AuthCotext";
import { useContext } from "react";
export const metadata = {
  title: "ورود",
};
const LoginPage = () => {
  const { show } = useContext(AuthContext);
  return (
    <section className="auth_section book_section">
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-4 offset-md-4">
            <div className="card">
              <div className="card-body">{show ? <CheckOtp /> : <Login />}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LoginPage;
