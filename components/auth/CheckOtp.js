"use client";
import AuthContext from "@/context/AuthCotext";
import { useContext, useState } from "react";
import { toast } from "react-toastify";

const CheckOtp = () => {
  const { checkOtp, loading } = useContext(AuthContext);
  const [otp, setOtp] = useState("");

  const handleCheckOtp = async (e) => {
    e.preventDefault();
    if (otp == "" || otp == null) {
      toast.error("کد تایید وارد شود");
      return;
    }
    const pattern = /^[0-9]{6}$/;
    if (!pattern.test(otp)) {
      toast.error("فرمت کد تایید معتبر نیست");
      return;
    }
    await checkOtp(otp);
  };
  return (
    <div className="form_container">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            کد تایید
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-auth"
          onClick={handleCheckOtp}
          disabled={loading}
        >
          ارسال
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
export default CheckOtp;
