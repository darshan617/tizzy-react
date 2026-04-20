import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

  const isProtectedRoute = pathname.startsWith("/dashboard");
  const isHomeRoute = pathname === "/";
  const isAuthRoute = pathname === "/login";

  if (!token && isHomeRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (token && isAuthRoute) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  // matcher: ["/dashboard/:path*", "/login"],
  matcher: ["/", "/login"],
};