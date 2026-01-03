"use client";

import { useState } from 'react';
import { Shield, AlertTriangle, Upload, MapPin, CheckCircle, Send, FileText, Camera } from "lucide-react";

export default function ReportPage() {
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
  };

  if (submitted) {
    return (
        <div className="bg-background min-h-screen pb-16">
            <div className="relative bg-slate-900 text-white py-24 overflow-hidden mb-16">
                 {/* Background Effects */}
                <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 bg-center"></div>
                </div>
                 <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-emerald-500/20">
                        <CheckCircle className="h-10 w-10 text-white" />
                    </div>
                    <h1 className="text-4xl font-extrabold mb-4">Report Submitted Successfully</h1>
                    <p className="text-xl text-slate-300 max-w-xl mx-auto mb-8">
                        Thank you for helping us protect national integrity. Your case ID is <span className="text-white font-mono bg-slate-800 px-2 py-1 rounded">#RPT-2026-8842</span>.
                    </p>
                    <button 
                        onClick={() => setSubmitted(false)}
                        className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-slate-900 bg-white rounded-lg hover:bg-slate-100 transition-all"
                    >
                        Submit Another Report
                    </button>
                 </div>
            </div>
        </div>
    );
  }

  return (
    <div className="bg-background min-h-screen pb-16">
      {/* Hero Header */}
      <div className="relative bg-slate-900 text-white py-24 overflow-hidden mb-16">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 bg-center"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-900/30 border border-red-500/30 text-red-400 text-sm font-medium backdrop-blur-sm mb-6">
            <AlertTriangle className="h-4 w-4" />
            <span>Confidential Channel</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Report an Incident</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Report property violations, land grabbing, or title fraud secure and confidentiality. Action will be taken immediately.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form Section */}
            <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                    <div className="p-1 bg-gradient-to-r from-red-500 to-orange-500"></div>
                    <form onSubmit={handleSubmit} className="p-8">
                        
                        <div className="flex items-center gap-4 p-4 bg-amber-50 border border-amber-200 rounded-lg text-amber-800 text-sm mb-8">
                            <AlertTriangle className="h-5 w-5 shrink-0" />
                            <p>For emergencies threatening life or peace, please call <strong>+234 800 555 0199</strong> immediately.</p>
                        </div>

                        <div className="space-y-8">
                            {/* Incident Details */}
                            <section>
                                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <FileText className="h-5 w-5 text-slate-400" />
                                    Incident Details
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-slate-700">Violation Type</label>
                                        <select className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all appearance-none bg-white">
                                            <option>Select Category...</option>
                                            <option>Land Grabbing / Encroachment</option>
                                            <option>Illegal Construction</option>
                                            <option>Title Fraud / Forgery</option>
                                            <option>Public Land Violation</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-slate-700">Date of Incident</label>
                                        <input type="date" className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all" />
                                    </div>
                                    <div className="col-span-1 md:col-span-2 space-y-2">
                                        <label className="block text-sm font-medium text-slate-700">Description</label>
                                        <textarea 
                                            rows={4} 
                                            className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all resize-none"
                                            placeholder="Please describe what happened, providing as much detail as possible..."
                                        ></textarea>
                                    </div>
                                </div>
                            </section>

                            <hr className="border-slate-100" />

                            {/* Location */}
                            <section>
                                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <MapPin className="h-5 w-5 text-slate-400" />
                                    Location
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-slate-700">State</label>
                                        <select className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all bg-white">
                                            <option>Select State...</option>
                                            <option>Abuja (FCT)</option>
                                            <option>Lagos</option>
                                            {/* Add more */}
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-slate-700">LGA / Area</label>
                                        <input type="text" placeholder="e.g. Gwarimpa" className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all" />
                                    </div>
                                    <div className="col-span-1 md:col-span-2 space-y-2">
                                        <label className="block text-sm font-medium text-slate-700">Address / Common Landmark</label>
                                        <input type="text" placeholder="Street name, near [Landmark], etc." className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all" />
                                    </div>
                                </div>
                            </section>

                            <hr className="border-slate-100" />

                            {/* Evidence */}
                            <section>
                                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <Camera className="h-5 w-5 text-slate-400" />
                                    Evidence (Optional)
                                </h3>
                                <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:bg-slate-50 transition-colors cursor-pointer">
                                    <Upload className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                                    <p className="text-sm text-slate-600 font-medium">Click to upload photos, videos, or documents</p>
                                    <p className="text-xs text-slate-400 mt-1">MP4, JPG, PNG, PDF up to 10MB</p>
                                </div>
                            </section>

                            <hr className="border-slate-100" />

                            {/* Reporter Info */}
                            <section>
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                                        <Shield className="h-5 w-5 text-slate-400" />
                                        Your Details
                                    </h3>
                                    <div className="flex items-center gap-2">
                                        <input 
                                            type="checkbox" 
                                            id="anonymous" 
                                            checked={isAnonymous}
                                            onChange={(e) => setIsAnonymous(e.target.checked)}
                                            className="w-4 h-4 text-red-600 rounded border-slate-300 focus:ring-red-500"
                                        />
                                        <label htmlFor="anonymous" className="text-sm font-medium text-slate-700 select-none cursor-pointer">Submit Anonymously</label>
                                    </div>
                                </div>
                                <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-300 ${isAnonymous ? 'opacity-50 pointer-events-none grayscale' : ''}`}>
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-slate-700">Full Name</label>
                                        <input type="text" disabled={isAnonymous} className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-slate-700">Phone Number</label>
                                        <input type="tel" disabled={isAnonymous} className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all" />
                                    </div>
                                    <div className="col-span-1 md:col-span-2 space-y-2">
                                        <label className="block text-sm font-medium text-slate-700">Email Address</label>
                                        <input type="email" disabled={isAnonymous} className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all" />
                                    </div>
                                </div>
                            </section>

                            <button type="submit" className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-lg shadow-red-500/30 transition-all active:scale-[0.99] flex items-center justify-center gap-2">
                                <Send className="h-5 w-5" />
                                Submit Report
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Sidebar Guide */}
            <div className="space-y-6">
                <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-lg">
                    <h3 className="text-lg font-bold mb-4">Process Timeline</h3>
                    <div className="space-y-6 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-700">
                        <div className="relative pl-10">
                            <div className="absolute left-0 top-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center border-4 border-slate-900 text-xs font-bold">1</div>
                            <h4 className="font-bold text-red-400">Submission</h4>
                            <p className="text-sm text-slate-400 mt-1">Report follows secure encryption protocols to our database.</p>
                        </div>
                         <div className="relative pl-10">
                            <div className="absolute left-0 top-0 w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center border-4 border-slate-900 text-xs font-bold">2</div>
                            <h4 className="font-bold">Initial Review</h4>
                            <p className="text-sm text-slate-400 mt-1">Officers verify details within 48 hours for validity.</p>
                        </div>
                         <div className="relative pl-10">
                            <div className="absolute left-0 top-0 w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center border-4 border-slate-900 text-xs font-bold">3</div>
                            <h4 className="font-bold">Investigation</h4>
                            <p className="text-sm text-slate-400 mt-1">Field agents dispatched to verify location and claims.</p>
                        </div>
                         <div className="relative pl-10">
                            <div className="absolute left-0 top-0 w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center border-4 border-slate-900 text-xs font-bold">4</div>
                            <h4 className="font-bold">Enforcement</h4>
                            <p className="text-sm text-slate-400 mt-1">Legal action or mediation initiated based on findings.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Privacy Guarantee</h3>
                    <p className="text-sm text-slate-600">
                        Your data is protected by the Data Protection Act. Anonymous reports are stripped of all digital identifiers before processing.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
