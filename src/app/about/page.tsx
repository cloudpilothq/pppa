import Link from 'next/link';
import { Shield, Target, Eye, Activity, Scale, HeartHandshake, Users, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Header */}
      <div className="relative bg-slate-900 text-white py-24 md:py-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 bg-center"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/30 border border-emerald-500/30 text-emerald-400 text-sm font-medium backdrop-blur-sm mb-6 max-w-full">
            <Shield className="h-4 w-4 shrink-0" />
            <span className="truncate whitespace-normal text-left">Welcome to the Delta State Public and Private Property Protection Agency</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
            About Us
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            The Public and Private Property Protection Agency (DSPPPPA) is a Delta State Government agency established to safeguard public and private property across the state.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 space-y-32">
        {/* Who We Are */}
        <section className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Who We Are</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full mb-8"></div>
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 text-justify text-justify-last-left">
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              The Public and Private Property Protection Agency (DSPPPPA) is a Delta State Government agency established to safeguard public and private property across the state and to ensure that all development activities take place lawfully, peacefully, and without unlawful interference. It is the body empowered to enforce the Delta State Public and Private Properties Protection Law, 2018.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              The Agency was created in response to persistent threats to property development in Delta State — including illegal levies commonly known as &ldquo;deve,&rdquo; forceful entry into construction sites, illegal land occupation, harassment of developers, and unlawful disruption of construction activities. These practices have long increased development costs, delayed projects, and weakened investor confidence across the state.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
              <Target className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed text-lg text-justify text-justify-last-left">
              To protect public and private property in Delta State by enforcing property protection laws, preventing illegal levies, forceful entry, and unlawful occupation, and ensuring a safe, orderly, and predictable environment for development and investment.
            </p>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <Eye className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed text-lg text-justify text-justify-last-left">
              A Delta State where property development is secure, lawful, and free from intimidation — and where sustained growth and industrial progress thrive in an atmosphere of peace, order, and investor confidence.
            </p>
          </div>
        </section>

        {/* What We Do */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">What We Do</h2>
            <div className="w-20 h-1 bg-emerald-500 rounded-full mb-8"></div>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed text-justify text-justify-last-left">
              <p>
                DSPPPPA enforces property protection laws, investigates complaints, protects construction sites, and eliminates extortion practices that drive up development costs and discourage investment. The Agency provides a formal channel through which individuals, businesses, and government entities can report violations, seek protection, and obtain lawful intervention in development-related disputes.
              </p>
              <p>
                We collaborate with security agencies to maintain order at development sites, work with the Ministry of Justice to ensure legal compliance and proper prosecution of offenders, and partner with traditional institutions and community leadership to prevent conflicts and promote peaceful development.
              </p>
              <p>
                By removing illegal barriers to development and creating a secure, predictable environment for investment, DSPPPPA plays a central role in driving Delta State&rsquo;s economic growth — supporting infrastructure expansion, job creation, and the state&rsquo;s vision of becoming a leading commercial and industrial hub in Nigeria.
              </p>
              <p className="font-medium text-slate-800">
                Guided by professionalism, fairness, and transparency, the Agency is committed to upholding the rule of law and ensuring that Delta State remains a place where property development can thrive in an atmosphere of peace, security, and investor confidence.
              </p>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-blue-500/20 rounded-3xl transform rotate-3 scale-105 filter blur-xl"></div>
            <div className="grid grid-cols-2 gap-6 relative z-10">
              {[
                { icon: Scale, text: "Enforce Laws", color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
                { icon: Shield, text: "Protect Sites", color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
                { icon: Activity, text: "Investigate", color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-100" },
                { icon: HeartHandshake, text: "Resolve Disputes", color: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-100" }
              ].map((item, i) => (
                <div key={i} className={`bg-white text-center p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all border ${item.border}`}>
                  <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 ${item.bg} ${item.color}`}>
                    <item.icon className="h-8 w-8" />
                  </div>
                  <span className="font-bold text-slate-800 text-lg">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Mandate */}
        <section className="bg-slate-900 text-white rounded-3xl p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-10 text-center">Our Mandate</h2>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <p className="text-xl font-medium mb-8 text-emerald-400">The Agency is empowered to:</p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6">
                {[
                  "Enforce all relevant laws relating to the protection of property and development across Delta State",
                  "Prevent actions that obstruct lawful construction and infrastructure projects",
                  "Provide a formal channel through which individuals, businesses, and government entities can seek protection, report violations, and obtain lawful intervention",
                  "Investigate and respond to complaints of harassment, intimidation, or violence related to property and development",
                  "Protect construction sites and development projects from illegal entry, occupation, vandalism, and theft",
                  "Eliminate illegal levies and extortion practices that increase development costs and discourage investment",
                  "Collaborate with security agencies to maintain order and enforce the law at development sites",
                  "Work with the Ministry of Justice to ensure legal compliance and proper prosecution of offenders",
                  "Partner with traditional institutions and community leadership to prevent conflicts and promote peaceful development",
                  "Facilitate early intervention and dispute management to prevent escalation",
                  "Promote public awareness of property rights, development regulations, and lawful processes",
                  "Monitor and support compliance with relevant laws in collaboration with other government agencies",
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <CheckCircle2 className="h-6 w-6 text-emerald-400 shrink-0 mt-0.5" />
                    <p className="text-slate-300 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="bg-emerald-50 border border-emerald-100 p-8 md:p-16 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Shield className="w-64 h-64 text-emerald-900" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why It Matters</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-slate-700 leading-relaxed font-medium text-justify text-justify-last-left">
              By securing development sites, protecting investments, and removing illegal barriers to construction, DSPPPPA contributes directly to the growth of towns and cities across Delta State. Through its enforcement and protective functions, DSPPPPA helps establish the conditions necessary for infrastructure expansion, economic growth, job creation, and the attraction of local and external investment — supporting Delta State&rsquo;s vision of becoming a leading destination for business and development in Nigeria.
            </p>
          </div>
        </section>

        {/* Our People */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our People</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-slate-600">The leadership driving the vision.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Hon. Gibson Akporehe", title: "Director General" },
              { name: "Ms. Efemena Igbrude", title: "Director of Finance" },
              { name: "Barr. Reuben Onojewho", title: "Director of Legal" },
              { name: "Mr. Kenneth Ashiponu", title: "Director of Operations" },
            ].map((person, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 text-center hover:-translate-y-2 transition-transform duration-300">
                <div className="w-24 h-24 bg-slate-100 text-slate-400 rounded-full mx-auto flex items-center justify-center mb-6">
                  <Users className="h-10 w-10" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{person.name}</h3>
                <p className="text-emerald-600 font-medium">{person.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-emerald-600 text-white rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl shadow-emerald-600/20">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 bg-center"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/10 rounded-full blur-3xl mix-blend-overlay"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto gap-6 flex flex-col">
            <h2 className="text-3xl md:text-5xl font-bold">Ready to Learn More or <br className="hidden md:block"/>File a Complaint?</h2>
            <p className="text-emerald-50 text-xl leading-relaxed mt-4 mb-6">
              If you&rsquo;d like to learn more about our operations or report a property violation, you can reach us via the contact information below or use our complaints form.
            </p>
            <div className="flex justify-center mt-2">
              <Link
                href="/report"
                className="inline-flex items-center justify-center px-8 py-5 text-lg font-bold text-emerald-600 bg-white rounded-xl hover:bg-slate-50 transition-all shadow-xl active:scale-95 transform group"
              >
                File a Complaint
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

