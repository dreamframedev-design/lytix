import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, FileQuestion, Heart, Shield, Users, MessageCircle } from "lucide-react";

export default function PatientResourcesPage() {
  return (
    <main className="min-h-screen bg-lytix-light text-lytix-navy">
      {/* Hero Section - Full Width Background */}
      <header className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/ribbon nice detail 1.webp"
            alt="Lytix patient support"
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
              <span>Resources</span>
              <span className="text-lytix-ice">/</span>
              <span>For Patients</span>
            </nav>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              <span className="block text-lytix-navy">Patient</span>
              <span className="block text-stylized text-lytix-teal-dark">Resources</span>
            </h1>
            <p className="max-w-xl text-xl text-lytix-navy/70 font-light leading-relaxed">
              We are committed to supporting patients throughout their treatment journey. 
              Find resources, information, and support to help you understand our therapies and clinical trials.
            </p>
          </div>
        </div>
      </header>

      {/* Resources Grid */}
      <section className="py-24 bg-white border-y border-lytix-ice">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-lytix-teal mb-4 block">Information & Support</span>
            <h2 className="text-4xl font-bold tracking-tight text-lytix-navy">How We Can Help</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Understanding Therapies */}
            <Link href="/science" className="group glass-card p-1 rounded-[2.5rem] glow-border">
              <div className="bg-white rounded-[2.2rem] p-10 h-full flex flex-col">
                <div className="w-14 h-14 bg-lytix-teal/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-lytix-teal group-hover:text-white transition-all duration-300">
                  <BookOpen className="h-7 w-7 text-lytix-teal group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-lytix-navy mb-3">Understanding Our Therapies</h3>
                <p className="text-lytix-navy/60 font-light leading-relaxed mb-8 flex-grow">
                  Learn about oncolytic molecule therapy and how it works to fight cancer through 
                  tumor destruction and immune activation.
                </p>
                <div className="flex items-center gap-2 text-lytix-teal font-bold text-sm group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>

            {/* Clinical Trials */}
            <Link href="/clinical-trials" className="group glass-card p-1 rounded-[2.5rem] glow-border">
              <div className="bg-white rounded-[2.2rem] p-10 h-full flex flex-col">
                <div className="w-14 h-14 bg-lytix-coral/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-lytix-coral group-hover:text-white transition-all duration-300">
                  <FileQuestion className="h-7 w-7 text-lytix-coral group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-lytix-navy mb-3">Clinical Trial Information</h3>
                <p className="text-lytix-navy/60 font-light leading-relaxed mb-8 flex-grow">
                  Find information about ongoing clinical trials, eligibility criteria, 
                  and how to participate in our research programs.
                </p>
                <div className="flex items-center gap-2 text-lytix-coral font-bold text-sm group-hover:gap-3 transition-all">
                  View Trials
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>

            {/* Contact */}
            <Link href="/contact" className="group glass-card p-1 rounded-[2.5rem] glow-border">
              <div className="bg-white rounded-[2.2rem] p-10 h-full flex flex-col">
                <div className="w-14 h-14 bg-lytix-gold/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-lytix-gold group-hover:text-lytix-navy transition-all duration-300">
                  <MessageCircle className="h-7 w-7 text-lytix-gold group-hover:text-lytix-navy transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-lytix-navy mb-3">Contact Us</h3>
                <p className="text-lytix-navy/60 font-light leading-relaxed mb-8 flex-grow">
                  Have questions? Our team is here to help guide you to the right resources 
                  and provide the support you need.
                </p>
                <div className="flex items-center gap-2 text-lytix-gold font-bold text-sm group-hover:gap-3 transition-all">
                  Get in Touch
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Support Values */}
      <section className="py-24 bg-lytix-light relative">
        <div className="absolute inset-0 molecular-pattern opacity-50" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl shadow-lytix-teal/20">
                <Image
                  src="/images/doctor hero.webp"
                  alt="Patient support"
                  fill
                  className="object-cover"
                  quality={90}
                />
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-lytix-coral mb-4 block">Our Commitment</span>
              <h2 className="text-4xl font-bold tracking-tight text-lytix-navy mb-6">
                Patients at the Heart of Everything
              </h2>
              <p className="text-lg text-lytix-navy/60 font-light leading-relaxed mb-10">
                At Lytix Biopharma, we understand that navigating cancer treatment can be overwhelming. 
                We&apos;re here to provide clarity, support, and hope.
              </p>
              
              <div className="space-y-5">
                <div className="flex items-start gap-5 p-5 rounded-2xl bg-white hover-glow border border-lytix-ice">
                  <div className="w-12 h-12 rounded-xl bg-lytix-teal/10 flex items-center justify-center text-lytix-teal flex-shrink-0">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lytix-navy mb-1">Patient Safety First</h4>
                    <p className="text-sm text-lytix-navy/50 font-light">
                      Rigorous safety monitoring in all our clinical programs.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5 p-5 rounded-2xl bg-white hover-glow border border-lytix-ice">
                  <div className="w-12 h-12 rounded-xl bg-lytix-coral/10 flex items-center justify-center text-lytix-coral flex-shrink-0">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lytix-navy mb-1">Dedicated Support</h4>
                    <p className="text-sm text-lytix-navy/50 font-light">
                      Our team is available to answer questions and provide guidance.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5 p-5 rounded-2xl bg-white hover-glow border border-lytix-ice">
                  <div className="w-12 h-12 rounded-xl bg-lytix-gold/20 flex items-center justify-center text-lytix-gold flex-shrink-0">
                    <Heart className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lytix-navy mb-1">Compassionate Care</h4>
                    <p className="text-sm text-lytix-navy/50 font-light">
                      Treating each patient with dignity and understanding.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="py-16 bg-white border-y border-lytix-ice">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lytix-gold/10 text-lytix-gold text-sm font-bold mb-6">
              <span className="w-2 h-2 bg-lytix-gold rounded-full animate-pulse" />
              Coming Soon
            </div>
            <h2 className="text-2xl font-bold text-lytix-navy mb-4">More Resources in Development</h2>
            <p className="text-lytix-navy/60 font-light leading-relaxed">
              We are working to expand our patient resources section with additional educational materials, 
              FAQs, and support information. Please check back soon or contact us directly for assistance.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-navy-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-10" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-lytix-teal/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 bg-lytix-teal/20 text-lytix-cyan rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 ring-1 ring-lytix-teal/30">
            We&apos;re Here to Help
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 max-w-3xl mx-auto">
            Have questions? Reach out today.
          </h2>
          <p className="text-xl text-lytix-ice/70 font-light max-w-2xl mx-auto mb-10">
            Our team is ready to assist you with information about our therapies, clinical trials, or any other questions.
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
              href="/clinical-trials"
              className="px-10 py-5 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-bold text-sm uppercase tracking-widest border border-white/20 hover:border-white/40 transition-all"
            >
              View Clinical Trials
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
