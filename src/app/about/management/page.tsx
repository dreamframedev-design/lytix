import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

const managementTeam = [
  {
    name: "Leadership Member 1",
    title: "Chief Executive Officer",
    bio: "Extensive experience in biotechnology and pharmaceutical leadership, with a track record of advancing innovative therapies through clinical development to commercialization.",
  },
  {
    name: "Leadership Member 2",
    title: "Chief Scientific Officer",
    bio: "Deep expertise in immunology and oncology research, leading the scientific strategy and discovery programs at Lytix Biopharma.",
  },
  {
    name: "Karim",
    title: "Chief Medical Officer",
    bio: "Proven track record in clinical development and regulatory affairs, overseeing all clinical programs and medical strategy.",
  },
  {
    name: "Leadership Member 4",
    title: "Chief Financial Officer",
    bio: "Strong background in corporate finance and investor relations within the life sciences sector.",
  },
  {
    name: "Leadership Member 5",
    title: "VP, Business Development",
    bio: "Expertise in strategic partnerships, licensing agreements, and corporate development in the biopharma industry.",
  },
];

export default function ManagementPage() {
  return (
    <div className="min-h-screen bg-lytix-light text-lytix-navy">
    <main className="relative z-[2]">
      {/* Hero Section - Full Width Background */}
      <header className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/lytix ribbon 1.webp"
            alt="Lytix management"
            fill
            className="object-cover object-center scale-x-[-1]"
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
              <span className="block text-lytix-navy">Management</span>
              <span className="block text-stylized text-lytix-teal-dark">Team</span>
            </h1>
            <p className="max-w-xl text-xl text-lytix-navy/70 font-light leading-relaxed">
              Our experienced leadership team brings together decades of expertise in biotechnology, 
              oncology, and drug development to advance our mission of transforming cancer treatment.
            </p>
          </div>
        </div>
      </header>

      {/* Team Grid */}
      <section className="py-24 bg-white border-y border-lytix-ice">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {managementTeam.map((member, index) => (
              <div key={index} className="group glass-card p-1 rounded-[2.5rem] glow-border">
                <div className="bg-white rounded-[2.2rem] overflow-hidden h-full">
                  <ImagePlaceholder
                    description={`Professional headshot of ${member.name}`}
                    aspectRatio="square"
                    className="rounded-none border-0"
                  />
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-lytix-navy mb-1">{member.name}</h3>
                    <p className="text-lytix-teal font-semibold mb-4 text-sm">{member.title}</p>
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
            <p className="text-lytix-navy/60 font-light">Learn more about our Board of Directors and Clinical Advisory Board.</p>
          </div>
          <div className="flex gap-4 flex-wrap">
            <Link 
              href="/about/board"
              className="px-6 py-3 bg-lytix-teal/10 text-lytix-teal rounded-xl font-bold text-sm hover:bg-lytix-teal hover:text-white transition-all flex items-center gap-2"
            >
              Board of Directors
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link 
              href="/about/clinical-advisory"
              className="px-6 py-3 bg-lytix-teal text-white rounded-xl font-bold text-sm hover:bg-lytix-teal-dark transition-all flex items-center gap-2"
            >
              Clinical Advisory
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
}
