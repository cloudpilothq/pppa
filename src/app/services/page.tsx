import Link from "next/link";
import { ShieldCheck, Gavel, Search, Building, FileKey, Users } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Title Verification",
      slug: "title-verification",
      icon: FileKey,
      desc: "Fast-track verification of property titles for buyers and sellers to prevent fraud.",
    },
    {
      title: "Boundary Dispute Resolution",
      slug: "boundary-dispute-resolution",
      icon: Gavel,
      desc: "Mediation services for boundary conflicts between private entities or public bodies.",
    },
    {
      title: "Public Asset Safeguarding",
      slug: "public-asset-safeguarding",
      icon: Building,
      desc: "Monitoring and securing government-owned infrastructure and land reserves.",
    },
    {
      title: "Tenant & Landlord Advisory",
      slug: "tenant-landlord-advisory",
      icon: Users,
      desc: "Guidance on rights and responsibilities under the Tenant Protection Act.",
    },
    {
      title: "Fraud Investigation",
      slug: "fraud-investigation",
      icon: Search,
      desc: "Specialized unit for investigating reports of property scams and illegal transfers.",
    },
    {
      title: "Compliance Certification",
      slug: "compliance-certification",
      icon: ShieldCheck,
      desc: "Issuing compliance certificates for new developments and construction projects.",
    },
  ];

  return (
    <div className="bg-background min-h-screen pb-16">
      {/* Hero Header */}
      <div className="relative bg-blue-950 text-white py-24 overflow-hidden mb-16">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 bg-center"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-sm font-medium backdrop-blur-sm mb-6">
            <ShieldCheck className="h-4 w-4" />
            <span>Our Expertise</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Our Services</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Comprehensive protection and advisory services for citizens and efficient management for the state.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all group flex flex-col">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-auto">{service.desc}</p>
              <Link href={`/services/${service.slug}`} className="mt-6 text-blue-600 font-semibold text-sm hover:underline inline-flex items-center">
                Learn More →
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-blue-950 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">Need Custom Assistance?</h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Our specialized teams are ready to assist with complex cases involving large-scale developments or sensitive disputes.
            </p>
            <Link href="/contact" className="inline-block bg-blue-500 hover:bg-blue-400 text-slate-900 font-bold py-4 px-10 rounded-lg transition-all hover:scale-105 shadow-lg shadow-blue-500/25">
              Contact Support Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

