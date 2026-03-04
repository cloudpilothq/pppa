"use client";

import { useState } from 'react';
import { Shield, AlertTriangle, Upload, MapPin, CheckCircle, Send, FileText, Camera, Info, HelpCircle } from "lucide-react";

export default function ReportPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // ⚠️ IMPORTANT: Replace this with your actual email address.
    // FormSubmit will ask you to verify this email on the very first submission.
    const YOUR_EMAIL = "info@dspppa.org";

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${YOUR_EMAIL}`, {
        method: "POST",
        headers: {
            'Accept': 'application/json'
        },
        body: formData
      });
      
      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        alert("Oops! There was a problem submitting your report.");
      }
    } catch (error) {
      console.error(error);
      alert("Oops! There was a network error submitting your report.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
        <div className="bg-slate-50 min-h-screen pb-16">
            <div className="relative bg-slate-900 text-white py-24 overflow-hidden mb-16">
                 {/* Background Effects */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                  <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                  <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 bg-center"></div>
                </div>
                 <div className="container mx-auto px-4 text-center relative z-10 animate-in fade-in zoom-in duration-500">
                    <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-blue-500/20">
                        <CheckCircle className="h-12 w-12 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200">Report Submitted</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Your complaint has been submitted. Thank you for reporting this to us. A member of our team will be in touch shortly.
                    </p>
                    <button 
                        onClick={() => setSubmitted(false)}
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-900 bg-white rounded-xl hover:bg-slate-100 transition-all shadow-xl active:scale-95"
                    >
                        Submit Another Report
                    </button>
                 </div>
            </div>
        </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Hero Header */}
      <div className="relative bg-slate-900 text-white py-24 mb-16 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 bg-center"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-900/40 border border-red-500/30 text-red-400 text-sm font-medium backdrop-blur-sm mb-6">
            <AlertTriangle className="h-4 w-4" />
            <span>Formal Complaints Channel</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
            File a Complaint
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            If you are experiencing harassment, illegal levies, forceful entry, or any other form of unlawful interference with your property or development activities, DSPPPPA is here to help. Use the form below to submit a formal complaint and our team will respond promptly.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Sidebar Guidelines */}
            <div className="lg:col-span-1 space-y-8 order-2 lg:order-1">
                <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 sticky top-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                      <HelpCircle className="h-6 w-6 text-blue-600" />
                      What You Can Report
                    </h3>
                    <ul className="space-y-4 mb-10 text-slate-600">
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></div>
                          <span className="leading-snug">Illegal &lsquo;deve&rsquo; levies or demands for unauthorised payments at a construction site</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></div>
                          <span className="leading-snug">Forceful or unlawful entry into your property or development site</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></div>
                          <span className="leading-snug">Illegal occupation of land or buildings</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></div>
                          <span className="leading-snug">Harassment, threats, or intimidation of developers, workers, or property owners</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></div>
                          <span className="leading-snug">Vandalism or theft at a development site</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></div>
                          <span className="leading-snug">Fraudulent or deceptive land practices</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></div>
                          <span className="leading-snug">Any other unlawful disruption of legitimate construction or development activity</span>
                        </li>
                    </ul>

                    <hr className="border-slate-100 my-8" />

                    <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                      <Info className="h-6 w-6 text-blue-600" />
                      What Happens Next
                    </h3>
                    <div className="space-y-4 text-slate-600 leading-relaxed text-sm bg-slate-50 p-6 rounded-2xl border border-slate-100">
                      <p>
                        Once your complaint is received, a member of the DSPPPPA team will review it and contact you to confirm receipt and advise on next steps. Where urgent intervention is required, the Agency will coordinate with relevant security agencies to respond as quickly as possible.
                      </p>
                      <p className="font-semibold text-slate-800">
                        All complaints are handled with confidentiality and in accordance with the law.
                      </p>
                    </div>
                </div>
            </div>

            {/* Form Section */}
            <div className="lg:col-span-2 order-1 lg:order-2">
                <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
                    <div className="h-2 bg-gradient-to-r from-red-500 via-orange-500 to-amber-500"></div>
                    
                    <form onSubmit={handleSubmit} className="p-8 md:p-12">
                        {/* Prevent FormSubmit Captcha */}
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_subject" value="New Complaint Report Filed" />
                        
                        <div className="flex items-center gap-4 p-5 bg-amber-50 border border-amber-200 rounded-2xl text-amber-900 text-sm mb-10 shadow-sm">
                            <AlertTriangle className="h-6 w-6 shrink-0 text-amber-600" />
                            <p className="leading-snug">
                                For emergencies involving immediate threats to life or safety, do not use this form. Please contact local security agencies instantly.
                            </p>
                        </div>

                        <div className="space-y-12">
                            {/* Personal Details */}
                            <section>
                                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2 border-b border-slate-100 pb-4">
                                    <Shield className="h-6 w-6 text-slate-400" />
                                    Your Information
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="col-span-1 md:col-span-2 space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Full Name</label>
                                        <input required type="text" name="fullName" className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:bg-white focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all font-medium" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Phone Number</label>
                                        <input required type="tel" name="phone" className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:bg-white focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all font-medium" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                                        <input required type="email" name="email" className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:bg-white focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all font-medium" />
                                    </div>
                                    <div className="col-span-1 md:col-span-2 space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Your Address or Location</label>
                                        <input required type="text" name="address" className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:bg-white focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all font-medium text-sm" placeholder="Where can we reach you physically, if necessary?" />
                                    </div>
                                </div>
                            </section>

                            {/* Complaint Details */}
                            <section>
                                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2 border-b border-slate-100 pb-4">
                                    <FileText className="h-6 w-6 text-slate-400" />
                                    Complaint Details
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="col-span-1 md:col-span-2 space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Type of Complaint</label>
                                        <div className="relative">
                                          <select required name="complaintType" className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:bg-white focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all font-medium appearance-none">
                                              <option value="">Select Category...</option>
                                              <option>Illegal Levy</option>
                                              <option>Forceful Entry</option>
                                              <option>Illegal Occupation</option>
                                              <option>Harassment or Intimidation</option>
                                              <option>Vandalism or Theft</option>
                                              <option>Fraudulent Land Practice</option>
                                              <option>Other</option>
                                          </select>
                                          <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                                              <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                                          </div>
                                        </div>
                                    </div>
                                    <div className="col-span-1 md:col-span-2 space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Location of Incident</label>
                                        <div className="relative">
                                          <input required type="text" name="incidentLocation" className="w-full pl-11 pr-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:bg-white focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all font-medium" placeholder="Street, Landmark, LGA, State..." />
                                          <MapPin className="h-5 w-5 text-slate-400 absolute left-4 top-3.5" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Date of Incident</label>
                                        <input required type="date" name="incidentDate" className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:bg-white focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all font-medium text-slate-600" />
                                    </div>
                                    <div className="col-span-1 md:col-span-2 space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Description of Incident</label>
                                        <textarea 
                                            required
                                            name="incidentDescription"
                                            rows={5} 
                                            className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:bg-white focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all font-medium resize-none leading-relaxed"
                                            placeholder="Please describe exactly what happened, who was involved, and any other relevant details..."
                                        ></textarea>
                                    </div>
                                </div>
                            </section>

                            {/* Evidence */}
                            <section>
                                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2 border-b border-slate-100 pb-4">
                                    <Camera className="h-6 w-6 text-slate-400" />
                                    Supporting Documents
                                </h3>
                                <div className="border-2 border-dashed border-slate-300 rounded-2xl p-10 text-center hover:bg-slate-50 hover:border-slate-400 transition-all cursor-pointer group relative">
                                    <input type="file" name="evidenceAttachment" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept=".jpg,.jpeg,.png,.pdf,.mp4" />
                                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                      <Upload className="h-8 w-8 text-slate-500" />
                                    </div>
                                    <p className="text-base text-slate-700 font-medium mb-1">Click to upload photos, videos, or documents</p>
                                    <p className="text-sm text-slate-500">Supported formats: JPG, PNG, PDF, MP4 (Max: 20MB)</p>
                                </div>
                            </section>

                            {/* Confirmation */}
                            <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-200">
                              <input 
                                required
                                type="checkbox" 
                                id="confirm" 
                                className="w-5 h-5 text-red-600 rounded border-slate-300 focus:ring-red-500 mt-1 cursor-pointer shrink-0"
                              />
                              <label htmlFor="confirm" className="text-sm font-medium text-slate-700 leading-relaxed cursor-pointer select-none">
                                I confirm that the information provided above is true and accurate to the best of my knowledge.
                              </label>
                            </div>

                            <button disabled={isSubmitting} type="submit" className="w-full py-5 bg-red-600 hover:bg-red-700 text-white text-lg font-bold rounded-2xl shadow-xl shadow-red-600/20 transition-all active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-50 disabled:pointer-events-none">
                                {isSubmitting ? 'Submitting...' : 'Submit Complaint'}
                                <Send className="h-5 w-5" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}

