import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, TrendingUp, FileText, Calendar, Building2 } from "lucide-react";

const pressReleases = [
  {
    date: "January 14, 2026",
    title: "Lytix Biopharma Announces Positive Interim Data from NeoLIPA Phase 2 Study",
    summary: "Strong tumor response rates observed in resectable melanoma patients receiving combination therapy.",
  },
  {
    date: "January 10, 2026",
    title: "Lytix Biopharma Reports Q4 2025 Financial Results",
    summary: "Company maintains strong cash position to support pipeline advancement through key milestones.",
  },
  {
    date: "December 18, 2025",
    title: "Lytix Biopharma Presents at J.P. Morgan Healthcare Conference",
    summary: "Management presented company strategy and pipeline updates to institutional investors.",
  },
  {
    date: "December 5, 2025",
    title: "Partner Verrica Reports Positive Phase 2 Results for VP-315 in BCC",
    summary: "51% complete response rate and 97% clinical response rate demonstrated in basal cell carcinoma study.",
  },
  {
    date: "November 20, 2025",
    title: "Lytix Biopharma Appoints New Chief Medical Officer",
    summary: "Seasoned oncology executive joins leadership team to advance clinical development programs.",
  },
];

export default function InvestorRelationsPage() {
  return (
    <div className="min-h-screen bg-lytix-light text-lytix-navy">
      <main className="relative z-[2]">
        {/* Hero Section - Full Width Background */}
        <header className="relative min-h-[70vh] flex items-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/presentation hero.webp"
              alt="Lytix Biopharma corporate"
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
                <span>Investors</span>
              </nav>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-lytix-navy">
                Investor <span className="text-lytix-teal-dark">Relations</span>
              </h1>
              <p className="max-w-xl text-xl text-lytix-navy/70 font-light leading-relaxed mb-10">
                Stay informed about Lytix Biopharma&apos;s financial performance, corporate governance,
                and strategic initiatives driving value for our shareholders.
              </p>
              <a
                href="https://lytixbiopharma.com/investors/overview.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-lytix-teal hover:bg-lytix-teal-dark text-white rounded-xl font-bold text-sm uppercase tracking-widest shadow-lg shadow-lytix-teal/25 hover:shadow-xl hover:scale-105 transition-all"
              >
                <TrendingUp className="w-5 h-5" />
                Investor Portal
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </header>

        {/* Quick Links */}
        <section className="py-16 bg-white border-y border-lytix-ice">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="group glass-card p-1 rounded-[2rem] glow-border">
                <div className="bg-white rounded-[1.7rem] p-8 h-full text-center">
                  <div className="w-14 h-14 mx-auto bg-lytix-teal/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-lytix-teal group-hover:text-white transition-all duration-300">
                    <FileText className="h-7 w-7 text-lytix-teal group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-lytix-navy mb-1">Financial Reports</h3>
                  <p className="text-sm text-lytix-navy/50 font-light">Annual & quarterly reports</p>
                </div>
              </div>
              <div className="group glass-card p-1 rounded-[2rem] glow-border">
                <div className="bg-white rounded-[1.7rem] p-8 h-full text-center">
                  <div className="w-14 h-14 mx-auto bg-lytix-coral/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-lytix-coral group-hover:text-white transition-all duration-300">
                    <TrendingUp className="h-7 w-7 text-lytix-coral group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-lytix-navy mb-1">Stock Information</h3>
                  <p className="text-sm text-lytix-navy/50 font-light">Share price & trading</p>
                </div>
              </div>
              <div className="group glass-card p-1 rounded-[2rem] glow-border">
                <div className="bg-white rounded-[1.7rem] p-8 h-full text-center">
                  <div className="w-14 h-14 mx-auto bg-lytix-gold/20 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-lytix-gold group-hover:text-lytix-navy transition-all duration-300">
                    <Calendar className="h-7 w-7 text-lytix-gold group-hover:text-lytix-navy transition-colors" />
                  </div>
                  <h3 className="font-bold text-lytix-navy mb-1">Events & Calendar</h3>
                  <p className="text-sm text-lytix-navy/50 font-light">Upcoming presentations</p>
                </div>
              </div>
              <div className="group glass-card p-1 rounded-[2rem] glow-border">
                <div className="bg-white rounded-[1.7rem] p-8 h-full text-center">
                  <div className="w-14 h-14 mx-auto bg-lytix-navy/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-lytix-navy group-hover:text-white transition-all duration-300">
                    <Building2 className="h-7 w-7 text-lytix-navy group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-lytix-navy mb-1">Corporate Governance</h3>
                  <p className="text-sm text-lytix-navy/50 font-light">Board & policies</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Press Releases */}
        <section className="py-24 bg-lytix-light relative">
          <div className="absolute inset-0 molecular-pattern opacity-50" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-lytix-teal mb-4 block">News & Updates</span>
                <h2 className="text-4xl font-bold tracking-tight text-lytix-navy">Latest Press Releases</h2>
                <p className="text-lg text-lytix-navy/60 font-light mt-2">
                  Stay updated with our latest corporate announcements.
                </p>
              </div>
              <Link
                href="/news"
                className="inline-flex items-center gap-2 text-lytix-teal font-bold text-sm hover:gap-3 transition-all"
              >
                View All News
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-4">
              {pressReleases.map((release, index) => (
                <div
                  key={index}
                  className="group glass-card p-1 rounded-[2rem] glow-border"
                >
                  <div className="bg-white rounded-[1.7rem] p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                      <div className="md:w-40 flex-shrink-0">
                        <p className="text-[10px] font-black uppercase tracking-widest text-lytix-navy/40">{release.date}</p>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lytix-navy mb-2 group-hover:text-lytix-teal transition-colors">{release.title}</h3>
                        <p className="text-lytix-navy/60 font-light text-sm">{release.summary}</p>
                      </div>
                      <div className="flex-shrink-0">
                        <span className="inline-flex items-center gap-2 text-lytix-teal font-bold text-sm group-hover:gap-3 transition-all">
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
          <span className="inline-block px-4 py-1.5 bg-lytix-gold/20 text-lytix-gold rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 ring-1 ring-lytix-gold/30">
            Investor Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 max-w-3xl mx-auto">
            Questions for our IR team?
          </h2>
          <p className="text-xl text-lytix-ice/70 font-light max-w-2xl mx-auto mb-10">
            For investor inquiries, please contact our investor relations team directly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:ir@lytixbiopharma.com"
              className="px-10 py-5 bg-lytix-coral hover:bg-lytix-raspberry text-white rounded-2xl font-bold text-sm uppercase tracking-widest shadow-xl shadow-lytix-coral/30 hover:scale-105 transition-all flex items-center gap-3"
            >
              Contact IR Team
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="https://lytixbiopharma.com/investors/overview.html"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-bold text-sm uppercase tracking-widest border border-white/20 hover:border-white/40 transition-all flex items-center gap-3"
            >
              Full Investor Portal
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
