import Link from 'next/link';
import { Shield } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans pb-24">
      
      {/* Hero Header */}
      <div className="relative bg-slate-900 text-white py-24 md:py-32 overflow-hidden mb-16">
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
            The Delta State Public and Private Property Protection Agency (DSPPPPA) is a Delta State Government agency established to safeguard public and private property across the state.
          </p>
        </div>
      </div>

      {/* Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1000px] space-y-20 md:space-y-28">
        
        {/* Top Section */}
        <section>
          <div className="w-full aspect-[21/10] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-lg relative">
            <img 
              src="https://images.unsplash.com/photo-1519508502390-1cfa9768cdcb?q=80&w=2670&auto=format&fit=crop" 
              alt="Delta State Landscape" 
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Who We Are */}
        <section>
          <h2 className="text-[32px] md:text-[40px] font-extrabold text-slate-800 tracking-tight mb-6">
            Who <span className="text-[#0ea5e9]">we are</span>
          </h2>
          <div className="text-lg text-slate-600 leading-relaxed mb-6 text-justify">
            <p>
              The Public and Private Property Protection Agency (PPPPA) is a Delta State Government agency established to safeguard public and private property across the state and ensure that all development activities take place lawfully, peacefully, and without unlawful interference. It is the body empowered to enforce the Delta State Public and Private Properties Protection Law, 2018.
            </p><br/><br/>
            <p>
              The Agency was created in response to persistent threats to property development in Delta State — including illegal levies commonly known as "deve," forceful entry into construction sites, illegal land occupation, harassment of developers, and unlawful disruption of construction activities. These practices have long increased development costs, delayed projects, and weakened investor confidence across the state.
            </p><br/><br/>
          </div>
          <div className="w-full aspect-[21/10] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-lg relative">
            <img 
              src="https://images.unsplash.com/photo-1620000486849-0d86e58fbe54?q=80&w=2670&auto=format&fit=crop" 
              alt="PPPPA Office Building" 
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* What We Do */}
        <section>
          <h2 className="text-[32px] md:text-[40px] font-extrabold text-slate-800 tracking-tight mb-6">
            What <span className="text-[#0ea5e9]">we do</span>
          </h2>
          <div className="text-lg text-slate-600 leading-relaxed mb-6 text-justify">
            <p>
              PPPPA enforces property protection laws, investigates complaints, protects construction sites, and eliminates extortion practices. It collaborates with security agencies, the Ministry of Justice, and community institutions to maintain order and resolve disputes, while providing a formal channel for individuals, businesses, and government entities to report violations and seek protection.<br/><br/>
            </p>
            <p>
              By removing illegal barriers to development and creating a secure, predictable environment for investment, PPPPA plays a central role in driving Delta State's economic growth — supporting infrastructure expansion, job creation, and the state's vision of becoming a leading commercial and industrial hub in Nigeria.</p><br/><br/>
            <p>
              Guided by professionalism, fairness, and transparency, the Agency is committed to upholding the rule of law and ensuring that Delta State remains a place where property development can thrive in an atmosphere of peace, security, and investor confidence.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 h-[500px] md:h-[450px]">
            {/* Left Image */}
            <div className="flex-1 rounded-[24px] overflow-hidden shadow-lg h-[25%] md:h-[65%] md:self-center relative">
               <img 
                src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=800&auto=format&fit=crop" 
                alt="Facility" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            {/* Center Image */}
            <div className="flex-[2] rounded-[24px] overflow-hidden shadow-xl h-[50%] md:h-full relative z-10 md:scale-105">
               <img 
                src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=1400&auto=format&fit=crop" 
                alt="Construction Site" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            {/* Right Image */}
            <div className="flex-1 rounded-[24px] overflow-hidden shadow-lg h-[25%] md:h-[65%] md:self-center relative">
               <img 
                src="https://images.unsplash.com/photo-1585863980140-5e608de120dd?q=80&w=800&auto=format&fit=crop" 
                alt="Landscape" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Our People */}
        <section>
          <h2 className="text-[32px] md:text-[40px] font-extrabold text-slate-800 tracking-tight mb-8">
            Our <span className="text-[#0ea5e9]">People</span>
          </h2>
          <div className="rounded-[40px] border-[2px] border-[#0ea5e9] bg-[#f8fafc]/50 p-8 md:p-16">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 md:gap-x-12 gap-y-12 md:gap-y-16">
              {[
                { name: "Hon Gibson Akporehe", title: "Director General", img: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=800&auto=format&fit=crop" },
                { name: "Ms. Efemena Igbrude", title: "Director of Finance", img: "https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?q=80&w=800&auto=format&fit=crop" },
                { name: "Barr. Reuben Onojewho", title: "Director of Legal", img: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=800&auto=format&fit=crop" },
                { name: "Mr Kenneth Ashiponu", title: "Director of Operations", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop" },
                { name: "Mr. Efe Akpokiniovo", title: "SSA", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" },
              ].map((person, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden shadow border-2 border-white mb-4 bg-slate-200">
                    <img src={person.img} alt={person.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-[14px] md:text-[16px] leading-tight mb-1">
                    {person.name}
                  </h3>
                  <p className="text-slate-500 text-[12px] md:text-[13px]">{person.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="rounded-[32px] bg-[#1e5aa0] px-6 py-16 text-center shadow-xl">
            <p className="text-white text-[15px] md:text-[16px] max-w-[650px] mx-auto leading-relaxed mb-10">
              If you'd like to learn more about our operations or file a complaint, you can reach us via the contact information provided below or click on the button below
            </p>
            <Link 
              href="/report"
              className="inline-block bg-white text-[#1e5aa0] px-8 py-3.5 rounded-[12px] font-bold text-[14px] hover:bg-slate-50 transition-colors shadow-lg active:scale-95"
            >
              File a Complaint
            </Link>
          </div>
        </section>
        
      </div>
    </div>
  );
}

