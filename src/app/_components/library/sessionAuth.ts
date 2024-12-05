"use server";

import { $Enums } from "@prisma/client";
import { JWTPayload, jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

interface userType {
  id: string;
  name: string;
  email: string;
  password: string;
  role: $Enums.UserRole;
}

const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: {
  user: userType | undefined;
  expires: Date;
}) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("5h")
    .sign(key);
}

export async function decrypt(input: string): Promise<JWTPayload | null> {
  try {
    const { payload } = await jwtVerify(input, key, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch {
    console.log(input);
    return null;
  }
}

export async function loginSession(user?: userType) {
  const expires = new Date(Date.now());
  expires.setHours(expires.getHours() + 5);
  const session = await encrypt({ user, expires });

  cookies().set("session", session, { expires, httpOnly: true });
}

export async function logout() {
  cookies().set("session", "", { expires: new Date(0) });
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  if (!session) {
    return NextResponse.redirect(new URL("/access-page", request.url));
  }

  const parsed = await decrypt(session);
  if (!parsed) {
    console.error("Parsed error");
    return NextResponse.redirect(new URL("/access-page", request.url));
  }
  const expires = new Date(Date.now() + 5 * 60 * 60 * 1000);

  const response = NextResponse.next();
  response.cookies.set("session", JSON.stringify(parsed), {
    expires,
    httpOnly: true,
    path: "/",
  });

  // return response;
}

export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
}
