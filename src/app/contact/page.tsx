'use client';

import { useState } from 'react';
import { Mail, MapPin, Phone, Send, Info, MessageSquare, Clock, ArrowRight } from "lucide-react";
import Link from 'next/link';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // ⚠️ IMPORTANT: Replace this with your actual email address.
    // FormSubmit will ask you to verify this email on the very first submission.
    const YOUR_EMAIL = "schoolmill7@gmail.com";

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
        alert("Oops! There was a problem submitting your form.");
      }
    } catch (error) {
      console.error(error);
      alert("Oops! There was a network error submitting your form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Hero Header */}
      <div className="relative bg-slate-900 text-white py-24 mb-16 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 bg-center"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/30 border border-emerald-500/30 text-emerald-400 text-sm font-medium backdrop-blur-sm mb-6">
            <MessageSquare className="h-4 w-4" />
            <span>We are here to help</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">Get in Touch</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Report an issue, ask questions, or visit our regional offices to get assistance from the PPPPA team.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 space-y-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info Side */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
               <h3 className="text-2xl font-bold text-slate-900 mb-8">Our Offices</h3>
               <div className="space-y-10">
                  {/* Warri Office */}
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 shrink-0">
                      <MapPin className="h-7 w-7" />
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-bold text-slate-900 text-xl border-b border-slate-100 pb-2">Warri Office</h4>
                      <div className="text-slate-600 leading-relaxed text-[15px] space-y-1">
                        <p className="font-medium">Plot 630 Kestin Pondi Street</p>
                        <p>Off 9th Street, DDPA Housing Estate</p>
                        <p>Effurun, Delta State</p>
                      </div>
                      <div className="pt-2 space-y-2 text-[15px]">
                        <p className="flex items-center gap-2 text-slate-700">
                          <Phone className="h-4 w-4 text-slate-400" />
                          <span className="font-medium text-slate-900">Tel:</span> [to be confirmed]
                        </p>
                        <p className="flex items-center gap-2 text-slate-700">
                          <Mail className="h-4 w-4 text-slate-400" />
                          <span className="font-medium text-slate-900">Email:</span> [to be confirmed]
                        </p>
                        <p className="flex items-center gap-2 text-slate-700 pt-1">
                          <Clock className="h-4 w-4 text-emerald-500" />
                          Monday – Friday: <span className="font-medium">8:00am – 5:00pm</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Asaba Office */}
                  <div className="flex items-start gap-4 pt-6 border-t border-slate-100">
                    <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                      <MapPin className="h-7 w-7" />
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-bold text-slate-900 text-xl border-b border-slate-100 pb-2">Asaba Office</h4>
                      <div className="text-slate-600 leading-relaxed text-[15px] space-y-1">
                        <p className="font-medium">[Address to be confirmed]</p>
                      </div>
                      <div className="pt-2 space-y-2 text-[15px]">
                        <p className="flex items-center gap-2 text-slate-700">
                          <Phone className="h-4 w-4 text-slate-400" />
                          <span className="font-medium text-slate-900">Tel:</span> [to be confirmed]
                        </p>
                        <p className="flex items-center gap-2 text-slate-700">
                          <Mail className="h-4 w-4 text-slate-400" />
                          <span className="font-medium text-slate-900">Email:</span> [to be confirmed]
                        </p>
                        <p className="flex items-center gap-2 text-slate-700 pt-1">
                          <Clock className="h-4 w-4 text-emerald-500" />
                          Monday – Friday: <span className="font-medium">8:00am – 5:00pm</span>
                        </p>
                      </div>
                    </div>
                  </div>
               </div>
            </div>
          </div>

          {/* Contact Form Side */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 h-fit relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
            
            <h2 className="text-3xl font-bold text-slate-900 mb-2 relative z-10">Send us a Message</h2>
            <p className="text-slate-500 mb-8 relative z-10">Fill out the form below and our team will get back to you as soon as possible.</p>
            
            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-12 text-center animate-in fade-in zoom-in duration-300">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full mb-6 shadow-sm">
                   <Send className="h-10 w-10 ml-1" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-900 mb-3">Message Sent Successfully!</h3>
                <p className="text-emerald-700 mb-8 max-w-sm mx-auto">
                  Thank you for reaching out. A member of our team will get back to you as soon as possible.
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
                {/* Prevent FormSubmit Captcha */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Full Name</label>
                  <input required type="text" name="name" className="w-full px-4 py-3 bg-slate-50 rounded-lg border border-slate-200 focus:bg-white focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all font-medium" placeholder="John Doe" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                    <input required type="email" name="email" className="w-full px-4 py-3 bg-slate-50 rounded-lg border border-slate-200 focus:bg-white focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all font-medium" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Phone Number</label>
                    <input type="tel" name="phone" className="w-full px-4 py-3 bg-slate-50 rounded-lg border border-slate-200 focus:bg-white focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all font-medium" placeholder="+234 800 000 0000" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Subject</label>
                  <input required type="text" name="_subject" className="w-full px-4 py-3 bg-slate-50 rounded-lg border border-slate-200 focus:bg-white focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all font-medium" placeholder="How can we help?" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Your Message</label>
                  <textarea required name="message" rows={5} className="w-full px-4 py-3 bg-slate-50 rounded-lg border border-slate-200 focus:bg-white focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all font-medium resize-none" placeholder="Please provide details..."></textarea>
                </div>

                <button disabled={isSubmitting} type="submit" className="w-full bg-emerald-600 text-white font-bold py-4 rounded-xl hover:bg-emerald-500 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-emerald-500/30 flex justify-center items-center gap-2 disabled:opacity-50 disabled:pointer-events-none">
                  <Send className="w-5 h-5" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <section className="bg-slate-900 border border-slate-800 rounded-3xl p-10 md:p-16 text-center shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 bg-center"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto gap-6 flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white">Want to Report a Violation?</h2>
            <p className="text-slate-300 text-xl leading-relaxed mt-4 mb-6">
              If you are experiencing harassment, illegal levies, or any form of unlawful interference with your property, use our formal complaints process for the fastest response.
            </p>
            <Link
              href="/report"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-emerald-600 rounded-lg hover:bg-emerald-500 transition-all shadow-lg hover:shadow-emerald-500/25 active:scale-95 transform group"
            >
              File a Complaint
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
