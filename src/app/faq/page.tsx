'use client';

import { useState } from 'react';
import { HelpCircle, ChevronDown, MessageSquare } from "lucide-react";
import Link from 'next/link';

const faqs = [
  {
    question: "What is DSPPPPA?",
    answer: "The Public and Private Property Protection Agency (DSPPPPA) is a Delta State Government agency established to protect public and private property across the state. We enforce the Delta State Public and Private Properties Protection Law, 2018, and work to ensure that all development activities take place lawfully, peacefully, and without unlawful interference."
  },
  {
    question: "Who established DSPPPPA?",
    answer: "DSPPPPA was established by the Delta State Government. It is empowered by law to enforce property protection regulations, investigate violations, and collaborate with security agencies and other government bodies to protect development activities across the state."
  },
  {
    question: "What area does DSPPPPA cover?",
    answer: "DSPPPPA operates across all of Delta State. We have offices in both Warri and Asaba to serve residents and developers in all parts of the state."
  },
  {
    question: "Who can file a complaint?",
    answer: "Anyone who has experienced or witnessed a property-related violation can file a complaint — including private individuals, property owners, developers, businesses, and government entities."
  },
  {
    question: "How do I file a complaint?",
    answer: "You can file a complaint by completing our online form on the File a Complaint page, by calling our office directly, or by visiting either our Warri or Asaba office in person during business hours."
  },
  {
    question: "What happens after I submit a complaint?",
    answer: "Our team will review your complaint and contact you to confirm receipt and explain the next steps. Where the situation requires urgent action, we will coordinate with relevant security agencies to respond as quickly as possible."
  },
  {
    question: "Do I need evidence to file a complaint?",
    answer: "You do not need to provide evidence to file a complaint, but any supporting documents or photographs you can share will help us respond more effectively."
  },
  {
    question: "Is my complaint kept confidential?",
    answer: "Yes. All complaints are handled with confidentiality and in accordance with the law."
  },
  {
    question: "What is a ‘deve’ levy?",
    answer: "A ‘deve’ levy refers to an illegal, unofficial fee demanded from developers or property owners, typically at construction sites. These payments are not authorised by law and amount to extortion. If anyone is demanding such payments from you, report it to DSPPPPA immediately."
  },
  {
    question: "What should I do if someone demands an illegal levy from me?",
    answer: "Do not pay. Report the incident to DSPPPPA as soon as possible using our complaints form or by calling our office. Where possible, document the incident with photos or a written record of what happened."
  },
  {
    question: "Does DSPPPPA work with the police and other security agencies?",
    answer: "Yes. DSPPPPA collaborates with the police and other relevant security agencies to enforce property protection laws, maintain order at development sites, and respond to violations."
  },
  {
    question: "Can DSPPPPA help if my construction site has been occupied illegally?",
    answer: "Yes. Illegal occupation of a development site is one of the violations DSPPPPA is specifically mandated to address. File a complaint and our team will assess the situation and take the necessary enforcement action."
  },
  {
    question: "Where are your offices?",
    answer: "We have offices in Warri (Plot 630 Kestin Pondi Street, Off 9th Street, DDPA Housing Estate, Effurun, Delta State) and in Asaba [address to be confirmed]. Both offices are open Monday to Friday, 8:00am – 5:00pm."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Hero Header */}
      <div className="relative bg-slate-900 text-white py-24 mb-16 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 bg-center"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-400 text-sm font-medium backdrop-blur-sm mb-6">
            <HelpCircle className="h-4 w-4" />
            <span>Frequently Asked Questions</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
            FAQs
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about the Agency, our services, and how we can help you.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 md:p-12 mb-16">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  openIndex === index 
                    ? 'border-blue-200 bg-blue-50/30' 
                    : 'border-slate-200 bg-white hover:border-blue-200 hover:bg-slate-50'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-2xl"
                  aria-expanded={openIndex === index}
                >
                  <span className={`text-lg font-bold pr-6 transition-colors ${openIndex === index ? 'text-blue-900' : 'text-slate-800'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                    openIndex === index ? 'bg-blue-100 text-blue-600 rotate-180' : 'bg-slate-100 text-slate-400'
                  }`}>
                    <ChevronDown className="h-5 w-5" />
                  </div>
                </button>
                
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed">
                      {faq.answer.includes('File a Complaint page') ? (
                        <p>
                          {faq.answer.split('File a Complaint page')[0]}
                          <Link href="/report" className="text-blue-600 font-medium hover:underline">
                            File a Complaint page
                          </Link>
                          {faq.answer.split('File a Complaint page')[1]}
                        </p>
                      ) : (
                        <p>{faq.answer}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <section className="bg-slate-900 border border-slate-800 rounded-3xl p-10 md:p-16 text-center shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 bg-center"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-6">
                <MessageSquare className="h-8 w-8 text-blue-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Still have questions?</h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Cannot find the answer you are looking for? Please reach out to our support team and we will get back to you as soon as possible.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-slate-900 bg-white rounded-xl hover:bg-slate-100 transition-all shadow-lg active:scale-95"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

