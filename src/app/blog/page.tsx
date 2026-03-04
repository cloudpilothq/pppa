import { BookOpen } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/blogData';
import BlogGrid from '@/components/BlogGrid';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | DSPPPPA',
  description: 'Insights, guides, and policy updates on property rights, land fraud prevention, and development regulations in Delta State from the DSPPPPA.',
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
        <BlogGrid posts={BLOG_POSTS} />
      </div>

    </div>
  );
}
