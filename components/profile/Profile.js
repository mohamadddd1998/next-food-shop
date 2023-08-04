"use client";
import Sidebar from "./Sidebar";
import Info from "./Info";

const Profile = ({ info }) => {
  return (
      <section className="profile_section layout_padding">
        <div className="container">
          <div className="row">
            <Sidebar />
            <Info info={info} />
          </div>
        </div>
      </section>
  );
};
export default Profile;
