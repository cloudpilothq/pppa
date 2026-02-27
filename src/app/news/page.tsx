"use client";

import { useState } from 'react';
import { Newspaper, ArrowRight, ChevronLeft, ChevronRight, Calendar } from "lucide-react"; 
import Link from "next/link";

const DEMO_NEWS = [
  { id: 1, title: "PPPPA Cracks Down on Illegal 'Deve' Collectors in Asaba", summary: "The agency successfully apprehended a syndicate posing as community youths demanding illegal development levies at a major construction site.", date: "2026-02-25", slug: "crackdown-asaba" },
  { id: 2, title: "State Government Reiterates Zero Tolerance for Land Grabbing", summary: "During the annual property summit, the Governor emphasized that the PPPPA has full backing to prosecute land grabbers to the full extent of the law.", date: "2026-02-20", slug: "zero-tolerance" },
  { id: 3, title: "New Taskforce Deployed to Warri Industrial Hub", summary: "To protect ongoing commercial developments, a specialized PPPPA taskforce has been permanently stationed in the Warri industrial zone.", date: "2026-02-15", slug: "warri-taskforce" },
  { id: 4, title: "Public Sensitization Campaign Launches Next Week", summary: "The agency is launching a statewide campaign to educate property owners on how to verify titles and report unlawful interference.", date: "2026-02-10", slug: "sensitization-campaign" },
  { id: 5, title: "PPPPA Recovers 50 Hectares of Illegally Occupied State Land", summary: "Following a month-long investigation, the agency has successfully evicted squatters and speculators from a designated state housing estate.", date: "2026-02-05", slug: "land-recovery" },
  { id: 6, title: "Warning Issued to Fraudulent Real Estate Agents", summary: "The agency issues a stern warning against unauthorized agents selling properties with forged layout approvals.", date: "2026-01-28", slug: "fraudulent-agents-warning" },
  { id: 7, title: "New Director General Pledges Swift Response Times", summary: "Newly appointed DG outlines his 100-day plan, focusing on reducing complaint response times to under 24 hours.", date: "2026-01-20", slug: "dg-pledge" },
  { id: 8, title: "PPPPA Partners with Local Security Outfits", summary: "A new MoU has been signed with local vigilante groups to provide early warnings regarding site encroachments.", date: "2026-01-15", slug: "security-partnership" },
  { id: 9, title: "Digital Property Verification Portal Enters Beta", summary: "Citizens will soon be able to verify property documents online, reducing the risk of purchasing disputed lands.", date: "2026-01-10", slug: "digital-portal" },
  { id: 10, title: "Arrests Made in Multi-Million Naira Land Scam", summary: "Three individuals have been handed over to the police for orchestrating a massive land fraud scheme in Effurun.", date: "2026-01-05", slug: "land-scam-arrests" },
  { id: 11, title: "Year in Review: PPPPA's Achievements in 2025", summary: "A comprehensive look back at the agency's successes in reducing property disputes and enforcing the law last year.", date: "2025-12-28", slug: "year-in-review-2025" },
  { id: 12, title: "Holiday Season Security Advisory for Developers", summary: "Developers are advised to secure their sites during the festive season to prevent vandalism and theft.", date: "2025-12-15", slug: "holiday-advisory" },
];

const ITEMS_PER_PAGE = 6;

export default function NewsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(DEMO_NEWS.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentNews = DEMO_NEWS.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

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
            <span>Updates & Announcements</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
            News & Media Center
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Stay informed with the latest press releases, enforcement actions, and property safety advisories from the PPPPA.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {currentNews.map((item) => (
             <Link key={item.id} href={`#`} className="group h-full flex flex-col">
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:-translate-y-2 hover:border-emerald-200 transition-all duration-300 h-full flex flex-col relative">
                   
                   <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl text-xs font-bold text-slate-800 flex items-center gap-2 shadow-sm z-10 border border-slate-100">
                      <Calendar className="h-4 w-4 text-emerald-600" />
                      {new Intl.DateTimeFormat('en-US', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(item.date))}
                   </div>

                   <div className="h-56 bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200 relative overflow-hidden flex items-center justify-center">
                       <Newspaper className="h-16 w-16 text-slate-300 transform group-hover:scale-110 transition-transform duration-500" />
                   </div>
                   
                   <div className="p-8 flex-1 flex flex-col bg-white relative z-20 -mt-4 rounded-t-2xl">
                      <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors leading-snug">
                         {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                         {item.summary}
                      </p>
                      <div className="mt-auto flex items-center text-emerald-600 text-sm font-bold tracking-wide">
                         Read Article <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-2 transition-transform" />
                      </div>
                   </div>
                </div>
             </Link>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center mt-16 gap-2">
            <button 
              onClick={() => goToPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="p-3 rounded-xl border border-slate-200 text-slate-500 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 disabled:opacity-50 disabled:pointer-events-none transition-all"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToPage(i + 1)}
                  className={`w-10 h-10 rounded-lg font-bold text-sm transition-all ${
                    currentPage === i + 1 
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20' 
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button 
              onClick={() => goToPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="p-3 rounded-xl border border-slate-200 text-slate-500 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 disabled:opacity-50 disabled:pointer-events-none transition-all"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
