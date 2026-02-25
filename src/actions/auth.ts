"use server";

// Prisma removed
import { createSession, logout } from "@/lib/auth";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

export async function loginAction(prevState: any, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { error: "Please provide both email and password." };
  }

  // Mock user authentication without a database
  const isMockUser = email === "admin@example.com" && password === "password123";
  
  if (!isMockUser) {
    return { error: "Invalid credentials. Use admin@example.com / password123" };
  }

  // Create session with mock user ID
  await createSession("mock-user-id", "ADMIN");

  redirect("/admin");
}

export async function logoutAction() {
    await logout();
}
