import { handleError } from "@/lib/helper";
import axios from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { page } = await req.json();
  if (!cookies().get("token")) {
    return NextResponse.json({ message: "احراز هویت نشده", success: false });
  }
  try {
    const resApi = await axios.get(
      `http://localhost:8000/api/profile/orders?page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${cookies().get("token").value}`,
        },
      }
    );
    return NextResponse.json({ data: resApi.data.data, success: true });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: handleError(error), success: false });
  }
}
