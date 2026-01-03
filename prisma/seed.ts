// TEMPORARILY DISABLED FOR DEPLOYMENT
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// async function main() {
//   console.log('Start seeding ...');

//   // Seed Leadership
//   await prisma.leadership.createMany({
//     data: [
//       {
//         name: "Dr. Ibrahim Musa",
//         role: "Director General",
//         bio: "Dr. Musa has over 20 years of experience in public administration and property law. He has spearheaded the national digital land registry initiative.",
//         order: 1,
//       },
//       {
//         name: "Mrs. Ngozi Ekwueme",
//         role: "Head of Legal Services",
//         bio: "A seasoned constitutional lawyer, Mrs. Ekwueme ensures all agency actions comply with the Land Use Act and federal regulations.",
//         order: 2,
//       },
//       {
//         name: "Engr. Tunde Bakare",
//         role: "Director of Enforcement",
//         bio: "Leading the field operations, Engr. Bakare coordinates the physical verification and recovery of public assets across the states.",
//         order: 3,
//       },
//     ],
//   });

//   // Seed News
//   await prisma.news.createMany({
//     data: [
//       {
//         title: "PPPA Launches National Digital Title Registry",
//         slug: "pppa-launches-national-digital-title-registry",
//         summary: "A new era of transparency as the agency digitizes 5 million property records.",
//         content: "The Private Public Property Protection Agency has officially launched...",
//         published: true,
//       },
//       {
//         title: "Agency Recovers 50 Hectares of Illegal Fenced User Land in Abuja",
//         slug: "agency-recovers-50-hectares-abuja",
//         summary: "Following a 3-month investigation, the enforcement unit has reclaimed public land.",
//         content: "In a landmark operation initiated by the Director General...",
//         published: true,
//       },
//       {
//         title: "New Guidelines for Tenancy Agreements Released",
//         slug: "new-guidelines-tenancy-agreements",
//         summary: "Landlords and tenants are advised to review the newly updated standard agreement protocols.",
//         content: "To reduce friction in the housing sector, the PPPA Advisory unit...",
//         published: true,
//       },
//     ],
//   });

//   console.log('Seeding finished.');
// }

// main()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });

console.log("Seed file temporarily disabled for deployment");
