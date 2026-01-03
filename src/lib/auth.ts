import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const SECRET_KEY = process.env.JWT_SECRET || "default-secret-key-change-this-in-prod";
const key = new TextEncoder().encode(SECRET_KEY);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h") // Session lasts 1 day
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function createSession(userId: string, role: string) {
  const expires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 1 day
  const session = await encrypt({ userId, role, expires });

  (await cookies()).set("session", session, {
    expires,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });
}

export async function verifySession() {
  const cookie = (await cookies()).get("session")?.value;
  if (!cookie) return null;
  try {
    const session = await decrypt(cookie);
    if (!session?.userId) return null;
    return { userId: session.userId, role: session.role };
  } catch (error) {
    console.log("Failed to verify session");
    return null;
  }
}

export async function logout() {
  (await cookies()).delete("session");
  redirect("/admin/login");
}

export async function requireAdmin() {
  const session = await verifySession();
  if (!session || (session.role !== "ADMIN" && session.role !== "SUPER_ADMIN")) {
    redirect("/admin/login");
  }
  return session;
}
