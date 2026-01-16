import Link from "next/link";
import Image from "next/image";
import { ArrowRight, AlertCircle, CheckCircle2, Zap, Shield, Target, FileText, Image as ImageIcon, Microscope } from "lucide-react";

const posterImages = [
  "/images/cancer cell 5.webp",
  "/images/cancer cell 6.webp",
  "/images/cancer cell 7.webp",
];

const checkpointLimitations = [
  {
    icon: AlertCircle,
    title: "Acquired Resistance",
    description: "Immunotherapy resistance from multiple lines of treatment limits patient response",
  },
  {
    icon: AlertCircle,
    title: "Tumor Heterogeneity",
    description: "Tumor heterogeneity and low mutational burden reduce checkpoint inhibitor efficacy",
  },
  {
    icon: AlertCircle,
    title: "Limited T-cell Infiltration",
    description: "Low PD-L1 expression and limited T-cell infiltration of the tumor microenvironment",
  },
];

const oncolyticAdvantages = [
  {
    icon: CheckCircle2,
    title: "Active Against Resistant Cells",
    description: "Active against immunotherapy resistant cancer cells, overcoming prior treatment failures",
  },
  {
    icon: CheckCircle2,
    title: "Tumor Heterogeneity Independent",
    description: "Tumor response is independent of tumor heterogeneity and mutational burden",
  },
  {
    icon: CheckCircle2,
    title: "PD-L1 Independent",
    description: "Broad T-cell response and infiltration into the tumor microenvironment is PD-L1 independent",
  },
];

