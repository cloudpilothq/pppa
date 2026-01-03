"use server";

import { db } from "@/lib/db";
import { createSession, logout } from "@/lib/auth";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

export async function loginAction(prevState: any, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { error: "Please provide both email and password." };
  }

  // Find user
  const user = await db.user.findUnique({
    where: { email },
  });

  if (!user) {
    return { error: "Invalid credentials." };
  }

  // Check password
  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    return { error: "Invalid credentials." };
  }

  // Create session
  await createSession(user.id, user.role);

  redirect("/admin");
}

export async function logoutAction() {
    await logout();
}
