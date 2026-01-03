'use client';

import { useState } from 'react';
import { Mail, MapPin, Phone, Send, Info, MessageSquare, Clock } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => setSubmitted(true), 1000);
  };

  return (
    <div className="bg-background min-h-screen pb-16">
      {/* Hero Header */}
      <div className="relative bg-slate-900 text-white py-24 overflow-hidden mb-16">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 bg-center"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/30 border border-emerald-500/30 text-emerald-400 text-sm font-medium backdrop-blur-sm mb-6">
            <MessageSquare className="h-4 w-4" />
            <span>24/7 Support</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Get in Touch</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We are here to assist you. Report issues, ask questions, or visit our regional offices.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info Side */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
               <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
               <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg mb-1">Headquarters</h4>
                      <p className="text-slate-600 leading-relaxed">
                        Block B: Federal Agency Complex<br />
                        Gwarimpa, Abuja, Nigeria
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg mb-1">Phone Lines</h4>
                      <p className="text-slate-600 mb-1">
                        General Inquiries: <span className="font-medium text-slate-900">+234 800 555 0199</span>
                      </p>
                      <p className="text-red-600 font-bold bg-red-50 inline-block px-2 py-1 rounded text-sm">
                        Emergency Hotline: 112 / +234
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg mb-1">Email Support</h4>
                      <p className="text-slate-600">
                        General: <a href="mailto:contact@pppa.gov.ng" className="text-emerald-600 hover:underline">contact@pppa.gov.ng</a><br />
                        Media: <a href="mailto:press@pppa.gov.ng" className="text-emerald-600 hover:underline">press@pppa.gov.ng</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 pt-4 border-t border-slate-100">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500 shrink-0">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg mb-1">Office Hours</h4>
                      <p className="text-slate-600">
                        Monday - Friday: 8:00 AM - 4:00 PM<br />
                        <span className="text-sm italic">Closed on Federal Holidays</span>
                      </p>
                    </div>
                  </div>
               </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-80 bg-slate-200 rounded-2xl relative overflow-hidden border border-slate-300 shadow-inner group">
               <div className="absolute inset-0 bg-slate-300 animate-pulse"></div>
               <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-medium z-10">
                  <MapPin className="h-8 w-8 mr-2 text-slate-400" />
                  Interactive Map Loading...
               </div>
            </div>
          </div>

          {/* Contact Form Side */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100 h-fit relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
            
            <h2 className="text-3xl font-bold text-slate-900 mb-2 relative z-10">Send us a Message</h2>
            <p className="text-slate-500 mb-8 relative z-10">Fill out the form below and our team will get back to you within 24 hours.</p>
            
            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-12 text-center animate-in fade-in zoom-in duration-300">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full mb-6 shadow-sm">
                   <Send className="h-10 w-10 ml-1" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-900 mb-3">Message Sent Successfully!</h3>
                <p className="text-emerald-700 mb-8 max-w-sm mx-auto">
                  Thank you for reaching out. Your reference number is <span className="font-mono font-bold">#TRX-{Math.floor(Math.random() * 10000)}</span>.
                </p>
                <button 
                  onClick={() => setSubmitted(false)} 
                  className="px-8 py-3 bg-white border border-emerald-200 text-emerald-700 font-bold rounded-xl hover:bg-emerald-50 transition-colors shadow-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">First Name</label>
                    <input required type="text" className="w-full px-4 py-3 bg-slate-50 rounded-lg border border-slate-200 focus:bg-white focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all font-medium" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Last Name</label>
                    <input required type="text" className="w-full px-4 py-3 bg-slate-50 rounded-lg border border-slate-200 focus:bg-white focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all font-medium" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                  <input required type="email" className="w-full px-4 py-3 bg-slate-50 rounded-lg border border-slate-200 focus:bg-white focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all font-medium" placeholder="john@example.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Subject</label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 bg-slate-50 rounded-lg border border-slate-200 focus:bg-white focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all font-medium appearance-none">
                        <option>General Inquiry</option>
                        <option>Report a Violation</option>
                        <option>Public Records Request</option>
                        <option>Partnership Proposal</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                        <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Message</label>
                  <textarea required rows={5} className="w-full px-4 py-3 bg-slate-50 rounded-lg border border-slate-200 focus:bg-white focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all font-medium resize-none" placeholder="How can we help you?"></textarea>
                </div>

                <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl flex items-start gap-3">
                   <Info className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                   <p className="text-sm text-blue-800 leading-snug">
                     For emergencies involving immediate threat to property or safety, do not use this form. Please call <strong>112</strong> or <strong>+234</strong> immediately.
                   </p>
                </div>

                <button type="submit" className="w-full bg-emerald-600 text-white font-bold py-4 rounded-xl hover:bg-emerald-500 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-emerald-500/30">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
