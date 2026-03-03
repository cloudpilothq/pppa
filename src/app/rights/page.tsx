'use client';

import { useState } from 'react';
import { Search, FileText, ChevronRight } from 'lucide-react';

const rightsData = [
  {
    category: "Ownership",
    title: "Understanding Title Deeds",
    desc: "How to read and verify your property title deed to ensure legitimacy.",
  },
  {
    category: "Tenancy",
    title: "Rights of a Tenant",
    desc: "Protection from sudden, arbitrary rent increments and unfair eviction practices under the proposed Delta State Landlord and Tenant Law 2025.",
  },
  {
    category: "Tenancy",
    title: "Landlord Responsibilities",
    desc: "Adherence to structured eviction processes, rent control guidelines, and the use of regulated, registered agents for transparent transactions.",
  },
  {
    category: "Disputes",
    title: "Resolving Boundary Conflicts",
    desc: "Steps to take when a neighbor encroaches on your property line.",
  },
  {
    category: "Public Land",
    title: "Access to Public Pathways",
    desc: "Citizens' rights to access designated public paths and commons.",
  },
  {
    category: "Ownership",
    title: "Transferring Property",
    desc: "Legal requirements and taxes involved in selling or gifting property.",
  },
];

export default function RightsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(rightsData.map(item => item.category)))];

  const filteredRights = rightsData.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.desc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
              <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
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
              filteredRights.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-emerald-400 transition-colors cursor-pointer group">
                  <div className="flex items-start justify-between">
                    <div className="flex gap-4">
                      <div className="bg-blue-50 p-3 rounded-lg text-blue-600">
                        <FileText className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-emerald-600 uppercase mb-1">{item.category}</div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700">{item.title}</h3>
                        <p className="text-slate-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-emerald-500" />
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 text-slate-500">
                No articles found matching your criteria.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

