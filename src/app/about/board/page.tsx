import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

const boardMembers = [
  {
    name: "Board Member 1",
    title: "Chairman",
    bio: "Extensive leadership experience in the pharmaceutical industry with a focus on strategic growth and corporate governance.",
  },
  {
    name: "Board Member 2",
    title: "Non-Executive Director",
    bio: "Deep expertise in healthcare investment banking and capital markets, supporting Lytix's financing strategy.",
  },
  {
    name: "Board Member 3",
    title: "Non-Executive Director",
    bio: "Senior executive experience in global pharmaceutical companies with expertise in commercial operations.",
  },
  {
    name: "Board Member 4",
    title: "Non-Executive Director",
    bio: "Accomplished scientist and entrepreneur with expertise in translating scientific discoveries into commercial therapies.",
  },
];

export default function BoardPage() {
  return (
    <main className="min-h-screen bg-lytix-light text-lytix-navy">
      {/* Hero Section - Full Width Background */}
      <header className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/lytix ribbon 3.webp"
            alt="Lytix board"
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
              <span className="block text-lytix-navy">Board of</span>
              <span className="block text-stylized text-lytix-coral">Directors</span>
            </h1>
            <p className="max-w-xl text-xl text-lytix-navy/70 font-light leading-relaxed">
              Our Board of Directors provides strategic guidance and governance expertise, 
              ensuring Lytix Biopharma delivers on its mission to transform cancer treatment.
            </p>
          </div>
        </div>
      </header>

      {/* Board Grid */}
      <section className="py-24 bg-white border-y border-lytix-ice">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {boardMembers.map((member, index) => (
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
                    <p className="text-lytix-coral font-semibold mb-4 text-sm">{member.title}</p>
                    <p className="text-lytix-navy/60 font-light leading-relaxed text-sm">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-lytix-light">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto p-8 bg-white rounded-3xl border border-lytix-ice">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-lytix-navy/40 mb-2 block">Explore More</span>
              <h2 className="text-2xl font-bold text-lytix-navy mb-2">Explore Our Leadership</h2>
              <p className="text-lytix-navy/60 font-light">Learn more about our Management Team and Clinical Advisory Board.</p>
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
                href="/about/clinical-advisory"
                className="px-6 py-3 bg-lytix-coral text-white rounded-xl font-bold text-sm hover:bg-lytix-raspberry transition-all flex items-center gap-2"
              >
                Clinical Advisory
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
