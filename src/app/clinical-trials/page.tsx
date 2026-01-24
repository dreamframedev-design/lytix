import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, CheckCircle2, Users, Calendar, MapPin } from "lucide-react";

export default function ClinicalTrialsPage() {
  return (
    <div className="min-h-screen bg-lytix-light text-lytix-navy">
      <main className="relative z-[2]">
        {/* Hero Section - Full Width Background */}
        <header className="relative min-h-[70vh] flex items-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/orb 2.webp"
              alt="Lytix clinical research"
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
              <nav className="mb-8 flex items-center gap-2 text-sm font-semibold text-lytix-teal uppercase tracking-[0.25em]">
                <span>Research</span>
                <span className="text-lytix-ice">/</span>
                <span>Clinical Trials</span>
              </nav>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-lytix-navy">
                Clinical <span className="text-lytix-teal-dark">Trials</span>
              </h1>
              <p className="max-w-xl text-xl text-lytix-navy/70 font-light leading-relaxed">
                Lytix Biopharma has completed multiple Phase 2 trials demonstrating the safety and efficacy
                of our oncolytic molecule platform. Explore our ongoing clinical programs below.
              </p>
            </div>
          </div>
        </header>

        {/* Stats Section */}
        <section className="bg-white border-y border-lytix-ice py-12">
          <div className="container mx-auto px-4 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
            <div>
              <div className="text-lytix-teal font-bold text-3xl mb-1">Phase 2</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-lytix-navy/40">Clinical Stage</div>
            </div>
            <div>
              <div className="text-lytix-teal font-bold text-3xl mb-1">51%</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-lytix-navy/40">Complete Response</div>
            </div>
            <div>
              <div className="text-lytix-teal font-bold text-3xl mb-1">97%</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-lytix-navy/40">Clinical Response</div>
            </div>
            <div>
              <div className="text-lytix-teal font-bold text-3xl mb-1">2+</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-lytix-navy/40">Active Programs</div>
            </div>
          </div>
        </section>

        {/* NeoLIPA Study */}
        <section className="py-24 bg-lytix-light relative">
          <div className="absolute inset-0 molecular-pattern opacity-30" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-lytix-teal mb-4 block">Active Recruitment</span>
              <h2 className="text-4xl font-bold tracking-tight text-lytix-navy">Current Studies</h2>
            </div>

            <div className="glass-card p-2 rounded-[3rem] glow-border max-w-5xl mx-auto mb-12">
              <div className="bg-white rounded-[2.5rem] overflow-hidden">
                <div className="grid lg:grid-cols-3">
                  <div className="p-10 bg-gradient-to-br from-lytix-teal to-lytix-teal-dark text-white flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-lytix-cyan/20 rounded-full blur-3xl" />
                    <div className="relative z-10">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-6 w-fit">
                        <span className="w-2 h-2 rounded-full bg-lytix-gold animate-pulse" />
                        <span>Currently Recruiting</span>
                      </div>
                      <h3 className="text-3xl font-bold mb-4">NeoLIPA Study</h3>
                      <p className="text-white/70 font-light mb-8">
                        Investigator-initiated Phase 2 study at Oslo University Hospital
                      </p>
                      <div className="space-y-3 mb-8">
                        <div className="flex items-center gap-3 text-white/80 text-sm">
                          <MapPin className="h-4 w-4" />
                          <span>Oslo, Norway</span>
                        </div>
                        <div className="flex items-center gap-3 text-white/80 text-sm">
                          <Calendar className="h-4 w-4" />
                          <span>2024 - Ongoing</span>
                        </div>
                        <div className="flex items-center gap-3 text-white/80 text-sm">
                          <Users className="h-4 w-4" />
                          <span>Phase 2</span>
                        </div>
                      </div>
                      <a
                        href="https://clinicaltrials.gov/study/NCT06651151?term=NEOLIPA&rank=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-lytix-teal-dark hover:bg-lytix-ice rounded-xl font-bold text-sm transition-all"
                      >
                        View on ClinicalTrials.gov
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>

                  <div className="lg:col-span-2 p-10">
                    <div className="text-[10px] font-black uppercase tracking-widest text-lytix-navy/40 mb-3">Combination Therapy</div>
                    <h4 className="text-xl font-bold text-lytix-navy mb-4">
                      Neoadjuvant Ruxotemitide + Pembrolizumab in Resectable Melanoma
                    </h4>
                    <p className="text-lytix-navy/60 font-light leading-relaxed mb-6">
                      This study is exploring neo-adjuvant ruxotemitide
                      (administered before surgery) in combination with standard of care pembrolizumab
                      (KEYTRUDA®) in patients with resectable melanoma.
                    </p>
                    <p className="text-lytix-navy/60 font-light leading-relaxed mb-8">
                      The objective is to demonstrate that ruxotemitide improves outcomes
                      in these patients and prevents disease recurrence.
                    </p>

                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 rounded-full bg-lytix-teal/10 text-lytix-teal-dark text-xs font-bold border border-lytix-teal/20">
                        Phase 2
                      </span>
                      <span className="px-4 py-2 rounded-full bg-lytix-coral/10 text-lytix-coral text-xs font-bold border border-lytix-coral/20">
                        Melanoma
                      </span>
                      <span className="px-4 py-2 rounded-full bg-lytix-gold/10 text-lytix-navy text-xs font-bold border border-lytix-gold/30">
                        Combination Therapy
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Verrica Study */}
            <div className="glass-card p-2 rounded-[3rem] glow-border max-w-5xl mx-auto">
              <div className="bg-white rounded-[2.5rem] overflow-hidden">
                <div className="grid lg:grid-cols-3">
                  <div className="p-10 bg-navy-gradient text-white flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-lytix-teal/20 rounded-full blur-3xl" />
                    <div className="relative z-10">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-lytix-teal/30 text-lytix-cyan text-xs font-bold uppercase tracking-wider mb-6 w-fit">
                        <CheckCircle2 className="h-4 w-4" />
                        <span>Positive Results</span>
                      </div>
                      <h3 className="text-3xl font-bold mb-4">Verrica Phase 2</h3>
                      <p className="text-lytix-ice/70 font-light mb-8">
                        Partner-sponsored study in basal cell carcinoma
                      </p>

                      {/* Key Results */}
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="p-4 bg-white/10 rounded-xl">
                          <p className="text-3xl font-bold text-lytix-cyan mb-1">51%</p>
                          <p className="text-[10px] uppercase tracking-wider text-white/60">Complete Response</p>
                        </div>
                        <div className="p-4 bg-white/10 rounded-xl">
                          <p className="text-3xl font-bold text-lytix-coral mb-1">97%</p>
                          <p className="text-[10px] uppercase tracking-wider text-white/60">Clinical Response</p>
                        </div>
                      </div>

                      <a
                        href="https://clinicaltrials.gov/study/NCT05188729?term=VP-315&rank=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-lytix-coral hover:bg-lytix-raspberry text-white rounded-xl font-bold text-sm transition-all"
                      >
                        View on ClinicalTrials.gov
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>

                  <div className="lg:col-span-2 p-10">
                    <div className="text-[10px] font-black uppercase tracking-widest text-lytix-navy/40 mb-3">Monotherapy</div>
                    <h4 className="text-xl font-bold text-lytix-navy mb-4">
                      Ruxotemitide (VP-315) in Basal Cell Carcinoma
                    </h4>
                    <p className="text-lytix-navy/60 font-light leading-relaxed mb-6">
                      Verrica has generated impressive Phase 2 data demonstrating a{" "}
                      <strong className="text-lytix-navy">51% complete response rate</strong> and clinical responses in{" "}
                      <strong className="text-lytix-navy">97% of patients</strong> with significant reduction of tumor size.
                    </p>
                    <p className="text-lytix-navy/60 font-light leading-relaxed mb-8">
                      Patient biopsies showed significant increases in CD4+, CD8+ T cells, and B-cells,
                      indicating strong recruitment of effector immune populations into the tumor,
                      demonstrating the ability of ruxotemitide to reprogram the tumor microenvironment.
                    </p>

                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 rounded-full bg-lytix-teal/10 text-lytix-teal-dark text-xs font-bold border border-lytix-teal/20">
                        Phase 2
                      </span>
                      <span className="px-4 py-2 rounded-full bg-lytix-gold/10 text-lytix-navy text-xs font-bold border border-lytix-gold/30">
                        Basal Cell Carcinoma
                      </span>
                      <span className="px-4 py-2 rounded-full bg-purple-50 text-purple-600 text-xs font-bold border border-purple-100">
                        Monotherapy
                      </span>
                    </div>
                  </div>
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

        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <span className="inline-block px-4 py-1.5 bg-lytix-teal/20 text-lytix-cyan rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 ring-1 ring-lytix-teal/30">
            Explore Further
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 max-w-3xl mx-auto">
            Explore Our Full Pipeline
          </h2>
          <p className="text-xl text-lytix-ice/70 font-light max-w-2xl mx-auto mb-10">
            Discover our complete portfolio of oncolytic molecule therapies in development.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/pipeline"
              className="px-10 py-5 bg-lytix-coral hover:bg-lytix-raspberry text-white rounded-2xl font-bold text-sm uppercase tracking-widest shadow-xl shadow-lytix-coral/30 hover:scale-105 transition-all flex items-center gap-3"
            >
              View Pipeline
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/patient-resources"
              className="px-10 py-5 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-bold text-sm uppercase tracking-widest border border-white/20 hover:border-white/40 transition-all"
            >
              Patient Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
