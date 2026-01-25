import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const managementTeam = [
  {
    name: "Øystein Rekdal, PhD",
    title: "CEO",
    image: "/images/headshots/Øystein Rekdal.jpg",
    bio: [
      "Dr. Rekdal is Co-founder of and served as CEO during the first 4 years of Lytix Biopharma's formation. After that he served as CSO and Head of R&D before he again was promoted to the position of CEO in 2018. Rekdal's research background is within tumor immunology and his field of expertise is anticancer molecules derived from host defense peptides. Dr. Rekdal commenced his PhD on cytolysis and tumor immunology in 1990, and his postdoctoral work forms the basis of Lytix Biopharma's technology peptide platform.",
      "Dr. Rekdal has been instrumental in establishing collaborations with several distinguished researchers and institutions and is regularly invited to give plenary lectures at international oncology, industry and partnering conferences.",
    ],
  },
  {
    name: "Gjest Breistein, MSc",
    title: "CFO",
    image: "/images/headshots/Gjest_web (1).jpg",
    bio: [
      "Mr. Breistein has extensive experience as an auditor and consultant. Prior to joining Lytix in 2017, he worked at PwC advising public and private companies across multiple industry sectors in capital market transactions, financing and listing processes.",
      "Mr. Breistein is a state authorized public accountant, and holds a Masters in Applied Economics and Finance from Copenhagen Business School as well as a Masters in Professional Accountancy from the Norwegian School of Management.",
    ],
  },
  {
    name: "Baldur Sveinbjørnsson, PhD",
    title: "CSO",
    image: "/images/headshots/Baldur_ny (1).jpg",
    bio: [
      "Dr. Sveinbjørnsson achieved his doctorate at the Medical Faculty of the University of Tromsø in 1998, with a focus on mechanisms and mediators behind immunomodulation of experimental tumors. Since then, Dr. Sveinbjørnsson has gained a broad expertise of preclinical oncology at the University of Tromsø and Karolinska Institut Stockholm.",
      "Dr. Sveinbjørnsson has been involved in the research activities of Lytix Biopharma since the beginning, and has most recently led the Company's research activities as Chief Scientific Officer.",
    ],
  },
  {
    name: "Mette Husbyn, PhD",
    title: "CTO",
    image: "/images/headshots/Mette (1).jpg",
    bio: [
      "Dr. Mette Husbyn brings over 16 years of experience at GE Healthcare, where she held various scientific and managerial roles covering all aspects of CMC, from pre-clinical and early clinical phases to commercial products.",
      "Following her tenure at GE, Dr. Husbyn served as Head of CMC at Lytix Biopharma from 2012 to 2017, where she oversaw all CMC activities and established robust processes to enhance drug development. Most recently she held the position of Head of CMC and CTO at Xylonix Therapeutics, leading a team of 22 professionals focused on strategic partner selection, process development, and regulatory interactions across the UK and Europe.",
      "Dr. Husbyn earned her doctorate from the Medical Faculty of the University of Oslo in 2003, specializing in peptide chemistry.",
    ],
  },
  {
    name: "Brent Meadows, MDA",
    title: "CBO",
    image: "/images/headshots/Brent Meadows.jpg",
    bio: [
      "Mr. Meadows has more than 25 years experience in biopharmaceutical strategy and business development leadership roles. Most recently Mr. Meadows served as CBO at Oncodex, where he defined the company's overall business strategy and oversaw all aspects of business development and partnering, including deal execution. He has also held senior-level positions in business development, commercial strategy and global marketing at Theragnostics, Bristol Myers Squibb, Biogen and Johnson and Johnson. While at AVRO Oncology and NanoString, he co-led multiple transactions each worth over $1 billion, transforming these oncology businesses.",
      "He holds a Masters in Business Administration from Babson College and a Bachelors in Science in Finance from the University of Richmond.",
    ],
  },
  {
    name: "Ahmed Bouzidi, PhD",
    title: "Senior Vice-President Business Development",
    image: "/images/headshots/Ahmed Bouzidi.jpg",
    bio: [
      "Ahmed senior executive experience in the biotechnology industries spans more than 30 years in Europe, China, and the US. Until recently, Ahmed held senior executive positions in biotech SMEs and Mid-Cap companies such as Transgene (Nasdaq: Argile Biotech, and Poxtech Bio Group). He also founded and served as CEO of Vaxxel Holding Group and STIMAC Therapeutics: companies specialized in immunotherapy, with both successful exits. He was President of the European Biopharmaceutical Enterprises (EBE, integrated into EFPIA), and Board Member of Vaccines Europe. Ahmed has an extensive experience in large private and public fund raising, M&A, and licensing.",
      "Ahmed holds a PhD in biology and an MBA from the University of New Hampshire, US.",
    ],
  },
];

