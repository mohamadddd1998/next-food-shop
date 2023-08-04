import { handleError } from "@/lib/helper";
import axios from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
  if (!cookies().get("token")) {
    return NextResponse.json({ message: "احراز هویت نشده", success: false });
  }
  try {
    const resApi = await axios.post(
      `${process.env.BACKEND_API_URL}/auth/logout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${cookies().get("token").value}`,
        },
      }
    );

    cookies().set({
      name: "token",
      value: "",
      httpOnly: true,
      path: "/",
      expires: new Date(0),
    });

    return NextResponse.json({
      user: null,
      success: true,
      message: "خروج با موفقیت انجام شد",
    });
  } catch (error) {
    console.log(error.response.data);
    return NextResponse.json({ message: handleError(error), success: false });
  }
}
