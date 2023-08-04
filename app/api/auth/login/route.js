import { handleError } from "@/lib/helper";
import axios from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { cellphone } = await req.json();
  try {
    const resApi = await axios.post(`${process.env.BACKEND_API_URL}/auth/login`, {
      cellphone,
    });
    cookies().set({
      name: "login_token",
      value: resApi.data.data.login_token,
      httpOnly: true,
      path: "/",
    });
    return NextResponse.json({
      user: null,
      message: "کد تایید برای شما ارسال شد",
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      message: handleError(error),
      success: false,
    });
  }
}
