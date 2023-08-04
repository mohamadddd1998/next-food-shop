import { NextResponse } from "next/server";

const middleware = (request) => {
  
  const token = request.cookies.get("token");
  if (request.nextUrl.pathname === "/auth/login" && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (request.nextUrl.pathname.startsWith("/profile") && !token) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
  if (request.nextUrl.pathname === "/cart" && !token) {
    console.log(token,'token')
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
};
export default middleware;
