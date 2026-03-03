'use client';

import { useState } from 'react';
import { Search, FileText, ChevronRight, ChevronDown } from 'lucide-react';

const rightsData = [
  {
    id: 1,
    category: "Ownership",
    title: "Understanding Title Deeds",
    desc: "How to read and verify your property title deed to ensure legitimacy.",
    fullText: "A title deed is a critical legal document proving ownership of a property. When acquiring property, it is essential to conduct a thorough search at the state land registry to verify the deed's authenticity, ensure there are no existing encumbrances or disputes, and check that the person selling the property is the true legal owner. Failure to verify a title deed can lead to significant legal and financial losses."
  },
  {
    id: 2,
    category: "Tenancy",
    title: "Rights of a Tenant",
    desc: "Protection from sudden, arbitrary rent increments and unfair eviction practices under the proposed Delta State Landlord and Tenant Law 2025.",
    fullText: "The proposed Delta State Landlord and Tenant Law 2025 aims to repeal the outdated 1977 Rent Control law. It seeks to establish a functional, fair, and harmonious housing system by providing modern protections for tenants. This includes curbing sudden, arbitrary rent increments that lack proper justification, as well as protecting tenants from terrible eviction practices. Landlords must provide adequate, legally stipulated notice periods before any eviction proceedings can commence."
  },
  {
    id: 3,
    category: "Tenancy",
    title: "Landlord Responsibilities",
    desc: "Adherence to structured eviction processes, rent control guidelines, and the use of regulated, registered agents for transparent transactions.",
    fullText: "Under the proposed 2025 Law, landlords are expected to follow structured and lawful eviction processes rather than resorting to self-help or harassment. Furthermore, the law touches on the role of real estate agents, aiming to bring structure and transparency to property transactions. Agents must be properly registered, and their commission rates will be regulated to prevent exploitative fees, ensuring a fair housing environment for all parties involved."
  },
  /*{
    id: 4,
    category: "Disputes",
    title: "Resolving Boundary Conflicts",
    desc: "Steps to take when a neighbor encroaches on your property line.",
    fullText: "Boundary disputes often begin with minor encroachments, such as a fence built slightly over the property line. The first step should always be amicable discussion aided by a professional land survey to establish the exact, legally recorded boundaries. If the conflict persists, the DSPPPPA provides a formal dispute resolution mechanism to mediate the issue before it escalates to costly litigation in court."
  },*/
  {
    id: 5,
    category: "Public Land",
    title: "Access to Public Pathways",
    desc: "Citizens' rights to access designated public paths and commons.",
    fullText: "Public pathways, roads, and designated commons are government property intended for the free movement and use of all citizens. It is illegal for any private individual or community group to block, gate, or charge unauthorized tolls ('deve') on public access routes. The DSPPPPA enforces the protection of these public assets and will dismantle illegal structures obstructing natural waterways or public paths."
  },
  /*{
    id: 6,
    category: "Ownership",
    title: "Transferring Property",
    desc: "Legal requirements and taxes involved in selling or gifting property.",
    fullText: "Transferring property in Delta State requires executing a Deed of Assignment or similar transfer document, obtaining the Governor's Consent, and registering the title at the lands registry. This process involves paying necessary statutory fees, including stamp duties, capital gains tax, and registration fees. Only properly registered property transfers provide complete legal protection to the new owner against future claims."
  },*/
];

export default function RightsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const categories = ['All', ...Array.from(new Set(rightsData.map(item => item.category)))];

  const filteredRights = rightsData.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.desc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleExpand = (id: number) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Know Your Rights</h1>
            <p className="text-xl text-slate-600">
              Empowering citizens with legal knowledge to protect their property and interests.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-10">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search topics (e.g., eviction, deeds)..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                      selectedCategory === cat
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-4">
            {filteredRights.length > 0 ? (
              filteredRights.map((item) => {
                const isExpanded = expandedId === item.id;
                
                return (
                  <div 
                    key={item.id} 
                    className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${
                      isExpanded 
                        ? 'border-emerald-500 shadow-md transform scale-[1.01]' 
                        : 'border-slate-200 shadow-sm hover:border-emerald-400 hover:shadow-md'
                    }`}
                  >
                    {/* Header (Clickable Area) */}
                    <div 
                      className="p-6 cursor-pointer flex items-start justify-between group"
                      onClick={() => toggleExpand(item.id)}
                    >
                      <div className="flex gap-4">
                        <div className={`p-3 rounded-lg shrink-0 transition-colors ${
                          isExpanded ? 'bg-emerald-100 text-emerald-600' : 'bg-blue-50 text-blue-600 group-hover:bg-emerald-50 group-hover:text-emerald-600'
                        }`}>
                          <FileText className="h-6 w-6" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-emerald-600 uppercase mb-1">{item.category}</div>
                          <h3 className={`text-lg font-bold mb-2 transition-colors ${
                            isExpanded ? 'text-emerald-700' : 'text-slate-900 group-hover:text-emerald-700'
                          }`}>
                            {item.title}
                          </h3>
                          <p className="text-slate-600 text-sm hidden md:block">{item.desc}</p>
                        </div>
                      </div>
                      <div className="shrink-0 ml-4 pt-4">
                        {isExpanded ? (
                          <ChevronDown className="h-5 w-5 text-emerald-500 transition-transform duration-300" />
                        ) : (
                          <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-emerald-500 transition-transform duration-300" />
                        )}
                      </div>
                    </div>
                    
                    {/* Expandable Content */}
                    <div 
                      className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                        isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="p-6 pt-0 border-t border-slate-100 bg-slate-50">
                          <p className="mt-4 text-slate-600 text-sm md:hidden mb-4 italic pb-4 border-b border-slate-200">
                            {item.desc}
                          </p>
                          <div className="prose prose-slate max-w-none text-slate-700 text-sm md:text-base leading-relaxed">
                            <p className="whitespace-pre-line">{item.fullText}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-12 text-slate-500 bg-white rounded-xl border border-dashed border-slate-300">
                No articles found matching your criteria.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

