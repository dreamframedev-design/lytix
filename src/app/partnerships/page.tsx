import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Handshake, Building2, Globe, Mail, CheckCircle, Target } from "lucide-react";

export default function PartnershipsPage() {
  return (
    <div className="min-h-screen bg-lytix-light text-lytix-navy">
      <main className="relative z-[2]">
        {/* Hero Section - Full Width Background */}
        <header className="relative min-h-[70vh] flex items-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/homepage hero1.webp"
              alt="Lytix partnership opportunities"
              fill
              className="object-cover object-center"
              priority
              quality={90}
            />
            {/* White gradient overlay - left to right */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 via-40% to-transparent to-60%" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24 pb-16">
            <div className="max-w-2xl">
              <nav className="mb-8 flex items-center gap-2 text-sm font-semibold text-lytix-teal uppercase tracking-[0.25em]">
                <span>Company</span>
                <span className="text-lytix-ice">/</span>
                <span>Partnerships</span>
              </nav>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                <span className="block text-lytix-navy">Partner with</span>
                <span className="block text-stylized text-lytix-teal-dark">Lytix Biopharma</span>
              </h1>
              <p className="max-w-xl text-xl text-lytix-navy/70 font-light leading-relaxed mb-10">
                We are open to discussions on co-development and outlicensing opportunities.
                Our partner-ready pipeline offers multiple collaboration possibilities.
              </p>
              <a
                href="mailto:bd@lytixbiopharma.com"
                className="inline-flex items-center gap-3 px-8 py-4 bg-lytix-teal hover:bg-lytix-teal-dark text-white rounded-xl font-bold text-sm uppercase tracking-widest shadow-lg shadow-lytix-teal/25 hover:shadow-xl hover:scale-105 transition-all"
              >
                <Mail className="w-5 h-5" />
                Contact Business Development
              </a>
            </div>
          </div>
        </header>

        {/* Current Partnership: Verrica */}
        <section className="py-24 bg-white border-y border-lytix-ice">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-lytix-teal mb-4 block">Established Partnership</span>
              <h2 className="text-4xl font-bold tracking-tight text-lytix-navy">Current Partner</h2>
            </div>

            <div className="max-w-5xl mx-auto glass-card p-2 rounded-[3rem] glow-border">
              <div className="bg-white rounded-[2.5rem] overflow-hidden">
                <div className="grid md:grid-cols-3">
                  <div className="p-10 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white flex flex-col justify-center items-center text-center">
                    <Building2 className="h-16 w-16 mb-6 opacity-80" />
                    <h3 className="text-2xl font-bold mb-2">Verrica Pharmaceuticals</h3>
                    <p className="text-sm text-emerald-100/80">Nasdaq Listed</p>
                  </div>
                  <div className="md:col-span-2 p-10">
                    <div className="text-[10px] font-black uppercase tracking-widest text-lytix-navy/40 mb-3">Dermatological Indications License</div>
                    <h4 className="text-xl font-bold text-lytix-navy mb-4">Ruxotemitide (LTX-315)</h4>
                    <p className="text-lytix-navy/60 font-light leading-relaxed mb-6">
                      Verrica Pharmaceuticals&apos; license covers dermatological indications,
                      including basal cell carcinoma and squamous cell carcinoma. Verrica has generated
                      impressive Phase 2 data demonstrating a <strong className="text-lytix-navy">51% complete response rate</strong>
                      {" "}and clinical responses in <strong className="text-lytix-navy">97% of patients</strong> with basal cell carcinoma.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-100">
                        Basal Cell Carcinoma
                      </span>
                      <span className="px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-100">
                        Squamous Cell Carcinoma
                      </span>
                      <span className="px-4 py-2 rounded-full bg-lytix-teal/10 text-lytix-teal text-xs font-bold border border-lytix-teal/20">
                        Phase 2 Complete
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Partnership Opportunities - Outside main for ribbon visibility */}
      <section className="py-24 bg-lytix-light relative">
        <div className="absolute inset-0 molecular-pattern opacity-50" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-lytix-coral mb-4 block">Open Opportunities</span>
            <h2 className="text-4xl font-bold tracking-tight text-lytix-navy mb-4">Partnership Opportunities</h2>
            <p className="text-lg text-lytix-navy/60 font-light max-w-2xl mx-auto">
              We are actively seeking partners for co-development and outlicensing across key markets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Asia/APAC */}
            <div className="group glass-card p-1 rounded-[2.5rem] glow-border">
              <div className="bg-white rounded-[2.2rem] p-10 h-full flex flex-col">
                <div className="w-14 h-14 bg-lytix-teal/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-lytix-teal group-hover:text-white transition-all duration-300">
                  <Globe className="h-7 w-7 text-lytix-teal group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-lytix-navy mb-3">Asia/APAC Region</h3>
                <p className="text-lytix-navy/60 font-light leading-relaxed mb-6 flex-grow">
                  Seeking partners for ruxotemitide in the Asia/APAC region for neoadjuvant
                  resectable melanoma and other oncology indications.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1.5 rounded-full bg-lytix-coral/10 text-lytix-coral text-[10px] font-bold uppercase tracking-wider border border-lytix-coral/20">
                    Ruxotemitide
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-lytix-teal/10 text-lytix-teal text-[10px] font-bold uppercase tracking-wider border border-lytix-teal/20">
                    Melanoma
                  </span>
                </div>
                <a href="mailto:bd@lytixbiopharma.com" className="text-lytix-teal font-bold text-sm animated-underline inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Inquire <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Co-Development */}
            <div className="group glass-card p-1 rounded-[2.5rem] glow-border">
              <div className="bg-white rounded-[2.2rem] p-10 h-full flex flex-col">
                <div className="w-14 h-14 bg-lytix-coral/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-lytix-coral group-hover:text-white transition-all duration-300">
                  <Handshake className="h-7 w-7 text-lytix-coral group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-lytix-navy mb-3">Co-Development</h3>
                <p className="text-lytix-navy/60 font-light leading-relaxed mb-6 flex-grow">
                  Open to co-development partnerships for expanding our pipeline into
                  new indications and combination therapies.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1.5 rounded-full bg-lytix-teal/10 text-lytix-teal text-[10px] font-bold uppercase tracking-wider border border-lytix-teal/20">
                    Combinations
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-lytix-gold/20 text-lytix-gold text-[10px] font-bold uppercase tracking-wider border border-lytix-gold/30">
                    New Indications
                  </span>
                </div>
                <a href="mailto:bd@lytixbiopharma.com" className="text-lytix-coral font-bold text-sm animated-underline inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Inquire <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* LTX-401 */}
            <div className="group glass-card p-1 rounded-[2.5rem] glow-border">
              <div className="bg-white rounded-[2.2rem] p-10 h-full flex flex-col">
                <div className="w-14 h-14 bg-lytix-gold/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-lytix-gold group-hover:text-lytix-navy transition-all duration-300">
                  <Target className="h-7 w-7 text-lytix-gold group-hover:text-lytix-navy transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-lytix-navy mb-3">LTX-401 Development</h3>
                <p className="text-lytix-navy/60 font-light leading-relaxed mb-6 flex-grow">
                  Partnership opportunities for LTX-401 development in deep-seated
                  solid tumors including liver cancer.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1.5 rounded-full bg-lytix-teal/10 text-lytix-teal text-[10px] font-bold uppercase tracking-wider border border-lytix-teal/20">
                    LTX-401
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-purple-50 text-purple-600 text-[10px] font-bold uppercase tracking-wider border border-purple-100">
                    Solid Tumors
                  </span>
                </div>
                <a href="mailto:bd@lytixbiopharma.com" className="text-lytix-gold font-bold text-sm animated-underline inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Inquire <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="relative z-[2]">
        {/* Why Partner Section */}
        <section className="py-24 bg-white border-y border-lytix-ice">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-lytix-teal mb-4 block">Why Partner With Us</span>
                <h2 className="text-4xl font-bold tracking-tight text-lytix-navy mb-6">
                  A Platform Ready for Partnership
                </h2>
                <p className="text-lg text-lytix-navy/60 font-light leading-relaxed mb-10">
                  Lytix offers a unique opportunity to partner on first-in-class oncolytic molecule
                  immunotherapies with strong Phase 2 data and clear regulatory pathways.
                </p>

                <div className="space-y-5">
                  {[
                    "Validated mechanism of action with strong clinical data",
                    "Experienced team with deep biopharma expertise",
                    "Flexible partnership structures",
                    "Multiple indications and geographic opportunities",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-lytix-light hover-glow">
                      <CheckCircle className="w-6 h-6 text-lytix-teal flex-shrink-0" />
                      <span className="text-lytix-navy font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl shadow-lytix-teal/20">
                  <Image
                    src="/images/ribbon x cancer cell interaction hero 3.webp"
                    alt="Lytix science"
                    fill
                    className="object-cover"
                    quality={90}
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
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-lytix-coral/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 bg-lytix-coral/20 text-lytix-coral rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 ring-1 ring-lytix-coral/30">
            Start a Conversation
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 max-w-3xl mx-auto">
            Ready to explore a partnership?
          </h2>
          <p className="text-xl text-lytix-ice/70 font-light max-w-2xl mx-auto mb-10">
            Contact our business development team to discuss co-development and outlicensing opportunities.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:bd@lytixbiopharma.com"
              className="px-10 py-5 bg-lytix-coral hover:bg-lytix-raspberry text-white rounded-2xl font-bold text-sm uppercase tracking-widest shadow-xl shadow-lytix-coral/30 hover:scale-105 transition-all flex items-center gap-3"
            >
              <Mail className="w-5 h-5" />
              Email BD Team
            </a>
            <Link
              href="/contact"
              className="px-10 py-5 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-bold text-sm uppercase tracking-widest border border-white/20 hover:border-white/40 transition-all flex items-center gap-3"
            >
              Contact Form
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
