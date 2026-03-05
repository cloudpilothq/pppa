import { UserCheck, ShieldCheck, Award, Briefcase } from "lucide-react";

const DEMO_LEADERS = [
  {
    id: 1,
    name: "Hon. Gibson Akporehe",
    role: "Director General",
    bio: "Hon. Gibson Akporehe brings over 20 years of experience in public administration and property law. He leads the DSPPPPA with a vision of a secure, transparent, and legally compliant property sector in Delta State. Under his leadership, the agency has significantly reduced land-related disputes and illegal levies.",
    icon: <ShieldCheck className="h-16 w-16" />
  },
  {
    id: 2,
    name: "Ms. Efemena Igbrude",
    role: "Director of Finance",
    bio: "Ms. Igbrude brings her top notch experience in finance and accounting. She leads the agency's financial operations, ensuring that the agency's resources are used effectively and efficiently.",
    icon: <Award className="h-16 w-16" />
  },
  {
    id: 3,
    name: "Barr. Reuben Onojewho",
    role: "Director of Legal",
    bio: "Barr. Onojewho oversees the agency's legal framework and enforcement strategies. With his extensive experience in property law and public policy, he guides the prosecution of property rights violators, ensures statutory compliance across all operations, and provides critical legal counsel to protect landowners in Delta State.",
    icon: <Briefcase className="h-16 w-16" />
  },
  {
    id: 4,
    name: "Mr. Kenneth Ashiponu",
    role: "Director of Operations",
    bio: "Mr. Ashiponu coordinates the on-ground task forces deployed across Warri, Asaba, and other key development hubs. His expertise in construction and site management ensures that field operations are handled professionally and safely.",
    icon: <UserCheck className="h-16 w-16" />
  },
  {
    id: 5,
    name: "Mr. Efe Akpokiniovo",
    role: "SSA",
    bio: "Mr. Akpokiniovo manages the agency's communications, ensuring the public is educated about their property rights. He leads community town halls and develops campaigns that encourage citizens to report unlawful disruptions.",
    icon: <UserCheck className="h-16 w-16" />
  },
];

export default function LeadershipPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Hero Header */}
      <div className="relative bg-blue-950 text-white py-24 mb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 bg-center"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-400 text-sm font-medium backdrop-blur-sm mb-6">
            <UserCheck className="h-4 w-4" />
            <span>Our Executive Team</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
            Agency Leadership
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Meet the dedicated professionals guiding the DSPPPPA towards a more secure, lawful, and transparent future for property development in Delta State.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {DEMO_LEADERS.map((leader) => (
            <div key={leader.id} className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/40 border border-slate-100 hover:shadow-2xl hover:shadow-slate-200/60 transition-all group flex flex-col sm:flex-row">
              <div className="sm:w-2/5 h-64 sm:h-auto bg-slate-100 relative overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 transform group-hover:scale-105 transition-transform duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 group-hover:text-blue-500 transition-colors duration-300">
                  {leader.icon}
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-900/90 to-transparent p-4 sm:hidden">
                    <span className="text-white text-xs font-bold uppercase tracking-widest bg-blue-600 px-3 py-1 rounded-lg shadow-sm">
                      {leader.role}
                    </span>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center sm:w-3/5">
                <div className="hidden sm:inline-block mb-3">
                    <span className="text-blue-700 text-xs font-bold uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-lg border border-blue-100">
                      {leader.role}
                    </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors">{leader.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {leader.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