export default function ManagementPage() {
  return (
    <div className="min-h-screen bg-lytix-light text-lytix-navy">
      <main className="relative z-[2]">
        {/* Apple-style Hero Section */}
        <header className="relative min-h-[50vh] flex items-center overflow-hidden bg-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-lytix-ice/20 via-white to-white" />

          <div className="container mx-auto px-4 lg:px-8 relative z-10 py-24">
            <div className="max-w-3xl">
              <Link
                href="/about"
                className="inline-flex items-center text-lytix-teal hover:text-lytix-teal-dark mb-8 transition-all hover:-translate-x-1 font-semibold text-sm"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                About Us
              </Link>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-[#40525C]">
                Management Team
              </h1>
              <p className="max-w-2xl text-2xl text-lytix-navy/60 font-light leading-relaxed">
                Pioneering the future of oncolytic immunotherapy with world-class leadership and scientific excellence.
              </p>
            </div>
          </div>
        </header>

        {/* Premium Team Grid */}
        <section className="py-32 bg-[#F9FAFB]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:gap-24">
              {managementTeam.map((member, index) => (
                <div
                  key={index}
                  className="group relative grid lg:grid-cols-[400px_1fr] gap-12 items-start p-8 lg:p-12 bg-white rounded-[2.5rem] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-lytix-ice/50 hover:shadow-[0_20px_50px_rgb(0,0,0,0.06)] transition-all duration-500 overflow-hidden"
                >
                  {/* Subtle Background Glow */}
                  <div className="absolute -right-20 -top-20 w-80 h-80 bg-lytix-teal/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Image Container */}
                  <div className="relative aspect-[4/5] lg:aspect-square overflow-hidden rounded-[2rem] shadow-2xl group-hover:scale-[1.02] transition-transform duration-500 bg-lytix-light">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top filter grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>

                  {/* Content Container */}
                  <div className="flex flex-col h-full relative z-10">
                    <div className="mb-8">
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-lytix-teal mb-3 block">Executive Leadership</span>
                      <h2 className="text-3xl lg:text-4xl font-bold text-[#40525C] mb-2">{member.name}</h2>
                      <div className="h-1 w-12 bg-lytix-teal rounded-full mb-4" />
                      <p className="text-lg lg:text-xl font-medium text-lytix-teal-dark">{member.title}</p>
                    </div>

                    <div className="space-y-6">
                      {member.bio.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-lg text-lytix-navy/70 leading-relaxed font-light">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Modern CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-lytix-navy relative rounded-[3rem] p-12 lg:p-20 overflow-hidden shadow-2xl">
            {/* Design Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-lytix-teal/10 to-transparent pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-lytix-coral/5 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-xl text-center lg:text-left">
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Explore Our Strategic Governance</h2>
                <p className="text-xl text-lytix-ice/60 font-light">
                  Learn how our Board of Directors and Advisory Board guide our mission.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/about/board"
                  className="px-8 py-4 bg-white text-lytix-navy rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-lytix-ice hover:scale-105 transition-all shadow-xl"
                >
                  Board of Directors
                </Link>
                <Link
                  href="/about/clinical-advisory"
                  className="px-8 py-4 border-2 border-white/20 text-white rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all"
                >
                  Advisory Board
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
