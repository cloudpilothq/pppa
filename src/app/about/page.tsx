import { Shield, Target, Scale, History } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Header */}
      <div className="relative bg-slate-900 text-white py-24 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 bg-center"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/30 border border-emerald-500/30 text-emerald-400 text-sm font-medium backdrop-blur-sm mb-6">
            <Shield className="h-4 w-4" />
            <span>Who We Are</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">About the Agency</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Established to serve the public interest, protecting integrity and property rights across the nation with unwavering dedication.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 space-y-24">
        {/* Mission Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4 text-emerald-600 font-semibold">
              <Target className="h-6 w-6" />
              <span>Our Mission</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">To Secure, Protect, and Empower.</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              The Private Public Property Protection Agency (PPPPA) is mandated to safeguard both public assets and private property rights. We exist to ensure that ownership is respected, disputes are resolved fairly, and the integrity of national infrastructure is maintained.
            </p>
          </div>
          <div className="bg-slate-100 rounded-2xl p-8 border border-slate-200">
             <div className="space-y-6">
                <div>
                   <h3 className="font-bold text-slate-800 mb-2">Transparency</h3>
                   <p className="text-slate-600">We operate with open books and clear accountability to the citizens.</p>
                </div>
                <div>
                   <h3 className="font-bold text-slate-800 mb-2">Integrity</h3>
                   <p className="text-slate-600">Uncompromising adherence to legal and ethical standards.</p>
                </div>
                <div>
                   <h3 className="font-bold text-slate-800 mb-2">Accessibility</h3>
                   <p className="text-slate-600">Services available to every citizen, regardless of status.</p>
                </div>
             </div>
          </div>
        </section>

        {/* Mandate Section */}
        <section>
          <div className="text-center mb-12">
             <div className="inline-flex items-center gap-2 text-emerald-600 font-semibold mb-4">
              <Scale className="h-6 w-6" />
              <span>Legal Authority</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Our Mandate</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-4 text-primary">Asset Verification</h3>
                <p className="text-slate-600">Verifying and digitizing records of all public lands and government-owned structures.</p>
             </div>
             <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-4 text-primary">Dispute Mediation</h3>
                <p className="text-slate-600">Providing an impartial platform for resolving property overlaps and boundary disputes.</p>
             </div>
             <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-4 text-primary">Policy Advisory</h3>
                <p className="text-slate-600">Advising the government on legislation regarding land use and property protection.</p>
             </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-slate-50 p-8 md:p-12 rounded-3xl">
           <div className="flex items-center gap-3 mb-8 text-primary font-semibold">
              <History className="h-6 w-6" />
              <span>Our History</span>
           </div>
           <div className="border-l-4 border-emerald-500 pl-8 space-y-12">
              <div className="relative">
                 <div className="absolute -left-[41px] bg-emerald-500 h-5 w-5 rounded-full border-4 border-white"></div>
                 <span className="text-sm font-bold text-emerald-600 block mb-1">2010</span>
                 <h3 className="text-xl font-bold text-slate-900">Establishment</h3>
                 <p className="text-slate-600 mt-2">The PPPPA was founded under the Property Protection Act of 2010.</p>
              </div>
              <div className="relative">
                 <div className="absolute -left-[41px] bg-emerald-500 h-5 w-5 rounded-full border-4 border-white"></div>
                 <span className="text-sm font-bold text-emerald-600 block mb-1">2018</span>
                 <h3 className="text-xl font-bold text-slate-900">Digital Transformation</h3>
                 <p className="text-slate-600 mt-2">Launched the National Digital Registry, modernizing records.</p>
              </div>
              <div className="relative">
                 <div className="absolute -left-[41px] bg-emerald-500 h-5 w-5 rounded-full border-4 border-white"></div>
                 <span className="text-sm font-bold text-emerald-600 block mb-1">2026</span>
                 <h3 className="text-xl font-bold text-slate-900">Vision 2030</h3>
                 <p className="text-slate-600 mt-2">Expanding mandate to include digital asset protection.</p>
              </div>
           </div>
        </section>
      </div>
    </div>
  );
}
