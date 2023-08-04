import { handleError } from "@/lib/helper";
import axios from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { code } = await req.json();
  if (!cookies().get("token")) {
    return NextResponse.json({ message: "احراز هویت نشده", success: false });
  }
  try {
    const resApi = await axios.post(
      `${process.env.BACKEND_API_URL}/check-coupon`,
      { code },
      {
        headers: {
          Authorization: `Bearer ${cookies().get("token").value}`,
        },
      }
    );
    return NextResponse.json({
      data: resApi.data.data.percentage,
      success: true,
      status:'success'
    });
  } catch (error) {
    return NextResponse.json({ message: handleError(error), success: false,status:'error' });
  }
}
