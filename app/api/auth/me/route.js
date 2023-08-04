import axios from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
  if (!cookies().get("token")) {
    return NextResponse.json({ message: "احراز هویت نشده", success: false });
  }
  try {
    const resApi = await axios.post(
      `${process.env.BACKEND_API_URL}/auth/me`,
      {},
      {
        headers: {
          Authorization: `Bearer ${cookies().get("token").value}`,
        },
      }
    );
    return NextResponse.json({
      user: resApi.data.data,
      success: true,
      message: ` خوش آمدید ${resApi.data.data.name}`,
    });
  } catch (error) {
    return NextResponse.json({ message: "احراز هویت نشده", success: false });
  }
}
