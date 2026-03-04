import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, Calendar, ArrowRight, Tag } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/blogData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | DSPPPPA',
  description: 'Insights, guides, and policy updates on property rights, land fraud prevention, and development regulations in Delta State from the DSPPPPA.',
};

const categoryColors: Record<string, string> = {
  'Education': 'bg-blue-600',
  'Consumer Guide': 'bg-orange-600',
  'Policy Update': 'bg-purple-600',
  'Know Your Rights': 'bg-red-600',
  'Legal Guide': 'bg-emerald-600',
  'Community Outreach': 'bg-teal-600',
};

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
            <BookOpen className="h-4 w-4" />
            <span>Insights &amp; Guides</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
            DSPPPPA Blog
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Property rights guides, legal explainers, fraud prevention tips, and policy updates — all about protecting your property in Delta State.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
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
      </div>
    </div>
  );
}
