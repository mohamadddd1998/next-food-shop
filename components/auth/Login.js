"use client";
import AuthContext from "@/context/AuthCotext";
import { useContext, useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const { login, loading } = useContext(AuthContext);
  const [cellphone, setCellphone] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    if (cellphone == "" || cellphone == null) {
      toast.error("شماره موبایل وارد شود");
      return;
    }
    const pattern = /^(\+98|0)?9\d{9}$/;
    if (!pattern.test(cellphone)) {
      toast.error("فرمت شماره موبایل معتبر نیست");
      return;
    }
    await login(cellphone);
  };
  return (
    <div className="form_container">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            شماره موبایل
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setCellphone(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-auth"
          onClick={handleLogin}
          disabled={loading}
        >
          ورود
          {loading && (
            <div
              className="spinner-border spinner-border-sm ms-2"
              role="status"
            ></div>
          )}
        </button>
      </form>
    </div>
  );
};
export default Login;
