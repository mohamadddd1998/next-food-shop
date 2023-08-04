"use client";
import AuthContext from "@/context/AuthCotext";
import { RequestProfileInternalApi } from "@/lib/api";
import { useContext, useState } from "react";
const Info = ({ info }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const handleEdit = async () => {
    RequestProfileInternalApi(
      `${process.env.NEXT_PUBLIC_FRONTEND_API_URL}/profile/edit`,
      {
        name,
        email,
      },
      setUser,
      setLoading,
      () => {},
      "user"
    );
  };
  return (
    <div className="col-sm-12 col-lg-9">
      <div className="vh-70">
        <div className="row g-4">
          <div className="col col-md-6">
            <label className="form-label">نام و نام خانوادگی</label>
            <input
              type="text"
              className="form-control"
              defaultValue={info.name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="col col-md-6">
            <label className="form-label">ایمیل</label>
            <input
              type="text"
              className="form-control"
              defaultValue={info.email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="col col-md-6">
            <label className="form-label">شماره تلفن</label>
            <input
              type="text"
              className="form-control"
              disabled
              defaultValue={info.cellphone}
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-4"
          onClick={handleEdit}
        >
          ویرایش
          {loading && (
            <div
              class="spinner-border spinner-border-sm ms-2"
              role="status"
            ></div>
          )}
        </button>
      </div>
    </div>
  );
};
export default Info;
