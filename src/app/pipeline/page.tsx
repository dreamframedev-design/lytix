"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Pipeline data with popout content
const PIPELINE_DATA = [
  {
    id: "ruxo-pivotal",
    asset: "Ruxotemitide (LTX-315)",
    assetType: "Oncolytic Peptide",
    study: "Pivotal Study",
    indication: "Neoadjuvant resectable melanoma patients",
    combination: "Combination with pembrolizumab",
    progress: 2.75, // 0-4 scale (preclinical=0-1, phase1=1-2, phase2=2-3, phase3=3-4)
    status: "Actively Seeking Partnerships Asia/APAC",
    statusType: "seeking",
    partner: null,
    popout: {
      title: "Ruxotemitide (LTX-315)",
      subtitle: "Pivotal Study – Neoadjuvant Melanoma",
      copy: `<p>Ruxotemitide has consistently delivered strong tumor activity, excellent tolerability and clear systemic immune engagement in Phase 2 trials.</p>
<p>Ruxotemitide is an oncolytic peptide that has consistently delivered strong tumor activity, excellent tolerability and clear systemic immune engagement in Phase 2 trials. As a monotherapy, ruxotemitide enables rapid tumor destruction, robust immune cell infiltration and complete regression in injected tumors. Ruxotemitide also delivers abscopal effects in distant metastases, demonstrating clear systemic immune activation.</p>
<p>In combination with immune checkpoint inhibitors, ruxotemitide affords disease control in patients who had previously failed immune checkpoint inhibitor therapy, indicating the impact ruxotemitide can have on the current standard of care for many cancers in the neoadjuvant setting.</p>`
    }
  },
  {
    id: "ruxo-mono",
    asset: "Ruxotemitide (LTX-315)",
    assetType: "Oncolytic Peptide",
    study: "Monotherapy",
    indication: "Basal cell carcinoma",
    combination: null,
    progress: 2.75,
    status: null,
    statusType: null,
    partner: { name: "VERRICA", logo: null },
    popout: {
      title: "Ruxotemitide (LTX-315)",
      subtitle: "Monotherapy – Basal Cell Carcinoma",
      copy: `<p>Ruxotemitide has consistently delivered strong tumor activity, excellent tolerability and clear systemic immune engagement in Phase 2 trials.</p>
<p>Verrica Pharmaceuticals has generated impressive Phase 2 data in basal cell carcinoma with ruxotemitide as a monotherapy. They have reported a <strong>51% complete response rate</strong>, and clinical responses in <strong>97% of the patients</strong> with significant reduction of tumor size.</p>
<p>Additionally, Verrica has demonstrated that ruxotemitide reprograms the tumor microenvironment, with patient biopsies showing significant increases in CD4+, CD8+ T cells, and B-cells, indicating strong recruitment of effector immune populations into the tumor.</p>`
    }
  },
  {
    id: "ruxo-neolipa",
    asset: "Ruxotemitide (LTX-315)",
    assetType: "Oncolytic Peptide",
    study: "NeoLIPA",
    indication: "Neoadjuvant resectable melanoma patients",
    combination: "Investigator-initiated study",
    progress: 2.5,
    status: "Steadily Recruiting",
    statusType: "recruiting",
    partner: null,
    popout: {
      title: "Ruxotemitide (LTX-315)",
      subtitle: "NeoLIPA Study",
      copy: `<p>Ruxotemitide has consistently delivered strong tumor activity, excellent tolerability and clear systemic immune engagement in Phase 2 trials.</p>
<p>Ruxotemitide is currently being evaluated in an investigator-initiated Phase 2 study 'NeoLIPA' in patients with resectable melanoma prior to surgery. This study is exploring neo-adjuvant ruxotemitide (administered before surgery) in combination with standard of care pembrolizumab (KEYTRUDA®).</p>
<p>The objective of this study is to demonstrate that ruxotemitide improves outcomes in these patients and prevents disease recurrence.</p>`
    }
  },
  {
    id: "ltx401",
    asset: "LTX-401",
    assetType: "Oncolytic Molecule",
    study: "Mono-and combination therapy",
    indication: "Solid tumors (deep seated lesions)",
    combination: null,
    progress: 0.85,
    status: "Actively Seeking Partnerships",
    statusType: "seeking",
    partner: null,
    popout: {
      title: "LTX-401",
      subtitle: "Deep-Seated Solid Tumors",
      copy: `<p>LTX-401 is an oncolytic molecule designed for deep-seated tumors.</p>
<p>LTX-401 expands our oncolytic molecule platform into deep-seated tumors through image-guided intratumoral delivery. This opens access to the liver and other internal tumors where intratumoral treatment has historically not been feasible.</p>
<p>LTX-401 has demonstrated strong proof-of-concept in multiple difficult-to-treat cancer models, including curing animals of liver cancer, and is currently in last-stage pre-clinical development.</p>`
    }
  }
];

