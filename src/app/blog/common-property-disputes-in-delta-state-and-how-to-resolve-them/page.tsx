import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowLeft, Clock, Tag } from 'lucide-react';
import ShareButton from '@/components/ShareButton';
import RelatedPosts from '@/components/RelatedPosts';
import { BLOG_POSTS } from '@/lib/blogData';
import type { Metadata } from 'next';

const POST = BLOG_POSTS[8];
const BASE_URL = 'https://dsppppa.delta.gov.ng';

export const metadata: Metadata = {
  title: `${POST.title} | DSPPPPA Blog`,
  description: POST.excerpt,
  openGraph: { title: POST.title, description: POST.excerpt, url: `${BASE_URL}/blog/${POST.slug}`, siteName: 'DSPPPPA Delta State', images: [{ url: `${BASE_URL}${POST.image}`, width: 1200, height: 630, alt: POST.title }], type: 'article', locale: 'en_NG' },
  twitter: { card: 'summary_large_image', title: POST.title, description: POST.excerpt, images: [`${BASE_URL}${POST.image}`] },
  alternates: { canonical: `${BASE_URL}/blog/${POST.slug}` },
};

const jsonLd = { '@context': 'https://schema.org', '@type': 'Article', headline: POST.title, description: POST.excerpt, image: `${BASE_URL}${POST.image}`, datePublished: POST.date, author: { '@type': 'Organization', name: 'DSPPPPA Delta State' }, publisher: { '@type': 'Organization', name: 'DSPPPPA Delta State', url: BASE_URL }, url: `${BASE_URL}/blog/${POST.slug}` };

const categoryColors: Record<string, string> = { 'Education': 'bg-blue-600', 'Consumer Guide': 'bg-orange-600', 'Policy Update': 'bg-purple-600', 'Know Your Rights': 'bg-red-600', 'Legal Guide': 'bg-emerald-600' };

export default function Page() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="w-full bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 max-w-4xl py-4 flex items-center justify-between">
          <Link href="/blog" className="inline-flex items-center text-sm font-semibold text-slate-600 hover:text-emerald-600 transition-colors"><ArrowLeft className="h-4 w-4 mr-2" />Back to Blog</Link>
          <ShareButton title={POST.title} summary={POST.excerpt} />
        </div>
      </div>
      <article className="container mx-auto px-4 max-w-4xl pt-12">
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className={`${categoryColors[POST.category] ?? 'bg-slate-700'} text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1`}><Tag className="h-3 w-3" />{POST.category}</span>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-full border border-slate-200 shadow-sm text-sm font-medium text-slate-500"><Calendar className="h-4 w-4 text-emerald-600" />{POST.date}</div>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-full border border-slate-200 shadow-sm text-sm font-medium text-slate-500"><Clock className="h-4 w-4 text-emerald-600" />{Math.max(3, Math.ceil(POST.content.join(' ').split(' ').length / 180))} min read</div>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">{POST.title}</h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">{POST.excerpt}</p>
        </header>
        <div className="relative w-full aspect-[16/9] md:aspect-[2/1] rounded-3xl overflow-hidden mb-16 shadow-2xl shadow-slate-200/50 border border-slate-100">
          <Image src={POST.image} alt={POST.title} fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 800px" />
        </div>
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 space-y-6">
          {POST.content.map((paragraph, i) => (<p key={i} className="text-slate-700 leading-relaxed text-[17px] text-justify">{paragraph}</p>))}
        </div>
        <div className="mt-12 bg-slate-100 rounded-2xl p-6 border border-slate-200">
          <p className="text-sm font-semibold text-slate-700 mb-2">Understand your rights in a dispute:</p>
          <ul className="space-y-1">
            <li><Link href="/blog/understanding-your-property-rights-in-delta-state" className="text-emerald-700 hover:underline text-sm font-medium">→ Understanding Your Property Rights in Delta State</Link></li>
            <li><Link href="/blog/the-role-of-dsppppa-in-protecting-property-owners-in-delta-state" className="text-emerald-700 hover:underline text-sm font-medium">→ The Role of DSPPPPA in Protecting Property Owners</Link></li>
          </ul>
        </div>
        <div className="mt-12 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-3xl p-8 md:p-12 text-center text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Need Help Resolving a Property Dispute?</h3>
          <p className="text-emerald-100 max-w-2xl mx-auto mb-8">The DSPPPPA offers free mediation and dispute resolution support for property conflicts across Delta State.</p>
          <Link href="/contact" className="bg-white text-emerald-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-slate-50 transition-all hover:-translate-y-1 inline-block">Contact Us</Link>
        </div>
        <RelatedPosts currentSlug={POST.slug} />
      </article>
    </div>
  );
}
