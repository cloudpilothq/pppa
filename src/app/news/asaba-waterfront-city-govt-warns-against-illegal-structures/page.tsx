import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowLeft, Clock, Share2 } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Asaba Waterfront City: Govt Warns Against Illegal Structures | DSPPPPA News',
  description: 'Authorities have issued strict warnings against illegal structures within the Asaba Waterfront City project area, threatening demolition of unauthorized constructions.',
};

export default function Page() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      <div className="w-full bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 max-w-4xl py-4 flex items-center justify-between">
          <Link href="/news" className="inline-flex items-center text-sm font-semibold text-slate-600 hover:text-emerald-600 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />Back to News
          </Link>
          <button className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-colors" title="Share Article">
            <Share2 className="h-5 w-5" />
          </button>
        </div>
      </div>

      <article className="container mx-auto px-4 max-w-4xl pt-12">
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-500 mb-6">
            <div className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-full border border-slate-200 shadow-sm">
              <Calendar className="h-4 w-4 text-emerald-600" />April 12, 2024
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-full border border-slate-200 shadow-sm">
              <Clock className="h-4 w-4 text-emerald-600" />2 min read
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
            Asaba Waterfront City: Govt Warns Against Illegal Structures
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Authorities have issued strict warnings against illegal structures within the Asaba Waterfront City project area, threatening demolition of unauthorized constructions.
          </p>
        </header>

        <div className="relative w-full aspect-[16/9] md:aspect-[2/1] rounded-3xl overflow-hidden mb-16 shadow-2xl shadow-slate-200/50 border border-slate-100">
          <Image src="/news/news_asaba_waterfront_1772545906812.png" alt="Asaba Waterfront City" fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 800px" />
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 space-y-6">
          <p className="text-slate-700 leading-relaxed text-[17px]">
            The Delta State Government has issued a firm and unequivocal warning to developers and members of the public against the erection of illegal structures within the designated Asaba Waterfront City project area. This warning comes as part of a massive urban renewal agenda aimed at transforming the state capital into a modern, planned metropolis.
          </p>
          <p className="text-slate-700 leading-relaxed text-[17px]">
            In Asaba, the state government has already commenced the extensive reclamation of over 775 hectares of land situated along the River Niger. This ambitious project includes 352 hectares specifically delineated for the Asaba Waterfront City, and an additional 423 hectares of floodplain earmarked for the proposed Niger City development to boost economic and residential capacity.
          </p>
          <p className="text-slate-700 leading-relaxed text-[17px]">
            While the government has pledged proper compensation to verified landowners affected by the authorized urban renewal efforts, state authorities, backed by the DSPPPPA, are actively monitoring the reclaimed land. Developers who bypass state approvals lay themselves open to severe consequences, as the state has reiterated its readiness to promptly demolish any unauthorized constructions discovered within the Waterfront City zones.
          </p>
        </div>

        <div className="mt-16 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-3xl p-8 md:p-12 text-center text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Stay Informed Ahead of Time</h3>
          <p className="text-emerald-100 max-w-2xl mx-auto mb-8">
            Sign up for SMS alerts to immediately receive crucial updates regarding verified property regulations and enforcement operations in your community.
          </p>
          <button className="bg-white text-emerald-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-slate-50 transition-all hover:-translate-y-1">
            Subscribe to Alerts
          </button>
        </div>
      </article>
    </div>
  );
}
