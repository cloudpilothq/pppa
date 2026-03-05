"use client";

import { useState } from 'react';
import { ShieldCheck, Search, FileKey, AlertCircle, CheckCircle, XCircle, Info } from "lucide-react";

export default function VerifyPage() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
        // Mock simple logic: if query contains "error" or "fake", fail. Else success.
        if (query.toLowerCase().includes('fake') || query.toLowerCase().includes('error')) {
            setStatus('error');
        } else {
            setStatus('success');
        }
    }, 2000);
  };

  return (
    <div className="bg-background min-h-screen pb-16">
      {/* Hero Header */}
      <div className="relative bg-blue-950 text-white py-24 overflow-hidden mb-16">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 bg-center"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-sm font-medium backdrop-blur-sm mb-6">
            <ShieldCheck className="h-4 w-4" />
            <span>Public Registry Access</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Verify Title & Allocation</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Instantly verify the authenticity of Certificates of Occupancy, Allocation Letters, and other property documents.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Search Tool */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 md:p-12 mb-16 relative overflow-hidden">
            <div className="max-w-2xl mx-auto space-y-6">
                <div className="text-center mb-8">
                     <h2 className="text-2xl font-bold text-slate-900">Document Verification Portal</h2>
                     <p className="text-slate-500">Enter the File Number or C of O ID found on your document.</p>
                </div>
                
                <form onSubmit={handleVerify} className="relative">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="relative flex-1">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FileKey className="h-5 w-5 text-slate-400" />
                            </div>
                            <input 
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="e.g. FCT/ABJ/2025/LAND/9928" 
                                className="block w-full pl-10 p-4 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all font-mono uppercase"
                            />
                        </div>
                        <button 
                            type="submit"
                            disabled={status === 'loading' || !query}
                            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center gap-2 min-w-[160px]"
                        >
                            {status === 'loading' ? (
                                <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            ) : (
                                <>
                                    <Search className="h-5 w-5" />
                                    Verify Now
                                </>
                            )}
                        </button>
                    </div>
                </form>

                {/* Results Display */}
                {status === 'success' && (
                    <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-xl animate-in fade-in slide-in-from-bottom-2">
                        <div className="flex items-start gap-4">
                            <div className="bg-blue-100 p-2 rounded-full shrink-0">
                                <CheckCircle className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-blue-800 text-lg">Document Valid & Active</h3>
                                <p className="text-blue-700/80 mt-1">The ID <strong>{query.toUpperCase()}</strong> matches an active record in our database.</p>
                                <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                                    <div className="bg-white/50 p-3 rounded">
                                        <span className="block text-blue-600/70 text-xs uppercase tracking-wider">Owner Type</span>
                                        <span className="font-semibold text-blue-900">Private Entity</span>
                                    </div>
                                    <div className="bg-white/50 p-3 rounded">
                                        <span className="block text-blue-600/70 text-xs uppercase tracking-wider">Status</span>
                                        <span className="font-semibold text-blue-900">Allocated</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {status === 'error' && (
                    <div className="mt-8 p-6 bg-red-50 border border-red-200 rounded-xl animate-in fade-in slide-in-from-bottom-2">
                        <div className="flex items-start gap-4">
                            <div className="bg-red-100 p-2 rounded-full shrink-0">
                                <XCircle className="h-6 w-6 text-red-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-red-800 text-lg">No Record Found / Invalid</h3>
                                <p className="text-red-700/80 mt-1">The ID <strong>{query.toUpperCase()}</strong> could not be verified. This document may be fraudulent, revoked, or non-existent.</p>
                                <button className="mt-4 text-sm font-semibold text-red-800 underline hover:text-red-900">
                                    Report this document immediately
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>

        {/* Security Features */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                <div className="flex items-center gap-3 mb-6 text-blue-700">
                    <ShieldCheck className="h-6 w-6" />
                    <h3 className="text-xl font-bold">Security Features Check</h3>
                </div>
                <ul className="space-y-4">
                     {[
                         "Holographic Seal on top right corner",
                         "Watermarked paper with Agency logo",
                         "QR Code linking to this portal",
                         "Digital Signature of the Director General"
                     ].map((item, i) => (
                         <li key={i} className="flex items-start gap-3 text-slate-600">
                             <CheckCircle className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                             <span>{item}</span>
                         </li>
                     ))}
                </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 border-l-4 border-l-orange-500">
                <div className="flex items-center gap-3 mb-4 text-orange-700">
                    <AlertCircle className="h-6 w-6" />
                    <h3 className="text-xl font-bold">Help & Support</h3>
                </div>
                 <p className="text-slate-600 mb-6">
                     If you suspect a document is fake or cannot verify your title online, please visit our head office for manual verification.
                 </p>
                 <div className="flex flex-col gap-2 text-sm text-slate-700">
                     <p className="font-semibold">Verification Unit Hours:</p>
                     <p>Mon - Fri: 8:00 AM - 4:00 PM</p>
                 </div>
            </div>
        </section>

      </div>
    </div>
  );
}

