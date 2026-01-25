import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const boardMembers = [
  {
    name: "Eric Falcand",
    title: "Chair",
    image: "/images/headshots/Eric Falcand 2.jpg",
    bio: [
      "Eric Falcand is a pharmaceutical executive with over 37 years of international experience gained at pharma and biotech in business development, general management, and commercialization, primarily within the oncology sector. Lately he held senior leadership roles at Servier Group, including Vice President and Global Head of Business Development, where he orchestrated acquisitions such as Shire Oncology and Agios' oncology portfolio. Eric has served as CEO of NeoGenomics GmbH and currently advises Bain & Co and APAX Partners. He also holds board positions at Ontes Bio and Tetra Pharma, supporting innovation in oncology. Eric holds a Doctorate in Veterinary Medicine, a Master's in Industrial Pharmacy, and an MBA from EM Lyon, France.",
    ],
  },
  {
    name: "Claus Andersson",
    title: "Non-Executive Director",
    image: "/images/headshots/Claus Andersson.jpg",
    bio: [
      "Claus Andersson is an experienced venture capital investor specializing in life sciences, with over 20 years of expertise in building and funding biotech and pharmaceutical companies. Currently he serves as General Partner at Sunstone Life Science Ventures. He has served on more than 20 international boards across companies from preclinical to commercial stages. Claus focuses on strategic investments, business development, and company growth, helping companies navigate fundraising, M&A, and public listings. His work is supported by an extensive global network in the life sciences sector, emphasizing value creation and successful transaction outcomes. Claus holds a master's degree in Civil Chemical Engineering & a PhD in Mathematical Statistics.",
    ],
  },
  {
    name: "Julie Dehaene-Puype",
    title: "Non-Executive Director",
    image: "/images/headshots/Julie Dehaene-Puype.png",
    bio: [
      "Julie Dehaene-Puype is a pharmaceutical executive with over 25 years of international experience across the EU and Europe, holding leadership roles at Schering-Plough, MerckMSD, Takeda, and Mundipharma. She has successfully led large scale commercial organizations and held full P&L responsibility at country and regional levels, including as General Manager for Takeda in Switzerland and France, and most recently as Chief Commercial Officer for Europe/Canada at Mundipharma. There she also led the global commercial strategy for an infectious disease asset in the pre-launch phase. Julie has a strong track record of driving growth, leading transformations, and building high performing teams in multicultural environments.",
    ],
  },
  {
    name: "Marie-Louise Fjällskog, MD, PhD",
    title: "Non-Executive Director",
    image: "/images/headshots/Marie-Louise_web.jpg",
    bio: [
      "Marie-Louise Fjällskog, MD, PhD, is a senior life science executive with over 25 years of experience in clinical oncology and drug development, primarily within immuno-oncology. She currently leads Fjällskog Oncotherapeutics LLC and serves on the boards of Rexira International AB and Faron Pharmaceuticals. Her prior roles include Chief Medical Officer at Sensei Biotherapeutics and Faron Pharmaceuticals. Marie-Louise holds a PhD in Oncology and is an Associate Professor (Docent) of Oncology affiliated with Uppsala University, Sweden.",
    ],
  },
  {
    name: "Brynjar Forbergskog",
    title: "Non-Executive Director",
    image: "/images/headshots/Brynjar Forbergskog.jpg",
    bio: [
      "Brynjar Forbergskog is an experienced executive and investor, currently serving as CEO of his privately owned investment company, Saturn Invest AS. He was previously CFO and later CEO of Torghatten ASA, where he oversaw the company's growth into one of the largest transport providers in the Nordic region with over 7,000 employees and NOK 11 billion in annual turnover. Brynjar also serves on the boards of several companies and has a background as an external auditor.",
    ],
  },
  {
    name: "Kjetil Hestdal, MD, PhD",
    title: "Non-Executive Director",
    image: "/images/headshots/Kjetil Hestdal_web.jpg",
    bio: [
      "Kjetil Hestdal, MD, PhD, is a senior life science executive with extensive leadership experience in biotech and pharma. He was previously CEO of Photocure ASA, a commercial-stage oncology company listed on the Oslo Stock Exchange and currently serves as CEO of Calico Oncology and Serca Pharmaceuticals. In addition, he provides consulting services to biotech, pharma, and medtech companies. Kjetil holds a PhD in Immunology.",
    ],
  },
];

export default function BoardPage() {
  return (
    <div className="min-h-screen bg-lytix-light text-lytix-navy">
      <main className="relative z-[2]">
        {/* Apple-style Hero Section */}
        <header className="relative min-h-[50vh] flex items-center overflow-hidden bg-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-lytix-coral/5 via-white to-white" />

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
                Board of Directors
              </h1>
              <p className="max-w-2xl text-2xl text-lytix-navy/60 font-light leading-relaxed">
                Strategic governance and global expertise guiding Lytix toward clinical and commercial success.
              </p>
            </div>
          </div>
        </header>

        {/* Premium Team Grid - Unified Design */}
        <section className="py-32 bg-[#F9FAFB]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:gap-24">
              {boardMembers.map((member, index) => (
                <div
                  key={index}
                  className="group relative grid lg:grid-cols-[400px_1fr] gap-12 items-start p-8 lg:p-12 bg-white rounded-[2.5rem] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-lytix-ice/50 hover:shadow-[0_20px_50px_rgb(0,0,0,0.06)] transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute -right-20 -top-20 w-80 h-80 bg-lytix-coral/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="relative aspect-[4/5] lg:aspect-square overflow-hidden rounded-[2rem] shadow-2xl group-hover:scale-[1.02] transition-transform duration-500 bg-lytix-light">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top filter grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>

                  <div className="flex flex-col h-full relative z-10">
                    <div className="mb-8">
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-lytix-coral mb-3 block">Board Member</span>
                      <h2 className="text-3xl lg:text-4xl font-bold text-[#40525C] mb-2">{member.name}</h2>
                      <div className="h-1 w-12 bg-lytix-coral rounded-full mb-4" />
                      <p className="text-lg lg:text-xl font-medium text-lytix-coral-dark">{member.title}</p>
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
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-lytix-teal/10 to-transparent pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-lytix-coral/5 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-xl text-center lg:text-left">
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Redefining Oncology</h2>
                <p className="text-xl text-lytix-ice/60 font-light">
                  Explore our leadership team and scientific advisors.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/about/management"
                  className="px-8 py-4 bg-white text-lytix-navy rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-lytix-ice hover:scale-105 transition-all shadow-xl"
                >
                  Management Team
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
