export interface NewsItem {
  id: number;
  slug: string;
  title: string;
  summary: string;
  date: string;
  image: string;
  content: string[]; // Array of strings, each string is a paragraph
}

export const FACTUAL_NEWS: NewsItem[] = [
  { 
    id: 1, 
    slug: "delta-assembly-proposes-tenant-law-2025",
    title: "Delta Assembly Proposes State Landlord and Tenant Law 2025", 
    summary: "A new bill to standardize the relationship between landlords and tenants in Delta State has been proposed, aiming to replace the 1977 Rent Control law with modern protections.", 
    date: "2025-02-14", 
    image: "/news/news_tenant_law_2025_1772545979908.png",
    content: [
      "The Delta State House of Assembly has recently proposed a comprehensive new bill cited as the Delta State Landlord and Tenant Law 2025. This landmark legislative effort is designed to thoroughly overhaul and standardize the relationship between property owners and renters across the state, bringing modern protections to a sector that has long relied on outdated legal frameworks.",
      "A primary objective of the proposed 2025 Law is to officially repeal the antiquated 1977 Rent Control law, which no longer reflects the current economic realities or housing dynamics of Delta State. By introducing this new legal structure, state legislators aim to establish a more functional, equitable, and harmonious housing system for all residents.",
      "The bill introduces crucial modern protections for tenants, specifically aiming to curb sudden and arbitrary rent increments without proper economic justification. Furthermore, it strictly regulates the eviction process, ensuring that landlords must provide adequate, legally stipulated notice periods rather than resorting to self-help or harassment. The law also aims to bring transparency to real estate transactions by regulating agents to prevent exploitative commission fees."
    ]
  },
  { 
    id: 2, 
    slug: "delta-state-assures-on-delivery-of-housing-projects",
    title: "Delta State Assures On Delivery of Housing Projects", 
    summary: "The Delta State Commissioner for Housing has outlined strategic plans to tackle housing challenges, including the construction of duplexes and terraces for middle-income earners by 2025.", 
    date: "2024-05-18", 
    image: "/news/news_housing_projects_1772545953160.png",
    content: [
      "The Delta State Government has reaffirmed its deep commitment to addressing the growing housing deficit in the state through substantial investments in new residential infrastructure. The State Commissioner for Housing recently outlined a series of strategic plans designed specifically to tackle these challenges and improve overall access to affordable housing for residents.",
      "Central to this initiative is the construction of various modern housing units tailored to meet the needs of different demographics. The government's current developments include the construction of duplexes targeted at middle-income earners, as well as two-bedroom and three-bedroom terraces designed to accommodate civil servants and other essential workers within the state.",
      "Officials have provided assurances that many of these ongoing housing projects are progressing steadily. To promote sustainable urban development and expand necessary infrastructure, the state has set ambitious targets, with a significant number of these new, highly anticipated housing units slated for official commissioning by December 2025."
    ]
  },
  { 
    id: 3, 
    slug: "asaba-waterfront-city-govt-warns-against-illegal-structures",
    title: "Asaba Waterfront City: Govt Warns Against Illegal Structures", 
    summary: "Authorities have issued strict warnings against illegal structures within the Asaba Waterfront City project area, threatening demolition of unauthorized constructions.", 
    date: "2024-04-12", 
    image: "/news/news_asaba_waterfront_1772545906812.png",
    content: [
      "The Delta State Government has issued a firm and unequivocal warning to developers and members of the public against the erection of illegal structures within the designated Asaba Waterfront City project area. This warning comes as part of a massive urban renewal agenda aimed at transforming the state capital into a modern, planned metropolis.",
      "In Asaba, the state government has already commenced the extensive reclamation of over 775 hectares of land situated along the River Niger. This ambitious project includes 352 hectares specifically delineated for the Asaba Waterfront City, and an additional 423 hectares of floodplain earmarked for the proposed Niger City development to boost economic and residential capacity.",
      "While the government has pledged proper compensation to verified landowners affected by the authorized urban renewal efforts, state authorities, backed by the DSPPPPA, are actively monitoring the reclaimed land. Developers who bypass state approvals lay themselves open to severe consequences, as the state has reiterated its readiness to promptly demolish any unauthorized constructions discovered within the Waterfront City zones."
    ]
  },
  { 
    id: 4, 
    slug: "delta-state-commits-to-enforcing-anti-deve-law",
    title: "Delta State Commits to Enforcing Anti-Deve Law", 
    summary: "To create a secure investor environment, the state government is strictly enforcing the Public and Private Properties Protection Law to end illegal development levies.", 
    date: "2024-03-25", 
    image: "/news/news_anti_deve_law_1772545928184.png",
    content: [
      "In a decisive move to foster a more secure and investor-friendly environment, the Delta State government has reiterated its unwavering commitment to the strict enforcement of the Public and Private Properties Protection Law of 2018. Widely known across the state as the 'Anti-Deve law,' this legislation is a critical tool in the government's effort to safeguard property rights and regulate lawful land development.",
      "The Anti-Deve law explicitly criminalizes the persistent and illegal collection of development levies, often extorted from legitimate land developers by unauthorized community groups or syndicates. By strictly applying this law, the state government aims to permanently eradicate the extortion practices that have historically deterred investors and delayed essential construction projects.",
      "Violators found guilty under the provisions of the Public and Private Properties Protection Law face stringent penalties. These include a minimum two-year jail term, a substantial fine of N1 million, or occasionally both. Furthermore, the law directly addresses the fraudulent practice of selling a single landed property to multiple buyers, stipulating up to five years imprisonment for such offenses."
    ]
  },
  { 
    id: 5, 
    slug: "govt-to-recover-illegally-occupied-state-lands",
    title: "Govt to Recover Illegally Occupied State Lands", 
    summary: "The state government has announced its intention to recover all government lands illegally occupied by grabbers and demolish structures built without proper state approvals.", 
    date: "2024-02-08", 
    image: "/news/news_land_recovery_1772546013789.png",
    content: [
      "Following rising concerns over unauthorized land speculation, the Delta State Government has officially announced a statewide initiative aimed at recovering all government-owned lands that have been illegally occupied by land grabbers. This operation underscores the administration's zero-tolerance policy towards the unlawful appropriation of state assets.",
      "State officials have noted coordinated efforts by syndicates to occupy, partition, and sell off designated government layouts without the requisite legal authority or approved documents. In response, task forces comprising surveyors, legal personnel, and enforcement officers from the DSPPPPA have been mobilized to identify and map out all encroached state properties.",
      "The government has made it explicitly clear that any structures erected on state land without verifiable, proper state approvals will be subject to demolition. Investors and citizens are strongly urged to conduct comprehensive due diligence at the state land registry before engaging in any property transactions to avoid severe financial losses associated with illegal acquisitions."
    ]
  },
  { 
    id: 6, 
    slug: "peace-moves-initiated-in-ibusa-and-ogwashi-uku-land-dispute",
    title: "Peace Moves Initiated in Ibusa and Ogwashi-Uku Land Dispute", 
    summary: "The Delta State government has intervened in a long-standing land disagreement, urging calm and peaceful resolution between the neighboring communities.", 
    date: "2024-01-15", 
    image: "/news/news_community_dispute_1772546063246.png",
    content: [
      "In a proactive effort to maintain stability and prevent communal clashes, the Delta State government has swiftly intervened in a long-standing land disagreement between the neighboring communities of Ibusa and Ogwashi-Uku. The dispute, which centers on historical boundary designations, had recently threatened to disrupt the peace in the affected areas.",
      "State representatives, acting in conjunction with local authorities and traditional rulers, have called upon the leadership of both communities to exercise maximum restraint. The primary objective is to de-escalate tensions and ensure that residents remain calm while official channels are utilized to address the underlying grievances.",
      "The government has reiterated that all land disputes must be resolved through lawful dialogue, professional arbitration, and legal processes rather than violence or self-help. By facilitating mediation sessions between the disputing parties, the state administration hopes to broker a lasting, equitable resolution that respects the historical rights and immediate security needs of both Ibusa and Ogwashi-Uku."
    ]
  },
];
