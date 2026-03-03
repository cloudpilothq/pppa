import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowLeft, Clock } from 'lucide-react';
import ShareButton from '@/components/ShareButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Delta State Assures On Delivery of Housing Projects | DSPPPPA News',
  description: 'The Delta State Commissioner for Housing has outlined strategic plans to tackle housing challenges, including the construction of duplexes and terraces for middle-income earners by 2025.',
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
            title="Delta State Assures On Delivery of Housing Projects"
            summary="The Delta State Commissioner for Housing has outlined strategic plans to tackle housing challenges, including the construction of duplexes and terraces for middle-income earners by 2025."
          />
        </div>
      </div>

      <article className="container mx-auto px-4 max-w-4xl pt-12">
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-500 mb-6">
            <div className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-full border border-slate-200 shadow-sm">
              <Calendar className="h-4 w-4 text-emerald-600" />May 18, 2024
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-full border border-slate-200 shadow-sm">
              <Clock className="h-4 w-4 text-emerald-600" />2 min read
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
            Delta State Assures On Delivery of Housing Projects
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed text-justify">
            The Delta State Commissioner for Housing has outlined strategic plans to tackle housing challenges, including the construction of duplexes and terraces for middle-income earners by 2025.
          </p>
        </header>

        <div className="relative w-full aspect-[16/9] md:aspect-[2/1] rounded-3xl overflow-hidden mb-16 shadow-2xl shadow-slate-200/50 border border-slate-100">
          <Image src="/news/news_housing_projects_1772545953160.png" alt="Delta State Housing Projects" fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 800px" />
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 space-y-6">
          <p className="text-slate-700 leading-relaxed text-[17px] text-justify">
            The Delta State Government has reaffirmed its deep commitment to addressing the growing housing deficit in the state through substantial investments in new residential infrastructure. The State Commissioner for Housing recently outlined a series of strategic plans designed specifically to tackle these challenges and improve overall access to affordable housing for residents.
          </p>
          <p className="text-slate-700 leading-relaxed text-[17px] text-justify">
            Central to this initiative is the construction of various modern housing units tailored to meet the needs of different demographics. The government's current developments include the construction of duplexes targeted at middle-income earners, as well as two-bedroom and three-bedroom terraces designed to accommodate civil servants and other essential workers within the state.
          </p>
          <p className="text-slate-700 leading-relaxed text-[17px] text-justify">
            Officials have provided assurances that many of these ongoing housing projects are progressing steadily. To promote sustainable urban development and expand necessary infrastructure, the state has set ambitious targets, with a significant number of these new, highly anticipated housing units slated for official commissioning by December 2025.
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
