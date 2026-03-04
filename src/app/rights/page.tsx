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
  {
    id: 4,
    category: "Law",
    title: "Delta State Property Tax Law",
    desc: "Mandates the assessment and collection of taxes from property owners in the state, excluding properties used solely for the owner's residence.",
    fullText: "This law establishes a framework for the Delta State Board of Internal Revenue to assess and collect property taxes from owners of buildings and structures across the state. While it excludes properties used solely for the owner’s residential needs, it covers commercial and non-owner-occupied premises, requiring payment within statutorily designated periods. The law aims to streamline revenue generation while providing clear guidelines for liability, exemptions, and compliance."
  },
  {
    id: 5,
    category: "Public Land",
    title: "Access to Public Pathways",
    desc: "Citizens' rights to access designated public paths and commons.",
    fullText: "Public pathways, roads, and designated commons are government property intended for the free movement and use of all citizens. It is illegal for any private individual or community group to block, gate, or charge unauthorized tolls ('deve') on public access routes. The DSPPPPA enforces the protection of these public assets and will dismantle illegal structures obstructing natural waterways or public paths."
  },
  {
    id: 6,
    category: "Law",
    title: "Public Property Commission Law",
    desc: "Establishes a commission to investigate and examine the operation, control, and management of Delta State Government property.",
    fullText: "This law provides for the creation of a Public Property Commission, chaired by a judge, with the authority to probe any matters relating to state-owned assets, including real property, machinery, and shares. The Commission is granted extensive legal powers, such as summoning witnesses, issuing warrants of arrest, entering land for evidence, and even remanding individuals in custody for non-compliance. Once an investigation is complete, the Commission submits its recommendations and findings to the Governor to ensure transparent and accountable management of public resources."
  },
  {
    id: 7,
    category: "Law",
    title: "Administration of Estates Law",
    desc: "Provides the legal framework for the management, devolution, and distribution of the assets of deceased persons in Delta State.",
    fullText: "This law regulates the rights and duties of personal representatives in managing the real and personal property of deceased individuals, ensuring that estates are handled according to legal standards. It covers the devolution of property to heirs, the administration of assets for both testate and intestate successions, and the priority of debts and funeral expenses. Additionally, it establishes the authority of the High Court in granting letters of administration and overseeing the probate process to protect the interests of beneficiaries and creditors."
  },
  {
    id: 8, // Changed from 6 to 8 to maintain unique IDs
    category: "Law",
    title: "Delta Development and Property Authority Law",
    desc: "Establishes a state-run body responsible for promoting and managing property development through the acquisition, construction, and disposal of properties.",
    fullText: "This law provides the legal framework for the Delta Development and Property Authority, granting it the power to acquire, develop, and manage various types of real estate including dwelling houses, offices, and industrial complexes. The Authority is tasked with increasing the availability of habitable housing and commercial spaces, and it is empowered to grant loans to individuals or companies for property development purposes. Additionally, the law authorizes the body to provide consultancy services in land-related matters and engage in the sale of building materials to support the state's development goals."
  },
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
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                        ? 'bg-blue-600 text-white'
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
                        ? 'border-blue-500 shadow-md transform scale-[1.01]' 
                        : 'border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-md'
                    }`}
                  >
                    {/* Header (Clickable Area) */}
                    <div 
                      className="p-6 cursor-pointer flex items-start justify-between group"
                      onClick={() => toggleExpand(item.id)}
                    >
                      <div className="flex gap-4">
                        <div className={`p-3 rounded-lg shrink-0 transition-colors ${
                          isExpanded ? 'bg-blue-100 text-blue-600' : 'bg-blue-50 text-blue-600 group-hover:bg-blue-50 group-hover:text-blue-600'
                        }`}>
                          <FileText className="h-6 w-6" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-blue-600 uppercase mb-1">{item.category}</div>
                          <h3 className={`text-lg font-bold mb-2 transition-colors ${
                            isExpanded ? 'text-blue-700' : 'text-slate-900 group-hover:text-blue-700'
                          }`}>
                            {item.title}
                          </h3>
                          <p className="text-slate-600 text-sm hidden md:block">{item.desc}</p>
                        </div>
                      </div>
                      <div className="shrink-0 ml-4 pt-4">
                        {isExpanded ? (
                          <ChevronDown className="h-5 w-5 text-blue-500 transition-transform duration-300" />
                        ) : (
                          <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-blue-500 transition-transform duration-300" />
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

