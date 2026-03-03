import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowLeft, Clock } from 'lucide-react';
import ShareButton from '@/components/ShareButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peace Moves Initiated in Ibusa and Ogwashi-Uku Land Dispute | DSPPPPA News',
  description: 'The Delta State government has intervened in a long-standing land disagreement, urging calm and peaceful resolution between the neighboring communities.',
};

export default function Page() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      <div className="w-full bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 max-w-4xl py-4 flex items-center justify-between">
          <Link href="/news" className="inline-flex items-center text-sm font-semibold text-slate-600 hover:text-emerald-600 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />Back to News
          </Link>
          <ShareButton
            title="Peace Moves Initiated in Ibusa and Ogwashi-Uku Land Dispute"
            summary="The Delta State government has intervened in a long-standing land disagreement, urging calm and peaceful resolution between the neighboring communities."
          />
        </div>
      </div>

      <article className="container mx-auto px-4 max-w-4xl pt-12">
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-500 mb-6">
            <div className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-full border border-slate-200 shadow-sm">
              <Calendar className="h-4 w-4 text-emerald-600" />January 15, 2024
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-full border border-slate-200 shadow-sm">
              <Clock className="h-4 w-4 text-emerald-600" />2 min read
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
            Peace Moves Initiated in Ibusa and Ogwashi-Uku Land Dispute
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed text-justify">
            The Delta State government has intervened in a long-standing land disagreement, urging calm and peaceful resolution between the neighboring communities.
          </p>
        </header>

        <div className="relative w-full aspect-[16/9] md:aspect-[2/1] rounded-3xl overflow-hidden mb-16 shadow-2xl shadow-slate-200/50 border border-slate-100">
          <Image src="/news/news_community_dispute_1772546063246.png" alt="Ibusa and Ogwashi-Uku Land Dispute Resolution" fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 800px" />
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 space-y-6">
          <p className="text-slate-700 leading-relaxed text-[17px] text-justify">
            In a proactive effort to maintain stability and prevent communal clashes, the Delta State government has swiftly intervened in a long-standing land disagreement between the neighboring communities of Ibusa and Ogwashi-Uku. The dispute, which centers on historical boundary designations, had recently threatened to disrupt the peace in the affected areas.
          </p>
          <p className="text-slate-700 leading-relaxed text-[17px] text-justify">
            State representatives, acting in conjunction with local authorities and traditional rulers, have called upon the leadership of both communities to exercise maximum restraint. The primary objective is to de-escalate tensions and ensure that residents remain calm while official channels are utilized to address the underlying grievances.
          </p>
          <p className="text-slate-700 leading-relaxed text-[17px] text-justify">
            The government has reiterated that all land disputes must be resolved through lawful dialogue, professional arbitration, and legal processes rather than violence or self-help. By facilitating mediation sessions between the disputing parties, the state administration hopes to broker a lasting, equitable resolution that respects the historical rights and immediate security needs of both Ibusa and Ogwashi-Uku.
          </p>
        </div>

        <div className="mt-16 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-3xl p-8 md:p-12 text-center text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Stay Informed Ahead of Time</h3>
          <p className="text-emerald-100 max-w-2xl mx-auto mb-8">
            Sign up for email alerts to immediately receive crucial updates regarding verified property regulations and enforcement operations in your community.
          </p>
          <button className="bg-white text-emerald-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-slate-50 transition-all hover:-translate-y-1">
            Subscribe to Alerts
          </button>
        </div>
      </article>
    </div>
  );
}
