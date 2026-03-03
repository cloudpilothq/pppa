import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowLeft, Clock } from 'lucide-react';
import ShareButton from '@/components/ShareButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Delta Assembly Proposes State Landlord and Tenant Law 2025 | DSPPPPA News',
  description: 'A new bill to standardize the relationship between landlords and tenants in Delta State has been proposed, aiming to replace the 1977 Rent Control law with modern protections.',
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
            title="Delta Assembly Proposes State Landlord and Tenant Law 2025"
            summary="A new bill to standardize the relationship between landlords and tenants in Delta State has been proposed, aiming to replace the 1977 Rent Control law with modern protections."
          />
        </div>
      </div>

      <article className="container mx-auto px-4 max-w-4xl pt-12">
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-500 mb-6">
            <div className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-full border border-slate-200 shadow-sm">
              <Calendar className="h-4 w-4 text-emerald-600" />February 14, 2025
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-full border border-slate-200 shadow-sm">
              <Clock className="h-4 w-4 text-emerald-600" />2 min read
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
            Delta Assembly Proposes State Landlord and Tenant Law 2025
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed text-justify">
            A new bill to standardize the relationship between landlords and tenants in Delta State has been proposed, aiming to replace the 1977 Rent Control law with modern protections.
          </p>
        </header>

        <div className="relative w-full aspect-[16/9] md:aspect-[2/1] rounded-3xl overflow-hidden mb-16 shadow-2xl shadow-slate-200/50 border border-slate-100">
          <Image src="/news/news_tenant_law_2025_1772545979908.png" alt="Delta State Landlord and Tenant Law 2025" fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 800px" />
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 space-y-6">
          <p className="text-slate-700 leading-relaxed text-[17px] text-justify">
            The Delta State House of Assembly has recently proposed a comprehensive new bill cited as the Delta State Landlord and Tenant Law 2025. This landmark legislative effort is designed to thoroughly overhaul and standardize the relationship between property owners and renters across the state, bringing modern protections to a sector that has long relied on outdated legal frameworks.
          </p>
          <p className="text-slate-700 leading-relaxed text-[17px] text-justify">
            A primary objective of the proposed 2025 Law is to officially repeal the antiquated 1977 Rent Control law, which no longer reflects the current economic realities or housing dynamics of Delta State. By introducing this new legal structure, state legislators aim to establish a more functional, equitable, and harmonious housing system for all residents.
          </p>
          <p className="text-slate-700 leading-relaxed text-[17px] text-justify">
            The bill introduces crucial modern protections for tenants, specifically aiming to curb sudden and arbitrary rent increments without proper economic justification. Furthermore, it strictly regulates the eviction process, ensuring that landlords must provide adequate, legally stipulated notice periods rather than resorting to self-help or harassment. The law also aims to bring transparency to real estate transactions by regulating agents to prevent exploitative commission fees.
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
