import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, Building2, Stethoscope, Target, Lightbulb, Heart } from "lucide-react";

const aboutSections = [
  {
    title: "Management Team",
    description: "Meet our leadership team driving innovation in oncology and bringing transformative therapies to patients.",
    href: "/about/management",
    icon: Users,
    color: "lytix-teal",
    bgColor: "bg-lytix-teal/10",
    hoverBg: "group-hover:bg-lytix-teal",
  },
  {
    title: "Board of Directors",
    description: "Strategic guidance from industry experts with deep experience in biopharma and healthcare.",
    href: "/about/board",
    icon: Building2,
    color: "lytix-coral",
    bgColor: "bg-lytix-coral/10",
    hoverBg: "group-hover:bg-lytix-coral",
  },
  {
    title: "Clinical Advisory Board",
    description: "World-class clinical expertise shaping our research and development programs.",
    href: "/about/clinical-advisory",
    icon: Stethoscope,
    color: "lytix-gold",
    bgColor: "bg-lytix-gold/20",
    hoverBg: "group-hover:bg-lytix-gold",
  },
];

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "Developing first-in-class therapies to transform cancer treatment.",
  },
  {
    icon: Lightbulb,
    title: "Scientific Excellence",
    description: "Pioneering oncolytic molecule immunotherapy research.",
  },
  {
    icon: Heart,
    title: "Patient-Focused",
    description: "Everything we do is for the patients who need new treatment options.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-lytix-light text-lytix-navy">
      <main className="relative z-[2]">
        {/* Hero Section - Full Width Background */}
        <header className="relative min-h-[70vh] flex items-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/ribbon hero 2 homepage.webp"
              alt="Lytix Biopharma"
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
              <nav className="mb-8 flex items-center gap-2 text-sm font-semibold text-lytix-teal uppercase tracking-[0.25em]">
                <span>Company</span>
                <span className="text-lytix-ice">/</span>
                <span>About Us</span>
              </nav>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-lytix-navy">
                About <span className="text-lytix-teal-dark">Lytix Biopharma</span>
              </h1>
              <p className="max-w-xl text-xl text-lytix-navy/70 font-light leading-relaxed">
                We are a clinical-stage biotechnology company developing first-in-class oncolytic molecule immunotherapies
                for the treatment of cancer. Our mission is to redefine the standard of care and improve patient outcomes.
              </p>
            </div>
          </div>
        </header>

        {/* Stats Section */}
        <section className="bg-white border-y border-lytix-ice py-12">
          <div className="container mx-auto px-4 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
            <div>
              <div className="text-lytix-teal font-bold text-3xl mb-1">Oslo</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-lytix-navy/40">Headquarters</div>
            </div>
            <div>
              <div className="text-lytix-teal font-bold text-3xl mb-1">Phase 2</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-lytix-navy/40">Clinical Stage</div>
            </div>
            <div>
              <div className="text-lytix-teal font-bold text-3xl mb-1">2+</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-lytix-navy/40">Pipeline Assets</div>
            </div>
            <div>
              <div className="text-lytix-teal font-bold text-3xl mb-1">First-in-Class</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-lytix-navy/40">Novel Platform</div>
            </div>
          </div>
        </section>

        {/* Leadership Cards */}
        <section className="py-24 bg-lytix-light">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-lytix-teal mb-4 block">Leadership</span>
              <h2 className="text-4xl font-bold tracking-tight text-lytix-navy">Meet Our Team</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {aboutSections.map((section) => (
                <Link
                  key={section.href}
                  href={section.href}
                  className="group glass-card p-1 rounded-[2.5rem] glow-border"
                >
                  <div className="bg-white rounded-[2.2rem] p-10 h-full flex flex-col">
                    <div className={`w-14 h-14 ${section.bgColor} rounded-2xl flex items-center justify-center mb-6 ${section.hoverBg} group-hover:text-white transition-all duration-300`}>
                      <section.icon className={`h-7 w-7 text-${section.color} group-hover:text-white transition-colors`} />
                    </div>
                    <h3 className="text-xl font-bold text-lytix-navy mb-3">{section.title}</h3>
                    <p className="text-lytix-navy/60 font-light leading-relaxed mb-8 flex-grow">
                      {section.description}
                    </p>
                    <div className="flex items-center gap-2 text-lytix-teal font-bold text-sm group-hover:gap-3 transition-all">
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-24 bg-white border-y border-lytix-ice">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-lytix-coral mb-4 block">Our Foundation</span>
                <h2 className="text-4xl font-bold tracking-tight text-lytix-navy mb-6">
                  Driven by Purpose
                </h2>
                <p className="text-lg text-lytix-navy/60 font-light leading-relaxed mb-10">
                  At Lytix Biopharma, we believe that breakthrough science can transform the lives of cancer patients.
                  Our commitment to innovation drives everything we do.
                </p>

                <div className="space-y-6">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-start gap-5 p-5 rounded-2xl bg-lytix-light hover-glow">
                      <div className="w-12 h-12 rounded-xl bg-lytix-teal/10 flex items-center justify-center text-lytix-teal flex-shrink-0">
                        <value.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lytix-navy mb-1">{value.title}</h4>
                        <p className="text-sm text-lytix-navy/50 font-light">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image side */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl shadow-lytix-teal/20">
                  <Image
                    src="/images/orb 4.webp"
                    alt="Lytix scientific imagery"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* CTA Section - Outside main for ribbon visibility */}
      <section className="py-24 bg-navy-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-10" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-lytix-teal/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 bg-lytix-teal/20 text-lytix-cyan rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 ring-1 ring-lytix-teal/30">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 max-w-3xl mx-auto">
            Ready to learn more about Lytix?
          </h2>
          <p className="text-xl text-lytix-ice/70 font-light max-w-2xl mx-auto mb-10">
            Connect with our team to discuss partnership opportunities, clinical programs, or investor relations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-10 py-5 bg-lytix-teal hover:bg-lytix-cyan text-white hover:text-lytix-navy rounded-2xl font-bold text-sm uppercase tracking-widest shadow-xl shadow-lytix-teal/30 hover:scale-105 transition-all flex items-center gap-3"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/pipeline"
              className="px-10 py-5 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-bold text-sm uppercase tracking-widest border border-white/20 hover:border-white/40 transition-all"
            >
              View Pipeline
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
