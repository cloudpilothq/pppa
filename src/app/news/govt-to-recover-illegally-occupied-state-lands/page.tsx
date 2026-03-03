import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowLeft, Clock, Share2 } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Govt to Recover Illegally Occupied State Lands | DSPPPPA News',
  description: 'The state government has announced its intention to recover all government lands illegally occupied by grabbers and demolish structures built without proper state approvals.',
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
              <Calendar className="h-4 w-4 text-emerald-600" />February 8, 2024
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-full border border-slate-200 shadow-sm">
              <Clock className="h-4 w-4 text-emerald-600" />2 min read
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
            Govt to Recover Illegally Occupied State Lands
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            The state government has announced its intention to recover all government lands illegally occupied by grabbers and demolish structures built without proper state approvals.
          </p>
        </header>

        <div className="relative w-full aspect-[16/9] md:aspect-[2/1] rounded-3xl overflow-hidden mb-16 shadow-2xl shadow-slate-200/50 border border-slate-100">
          <Image src="/news/news_land_recovery_1772546013789.png" alt="Delta State Land Recovery Operation" fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 800px" />
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 space-y-6">
          <p className="text-slate-700 leading-relaxed text-[17px]">
            Following rising concerns over unauthorized land speculation, the Delta State Government has officially announced a statewide initiative aimed at recovering all government-owned lands that have been illegally occupied by land grabbers. This operation underscores the administration&apos;s zero-tolerance policy towards the unlawful appropriation of state assets.
          </p>
          <p className="text-slate-700 leading-relaxed text-[17px]">
            State officials have noted coordinated efforts by syndicates to occupy, partition, and sell off designated government layouts without the requisite legal authority or approved documents. In response, task forces comprising surveyors, legal personnel, and enforcement officers from the DSPPPPA have been mobilized to identify and map out all encroached state properties.
          </p>
          <p className="text-slate-700 leading-relaxed text-[17px]">
            The government has made it explicitly clear that any structures erected on state land without verifiable, proper state approvals will be subject to demolition. Investors and citizens are strongly urged to conduct comprehensive due diligence at the state land registry before engaging in any property transactions to avoid severe financial losses associated with illegal acquisitions.
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
