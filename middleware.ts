import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "./src/app/_components/library/sessionAuth";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: "/main-system/:path*",
};
