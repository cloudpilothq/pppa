"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createNews(formData: FormData) {
  const title = formData.get("title") as string;
  const summary = formData.get("summary") as string;
  const content = formData.get("content") as string;
  const published = formData.get("published") === "on";
  
  // Simple slug generation
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

  await db.news.create({
    data: {
      title,
      slug: `${slug}-${Date.now()}`, // Ensure uniqueness
      summary,
      content,
      published,
    },
  });

  revalidatePath("/news");
  revalidatePath("/admin");
  return { success: true };
}

export async function createLeader(formData: FormData) {
  const name = formData.get("name") as string;
  const role = formData.get("role") as string;
  const bio = formData.get("bio") as string;
  
  await db.leadership.create({
    data: {
      name,
      role,
      bio,
      order: 99, // Default to end of list
    },
  });

  revalidatePath("/leadership");
  revalidatePath("/admin");
  return { success: true };
}

export async function deleteNews(id: string) {
  await db.news.delete({ where: { id } });
  revalidatePath("/news");
  revalidatePath("/admin");
}

export async function deleteLeader(id: string) {
  await db.leadership.delete({ where: { id } });
  revalidatePath("/leadership");
  revalidatePath("/admin");
}
