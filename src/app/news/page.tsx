import { Calendar, ArrowRight } from "lucide-react"; 
import Link from "next/link";

export const dynamic = 'force-dynamic';

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api";

export default async function NewsPage() {
  let news: any[] = [];
  
  try {
    const res = await fetch(`${API_URL}/news`, { next: { revalidate: 60 } });
    if (res.ok) {
      news = await res.json();
    }
  } catch (error) {
    console.error("Failed to fetch news from Laravel API", error);
  }
  return (
    <div className="bg-background min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 border-b border-slate-200 pb-8 flex flex-col md:flex-row justify-between items-end gap-4">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-2">News & Media Center</h1>
            <p className="text-slate-600">Latest updates, press releases, and announcements.</p>
          </div>
          <div className="hidden md:block">
            {/* Search placeholder */}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
             <Link key={item.id} href={`/news/${item.slug}`} className="group h-full flex flex-col">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-all h-full flex flex-col">
                   <div className="h-48 bg-slate-200 relative">
                      {/* Image placeholder */}
                      {item.image ? (
                        <div className="w-full h-full bg-slate-300 flex items-center justify-center text-slate-500">
                           <span className="text-xs">Image: {item.image}</span>
                        </div>
                      ) : (
                        <div className="w-full h-full bg-slate-100"></div>
                      )}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-800 flex items-center gap-1">
                         <span>📅</span>
                         {new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(new Date(item.created_at))}
                      </div>
                   </div>
                   <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                         {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                         {item.summary}
                      </p>
                      <div className="mt-auto flex items-center text-emerald-600 text-sm font-semibold">
                         Read Article <span className="ml-2 transform group-hover:translate-x-1 transition-transform inline-block">→</span>
                      </div>
                   </div>
                </div>
             </Link>
          ))}
          {news.length === 0 && (
            <div className="col-span-full text-center py-20 bg-slate-50 rounded-xl border border-dashed border-slate-300">
               <p className="text-slate-500">No news articles published yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
