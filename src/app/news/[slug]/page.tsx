import { FACTUAL_NEWS } from '@/lib/newsData';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowLeft, Clock, Share2 } from 'lucide-react';

export async function generateStaticParams() {
  return FACTUAL_NEWS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = FACTUAL_NEWS.find((p) => p.slug === resolvedParams.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | DSPPPPA',
    };
  }

  return {
    title: `${post.title} | DSPPPPA News`,
    description: post.summary,
  };
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = FACTUAL_NEWS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
    return null; // helps TypeScript narrow the type below
  }

  const formattedDate = new Intl.DateTimeFormat('en-US', { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  }).format(new Date(post.date));

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Navigation Bar */}
      <div className="w-full bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 max-w-4xl py-4 flex items-center justify-between">
          <Link 
            href="/news" 
            className="inline-flex items-center text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to News
          </Link>
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors" title="Share Article">
              <Share2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <article className="container mx-auto px-4 max-w-4xl pt-12">
        {/* Article Header */}
        <header className="mb-12 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm font-medium text-slate-500 mb-6">
            <div className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-full border border-slate-200 shadow-sm">
              <Calendar className="h-4 w-4 text-blue-600" />
              {formattedDate}
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-full border border-slate-200 shadow-sm">
              <Clock className="h-4 w-4 text-blue-600" />
              {Math.max(2, Math.ceil(post.content.join(' ').split(' ').length / 200))} min read
            </div>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
            {post.title}
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl">
            {post.summary}
          </p>
        </header>

        {/* Hero Image */}
        <div className="relative w-full aspect-[16/9] md:aspect-[2/1] rounded-3xl overflow-hidden mb-16 shadow-2xl shadow-slate-200/50 border border-slate-100">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg prose-slate prose-a:text-blue-600 hover:prose-a:text-blue-700 prose-headings:text-slate-900 prose-img:rounded-xl max-w-none bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
          {post.content.map((paragraph, index) => (
             <p key={index} className="text-slate-700 leading-relaxed text-[17px] mb-6 last:mb-0">
               {paragraph}
             </p>
          ))}
        </div>
        
        {/* Footer / Call to Action */}
        <div className="mt-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 text-center text-white shadow-xl shadow-blue-200/50">
           <h3 className="text-2xl font-bold mb-4">Stay Informed Ahead of Time</h3>
           <p className="text-blue-100 max-w-2xl mx-auto mb-8">
             Sign up for email alerts to immediately receive crucial updates regarding verified property regulations and enforcement operations in your community.
           </p>
           <button className="bg-white text-blue-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-slate-50 transition-all hover:-translate-y-1">
             Subscribe to Alerts
           </button>
        </div>

      </article>
    </div>
  );
}
