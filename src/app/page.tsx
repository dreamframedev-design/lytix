import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, Target, Microscope, Users, Handshake, FileText, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Full screen background image */}
      <section className="relative min-h-screen flex items-center overflow-hidden z-[2]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/lytix hero people main.webp"
            alt="Lytix Biopharma - Transforming cancer treatment"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          {/* Subtle white gradient overlay - left to right */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 pt-24 pb-16 relative z-10">
          <div className="max-w-2xl">
            {/* Hero Content - Staggered animations */}
            <div className="space-y-8">
              <div className="animate-fade-up opacity-0 stagger-1 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-lytix-teal/30 text-lytix-teal-dark text-sm font-medium shadow-sm">
                <div className="w-2 h-2 rounded-full bg-lytix-coral animate-pulse" />
                <span>First-in-Class Immunotherapy</span>
              </div>
              
              <h1 className="animate-fade-up opacity-0 stagger-2 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-lytix-navy drop-shadow-sm">
                <span className="text-lytix-teal">Oncolytic Molecules</span> that Kill Cancer & Prevent Recurrence
              </h1>
              
              <p className="animate-fade-up opacity-0 stagger-3 text-xl md:text-2xl text-lytix-navy/80 leading-relaxed max-w-xl">
                Neoadjuvant Immunotherapy with Durable Responses Approaching Commercialization
              </p>
              
              <div className="animate-fade-up opacity-0 stagger-4 flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/science">
                  <Button size="lg" className="w-full sm:w-auto bg-lytix-navy-deep hover:bg-lytix-cyan hover:text-lytix-navy text-white text-lg px-8 h-14 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]">
                    Explore Our Science
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/pipeline">
                  <Button size="lg" className="w-full sm:w-auto text-lg px-8 h-14 bg-white text-lytix-navy-deep hover:bg-lytix-cyan hover:text-lytix-navy shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]">
                    View Pipeline
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-up stagger-6 opacity-0">
          <div className="animate-float">
            <div className="w-7 h-11 rounded-full border-2 border-lytix-navy/30 flex items-start justify-center p-2 bg-white/30 backdrop-blur-sm shadow-lg">
              <div className="w-1.5 h-3 bg-lytix-teal rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Redefining Standard of Care */}
      <section className="py-32 bg-white relative overflow-hidden group/section z-[2]">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-lytix-ice/50 to-transparent" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 animate-slide-left stagger-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500 group">
                <Image
                  src="/images/ribbon hero 2 homepage.webp"
                  alt="Oncolytic molecule therapy visualization"
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-lytix-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-6 animate-slide-right stagger-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-lytix-teal/10 text-lytix-teal-dark text-sm font-medium hover:bg-lytix-teal/20 transition-colors">
                <Target className="h-4 w-4" />
                <span>Our Mission</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold leading-tight text-lytix-navy">
                Lytix Biopharma is Redefining the Standard of Care in the <span className="text-lytix-teal-dark">Neoadjuvant Setting</span>
              </h2>
              
              <p className="text-lg text-lytix-navy/70 leading-relaxed">
                Lytix Biopharma is developing a pipeline of oncolytic molecule therapies that treat both superficial and deep-seated tumors. Our focus is to re-define the standard of care in the neoadjuvant setting, through providing patients with first-in-class, first-line immunotherapies that kill cancer and prevent recurrence.
              </p>
              
              <p className="text-lg text-lytix-navy/70 leading-relaxed">
                Our mission is to deliver transformative medicines that work in synergy with immune checkpoint inhibitors, to offer patients the best outcomes as fast as possible.
              </p>
              
              <Link href="/about">
                <Button variant="link" className="px-0 text-lytix-teal-dark hover:text-lytix-teal text-lg group/btn">
                  Learn More About Us
                  <ChevronRight className="ml-1 h-5 w-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Overcoming Immunosuppression */}
      <section className="py-32 bg-lytix-light relative overflow-hidden">
        <div className="absolute inset-0 molecular-pattern opacity-50" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6 animate-slide-left stagger-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-lytix-coral/10 text-lytix-coral text-sm font-medium hover:bg-lytix-coral/20 transition-colors">
                <Microscope className="h-4 w-4" />
                <span>Our Science</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold leading-tight text-lytix-navy">
                Our Oncolytic Molecule Drugs <span className="text-lytix-coral">Overcome Immunosuppression</span> Within the Tumor Microenvironment
              </h2>
              
              <p className="text-lg text-lytix-navy/70 leading-relaxed">
                Lytix Biopharma has built an oncolytic molecule platform that overcomes immunosuppression within the tumor microenvironment via a two-step mode of action.
              </p>
              
              <p className="text-lg text-lytix-navy/70 leading-relaxed">
                Our drugs destroy the membranes of cancer cells, releasing both tumor antigens and potent immunostimulatory molecules that initiate a broad immune cell response. The resulting immune cell infiltration into the tumor microenvironment delivers broad and durable anti-tumor immunity.
              </p>
              
              <Link href="/science">
                <Button variant="link" className="px-0 text-lytix-teal-dark hover:text-lytix-teal text-lg group/btn">
                  Discover Our Science
                  <ChevronRight className="ml-1 h-5 w-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
            
            <div className="animate-slide-right stagger-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group hover:shadow-3xl transition-shadow duration-500">
                <Image
                  src="/images/ribbon x cancer cell interaction hero 3.webp"
                  alt="Cancer cell and immune system interaction"
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-lytix-coral/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Pipeline Teaser */}
      <section className="pt-32 pb-12 bg-white relative z-[2]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-up stagger-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-lytix-gold/10 text-lytix-navy text-sm font-medium border border-lytix-gold/30 hover:bg-lytix-gold/20 transition-colors">
              <div className="w-2 h-2 rounded-full bg-lytix-gold animate-pulse" />
              <span>Our Pipeline</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-lytix-navy">
              Our Partner-ready Pipeline is Led by <span className="gradient-text">Ruxotemitide</span>, Rapidly Approaching Commercialization
            </h2>
          </div>
          
          {/* Pipeline Preview with Fade Effect */}
          <div className="relative animate-scale-up stagger-2">
            {/* Pipeline Table Container - clips content */}
            <div className="overflow-hidden max-h-[320px]">
              <div className="overflow-x-auto">
                <div className="min-w-[800px] bg-white rounded-t-2xl border-2 border-b-0 border-lytix-ice shadow-xl overflow-hidden">
                  {/* Header */}
                  <div className="grid grid-cols-7 gap-4 p-6 bg-lytix-navy text-white text-xs font-bold uppercase tracking-wider">
                    <div className="col-span-2">Asset</div>
                    <div className="text-center">Preclinical</div>
                    <div className="text-center">Phase I</div>
                    <div className="text-center">Phase II</div>
                    <div className="text-center">Phase III</div>
                    <div className="text-center">Partner</div>
                  </div>
                  
                  {/* Ruxotemitide - Pivotal Study Row */}
                  <div className="grid grid-cols-7 gap-4 items-center py-5 px-6 border-b border-lytix-ice hover:bg-lytix-light/50 transition-colors">
                    <div className="col-span-2">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-2.5 h-2.5 rounded-full bg-lytix-teal relative">
                          <span className="absolute inset-0 rounded-full bg-lytix-teal animate-ping opacity-40" />
                        </div>
                        <p className="font-bold text-lytix-teal-dark">Ruxotemitide (LTX-315)</p>
                      </div>
                      <p className="text-sm text-lytix-navy/60 ml-4">Neoadjuvant resectable melanoma</p>
                    </div>
                    <div className="col-span-4 px-2">
                      <div className="relative h-4 bg-lytix-ice rounded-full overflow-hidden">
                        <div className="absolute inset-0 grid grid-cols-4 z-10 pointer-events-none">
                          <span className="border-r-2 border-white" />
                          <span className="border-r-2 border-white" />
                          <span className="border-r-2 border-white" />
                          <span />
                        </div>
                        <div className="pipeline-bar-fill absolute left-0 top-0 h-full w-[69%] bg-gradient-to-r from-lytix-teal via-lytix-teal to-lytix-cyan rounded-full overflow-hidden">
                          <span className="pipeline-shine" />
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <span className="badge-shine inline-flex items-center px-3 py-1.5 rounded-full bg-lytix-coral/10 text-lytix-coral font-semibold text-xs border border-lytix-coral/20">
                        Seeking Partners
                      </span>
                    </div>
                  </div>
                  
                  {/* LTX-401 Row */}
                  <div className="grid grid-cols-7 gap-4 items-center py-5 px-6 border-b border-lytix-ice hover:bg-lytix-light/50 transition-colors">
                    <div className="col-span-2">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-2.5 h-2.5 rounded-full bg-lytix-navy-deep relative">
                          <span className="absolute inset-0 rounded-full bg-lytix-navy-deep animate-ping opacity-40" />
                        </div>
                        <p className="font-bold text-lytix-navy-deep">LTX-401</p>
                      </div>
                      <p className="text-sm text-lytix-navy/60 ml-4">Deep-seated solid tumors</p>
                    </div>
                    <div className="col-span-4 px-2">
                      <div className="relative h-4 bg-lytix-ice rounded-full overflow-hidden">
                        <div className="absolute inset-0 grid grid-cols-4 z-10 pointer-events-none">
                          <span className="border-r-2 border-white" />
                          <span className="border-r-2 border-white" />
                          <span className="border-r-2 border-white" />
                          <span />
                        </div>
                        <div className="pipeline-bar-fill absolute left-0 top-0 h-full w-[21%] bg-gradient-to-r from-lytix-teal to-lytix-cyan rounded-full overflow-hidden" style={{ animationDelay: '0.3s' }}>
                          <span className="pipeline-shine" />
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <span className="badge-shine inline-flex items-center px-3 py-1.5 rounded-full bg-lytix-gold/10 text-lytix-navy font-semibold text-xs border border-lytix-gold/30">
                        Preparing Phase I
                      </span>
                    </div>
                  </div>
                  
                  {/* Additional rows that will be hidden by gradient */}
                  <div className="grid grid-cols-7 gap-4 items-center py-5 px-6 border-b border-lytix-ice">
                    <div className="col-span-2">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-2.5 h-2.5 rounded-full bg-lytix-teal/50" />
                        <p className="font-bold text-lytix-teal-dark/60">More Pipeline Assets...</p>
                      </div>
                    </div>
                    <div className="col-span-4 px-2">
                      <div className="h-4 bg-lytix-ice rounded-full" />
                    </div>
                    <div className="text-center" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* White Gradient Fade Overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white to-transparent pointer-events-none" />
            
            {/* CTA Button positioned over the gradient */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-2 z-10">
              <Link href="/pipeline">
                <Button size="lg" className="btn-lytix-gradient text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                  View Full Pipeline
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Clinical Trial Validation */}
      <section className="py-32 bg-navy-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-10" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-lytix-teal/10 to-transparent" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6 animate-slide-left stagger-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-lytix-cyan/20 text-lytix-cyan text-sm font-medium hover:bg-lytix-cyan/30 transition-colors">
                <Users className="h-4 w-4" />
                <span>Clinical Trials</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Learn More About Our Deep <span className="text-lytix-cyan">Clinical Trial Validation</span>
              </h2>
              
              <p className="text-lg text-lytix-ice/80 leading-relaxed">
                Lytix Biopharma has completed multiple Phase 2 trials, and is currently enrolling patients in an investigator-led Phase 2 study, NeoLIPA which is evaluating ruxotemitide (formerly LTX-315) in combination with pembrolizumab in resectable melanoma patients in the neoadjuvant setting.
              </p>
              
              <Link href="/clinical-trials">
                <Button size="lg" className="bg-lytix-coral hover:bg-lytix-raspberry text-white shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] animate-glow-pulse">
                  Explore Clinical Trials
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            
            <div className="animate-slide-right stagger-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group hover:shadow-lytix-cyan/20 hover:shadow-3xl transition-all duration-500">
                <Image
                  src="/images/orb 1.webp"
                  alt="Scientific visualization"
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-lytix-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Partnering Strategy */}
      <section className="py-32 bg-white relative z-[2]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 animate-slide-left stagger-2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl group hover:shadow-2xl transition-shadow duration-500">
                <Image
                  src="/images/doctor hero.webp"
                  alt="Medical professional - Partnership opportunities"
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-lytix-raspberry/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-6 animate-slide-right stagger-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-lytix-raspberry/10 text-lytix-raspberry text-sm font-medium hover:bg-lytix-raspberry/20 transition-colors">
                <Handshake className="h-4 w-4" />
                <span>Partnerships</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold leading-tight text-lytix-navy">
                Our Partnering Strategy is Built to Deliver <span className="text-lytix-coral">Commercial Success</span>
              </h2>
              
              <p className="text-lg text-lytix-navy/70 leading-relaxed">
                Interested in learning more about our assets? At Lytix Biopharma we are open to discussions on co-development and outlicensing opportunities.
              </p>
              
              {/* Current Partnership */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-lytix-ice to-white border border-lytix-teal/20 hover:border-lytix-teal/40 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-lytix-teal animate-pulse" />
                  <h4 className="font-semibold text-lg text-lytix-navy">Current Partnership</h4>
                </div>
                <p className="text-lytix-navy/70 mb-4">
                  <strong className="text-lytix-teal-dark">Verrica Pharmaceuticals</strong> - Currently assessing ruxotemitide (VP-315) in a Phase 2 study in basal cell carcinoma.
                </p>
                <a
                  href="https://newsweb.oslobors.no/message/659147"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-lytix-coral hover:text-lytix-raspberry font-medium transition-colors group/link"
                >
                  See latest positive results
                  <ExternalLink className="ml-2 h-4 w-4 group-hover/link:rotate-12 transition-transform" />
                </a>
              </div>
              
              <Link href="/partnerships">
                <Button variant="link" className="px-0 text-lytix-teal-dark hover:text-lytix-teal text-lg group/btn">
                  Learn About Partnerships
                  <ChevronRight className="ml-1 h-5 w-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Investor Relations / Press Releases */}
      <section className="py-32 bg-lytix-light relative overflow-hidden">
        <div className="absolute inset-0 molecular-pattern opacity-30" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-up stagger-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-lytix-teal/10 text-lytix-teal-dark text-sm font-medium hover:bg-lytix-teal/20 transition-colors">
              <FileText className="h-4 w-4" />
              <span>Investor Relations</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-lytix-navy">
              Latest Press Releases
            </h2>
          </div>
          
          {/* Press Releases Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[1, 2, 3].map((i) => (
              <Card 
                key={i} 
                className={`card-hover border-lytix-ice bg-white group animate-scale-up stagger-${i + 1}`}
              >
                <CardHeader>
                  <CardDescription className="text-sm text-lytix-navy/50">
                    January {15 - i}, 2026
                  </CardDescription>
                  <CardTitle className="text-lg leading-tight text-lytix-navy group-hover:text-lytix-teal-dark transition-colors duration-300">
                    Lytix Biopharma Announces {i === 1 ? "Positive Phase 2 Results" : i === 2 ? "Partnership Expansion" : "Clinical Trial Milestone"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lytix-navy/60 text-sm line-clamp-3 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <Link href="/news" className="inline-flex items-center text-lytix-teal-dark hover:text-lytix-teal font-medium text-sm group/link">
                    Read More
                    <ChevronRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center animate-fade-up stagger-5">
            <Link href="/investor-relations">
              <Button variant="outline" size="lg" className="border-2 border-lytix-teal text-lytix-teal-dark hover:bg-lytix-teal hover:text-white hover:scale-[1.02] transition-all">
                View All Press Releases
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
