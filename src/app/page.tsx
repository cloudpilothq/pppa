import Link from "next/link";
import { ArrowRight, Shield, Globe, Users, FileText } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-24 lg:py-32 overflow-hidden items-center flex">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/30 border border-emerald-500/30 text-emerald-400 text-sm font-medium backdrop-blur-sm mx-auto mb-6">
              <Shield className="h-4 w-4" />
              <span>Official Property Protection Agency</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
              Safeguarding Assets, <br />
              <span className="text-emerald-400">Ensuring Public Trust.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              We protect public and private property rights through transparency,
              accountability, and rigorous enforcement.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link
                href="/rights"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-emerald-600 rounded-lg hover:bg-emerald-500 transition-all shadow-lg hover:shadow-emerald-500/25 active:scale-95 transform"
              >
                Know Your Rights
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border border-slate-700 bg-slate-800/50 backdrop-blur-sm rounded-lg hover:bg-slate-800 hover:border-slate-600 transition-all active:scale-95 transform"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Grid */}
      {/* Quick Access Grid */}
      <section className="py-20 -mt-20 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Report an Incident",
                icon: Shield,
                desc: "File a confidential report regarding property violations.",
                link: "/report",
                color: "text-red-500",
                bg: "bg-red-500/10",
                border: "hover:border-red-500/50",
              },
              {
                title: "Public Records",
                icon: FileText,
                desc: "Access public property registries and legal documents.",
                link: "/records",
                color: "text-blue-500",
                bg: "bg-blue-500/10",
                border: "hover:border-blue-500/50",
              },
              {
                title: "Agency Leadership",
                icon: Users,
                desc: "Meet the Director General and management team.",
                link: "/leadership",
                color: "text-emerald-500",
                bg: "bg-emerald-500/10",
                border: "hover:border-emerald-500/50",
              },
            ].map((item, idx) => (
              <Link key={idx} href={item.link} className="group block h-full">
                <div className={`bg-white p-8 rounded-2xl shadow-xl border border-slate-100 ${item.border} transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 h-full flex flex-col`}>
                  <div className={`w-16 h-16 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {item.desc}
                  </p>
                  <div className={`mt-auto pt-6 flex items-center font-semibold ${item.color} opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0`}>
                    Access Now <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
               <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl"></div>
               <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"></div>
               <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600">
                      <Shield className="h-6 w-6" />
                    </div>
                    <span className="font-bold text-slate-800 text-lg">Official Mandate</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Protecting Assets, Securing the Future.</h3>
                  <p className="text-slate-600 mb-6">
                    From verifying land titles to mediating boundary disputes, the PPPA acts as the guardian of property rights for both citizens and the state.
                  </p>
                  <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-emerald-500 rounded-full"></div>
                  </div>
                  <p className="text-xs text-slate-500 mt-2 text-right">Integrity Index: 98%</p>
               </div>
            </div>
            <div className="lg:w-1/2">
              <span className="text-emerald-600 font-bold tracking-wider text-sm uppercase mb-2 block">About The Agency</span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Ensuring Fairness in <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">Property Rights</span>
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                The Private Public Property Protection Agency (PPPA) was established to serve as the unified body for regulating, verifying, and protecting property interests across the nation.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We operate with transparency and rigorous enforcement to ensure every citizen's right to own and secure property is respected.
              </p>
              <Link 
                href="/about" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-slate-900 rounded-lg hover:bg-emerald-600 transition-all shadow-lg hover:shadow-emerald-500/30 group"
              >
                Continue Reading
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent News Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Latest Updates</h2>
              <p className="text-slate-600">News, announcements, and press releases.</p>
            </div>
            <Link href="/news" className="text-emerald-600 font-semibold hover:text-emerald-700 flex items-center">
              View All News <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Q1 Property Compliance Report Released",
                date: "Jan 12, 2026",
                category: "Report",
                summary: "The agency has released the quarterly compliance figures showing a 15% increase in verified assets.",
              },
              {
                title: "New Public Asset Protection Law",
                date: "Jan 05, 2026",
                category: "Legislation",
                summary: "Understanding the new amendments to the Public Property Protection Act of 2025.",
              },
              {
                title: "Community Outreach Program Launch",
                date: "Dec 28, 2025",
                category: "Events",
                summary: "Join us for a series of town hall meetings discussing local property rights.",
              },
            ].map((news, i) => (
              <div key={i} className="border border-slate-200 rounded-lg overflow-hidden hover:border-emerald-500 transition-colors group cursor-pointer">
                <div className="bg-slate-100 h-48 w-full flex items-center justify-center text-slate-400">
                  <Globe className="h-12 w-12" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-600 mb-2">
                    {news.category} • {news.date}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700">
                    {news.title}
                  </h3>
                  <p className="text-slate-600 text-sm line-clamp-3">
                    {news.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Banner */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8">Trusted by Strategic Partners</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Placeholders for logos */}
             <div className="text-xl font-bold text-slate-700">GOV.CORP</div>
             <div className="text-xl font-bold text-slate-700">SECURE.IO</div>
             <div className="text-xl font-bold text-slate-700">CITY WIDE</div>
             <div className="text-xl font-bold text-slate-700">ASSET GUARD</div>
          </div>
        </div>
      </section>
    </div>
  );
}
