import Link from 'next/link';
import { Newspaper, Calendar, ArrowRight } from 'lucide-react';

const DEMO_POSTS = [
  {
    id: 1,
    title: "Agency Demolishes Illegal Structures Along River Bank",
    excerpt: "In a sweeping operation yesterday, the DSPPPPA dismantled over 15 unauthorized structures erected along the Ethiope River banks that were obstructing natural waterways.",
    date: "Mars 2, 2026",
    category: "Enforcement",
    image: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=1400&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "DSPPPPA Hosts Townhall on Property Rights in Oshimili",
    excerpt: "The Director General led a sensitisation workshop addressing traditional rulers and youth leaders on the dangers of illegal 'deve' collections.",
    date: "Feb 27, 2026",
    category: "Community Outreach",
    image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=1400&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "New Development Guidelines Released for Commercial Builders",
    excerpt: "To streamline the construction process and prevent disputes, the agency has published an updated checklist for large-scale property developments across the state.",
    date: "Feb 15, 2026",
    category: "Policy Update",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1400&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Taskforce Recovers 50 Acres of Public Land",
    excerpt: "Fifty acres of government-owned land previously encroached upon by illegal occupants have been successfully recovered near the state capital.",
    date: "Feb 08, 2026",
    category: "Enforcement",
    image: "https://images.unsplash.com/photo-1506525875605-611df98af74d?q=80&w=1400&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Partnership with Security Agencies Yields Results",
    excerpt: "A joint taskforce initiative between DSPPPPA and local law enforcement has led to a 40% reduction in site violence this quarter.",
    date: "Jan 29, 2026",
    category: "Partnerships",
    image: "https://images.unsplash.com/photo-1585863980140-5e608de120dd?q=80&w=1400&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "How to Spot Fake Land Agents in Delta State",
    excerpt: "Protect your investments before you buy. Here are the top red flags to look out for when purchasing land, according to our Legal Directorate.",
    date: "Jan 14, 2026",
    category: "Education",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1400&auto=format&fit=crop"
  }
];

export default function BlogPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Hero Header */}
      <div className="relative bg-slate-900 text-white py-24 mb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 bg-center"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/40 border border-emerald-500/30 text-emerald-400 text-sm font-medium backdrop-blur-sm mb-6">
            <Newspaper className="h-4 w-4" />
            <span>Latest Updates</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
            Agency Blog & News
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Stay informed on our latest enforcement actions, policy updates, community outreaches, and tips for protecting your property.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DEMO_POSTS.map((post) => (
            <article key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/40 border border-slate-100 hover:-translate-y-2 transition-transform duration-300 group flex flex-col">
              <div className="h-48 md:h-56 relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed text-sm mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto pt-4 border-t border-slate-100">
                  <Link href={`#`} className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700 group-hover:gap-2 transition-all">
                    Read Full Story <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {/* Pagination Placeholder */}
        <div className="flex justify-center mt-16 pb-8">
          <div className="inline-flex bg-white rounded-xl shadow-sm border border-slate-200 p-1">
            <button className="px-4 py-2 text-slate-400 hover:text-slate-600 font-medium">Previous</button>
            <button className="px-4 py-2 bg-emerald-50 text-emerald-600 rounded-lg font-bold">1</button>
            <button className="px-4 py-2 hover:bg-slate-50 text-slate-600 rounded-lg font-medium">2</button>
            <button className="px-4 py-2 hover:bg-slate-50 text-slate-600 rounded-lg font-medium">3</button>
            <button className="px-4 py-2 text-slate-600 hover:text-slate-800 font-medium">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
