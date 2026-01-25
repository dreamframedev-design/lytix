import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const advisoryBoard = [
  {
    name: "James Allison",
    title: "",
    image: "/images/headshots/Jim Allison SH.jpg",
    bio: [
      "Dr. Allison is the Chair of the Department of Immunology, the Vivian L. Smith Distinguished Chair in Immunology, Director of the Parker Institute for Cancer Research, and the Executive Director of the Immunotherapy Platform at MD Anderson Cancer Center. Dr. Allison spent a distinguished career studying the regulation of T-cell responses and developing strategies for cancer immunotherapy.",
      "Dr. Allison's work led to the development of an antibody towards human CTLA-4 called ipilimumab, which became the first immune checkpoint inhibitor and cleared the path for the emerging field of using checkpoint inhibitors in the treatment of cancer.",
      "In 2018 Dr. Allison earned the Nobel Prize in Physiology or Medicine, which he shared with Dr. Tasuku Honjo, \"for their discovery of cancer therapy by inhibition of negative immune regulation\".",
      "Dr. Allison's current work seeks to improve immune checkpoint blockade therapies currently used and to identify new targets to unleash the immune system in order to eradicate cancer.",
    ],
  },
  {
    name: "Pam Sharma",
    title: "",
    image: "/images/headshots/Pam Sharma SH.jpg",
    bio: [
      "Dr. Sharma is professor in the departments of Genitourinary Medical Oncology and Immunology, and the Scientific Director for the Immunotherapy Platform at MD Anderson Cancer Center. She is also a Scientific Director of Scientific Programs for the James P. Allison Institute at MD Anderson Cancer Center.",
      "Dr. Sharma is a nationally and internationally renowned physician scientist whose research work is focused on investigating mechanisms and pathways within the immune system that facilitate tumor rejection. In partnership with Dr. Allison, Dr. Sharma is currently exploring combinations of immunological therapies and targeted drugs to treat a variety of cancers more effectively.",
      "Dr. Sharma is a trained medical oncologist and immunologist and the T.C. and Jeanette D. Hsu Endowed Chair in Cell Biology. She designed and conducted the first pre-surgical trial, also known as a window-of-opportunity trial, with immune checkpoint therapy (anti-CTLA-4) in 2004, which allowed her to study the impact of immune checkpoint therapy on human tumors.",
    ],
  },
  {
    name: "Aurélien Marabelle",
    title: "",
    image: "/images/headshots/Marabelle SH.jpg",
    bio: [
      "Dr. Marabelle is the Clinical Director of the Cancer Immunotherapy Program at Gustave Roussy Cancer Center in Villejuif, France, and he works as a Senior Medical Oncologist and an investigator in the Drug Development Department (DITEP). He leads a translational research laboratory (LRTI) within the INSERM U1015 with a focus on mechanisms of action of immune targeted therapies. He is also the director of the Clinical Investigation Center BIOTHERIES dedicated to intratumoral immunotherapies.",
      "Dr. Marabelle's clinical practice is dedicated to early phase clinical trials in cancer immunotherapy and his translational research is focused on mechanisms of action of immune checkpoint monoclonal antibodies.",
    ],
  },
];

export default function ClinicalAdvisoryPage() {
  return (
    <div className="min-h-screen bg-lytix-light text-lytix-navy">
      <main className="relative z-[2]">
        {/* Apple-style Hero Section */}
        <header className="relative min-h-[50vh] flex items-center overflow-hidden bg-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-lytix-gold/5 via-white to-white" />

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
                Advisory Board
              </h1>
              <p className="max-w-2xl text-2xl text-lytix-navy/60 font-light leading-relaxed">
                World-class expertise shaping the next generation of cancer immunotherapies.
              </p>
            </div>
          </div>
        </header>

        {/* Premium Team Grid */}
        <section className="py-32 bg-[#F9FAFB]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:gap-24">
              {advisoryBoard.map((member, index) => (
                <div
                  key={index}
                  className="group relative grid lg:grid-cols-[320px_1fr] gap-12 items-start p-8 lg:p-12 bg-white rounded-[2.5rem] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-lytix-ice/50 hover:shadow-[0_20px_50px_rgb(0,0,0,0.06)] transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute -right-20 -top-20 w-80 h-80 bg-lytix-gold/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="relative w-full aspect-[4/5] lg:aspect-square overflow-hidden rounded-[2rem] shadow-2xl group-hover:scale-[1.02] transition-transform duration-500 bg-lytix-light max-w-[320px] lg:max-w-none lg:mx-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top filter grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>

                  <div className="flex flex-col h-full relative z-10">
                    <div className="mb-8">
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-lytix-gold mb-3 block">Scientific Advisory</span>
                      <h2 className="text-3xl lg:text-4xl font-bold text-[#40525C] mb-2">{member.name}</h2>
                      <div className="h-1 w-12 bg-lytix-gold rounded-full mb-4" />
                      {member.title && (
                        <p className="text-xl lg:text-2xl font-medium text-lytix-navy/60">{member.title}</p>
                      )}
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
      <section className="py-24 bg-white border-t border-lytix-ice/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-lytix-navy relative rounded-[3rem] p-12 lg:p-20 overflow-hidden shadow-2xl text-center">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-lytix-gold/10 via-transparent to-transparent pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Redefining the Standard of Care</h2>
              <p className="text-xl text-lytix-ice/60 font-light max-w-2xl mx-auto mb-12">
                Learn more about the team and directors behind our innovative oncolytic platform.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/about/management"
                  className="px-10 py-5 bg-white text-lytix-navy rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-lytix-ice hover:scale-105 transition-all shadow-xl"
                >
                  Management Team
                </Link>
                <Link
                  href="/about/board"
                  className="px-10 py-5 border-2 border-white/20 text-white rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all"
                >
                  Board of Directors
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
