import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function AsabaWaterfrontNews() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-muted/30 pt-32 pb-20">
        <div className="container mx-auto px-4">
          <Link href="/news" className="inline-flex items-center text-secondary hover:text-secondary/80 mb-8 font-medium">
            &larr; Back to News
          </Link>
          <div className="max-w-4xl mx-auto bg-white border border-gray-100 rounded-lg shadow-lg overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="flex items-center space-x-4 text-sm text-slate-500 mb-6 font-medium">
                <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Urban Planning</span>
                <span>February 24, 2026</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                Asaba Waterfront City: Govt Warns Against Illegal Structures
              </h1>
              <div className="prose prose-slate max-w-none prose-lg">
                <p>The Delta State Government has issued a strong warning against the erection of illegal structures along the Asaba waterfront, citing environmental concerns and city planning violations.</p>
                <p>Full article coming soon.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
