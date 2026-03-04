import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowLeft, Clock } from 'lucide-react';
import ShareButton from '@/components/ShareButton';
import { FACTUAL_NEWS } from '@/lib/newsData';
import type { Metadata } from 'next';

const ITEM = FACTUAL_NEWS[0];
const BASE_URL = 'https://dsppppa.delta.gov.ng';

export const metadata: Metadata = {
  title: `${ITEM.title} | DSPPPPA News`,
  description: ITEM.summary,
  openGraph: { title: ITEM.title, description: ITEM.summary, url: `${BASE_URL}/news/${ITEM.slug}`, siteName: 'DSPPPPA Delta State', images: [{ url: `${BASE_URL}${ITEM.image}`, width: 1200, height: 630, alt: ITEM.title }], type: 'article', locale: 'en_NG' },
  twitter: { card: 'summary_large_image', title: ITEM.title, description: ITEM.summary, images: [`${BASE_URL}${ITEM.image}`] },
  alternates: { canonical: `${BASE_URL}/news/${ITEM.slug}` },
};

const jsonLd = { '@context': 'https://schema.org', '@type': 'NewsArticle', headline: ITEM.title, description: ITEM.summary, image: `${BASE_URL}${ITEM.image}`, datePublished: ITEM.date, author: { '@type': 'Organization', name: 'DSPPPPA Delta State' }, publisher: { '@type': 'Organization', name: 'DSPPPPA Delta State', url: BASE_URL }, url: `${BASE_URL}/news/${ITEM.slug}` };

export default function Page() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="w-full bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 max-w-4xl py-4 flex items-center justify-between">
          <Link href="/news" className="inline-flex items-center text-sm font-semibold text-slate-600 hover:text-emerald-600 transition-colors"><ArrowLeft className="h-4 w-4 mr-2" />Back to News</Link>
          <ShareButton title={ITEM.title} summary={ITEM.summary} />
        </div>
      </div>
      <article className="container mx-auto px-4 max-w-4xl pt-12">
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-500 mb-6">
            <div className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-full border border-slate-200 shadow-sm"><Calendar className="h-4 w-4 text-emerald-600" />{new Intl.DateTimeFormat('en-NG', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(ITEM.date))}</div>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-full border border-slate-200 shadow-sm"><Clock className="h-4 w-4 text-emerald-600" />2 min read</div>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">{ITEM.title}</h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">{ITEM.summary}</p>
        </header>
        <div className="relative w-full aspect-[16/9] md:aspect-[2/1] rounded-3xl overflow-hidden mb-16 shadow-2xl shadow-slate-200/50 border border-slate-100">
          <Image src={ITEM.image} alt={ITEM.title} fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 800px" />
        </div>
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 space-y-6">
          {ITEM.content.map((paragraph, i) => (<p key={i} className="text-slate-700 leading-relaxed text-[17px]">{paragraph}</p>))}
        </div>
        <div className="mt-12 bg-slate-100 rounded-2xl p-6 border border-slate-200">
          <p className="text-sm font-semibold text-slate-700 mb-2">Related guides from our blog:</p>
          <ul className="space-y-1">
            <li><Link href="/blog/common-property-disputes-in-delta-state-and-how-to-resolve-them" className="text-emerald-700 hover:underline text-sm font-medium">→ Common Property Disputes in Delta State and How to Resolve Them</Link></li>
            <li><Link href="/blog/understanding-your-property-rights-in-delta-state" className="text-emerald-700 hover:underline text-sm font-medium">→ Understanding Your Property Rights in Delta State</Link></li>
          </ul>
        </div>
        <div className="mt-12 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-3xl p-8 md:p-12 text-center text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Stay Informed Ahead of Time</h3>
          <p className="text-emerald-100 max-w-2xl mx-auto mb-8">Sign up for email alerts to receive crucial updates on property regulations and enforcement operations in your community.</p>
          <Link href="/contact" className="bg-white text-emerald-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-slate-50 transition-all hover:-translate-y-1 inline-block">Contact Us</Link>
        </div>
      </article>
    </div>
  );
}
