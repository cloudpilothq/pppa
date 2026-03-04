'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import type { BlogPost } from '@/lib/blogData';

const ITEMS_PER_PAGE = 6;

const categoryColors: Record<string, string> = {
  'Education': 'bg-blue-600',
  'Consumer Guide': 'bg-orange-600',
  'Policy Update': 'bg-purple-600',
  'Know Your Rights': 'bg-red-600',
  'Legal Guide': 'bg-emerald-600',
  'Community Outreach': 'bg-teal-600',
};

export default function BlogGrid({ posts }: { posts: BlogPost[] }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(posts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentPosts = posts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentPosts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`} className="group flex flex-col h-full">
            <article className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/40 border border-slate-100 hover:-translate-y-2 hover:shadow-2xl hover:border-emerald-200 transition-all duration-300 flex flex-col h-full">
              <div className="h-56 relative overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                  <span className={`${categoryColors[post.category] ?? 'bg-slate-700'} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1`}>
                    <Tag className="h-3 w-3" />
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h3>

                <p className="text-slate-600 leading-relaxed text-sm mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-4 border-t border-slate-100">
                  <span className="inline-flex items-center text-emerald-600 font-semibold text-sm gap-1 group-hover:gap-2 transition-all">
                    Read Full Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center mt-16 gap-2">
          <button
            onClick={() => goToPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="p-3 rounded-xl border border-slate-200 text-slate-500 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 disabled:opacity-40 disabled:pointer-events-none transition-all"
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
            className="p-3 rounded-xl border border-slate-200 text-slate-500 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 disabled:opacity-40 disabled:pointer-events-none transition-all"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </>
  );
}