export default function SciencePage() {
  return (
    <main className="min-h-screen bg-lytix-light text-lytix-navy">
      {/* Hero Section - Full Width Background */}
      <header className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/orb 3.webp"
            alt="Lytix scientific visualization"
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
              <span>Research</span>
              <span className="text-lytix-ice">/</span>
              <span>Our Science</span>
            </nav>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              <span className="block text-lytix-navy">Our</span>
              <span className="block text-stylized text-lytix-teal-dark">Science</span>
            </h1>
            <p className="max-w-xl text-xl text-lytix-navy/70 font-light leading-relaxed">
              Lytix Biopharma has developed a groundbreaking oncolytic molecule platform that overcomes 
              the limitations of current immunotherapies and delivers durable anti-tumor responses.
            </p>
          </div>
        </div>
      </header>

      {/* Section 1: Checkpoint Inhibitor Limitations */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 molecular-pattern opacity-30" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-lytix-coral mb-4 block">The Challenge</span>
            <h2 className="text-4xl font-bold tracking-tight mb-6 text-lytix-navy">
              Most Patients Won&apos;t Respond to Immune Checkpoint Inhibitors
            </h2>
            <p className="text-lg text-lytix-navy/60 font-light">
              Immune checkpoint inhibitors have revolutionized cancer treatment, but many patients fail to respond. 
              This lack of response is driven by three key factors:
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {checkpointLimitations.map((item, index) => (
              <div key={index} className="group glass-card p-1 rounded-[2rem] glow-border">
                <div className="bg-white rounded-[1.7rem] p-8 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-lytix-coral/10 flex items-center justify-center mb-6 group-hover:bg-lytix-coral group-hover:text-white transition-all duration-300">
                    <item.icon className="h-7 w-7 text-lytix-coral group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-lytix-navy mb-3">{item.title}</h3>
                  <p className="text-lytix-navy/60 font-light leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Our Solution */}
      <section className="py-24 bg-lytix-light relative">
        <div className="absolute inset-0 tech-grid opacity-20" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-lytix-teal mb-4 block">Our Solution</span>
            <h2 className="text-4xl font-bold tracking-tight mb-6 text-lytix-navy">
              Our Oncolytic Molecule Therapies Address These Limitations
            </h2>
            <p className="text-lg text-lytix-navy/60 font-light">
              Our therapies enhance the clinical impact of immune checkpoint inhibitors and work where others fail:
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {oncolyticAdvantages.map((item, index) => (
              <div key={index} className="group glass-card p-1 rounded-[2rem] glow-border">
                <div className="bg-white rounded-[1.7rem] p-8 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-lytix-teal/10 flex items-center justify-center mb-6 group-hover:bg-lytix-teal group-hover:text-white transition-all duration-300">
                    <item.icon className="h-7 w-7 text-lytix-teal group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-lytix-navy mb-3">{item.title}</h3>
                  <p className="text-lytix-navy/60 font-light leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Two-Step Mode of Action */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lytix-gold/10 text-lytix-navy text-[10px] font-bold uppercase tracking-widest border border-lytix-gold/30 mb-6">
              <div className="w-2 h-2 rounded-full bg-lytix-gold" />
              <span>Mechanism of Action</span>
            </span>
            <h2 className="text-4xl font-bold tracking-tight mb-6 text-lytix-navy">
              Our Unique Two-Step Mode of Action
            </h2>
            <p className="text-lg text-lytix-navy/60 font-light">
              Our oncolytic molecules work through a powerful dual mechanism that destroys tumors and activates lasting immunity.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Mode of Action Diagram */}
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
              <Image
                src="/images/cancer cell 1.webp"
                alt="Two-step mode of action - Cancer cell membrane destruction and immune activation"
                width={800}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="space-y-10">
              {/* Step 1 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-lytix-teal flex items-center justify-center text-white font-bold text-2xl shadow-xl shadow-lytix-teal/30">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-lytix-navy">
                    <Zap className="h-5 w-5 text-lytix-gold" />
                    Tumor Destruction
                  </h3>
                  <p className="text-lytix-navy/60 font-light leading-relaxed">
                    Our oncolytic molecules destroy the membranes of cancer cells, causing rapid tumor necrosis 
                    and releasing tumor antigens and immunostimulatory molecules.
                  </p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-lytix-coral flex items-center justify-center text-white font-bold text-2xl shadow-xl shadow-lytix-coral/30">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-lytix-navy">
                    <Shield className="h-5 w-5 text-lytix-coral" />
                    Immune Activation
                  </h3>
                  <p className="text-lytix-navy/60 font-light leading-relaxed">
                    The released antigens and danger signals initiate a broad immune cell response, 
                    resulting in robust T-cell infiltration and durable anti-tumor immunity.
                  </p>
                </div>
              </div>
              
              {/* Result */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-lytix-gold flex items-center justify-center shadow-xl shadow-lytix-gold/30">
                  <Target className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-lytix-navy">Abscopal Effect</h3>
                  <p className="text-lytix-navy/60 font-light leading-relaxed">
                    The systemic immune activation leads to abscopal effects in distant metastases, 
                    demonstrating clear systemic anti-cancer immunity beyond the injection site.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Publications */}
      <section id="publications" className="py-24 bg-lytix-light relative">
        <div className="absolute inset-0 molecular-pattern opacity-50" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-lytix-teal mb-4 block">Research</span>
              <h2 className="text-4xl font-bold tracking-tight text-lytix-navy">Publications</h2>
              <p className="text-lg text-lytix-navy/60 font-light mt-2">
                Peer-reviewed publications demonstrating the science behind our platform.
              </p>
            </div>
            <FileText className="h-12 w-12 text-lytix-teal/30" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group glass-card p-1 rounded-[2rem] glow-border">
                <div className="bg-white rounded-[1.7rem] p-6 h-full">
                  <p className="text-sm text-lytix-teal-dark font-medium mb-2">Journal Name • 2024</p>
                  <h4 className="font-bold text-lytix-navy mb-3 leading-tight group-hover:text-lytix-teal transition-colors">
                    Publication Title {i}: Demonstrating the Efficacy of Oncolytic Peptides in Cancer Immunotherapy
                  </h4>
                  <p className="text-sm text-lytix-navy/50 font-light mb-4">
                    Author A, Author B, Author C, et al.
                  </p>
                  <span className="inline-flex items-center gap-2 text-lytix-teal-dark text-sm font-bold group-hover:gap-3 transition-all">
                    Read Publication
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-center text-lytix-navy/50 font-light">
            Full publication list available at{" "}
            <a href="https://www.lytixbiopharma.com/publications" className="text-lytix-teal-dark hover:text-lytix-teal transition-colors" target="_blank" rel="noopener noreferrer">
              lytixbiopharma.com/publications
            </a>
          </p>
        </div>
      </section>

      {/* Section 5: Posters */}
      <section id="posters" className="py-24 bg-white relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-lytix-coral mb-4 block">Conference Data</span>
              <h2 className="text-4xl font-bold tracking-tight text-lytix-navy">Conference Posters</h2>
              <p className="text-lg text-lytix-navy/60 font-light mt-2">
                Scientific presentations from major oncology and immunology conferences.
              </p>
            </div>
            <ImageIcon className="h-12 w-12 text-lytix-coral/30" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group glass-card p-1 rounded-[2rem] glow-border overflow-hidden">
                <div className="bg-white rounded-[1.7rem] overflow-hidden">
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={posterImages[i - 1]}
                      alt={`Conference poster ${i}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      quality={90}
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-lytix-coral font-bold mb-1">ASCO 2024</p>
                    <h4 className="font-bold text-lytix-navy leading-tight">
                      Poster Title {i}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-center text-lytix-navy/50 font-light">
            Full poster collection available at{" "}
            <a href="https://www.lytixbiopharma.com/posters" className="text-lytix-teal-dark hover:text-lytix-teal transition-colors" target="_blank" rel="noopener noreferrer">
              lytixbiopharma.com/posters
            </a>
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-navy-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-10" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-lytix-teal/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-lytix-coral/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <span className="inline-block px-4 py-1.5 bg-lytix-cyan/20 text-lytix-cyan rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 ring-1 ring-lytix-cyan/30">
            Explore Further
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 max-w-3xl mx-auto">
            Explore Our Pipeline
          </h2>
          <p className="text-xl text-lytix-ice/70 font-light max-w-2xl mx-auto mb-10">
            See how our science translates into clinical-stage assets approaching commercialization.
          </p>
          <Link 
            href="/pipeline"
            className="inline-flex items-center gap-3 px-10 py-5 bg-lytix-coral hover:bg-lytix-raspberry text-white rounded-2xl font-bold text-sm uppercase tracking-widest shadow-xl shadow-lytix-coral/30 hover:scale-105 transition-all"
          >
            View Pipeline
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
