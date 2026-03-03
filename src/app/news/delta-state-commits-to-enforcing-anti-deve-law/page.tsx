import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowLeft, Clock, Share2 } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Delta State Commits to Enforcing Anti-Deve Law | DSPPPPA News',
  description: 'To create a secure investor environment, the state government is strictly enforcing the Public and Private Properties Protection Law to end illegal development levies.',
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
              <Calendar className="h-4 w-4 text-emerald-600" />March 25, 2024
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-full border border-slate-200 shadow-sm">
              <Clock className="h-4 w-4 text-emerald-600" />2 min read
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
            Delta State Commits to Enforcing Anti-Deve Law
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            To create a secure investor environment, the state government is strictly enforcing the Public and Private Properties Protection Law to end illegal development levies.
          </p>
        </header>

        <div className="relative w-full aspect-[16/9] md:aspect-[2/1] rounded-3xl overflow-hidden mb-16 shadow-2xl shadow-slate-200/50 border border-slate-100">
          <Image src="/news/news_anti_deve_law_1772545928184.png" alt="Delta State Anti-Deve Law Enforcement" fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 800px" />
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 space-y-6">
          <p className="text-slate-700 leading-relaxed text-[17px]">
            In a decisive move to foster a more secure and investor-friendly environment, the Delta State government has reiterated its unwavering commitment to the strict enforcement of the Public and Private Properties Protection Law of 2018. Widely known across the state as the &apos;Anti-Deve law,&apos; this legislation is a critical tool in the government&apos;s effort to safeguard property rights and regulate lawful land development.
          </p>
          <p className="text-slate-700 leading-relaxed text-[17px]">
            The Anti-Deve law explicitly criminalizes the persistent and illegal collection of development levies, often extorted from legitimate land developers by unauthorized community groups or syndicates. By strictly applying this law, the state government aims to permanently eradicate the extortion practices that have historically deterred investors and delayed essential construction projects.
          </p>
          <p className="text-slate-700 leading-relaxed text-[17px]">
            Violators found guilty under the provisions of the Public and Private Properties Protection Law face stringent penalties. These include a minimum two-year jail term, a substantial fine of N1 million, or occasionally both. Furthermore, the law directly addresses the fraudulent practice of selling a single landed property to multiple buyers, stipulating up to five years imprisonment for such offenses.
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
