import { handleError } from "@/lib/helper";
import axios from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { name, email } = await req.json();
  if (!cookies().get("token")) {
    return NextResponse.json({ message: "احراز هویت نشده", success: false });
  }
  try {
    const resApi = await axios.post(
      "http://localhost:8000/api/profile/info/edit",
      {
        name,
        email,
      },
      {
        headers: {
          Authorization: `Bearer ${cookies().get("token").value}`,
        },
      }
    );
    return NextResponse.json({
      data: { user: resApi.data.data },
      success: true,
    });
  } catch (error) {
    return NextResponse.json({ message: handleError(error), success: false });
  }
}
