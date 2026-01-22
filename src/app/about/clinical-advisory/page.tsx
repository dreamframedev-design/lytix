import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

const advisoryBoard = [
  {
    name: "Advisory Member 1",
    title: "Clinical Advisor",
    bio: "Leading expert in tumor immunology and checkpoint inhibitor combinations, advising on translational research strategies.",
  },
  {
    name: "Advisory Member 2",
    title: "Clinical Advisor",
    bio: "Specialist in neoadjuvant cancer therapies with expertise in surgical oncology and clinical trial design.",
  },
  {
    name: "Advisory Member 3",
    title: "Clinical Advisor",
    bio: "Expert in dermatologic oncology with focus on basal cell carcinoma and squamous cell carcinoma treatments.",
  },
];

export default function ClinicalAdvisoryPage() {
  return (
    <div className="min-h-screen bg-lytix-light text-lytix-navy">
      <main className="relative z-[2]">
        {/* Hero Section - Full Width Background */}
        <header className="relative min-h-[60vh] flex items-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/cancer cell 7.webp"
              alt="Lytix clinical advisory"
              fill
              className="object-cover object-center"
              priority
              quality={90}
            />
            {/* White gradient overlay - left to right */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24 pb-16">
            <div className="max-w-2xl">
              <Link
                href="/about"
                className="inline-flex items-center text-lytix-teal hover:text-lytix-teal-dark mb-6 transition-colors font-bold text-sm"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to About
              </Link>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                <span className="block text-lytix-navy">Clinical Advisory</span>
                <span className="block text-stylized text-lytix-gold">Board</span>
              </h1>
              <p className="max-w-xl text-xl text-lytix-navy/70 font-light leading-relaxed">
                Our Clinical Advisory Board comprises world-class experts in oncology, immunology, and clinical development
                who provide invaluable guidance on our research and development programs.
              </p>
            </div>
          </div>
        </header>

        {/* Advisory Board Grid */}
        <section className="py-24 bg-white border-y border-lytix-ice">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {advisoryBoard.map((member, index) => (
                <div key={index} className="group glass-card p-1 rounded-[2.5rem] glow-border">
                  <div className="bg-white rounded-[2.2rem] overflow-hidden flex flex-col md:flex-row h-full">
                    <div className="md:w-56 flex-shrink-0">
                      <ImagePlaceholder
                        description={`Professional headshot of ${member.name}`}
                        aspectRatio="square"
                        className="rounded-none border-0 h-full"
                      />
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <h3 className="text-xl font-bold text-lytix-navy mb-1">{member.name}</h3>
                      <p className="text-lytix-gold font-semibold mb-4 text-sm">{member.title}</p>
                      <p className="text-lytix-navy/60 font-light leading-relaxed text-sm">{member.bio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* CTA Section - Outside main for ribbon visibility */}
      <section className="py-16 bg-lytix-light">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto p-8 bg-white rounded-3xl border border-lytix-ice">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-lytix-navy/40 mb-2 block">Explore More</span>
              <h2 className="text-2xl font-bold text-lytix-navy mb-2">Explore Our Leadership</h2>
              <p className="text-lytix-navy/60 font-light">Learn more about our Management Team and Board of Directors.</p>
            </div>
            <div className="flex gap-4 flex-wrap">
              <Link
                href="/about/management"
                className="px-6 py-3 bg-lytix-teal/10 text-lytix-teal rounded-xl font-bold text-sm hover:bg-lytix-teal hover:text-white transition-all flex items-center gap-2"
              >
                Management Team
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about/board"
                className="px-6 py-3 bg-lytix-gold text-lytix-navy rounded-xl font-bold text-sm hover:bg-lytix-gold/80 transition-all flex items-center gap-2"
              >
                Board of Directors
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
