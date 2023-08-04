"use client";
import { GeneralRequestApi } from "@/lib/api";
import { useState } from "react";

const Takhfif = ({ setPercentage }) => {
  const [code, setCode] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCode = async () => {
    GeneralRequestApi(
      `${process.env.NEXT_PUBLIC_FRONTEND_API_URL}/coupon`,
      {
        code,
      },
      setLoading,
      setPercentage
    );
  };
  return (
    <div className="row mt-4">
      <div className="col-12 col-md-4">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="کد تخفیف"
            onChange={(e) => setCode(e.target.value)}
            value={code || ""}
          />
          <button
            className="input-group-text"
            id="basic-addon2"
            onClick={handleCode}
            disabled={loading}
          >
            اعمال کد تخفیف
            {loading && (
              <div
                className="spinner-border spinner-border-sm ms-2"
                role="status"
              ></div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Takhfif;
