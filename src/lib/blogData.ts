export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  content: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    slug: "understanding-your-property-rights-in-delta-state",
    title: "Understanding Your Property Rights in Delta State",
    excerpt: "Every property owner and tenant in Delta State has fundamental legal rights that protect them from exploitation and illegal interference. Here is what you need to know.",
    date: "March 1, 2026",
    category: "Education",
    image: "/blog/blog_property_rights_1772632093963.png",
    content: [
      "Property rights in Delta State are governed by a combination of federal law, most notably the Land Use Act of 1978, and state-level legislation including the Public and Private Properties Protection Law of 2018. Together, these laws define what you can and cannot do on land you own, lease, or occupy — and they establish strong protections against unlawful interference.",
      "One of the most fundamental rights a property holder in Delta State possesses is the right of 'quiet enjoyment.' This legal principle means that, as long as you have valid occupancy rights — whether through a Certificate of Occupancy (C of O), a lease agreement, or a deed of assignment — no person, community group, or organization may interfere, obstruct, or trespass on your property without due legal process.",
      "The Delta State Public and Private Properties Protection Agency (DSPPPPA) was specifically established to enforce these rights on the ground. If you believe your property rights are being violated — whether by illegal trespassers, fraudulent agents, or unlawful demolitions — you have the right to report the incident to any DSPPPPA office. The agency is mandated by law to investigate within a reasonable time and take appropriate enforcement action to restore your rights.",
      "Beyond physical security, knowing your rights also means understanding the documentation required to prove ownership. Always ensure your property documents are properly registered at the Delta State Lands Registry in Asaba. An unregistered title, while it may convey some moral claim, does not offer the same legal protection as a formally registered Certificate of Occupancy or a Governor's Consent on a deed of assignment.",
    ]
  },
  {
    id: 2,
    slug: "how-to-spot-land-fraud-in-delta-state",
    title: "How to Spot Land Fraud in Delta State",
    excerpt: "Fraudulent land transactions cost Nigerians billions of naira every year. Here are the top warning signs every property buyer must watch for before committing their money.",
    date: "February 20, 2026",
    category: "Consumer Guide",
    image: "/blog/blog_land_fraud_1772632109588.png",
    content: [
      "Land fraud remains one of the most financially devastating crimes in Nigeria, and Delta State is not immune. Fraudsters frequently target unsuspecting buyers by presenting forged Certificates of Occupancy, fake survey plans, and fictional approvals from government agencies that don't exist. The result is that multiple innocent victims often end up purchasing the same piece of land from the same dishonest vendor.",
      "The most common form of land fraud in Delta State is the double-sale transaction — where a seller transfers the same property to two or more different buyers, often weeks or months apart. To protect yourself, always insist on an official search at the Delta State Land Registry before finalizing any property purchase. A proper registry search will identify the current registered owner and reveal if the property has been transferred before.",
      "A second major red flag is the absence of surveyor identification. Every legitimate survey plan in Nigeria must carry the stamp and registration number of a licensed surveyor registered with the Surveyors Council of Nigeria (SURCON). If a vendor presents a survey plan that lacks these credentials, treat it as a serious warning sign and halt the transaction immediately.",
      "The Public and Private Properties Protection Law of 2018 specifically criminalizes multiple sales of the same property. Any person found guilty of knowingly selling a property to more than one buyer faces up to five years imprisonment. The DSPPPPA Legal Directorate is always available to citizens who suspect they are being defrauded. Always conduct your due diligence, and never make any payment without adequate legal verification.",
    ]
  },
  {
    id: 3,
    slug: "delta-state-property-tax-what-property-owners-need-to-know",
    title: "Delta State Property Tax: What Every Property Owner Needs to Know",
    excerpt: "The Delta State Property Tax Law introduced a clear framework for property assessment. Understanding how it works is essential for every non-residential property owner in the state.",
    date: "February 10, 2026",
    category: "Policy Update",
    image: "/blog/blog_property_tax_1772632126152.png",
    content: [
      "The Delta State Property Tax Law establishes a formal and structured system for the annual assessment and collection of property taxes, primarily targeting non-residential properties such as commercial buildings, shopping plazas, warehouses, and industrial facilities. The law aims to generate consistent state revenue while also incentivizing proper development of assessed properties.",
      "Under the law, the assessment of the taxable value of a property is carried out by the State Board of Internal Revenue, in collaboration with state-approved professional valuers. The tax is calculated based on the annual rental value of the property, which is the estimated rent the property could reasonably command on the open market. Property owners are required to submit an accurate declaration of their property's value annually to facilitate a fair assessment.",
      "The law provides clear exemptions for certain categories of property. These typically include properties owned and used exclusively by government agencies, charitable organizations and registered religious bodies, and residential properties occupied by the owner. Agricultural lands that are actively under cultivation may also qualify for exemptions in specific circumstances.",
      "If a property owner disagrees with the valuation issued by the State Board, the law establishes a formal appeals process. An objection must be filed in writing within 30 days of receiving the assessment notice, and an independent review panel will adjudicate the dispute. Property owners are strongly advised to keep accurate records of rental incomes, maintenance expenditures, and related financial data to support any appeal.",
    ]
  },
  {
    id: 4,
    slug: "illegal-development-levies-know-your-rights",
    title: "Illegal Development Levies: Know Your Rights as a Property Developer in Delta State",
    excerpt: "Unauthorized community groups extorting money from construction sites is a serious crime under Delta State law. Here is everything developers need to know about 'deve' levies.",
    date: "January 28, 2026",
    category: "Know Your Rights",
    image: "/blog/blog_dev_levy_1772632144555.png",
    content: [
      "One of the most persistent challenges faced by property developers in Delta State is the illegal collection of so-called 'development levies' — popularly known as 'deve fees.' These are unauthorized charges demanded by individuals claiming to represent communities, youth associations, or traditional leadership. While some community-level engagement is customary in Nigerian real estate, demanding money by force or threat as a condition for allowing construction to proceed is a criminal act.",
      "The Delta State Public and Private Properties Protection Law of 2018 was specifically enacted to address this problem. The law explicitly criminalizes the collection of any form of development levy by an unauthorized person or group. Any individual or organization found guilty of demanding, collecting, or threatening to obstruct a development site over unpaid 'deve fees' faces a minimum of two years imprisonment and/or a fine of one million Naira.",
      "Property developers who receive such demands are strongly advised NOT to pay. Instead, you should document every attempt — including recordings where possible, written demands, and witness testimonies — and promptly report the incident to the nearest DSPPPPA office. The agency is empowered to deploy enforcement officers to your site and facilitate the arrest and prosecution of offenders.",
      "It is also important to distinguish between illegal levy demands and legitimate community development agreements (CDAs), which are sometimes negotiated in writing between developers and recognized community leaders for specific, agreed-upon social contributions. These arrangements are legal only when both parties enter them voluntarily, without coercion, and the community body is properly constituted and recognizable under state law.",
    ]
  },
  {
    id: 5,
    slug: "certificate-of-occupancy-the-most-important-land-document-in-delta-state",
    title: "Certificate of Occupancy: The Most Important Land Document in Delta State",
    excerpt: "A Certificate of Occupancy (C of O) is the strongest form of land title a property holder can possess in Nigeria. Understand why it matters and how to get one.",
    date: "January 15, 2026",
    category: "Education",
    image: "/blog/blog_cof_o_1772632159564.png",
    content: [
      "Under the Land Use Act of 1978, all land in Nigeria is technically vested in the Governor of each state, who holds it in trust on behalf of the citizens. This means that no individual or organization can claim absolute freehold ownership of land in Nigeria. What citizens and organizations obtain instead is a right of occupancy — and the official document confirming this right is the Certificate of Occupancy (C of O).",
      "A Certificate of Occupancy is issued by the state government, specifically through the Ministry of Lands and Survey. It records the name of the occupant, the location and dimensions of the land, the type of permitted use (residential, commercial, agricultural), and the duration of the right, which is typically 99 years. Without this certificate, any transfer, mortgage, or legal dispute involving the property is significantly weakened in the courts.",
      "To apply for a Certificate of Occupancy in Delta State, you must first obtain a survey plan of the property certified by a licensed surveyor. The plan must then be submitted along with an application to the Ministry of Lands and Survey. The application is reviewed, the land is inspected, and if approved, the title search confirms there are no competing interests before the C of O is issued and registered in the state's official land register.",
      "For properties acquired without a C of O — such as family land inherited through customary law — you should apply for a 'Right of Occupancy' with supporting documentation of your family's long-term possession. The DSPPPPA can direct you to the appropriate office and advise on the specific documentation required. Having a C of O not only secures your property legally, but also makes it significantly easier to access mortgage financing from banks and financial institutions.",
    ]
  },
  {
    id: 6,
    slug: "administering-a-deceased-persons-estate-in-delta-state",
    title: "Administering a Deceased Person's Estate in Delta State: A Practical Guide",
    excerpt: "When a family member dies and leaves behind property, the legal process of estate administration can be complex. This guide explains the key steps under Delta State law.",
    date: "January 5, 2026",
    category: "Legal Guide",
    image: "/blog/blog_estate_admin_1772632177372.png",
    content: [
      "The death of a property owner in Delta State triggers a legal process known as estate administration. This is the process by which the deceased person's assets — including land, buildings, bank accounts, and personal property — are collected, valued, and then distributed to the lawful beneficiaries, whether under the terms of a valid will or according to the rules of intestacy (dying without a will). This process is formally governed by the Administration of Estates Law of Delta State.",
      "Where the deceased left a valid will, the executor named in the will applies to the Probate Registry of the Delta State High Court for a document called 'Probate.' This document grants the executor the legal authority to deal with the deceased's property. Where there is no will, the family must apply for 'Letters of Administration,' which grants similar authority to an administrator appointed by the court — typically a close relative.",
      "It is important to note that the Administration of Estates Law in Delta State applies primarily to individuals married under the Marriage Act (a statutory or church marriage). For those who married under customary law, the distribution of the estate is governed by the relevant customary law of the deceased's community — though this too can be contested in court if a valid statutory will exists.",
      "Failure to properly administer a deceased person's estate is a major source of property disputes in Delta State. When estates are not formally administered, land is often occupied by relatives without clear legal title, leading to conflicts several years or decades later. The DSPPPPA strongly encourages families to begin the estate administration process promptly after a death and to consult a qualified legal practitioner to guide them through the process correctly.",
    ]
  }
];
