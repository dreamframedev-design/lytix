import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, Newspaper } from "lucide-react";

const newsItems = [
  {
    date: "January 14, 2026",
    category: "Clinical",
    title: "Lytix Biopharma Announces Positive Interim Data from NeoLIPA Phase 2 Study",
    summary: "Strong tumor response rates observed in resectable melanoma patients receiving ruxotemitide in combination with pembrolizumab in the neoadjuvant setting.",
    featured: true,
    image: "/images/cancer cell 3.webp",
  },
  {
    date: "January 10, 2026",
    category: "Financial",
    title: "Lytix Biopharma Reports Q4 2025 Financial Results",
    summary: "Company maintains strong cash position to support pipeline advancement through key clinical and regulatory milestones.",
    featured: false,
  },
  {
    date: "December 18, 2025",
    category: "Corporate",
    title: "Lytix Biopharma Presents at J.P. Morgan Healthcare Conference",
    summary: "Management presented company strategy and pipeline updates to institutional investors at the annual healthcare conference.",
    featured: false,
  },
  {
    date: "December 5, 2025",
    category: "Partnership",
    title: "Partner Verrica Reports Positive Phase 2 Results for VP-315 in BCC",
    summary: "Verrica Pharmaceuticals announces 51% complete response rate and 97% clinical response rate in basal cell carcinoma study.",
    featured: true,
    image: "/images/cancer cell 4.webp",
  },
  {
    date: "November 20, 2025",
    category: "Corporate",
    title: "Lytix Biopharma Appoints New Chief Medical Officer",
    summary: "Seasoned oncology executive with extensive experience in immunotherapy development joins leadership team.",
    featured: false,
  },
  {
    date: "November 8, 2025",
    category: "Clinical",
    title: "NeoLIPA Study Reaches 50% Enrollment Target",
    summary: "Investigator-initiated Phase 2 study continues steady patient recruitment at Oslo University Hospital.",
    featured: false,
  },
  {
    date: "October 25, 2025",
    category: "Scientific",
    title: "Lytix Biopharma Presents New Preclinical Data at SITC Annual Meeting",
    summary: "Data demonstrates enhanced immune activation with LTX-401 in deep-seated tumor models.",
    featured: false,
  },
  {
    date: "October 12, 2025",
    category: "Corporate",
    title: "Lytix Biopharma Announces Board Expansion",
    summary: "Two new independent directors with pharma commercialization expertise join Board of Directors.",
    featured: false,
  },
];

const categories = [
  { name: "All", color: "bg-lytix-navy text-white" },
  { name: "Clinical", color: "bg-lytix-teal/10 text-lytix-teal border border-lytix-teal/20" },
  { name: "Corporate", color: "bg-lytix-navy/10 text-lytix-navy border border-lytix-navy/20" },
  { name: "Financial", color: "bg-lytix-gold/10 text-lytix-gold border border-lytix-gold/30" },
  { name: "Partnership", color: "bg-lytix-coral/10 text-lytix-coral border border-lytix-coral/20" },
  { name: "Scientific", color: "bg-purple-50 text-purple-600 border border-purple-100" },
];

const getCategoryColor = (category: string) => {
  const cat = categories.find((c) => c.name === category);
  return cat?.color || "bg-lytix-navy/10 text-lytix-navy border border-lytix-navy/20";
};

export default function NewsPage() {
  const featuredNews = newsItems.filter((item) => item.featured);
  const regularNews = newsItems.filter((item) => !item.featured);

  return (
    <div className="min-h-screen bg-lytix-light text-lytix-navy">
      <main className="relative z-[2]">
        {/* Hero Section - Full Width Background */}
        <header className="relative min-h-[60vh] flex items-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/lytix ribbon 2.webp"
              alt="Lytix news"
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
                <span>News</span>
              </nav>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-lytix-navy">
                News <span className="text-lytix-teal-dark">& Events</span>
              </h1>
              <p className="max-w-xl text-xl text-lytix-navy/70 font-light leading-relaxed">
                Stay updated with the latest news, press releases, and events from Lytix Biopharma.
              </p>
            </div>
          </div>
        </header>

        {/* Category Filter */}
        <section className="py-6 bg-white border-y border-lytix-ice sticky top-[72px] z-40">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all hover:scale-105 ${category.color}`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured News */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-lytix-teal mb-4 block">Highlights</span>
            <h2 className="text-3xl font-bold tracking-tight text-lytix-navy mb-8">Featured News</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredNews.map((item, index) => (
                <div key={index} className="group glass-card p-1 rounded-[2rem] glow-border overflow-hidden">
                  <div className="bg-white rounded-[1.7rem] overflow-hidden">
                    <div className="relative aspect-video">
                      <Image
                        src={item.image || "/images/cancer cell 3.webp"}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        quality={90}
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${getCategoryColor(item.category)}`}>
                          {item.category}
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-widest text-lytix-navy/40">{item.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-lytix-navy leading-tight mb-3 group-hover:text-lytix-teal transition-colors">{item.title}</h3>
                      <p className="text-lytix-navy/60 font-light leading-relaxed mb-6">{item.summary}</p>
                      <span className="inline-flex items-center gap-2 text-lytix-teal font-bold text-sm group-hover:gap-3 transition-all">
                        Read Full Article
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All News */}
        <section className="py-16 bg-lytix-light relative">
          <div className="absolute inset-0 molecular-pattern opacity-50" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-lytix-navy/40 mb-4 block">Archive</span>
            <h2 className="text-3xl font-bold tracking-tight text-lytix-navy mb-8">All News</h2>
            <div className="space-y-4">
              {regularNews.map((item, index) => (
                <div key={index} className="group glass-card p-1 rounded-[2rem] glow-border">
                  <div className="bg-white rounded-[1.7rem] p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                      <div className="md:w-32 flex-shrink-0">
                        <p className="text-[10px] font-black uppercase tracking-widest text-lytix-navy/40">{item.date}</p>
                      </div>
                      <div className="md:w-28 flex-shrink-0">
                        <span className={`inline-block px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${getCategoryColor(item.category)}`}>
                          {item.category}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lytix-navy mb-1 group-hover:text-lytix-teal transition-colors">{item.title}</h3>
                        <p className="text-sm text-lytix-navy/50 font-light line-clamp-1">{item.summary}</p>
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

            <div className="text-center mt-12">
              <button className="px-8 py-4 bg-white text-lytix-navy rounded-2xl font-bold text-sm uppercase tracking-widest border-2 border-lytix-ice hover:border-lytix-teal hover:text-lytix-teal transition-all flex items-center gap-2 mx-auto">
                Load More News
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* CTA Section - Outside main for ribbon visibility */}
      <section className="py-16 bg-white border-y border-lytix-ice">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <Newspaper className="w-12 h-12 text-lytix-teal/30 mx-auto mb-4" />
          <p className="text-lytix-navy/60 font-light mb-6">
            For a complete archive of press releases, visit our investor relations portal.
          </p>
          <a
            href="https://lytixbiopharma.com/news/press-releases.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-lytix-teal/10 text-lytix-teal rounded-xl font-bold text-sm hover:bg-lytix-teal hover:text-white transition-all"
          >
            Visit Press Release Archive
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
