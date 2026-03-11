import { Handshake, Building2, Globe2 } from "lucide-react";

export default function PartnershipsPage() {
  return (
    <div className="bg-background min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center justify-center p-3 mb-6 bg-blue-100 rounded-full text-blue-600">
             <Handshake className="h-8 w-8" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Strategic Partnerships</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Collaborating with government bodies, international organizations, and private sector leaders to strengthen property protection frameworks.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
           {/* Mock Partners */}
           {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center justify-center text-center hover:shadow-md transition-all">
                 <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4 text-slate-400">
                    <Building2 className="h-8 w-8" />
                 </div>
                 <h3 className="font-bold text-slate-900">Partner Organization {i}</h3>
                 <p className="text-xs text-slate-500 mt-2">Strategic Ally</p>
              </div>
           ))}
        </div>

        {/* Call to Action */}
        <div className="bg-blue-900 rounded-2xl p-8 md:p-16 text-center text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 p-32 bg-blue-500/10 rounded-full blur-3xl"></div>
           <div className="absolute bottom-0 left-0 p-32 bg-blue-500/10 rounded-full blur-3xl"></div>
           
           <h2 className="text-3xl font-bold mb-6 relative z-10">Become a Partner</h2>
           <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto relative z-10">
              Join our network of organizations dedicated to upholding property rights and public trust.
           </p>
           <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-10 rounded-lg transition-colors relative z-10">
              Apply for Partnership
           </button>
        </div>
      </div>
    </div>
  );
}



