import Empty from "@/components/Empty";
import Profile from "@/components/profile/Profile";
import axios from "axios";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

const getInfo = async () => {
  try {
    const response = await axios.get(`${process.env.BACKEND_API_URL}/profile/info`, {
      headers: {
        Authorization: `Bearer ${cookies().get("token").value}`,
      },
    });
    return await response.data;
  } catch (error) { 
    return notFound();
  }
};
export const metadata={
  title:'پروفایل'
}
const ProfilePage = async () => {
  const info = await getInfo();
  return (
    <>
      {info.data ? (
        <Profile info={info.data} />
      ) : (
        <div className="col-sm-12 col-lg-9">
          <Empty message={"اطلاعاتی برای نمایش وجود ندارد"} />
        </div>
      )}
    </>
  );
};
export default ProfilePage;