export default function PipelinePage() {
  const [selectedItem, setSelectedItem] = useState(PIPELINE_DATA[0]);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const getProgressWidth = (progress: number) => {
    return Math.max(0, Math.min(4, progress)) / 4 * 100;
  };

  return (
    <div className="bg-lytix-light">
      <div className="pt-24 relative z-[2]">
        {/* Hero Section - Full Width Background */}
        <header className="relative min-h-[60vh] flex items-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/ribbon nice detail 1.webp"
              alt="Lytix pipeline"
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
                <span>Pipeline</span>
              </nav>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-lytix-navy">
                Partner-ready <span className="text-lytix-teal-dark">Pipeline</span>
              </h1>
              <p className="max-w-xl text-xl text-lytix-navy/70 font-light leading-relaxed">
                Lytix holds an extensive patent estate protecting its proprietary anti-tumor molecules
                and their application in immunotherapy across major pharmaceutical markets.
              </p>
            </div>
          </div>
        </header>

        {/* Pipeline Interactive Section */}
        <section className="py-12 bg-lytix-light">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-[320px_1fr] gap-6 items-start">

              {/* Sidebar Detail Pane - Desktop Only */}
              <aside className="hidden lg:block sticky top-24 bg-white/95 backdrop-blur-xl border border-lytix-ice rounded-2xl p-6 shadow-xl min-h-[480px]">
                {/* Asset Badge */}
                <div className="mb-4">
                  <span className={cn(
                    "badge-shine inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide border",
                    selectedItem.asset.includes("LTX-315")
                      ? "bg-lytix-teal/10 border-lytix-teal/30 text-lytix-teal-dark"
                      : "bg-lytix-navy-deep/10 border-lytix-navy-deep/30 text-lytix-navy-deep"
                  )}>
                    <span className="relative z-10">{selectedItem.assetType}</span>
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-lytix-navy mb-2 leading-tight">
                  {selectedItem.popout.title}
                </h2>
                <p className="text-sm text-lytix-teal-dark font-medium mb-6">
                  {selectedItem.popout.subtitle}
                </p>

                {/* Copy */}
                <div
                  className="text-lytix-navy/70 text-sm leading-relaxed space-y-4 [&_p]:mb-3 [&_strong]:text-lytix-teal-dark [&_strong]:font-semibold"
                  dangerouslySetInnerHTML={{ __html: selectedItem.popout.copy }}
                />

                {/* CTA */}
                {selectedItem.id === "ruxo-neolipa" && (
                  <a
                    href="https://clinicaltrials.gov/study/NCT06651151?term=NEOLIPA&rank=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-lytix-teal-dark hover:text-lytix-teal transition-colors"
                  >
                    View on ClinicalTrials.gov
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
                {selectedItem.partner?.name === "VERRICA" && (
                  <a
                    href="https://clinicaltrials.gov/study/NCT05188729?term=VP-315&rank=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-lytix-teal-dark hover:text-lytix-teal transition-colors"
                  >
                    View Verrica Study
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </aside>

              {/* Pipeline Table */}
              <div className="bg-white rounded-2xl border border-lytix-ice shadow-lg overflow-hidden">
                {/* Table Header */}
                <div className="hidden md:grid grid-cols-[1.2fr_1.6fr_3fr_1.2fr] gap-4 p-5 bg-lytix-navy text-white text-xs font-bold uppercase tracking-wider">
                  <div>Asset</div>
                  <div>Study / Indication</div>
                  <div className="grid grid-cols-4 text-center">
                    <span>Pre-clinical</span>
                    <span>Phase I</span>
                    <span>Phase II</span>
                    <span>Phase III</span>
                  </div>
                  <div>Partner / Status</div>
                </div>

                {/* Ruxotemitide Section Header */}
                <div className="px-5 py-4 bg-gradient-to-r from-lytix-teal/10 to-lytix-cyan/5 border-b border-lytix-ice">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-lytix-teal relative">
                      <span className="absolute inset-0 rounded-full bg-lytix-teal animate-ping opacity-40" />
                    </div>
                    <span className="font-bold text-lg text-lytix-teal-dark">Ruxotemitide (LTX-315)</span>
                    <span className="text-sm text-lytix-navy/60">— Oncolytic peptide for superficial tumors</span>
                  </div>
                </div>

                {/* Ruxotemitide Rows */}
                {PIPELINE_DATA.filter(d => d.asset.includes("LTX-315")).map((item, index) => (
                  <PipelineRow
                    key={item.id}
                    item={item}
                    isSelected={selectedItem.id === item.id}
                    isHovered={hoveredId === item.id}
                    animationIndex={index}
                    onHover={() => {
                      setHoveredId(item.id);
                      setSelectedItem(item);
                    }}
                    onLeave={() => setHoveredId(null)}
                    onClick={() => setSelectedItem(item)}
                    getProgressWidth={getProgressWidth}
                  />
                ))}

                {/* LTX-401 Section Header */}
                <div className="px-5 py-4 bg-gradient-to-r from-lytix-navy-deep/10 to-lytix-teal-dark/5 border-b border-t border-lytix-ice">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-lytix-navy-deep relative">
                      <span className="absolute inset-0 rounded-full bg-lytix-navy-deep animate-ping opacity-40" />
                    </div>
                    <span className="font-bold text-lg text-lytix-navy-deep">LTX-401</span>
                    <span className="text-sm text-lytix-navy/60">— Oncolytic molecule for deep-seated tumors</span>
                  </div>
                </div>

                {/* LTX-401 Rows */}
                {PIPELINE_DATA.filter(d => d.asset === "LTX-401").map((item, index) => (
                  <PipelineRow
                    key={item.id}
                    item={item}
                    isSelected={selectedItem.id === item.id}
                    isHovered={hoveredId === item.id}
                    animationIndex={index + 3}
                    onHover={() => {
                      setHoveredId(item.id);
                      setSelectedItem(item);
                    }}
                    onLeave={() => setHoveredId(null)}
                    onClick={() => setSelectedItem(item)}
                    getProgressWidth={getProgressWidth}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section - Outside main for ribbon visibility */}
      <section className="py-20 bg-gradient-to-r from-lytix-teal to-lytix-teal-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-10" />
        <div className="absolute right-0 top-0 w-96 h-96 bg-lytix-cyan/20 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Interested in Partnership Opportunities?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            We are actively seeking partners for co-development and outlicensing across key markets.
          </p>
          <Link href="/partnerships">
            <Button size="lg" className="bg-white text-lytix-teal-dark hover:bg-lytix-ice shadow-lg">
              Explore Partnerships
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

// Pipeline Row Component
function PipelineRow({
  item,
  isSelected,
  isHovered,
  onHover,
  onLeave,
  onClick,
  getProgressWidth,
  animationIndex = 0,
}: {
  item: typeof PIPELINE_DATA[0];
  isSelected: boolean;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  onClick: () => void;
  getProgressWidth: (p: number) => number;
  animationIndex?: number;
}) {
  return (
    <div className="border-b border-lytix-ice">
      {/* Main Row Content */}
      <div
        className={cn(
          "grid md:grid-cols-[1.2fr_1.6fr_3fr_1.2fr] gap-4 p-5 cursor-pointer transition-all duration-200 relative",
          isSelected && "bg-lytix-teal/5",
          isHovered && "bg-lytix-light",
          isSelected && "before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-lytix-teal"
        )}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        onClick={onClick}
      >
        {/* Asset - Mobile shows full, desktop shows study */}
        <div className="md:hidden mb-2 flex items-center justify-between">
          <span className={cn(
            "badge-shine inline-flex px-3 py-1 rounded-full text-xs font-bold uppercase border",
            item.asset.includes("LTX-315")
              ? "bg-lytix-teal/10 border-lytix-teal/20 text-lytix-teal-dark"
              : "bg-lytix-navy-deep/10 border-lytix-navy-deep/20 text-lytix-navy-deep"
          )}>
            {item.assetType}
          </span>
          {/* Expand indicator for mobile */}
          <ChevronDown className={cn(
            "w-5 h-5 text-lytix-navy/40 transition-transform duration-300 lg:hidden",
            isSelected && "rotate-180 text-lytix-teal"
          )} />
        </div>

        {/* Study Name */}
        <div>
          <p className="font-semibold text-lytix-navy">{item.study}</p>
          {item.combination && (
            <p className="text-xs text-lytix-navy/50 mt-0.5">{item.combination}</p>
          )}
        </div>

        {/* Indication */}
        <div>
          <p className="text-sm text-lytix-navy/70">{item.indication}</p>
        </div>

        {/* Progress Bar */}
        <div className="w-full">
          {/* Mobile phase labels */}
          <div className="md:hidden flex justify-between text-[10px] text-lytix-navy/50 font-semibold uppercase mb-1">
            <span>Pre</span>
            <span>Ph1</span>
            <span>Ph2</span>
            <span>Ph3</span>
          </div>
          <div className="relative h-4 bg-lytix-ice rounded-full overflow-hidden">
            {/* Grid lines */}
            <div className="absolute inset-0 grid grid-cols-4 z-10 pointer-events-none">
              <span className="border-r-2 border-white" />
              <span className="border-r-2 border-white" />
              <span className="border-r-2 border-white" />
              <span />
            </div>
            {/* Progress fill with shine */}
            <div
              className="pipeline-bar-fill absolute left-0 top-0 bottom-0 rounded-full bg-gradient-to-r from-lytix-teal via-lytix-teal to-lytix-cyan z-0 overflow-hidden"
              style={{
                width: `${getProgressWidth(item.progress)}%`,
                animationDelay: `${animationIndex * 0.2}s`
              }}
            >
              <span className="pipeline-shine" style={{ animationDelay: `${1.5 + animationIndex * 0.2}s` }} />
            </div>
          </div>
        </div>

        {/* Partner / Status */}
        <div className="flex items-center gap-2 flex-wrap">
          {item.partner && (
            <span className="badge-shine px-3 py-1.5 rounded-full bg-lytix-teal/10 text-lytix-teal-dark text-xs font-bold border border-lytix-teal/20">
              {item.partner.name}
            </span>
          )}
          {item.status && (
            <span className={cn(
              "badge-shine px-3 py-1.5 rounded-full text-xs font-semibold border",
              item.statusType === "seeking" && "bg-lytix-coral/10 text-lytix-coral border-lytix-coral/20",
              item.statusType === "recruiting" && "bg-lytix-cyan/10 text-lytix-navy-deep border-lytix-cyan/30",
              item.statusType === "preparing" && "bg-lytix-gold/10 text-lytix-navy border-lytix-gold/30"
            )}>
              {item.statusType === "recruiting" && (
                <span className="inline-block w-2 h-2 rounded-full bg-lytix-cyan mr-1.5 animate-pulse" />
              )}
              {item.status}
            </span>
          )}
        </div>
      </div>

      {/* Mobile/Tablet Accordion Expansion */}
      <div className={cn(
        "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
        isSelected ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="px-5 pb-5">
          <div className="bg-gradient-to-br from-lytix-ice to-white rounded-xl border border-lytix-teal/20 p-5">
            <h4 className="text-lg font-bold text-lytix-navy mb-1">{item.popout.title}</h4>
            <p className="text-sm text-lytix-teal-dark font-medium mb-3">{item.popout.subtitle}</p>
            <div
              className="text-lytix-navy/70 text-sm leading-relaxed [&_p]:mb-2 [&_strong]:text-lytix-teal-dark"
              dangerouslySetInnerHTML={{ __html: item.popout.copy }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
