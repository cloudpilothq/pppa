import { db } from "@/lib/db";
import { UserCheck } from "lucide-react";
import { Leadership } from "@prisma/client";

export const dynamic = 'force-dynamic';

export default async function LeadershipPage() {
  let leaders: Leadership[] = [];
  try {
    leaders = await db.leadership.findMany({
      orderBy: { order: 'asc' }
    });
  } catch (error) {
    console.error("Database error:", error);
    leaders = []; 
  }

  return (
    <div className="bg-background min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Agency Leadership</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Meet the dedicated team guiding the PPPPA towards a more secure future.
          </p>
        </div>

        {leaders.length === 0 ? (
          <div className="text-center py-20 bg-slate-50 rounded-xl">
            <p className="text-slate-500">Leadership profiles are currently being updated.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader) => (
              <div key={leader.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <div className="h-64 bg-slate-200 w-full relative">
                  {/* Placeholder for real image or next/image if exists */}
                  {leader.image ? (
                     // In a real app, use next/image. For this demo, using a placeholder div + name
                     <div className="w-full h-full flex items-center justify-center bg-slate-300 text-slate-500">
                        <UserCheck className="h-16 w-16" />
                     </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-300 text-slate-500">
                        <UserCheck className="h-16 w-16" />
                     </div>
                  )}
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-900/80 to-transparent p-4">
                     <span className="text-white text-xs font-bold uppercase tracking-widest bg-emerald-600 px-2 py-1 rounded">
                        {leader.role}
                     </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{leader.name}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
