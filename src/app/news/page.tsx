'use client';

import { useState } from 'react';
import { Newspaper, ArrowRight, ChevronLeft, ChevronRight, Calendar } from "lucide-react"; 
import Link from "next/link";
import Image from "next/image";
import { FACTUAL_NEWS } from '@/lib/newsData';

const ITEMS_PER_PAGE = 3;

export default function NewsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(FACTUAL_NEWS.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentNews = FACTUAL_NEWS.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Hero Header */}
      <div className="relative bg-slate-900 text-white py-24 mb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 bg-center"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-400 text-sm font-medium backdrop-blur-sm mb-6">
            <Newspaper className="h-4 w-4" />
            <span>Updates & Announcements</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
            News & Media Center
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Stay informed with the latest press releases, enforcement actions, and property safety advisories from the DSPPPPA.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {currentNews.map((item) => (
             <Link key={item.id} href={`/news/${item.slug}`} className="group h-full flex flex-col">
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:-translate-y-2 hover:border-blue-200 transition-all duration-300 h-full flex flex-col relative">
                   
                   <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl text-xs font-bold text-slate-800 flex items-center gap-2 shadow-sm z-10 border border-slate-100">
                      <Calendar className="h-4 w-4 text-blue-600" />
                      {new Intl.DateTimeFormat('en-US', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(item.date))}
                   </div>

                   <div className="h-56 relative overflow-hidden flex items-center justify-center bg-slate-100">
                       <Image 
                         src={item.image} 
                         alt={item.title} 
                         fill 
                         className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                       />
                   </div>
                   
                   <div className="p-8 flex-1 flex flex-col bg-white relative z-20 -mt-4 rounded-t-2xl">
                      <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors leading-snug">
                         {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                         {item.summary}
                      </p>
                      <div className="mt-auto flex items-center text-blue-600 text-sm font-bold tracking-wide">
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
              className="p-3 rounded-xl border border-slate-200 text-slate-500 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 disabled:opacity-50 disabled:pointer-events-none transition-all"
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
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' 
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
              className="p-3 rounded-xl border border-slate-200 text-slate-500 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 disabled:opacity-50 disabled:pointer-events-none transition-all"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

