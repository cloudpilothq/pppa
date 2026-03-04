import Link from "next/link";
import { notFound } from "next/navigation";
import { ShieldCheck, Gavel, Search, Building, FileKey, Users, ArrowLeft, CheckCircle, FileText } from "lucide-react";
import { Metadata } from "next";

// Define the data for the services
const servicesData: Record<string, {
  title: string;
  icon: any;
  description: string;
  longDescription: string;
  keyFeatures: string[];
  process: { title: string; desc: string }[];
  ctaLink: string;
  ctaText: string;
}> = {
  "title-verification": {
    title: "Title Verification",
    icon: FileKey,
    description: "Fast-track verification of property titles for buyers and sellers to prevent fraud.",
    longDescription: "Our Title Verification service provides a secure and reliable way to confirm the authenticity of property ownership documents. By accessing our centralized national database, we verify Certificates of Occupancy (C of O), Right of Occupancy (R of O), and other land titles to ensure they are free from encumbrances, litigation, or fraudulent duplication.",
    keyFeatures: [
      "Instant Database Search",
      "Authentication of Seals and Signatures",
      "Encumbrance Check (Mortgages, Liens)",
      "History of Ownership Trace"
    ],
    process: [
      { title: "Submission", desc: "Submit the Title Document ID or upload a scanned copy via our portal." },
      { title: "Verification", desc: "Our system checks against the National Land Registry and court records." },
      { title: "Field Verification", desc: "Optional physical inspection to match survey coordinates." },
      { title: "Report Generation", desc: "Receive a signed Verification Certificate within 48 hours." }
    ],
    ctaLink: "/verify",
    ctaText: "Verify a Title Now",
  },
  "boundary-dispute-resolution": {
    title: "Boundary Dispute Resolution",
    icon: Gavel,
    description: "Mediation services for boundary conflicts between private entities or public bodies.",
    longDescription: "Land disputes are a leading cause of conflict. The DSPPPPA offers an impartial, Alternative Dispute Resolution (ADR) mechanism to settle boundary disagreements without expensive litigation. Our team of surveyors and legal experts works to re-establish proper boundary lines based on the original master plan.",
    keyFeatures: [
      "Professional Land Surveying",
      "Legal Mediation Sessions",
      "Review of Master Plans",
      "Binding Resolution Agreements"
    ],
    process: [
      { title: "Petition", desc: "File a dispute petition providing details of the encroaching party." },
      { title: "Notice", desc: "We serve an official notice to all parties involved." },
      { title: "Joint Inspection", desc: "Surveyors from both sides meet with DSPPPPA officials on-site." },
      { title: "Resolution", desc: "A final boundary determination is issued and pegged." }
    ],
    ctaLink: "/report",
    ctaText: "File a Dispute",
  },
  "public-asset-safeguarding": {
    title: "Public Asset Safeguarding",
    icon: Building,
    description: "Monitoring and securing government-owned infrastructure and land reserves.",
    longDescription: "Protecting our commonwealth is a priority. This unit monitors government lands, schools, hospitals, and infrastructure right-of-ways to prevent encroachment and illegal privatization. We use satellite imagery and regular patrols to ensure public property remains public.",
    keyFeatures: [
      "24/7 Asset Monitoring",
      "Removal of Illegal Structures",
      "Recovery of Grabbing Public Land",
      "Encroachment Alerts"
    ],
    process: [
      { title: "Identification", desc: " identifying unauthorized use of public land." },
      { title: "Warning", desc: "Issuing citations and quit notices to illegal occupants." },
      { title: "Enforcement", desc: "Collaboration with law enforcement to reclaim assets." },
      { title: "Securing", desc: "Fencing and signage installation to prevent re-entry." }
    ],
    ctaLink: "/report",
    ctaText: "Report Encroachment",
  },
  "tenant-landlord-advisory": {
    title: "Tenant & Landlord Advisory",
    icon: Users,
    description: "Guidance on rights and responsibilities under the Tenant Protection Act.",
    longDescription: "We provide balanced advisory services to foster healthy relationships between property owners and tenants. Whether you are facing illegal eviction, property damage issues, or rent disputes, our advisory unit provides clarity on the legal framework and can intervene to prevent exploitation.",
    keyFeatures: [
      "Tenancy Agreement Review",
      "Eviction Protocol Advisory",
      "Rent Control Guidelines",
      "Mediation for Damages"
    ],
    process: [
      { title: "Consultation", desc: "Book an appointment with a housing officer." },
      { title: "Evaluation", desc: "We review the tenancy agreement and evidence of violation." },
      { title: "Advisory", desc: "Receive an official advisory opinion on your legal standing." },
      { title: "Intervention", desc: "Official mediation if required." }
    ],
    ctaLink: "/contact",
    ctaText: "Speak to an Advisor",
  },
  "fraud-investigation": {
    title: "Fraud Investigation",
    icon: Search,
    description: "Specialized unit for investigating reports of property scams and illegal transfers.",
    longDescription: "Property fraud undermines the economy. Our specialized investigation unit works closely with the police and financial crimes commission to track down syndicates involved in selling fake land, forging documents, or multiple-allocations scams.",
    keyFeatures: [
      "Forensic Document Analysis",
      "Syndicate Tracking",
      "Victim Support & Recovery",
      "Prosecution Support"
    ],
    process: [
      { title: "Report", desc: "Detailed reporting of the fraudulent transaction." },
      { title: "Intelligence", desc: "Gathering evidence and tracking the perpetrators." },
      { title: "Operation", desc: "Coordinated raids and arrests." },
      { title: "Prosecution", desc: "Providing evidence for court proceedings." }
    ],
    ctaLink: "/report",
    ctaText: "Report a Scam",
  },
  "compliance-certification": {
    title: "Compliance Certification",
    icon: ShieldCheck,
    description: "Issuing compliance certificates for new developments and construction projects.",
    longDescription: "Ensure your real estate project meets all regulatory standards. We verify that developments follow the approved master plan, use quality materials (in collaboration with engineering bodies), and have valid title documentation before sale.",
    keyFeatures: [
      "Project Vetting",
      "Master Plan Compliance",
      "Safety Standards verification",
      "Official Developer Certification"
    ],
    process: [
      { title: "Application", desc: "Developer applies for project certification." },
      { title: "Audit", desc: "Comprehensive audit of land title and building approvals." },
      { title: "Inspection", desc: "Site visits to verify physical compliance." },
      { title: "Certification", desc: "Issuance of the 'Trusted Development' Seal." }
    ],
    ctaLink: "/contact",
    ctaText: "Apply for Certification",
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug }  = await params;
  const service = servicesData[slug];

  if (!service) {
    return {
      title: "Service Not Found - DSPPPPA",
    };
  }

  return {
    title: `${service.title} - DSPPPPA Services`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <div className="bg-background min-h-screen pb-16">
      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white min-h-[400px] flex items-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 bg-center"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-20">
          <Link href="/services" className="inline-flex items-center text-slate-400 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Services
          </Link>
          <div className="flex items-start gap-6 flex-col md:flex-row">
            <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20">
               <Icon className="h-8 w-8 text-white" />
            </div>
            <div>
               <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
               <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
                 {service.description}
               </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-16 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 md:p-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-12">
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Overview</h2>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            {service.longDescription}
                        </p>
                    </section>

                    <section>
                       <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Features</h2>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {service.keyFeatures.map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-100">
                                  <CheckCircle className="h-5 w-5 text-blue-500 shrink-0" />
                                  <span className="font-medium text-slate-700">{feature}</span>
                              </div>
                          ))}
                       </div>
                    </section>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                     <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                        <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                             <FileText className="h-5 w-5 text-slate-500" />
                             How It Works
                        </h3>
                        <div className="space-y-6 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                             {service.process.map((step, idx) => (
                                 <div key={idx} className="relative pl-10">
                                    <div className="absolute left-0 top-0 w-6 h-6 bg-blue-500 text-white text-xs font-bold rounded-full flex items-center justify-center border-4 border-slate-50">
                                        {idx + 1}
                                    </div>
                                    <h4 className="font-bold text-slate-800 text-sm">{step.title}</h4>
                                    <p className="text-xs text-slate-500 mt-1">{step.desc}</p>
                                 </div>
                             ))}
                        </div>
                     </div>

                     <Link 
                        href={service.ctaLink}
                        className="block w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-center rounded-xl shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-1"
                     >
                        {service.ctaText}
                     </Link>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}
