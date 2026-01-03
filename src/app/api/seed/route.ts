import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function GET() {
  try {
    const adminEmail = 'admin@pppa.gov.ng';
    const hashedPassword = await bcrypt.hash('secure123', 10);
    
    await db.user.upsert({
      where: { email: adminEmail },
      update: {
        password: hashedPassword, // Update password just in case
        role: 'SUPER_ADMIN'
      },
      create: {
        email: adminEmail,
        name: 'Super Admin',
        password: hashedPassword,
        role: 'SUPER_ADMIN',
      },
    });

    return NextResponse.json({ success: true, message: "Admin user seeded successfully" });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
