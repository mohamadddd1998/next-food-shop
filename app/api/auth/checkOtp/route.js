import { handleError } from "@/lib/helper";
import axios from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { otp } = await req.json();
  if (!cookies().get("login_token")) {
    return NextResponse.json({ message: "احراز هویت نشده", success: false });
  }
  try {
    const resApi = await axios.post(
      `${process.env.BACKEND_API_URL}/auth/check-otp`,
      {
        otp,
        login_token: cookies().get("login_token").value,
      }
    );

    cookies().set({
      name: "login_token",
      value: "",
      httpOnly: true,
      path: "/",
      expires: new Date(0),
    });
    cookies().set({
      name: "token",
      value: resApi.data.data.token,
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7, //1 week
    });

    return NextResponse.json({
      user: resApi.data.data.user,
      success: true,
      message: "ورود با موفقیت انجام شد",
    });
  } catch (error) {
    console.log(error.response.data);
    return NextResponse.json({ message: handleError(error), success: false });
  }
}
