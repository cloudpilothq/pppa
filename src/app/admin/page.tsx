import { db } from "@/lib/db";
import { createNews, createLeader, deleteNews, deleteLeader } from "@/actions/admin";
import { logoutAction } from "@/actions/auth";
import { requireAdmin } from "@/lib/auth";
import { Trash2, Plus, FileText, UserCheck, LayoutDashboard, LogOut } from "lucide-react";

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  // Protect this route
  await requireAdmin();

  let news: any[] = [];
  let leaders: any[] = [];
  
  try {
    news = await db.news.findMany({ orderBy: { createdAt: 'desc' } });
    leaders = await db.leadership.findMany({ orderBy: { order: 'asc' } });
  } catch (e) {
    console.log("DB Error in admin:", e);
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Admin Header */}
      <div className="bg-slate-900 text-white py-8 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 flex items-center justify-between">
           <div className="flex items-center gap-4">
               <LayoutDashboard className="h-8 w-8 text-emerald-400" />
               <div>
                 <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                 <p className="text-slate-400 text-sm">Secure Management Portal</p>
               </div>
           </div>
           
           <form action={logoutAction}>
             <button type="submit" className="flex items-center gap-2 px-4 py-2 bg-red-600/20 text-red-200 border border-red-600/30 rounded-lg hover:bg-red-600 hover:text-white transition-all text-sm font-bold">
                 <LogOut className="h-4 w-4" />
                 Sign Out
             </button>
           </form>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 space-y-12">
        
        {/* News Management */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <FileText className="h-5 w-5 text-emerald-600" />
              Manage News
            </h2>
          </div>
          
          <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
             {/* Create Form */}
             <div className="lg:col-span-1 border-r border-slate-100 pr-0 lg:pr-8">
               <h3 className="font-bold mb-4 text-slate-700">Add New Article</h3>
               <form action={async (formData) => { "use server"; await createNews(formData); }} className="space-y-4">
                 <div>
                   <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Title</label>
                   <input name="title" required className="w-full p-2 border rounded text-sm" placeholder="Article Headline" />
                 </div>
                 <div>
                   <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Summary</label>
                   <textarea name="summary" required rows={2} className="w-full p-2 border rounded text-sm" placeholder="Brief intro..." />
                 </div>
                 <div>
                   <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Content</label>
                   <textarea name="content" required rows={5} className="w-full p-2 border rounded text-sm" placeholder="Full article body..." />
                 </div>
                 <div className="flex items-center gap-2">
                   <input name="published" type="checkbox" id="pub" className="rounded text-emerald-600" />
                   <label htmlFor="pub" className="text-sm font-medium">Publish Immediately</label>
                 </div>
                 <button type="submit" className="w-full py-2 bg-emerald-600 text-white rounded font-bold hover:bg-emerald-700 transition flex items-center justify-center gap-2">
                   <Plus className="h-4 w-4" /> Posted Article
                 </button>
               </form>
             </div>

             {/* Search/List */}
             <div className="lg:col-span-2 space-y-4 max-h-[500px] overflow-y-auto">
                <h3 className="font-bold mb-4 text-slate-700">Recent Articles ({news.length})</h3>
                {news.length === 0 ? (
                  <p className="text-slate-400 italic">No news articles found.</p>
                ) : (
                  news.map((item: any) => (
                    <div key={item.id} className="flex justify-between items-start p-4 bg-slate-50 rounded-lg group">
                      <div>
                        <h4 className="font-bold text-slate-900">{item.title}</h4>
                        <p className="text-xs text-slate-500 line-clamp-1">{item.summary}</p>
                        <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded mt-2 inline-block ${item.published ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                          {item.published ? 'Published' : 'Draft'}
                        </span>
                      </div>
                      <form action={async () => { "use server"; await deleteNews(item.id); }}>
                        <button className="text-slate-400 hover:text-red-500 transition p-2">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </form>
                    </div>
                  ))
                )}
             </div>
          </div>
        </section>

        {/* Leadership Management */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <UserCheck className="h-5 w-5 text-emerald-600" />
              Manage Leadership
            </h2>
          </div>
          
          <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
             {/* Create Form */}
             <div className="lg:col-span-1 border-r border-slate-100 pr-0 lg:pr-8">
               <h3 className="font-bold mb-4 text-slate-700">Add Team Member</h3>
               <form action={async (formData) => { "use server"; await createLeader(formData); }} className="space-y-4">
                 <div>
                   <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Full Name</label>
                   <input name="name" required className="w-full p-2 border rounded text-sm" placeholder="e.g. Dr. Ngozi..." />
                 </div>
                 <div>
                   <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Role / Title</label>
                   <input name="role" required className="w-full p-2 border rounded text-sm" placeholder="e.g. Director General" />
                 </div>
                 <div>
                   <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Bio</label>
                   <textarea name="bio" required rows={3} className="w-full p-2 border rounded text-sm" placeholder="Short biography..." />
                 </div>
                 <button type="submit" className="w-full py-2 bg-emerald-600 text-white rounded font-bold hover:bg-emerald-700 transition flex items-center justify-center gap-2">
                   <Plus className="h-4 w-4" /> Add Member
                 </button>
               </form>
             </div>

             {/* List */}
             <div className="lg:col-span-2 space-y-4">
                <h3 className="font-bold mb-4 text-slate-700">Current Leadership ({leaders.length})</h3>
                {leaders.length === 0 ? (
                  <p className="text-slate-400 italic">No leadership profiles found.</p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {leaders.map((leader: any) => (
                      <div key={leader.id} className="flex justify-between items-start p-4 bg-slate-50 rounded-lg group">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-bold shrink-0">
                             {leader.name.charAt(0)}
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-900 text-sm">{leader.name}</h4>
                            <p className="text-xs text-slate-500">{leader.role}</p>
                          </div>
                        </div>
                        <form action={async () => { "use server"; await deleteLeader(leader.id); }}>
                          <button className="text-slate-400 hover:text-red-500 transition p-2">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </form>
                      </div>
                    ))}
                  </div>
                )}
             </div>
          </div>
        </section>

      </div>
    </div>
  );
}
