"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight, ExternalLink, Newspaper, ChevronDown } from "lucide-react";

const newsItems = [
  {
    date: "Jan 14, 2026",
    category: "Corporate",
    title: "Lytix Biopharma AS - New share capital registered",
    link: "https://newsweb.oslobors.no/message/663627",
  },
  {
    date: "Jan 12, 2026",
    category: "Corporate",
    title: "Lytix Biopharma AS - Notice of extraordinary general meeting 26 January 2026",
    link: "https://newsweb.oslobors.no/message/663462",
  },
  {
    date: "Jan 07, 2026",
    category: "Financial",
    title: "Finansiell kalender",
    link: "https://newsweb.oslobors.no/message/663247",
  },
  {
    date: "Jan 07, 2026",
    category: "Financial",
    title: "Financial calendar",
    link: "https://newsweb.oslobors.no/message/663248",
  },
  {
    date: "Dec 11, 2025",
    category: "Corporate",
    title: "LYTIX BIOPHARMA AS - MANDATORY NOTIFICATION OF TRADE BY PRIMARY INSIDER",
    link: "https://newsweb.oslobors.no/message/661716",
  },
  {
    date: "Nov 17, 2025",
    category: "Clinical",
    title: "Lytix Biopharma Q3 2025: Promising Results Accelerating Development Strategy",
    link: "https://newsweb.oslobors.no/message/659896",
    featured: true,
  },
  {
    date: "Nov 13, 2025",
    category: "Corporate",
    title: "Lytix Biopharma: Invitation to Q3 2025 Results Presentation",
    link: "https://newsweb.oslobors.no/message/659688",
  },
  {
    date: "Nov 10, 2025",
    category: "Clinical",
    title: "Lytix Biopharma kunngjør lovende interimdata fra NeoLIPA-studien ved Radiumhospitalet",
    link: "https://newsweb.oslobors.no/message/659270",
  },
  {
    date: "Nov 10, 2025",
    category: "Clinical",
    title: "Lytix Biopharma Announces Promising Interim Data on Neoadjuvant Treatment of Melanoma with Ruxotemitide from the NeoLIPA Study at the Norwegian Radium Hospital",
    link: "https://newsweb.oslobors.no/message/659271",
    featured: true,
  },
  {
    date: "Nov 09, 2025",
    category: "Scientific",
    title: "New Phase II Study Data from Lytix Biopharma's Partner Presented at SITC 2025 Further Validate Unique Immune-Activating Mechanism of Ruxotemitide",
    link: "https://newsweb.oslobors.no/message/659147",
    featured: true,
  },
  {
    date: "Oct 10, 2025",
    category: "Financial",
    title: "Finansiell kalender",
    link: "https://newsweb.oslobors.no/message/656980",
  },
  {
    date: "Oct 10, 2025",
    category: "Financial",
    title: "Financial calendar",
    link: "https://newsweb.oslobors.no/message/656981",
  },
  {
    date: "Oct 07, 2025",
    category: "Partnership",
    title: "Lytix Biopharma's licensing partner, Verrica Pharmaceuticals, to present data from VP-315 Phase II study at leading immuno-oncology conference SITC 2025",
    link: "https://newsweb.oslobors.no/message/656799",
  },
  {
    date: "Sep 01, 2025",
    category: "Corporate",
    title: "Lytix Biopharma AS: Grant of share options to management and key personnel",
    link: "https://newsweb.oslobors.no/message/654449",
  },
  {
    date: "Aug 27, 2025",
    category: "Clinical",
    title: "Lytix Biopharma Q2/H1 2025: Preparing for a milestone-rich second half with advancing clinical programs and strengthened organization",
    link: "https://newsweb.oslobors.no/message/654030",
  },
  {
    date: "Aug 21, 2025",
    category: "Corporate",
    title: "Lytix Biopharma: Invitation to Q2 2025 Results Presentation",
    link: "https://newsweb.oslobors.no/message/653556",
  },
  {
    date: "May 21, 2025",
    category: "Corporate",
    title: "Lytix Biopharma AS: GRANT OF SHARE OPTIONS",
    link: "https://newsweb.oslobors.no/message/647082",
  },
  {
    date: "May 14, 2025",
    category: "Clinical",
    title: "Lytix Biopharma Q1 2025: Strong clinical momentum supports a clear path to Phase III and broader pipeline progress",
    link: "https://newsweb.oslobors.no/message/646408",
  },
  {
    date: "May 08, 2025",
    category: "Corporate",
    title: "Lytix Biopharma: Invitation to Q1 2025 Results Presentation",
    link: "https://newsweb.oslobors.no/message/645860",
  },
  {
    date: "Apr 29, 2025",
    category: "Corporate",
    title: "Lytix Biopharma AS: Minutes from Ordinary General Meeting and Election of New Board of Directors",
    link: "https://newsweb.oslobors.no/message/644732",
  },
  {
    date: "Apr 22, 2025",
    category: "Corporate",
    title: "Lytix Biopharma AS: Recommendation from the Nomination and Compensation Committee to the Annual General Meeting, resignation by board Chair",
    link: "https://newsweb.oslobors.no/message/644086",
  },
  {
    date: "Apr 09, 2025",
    category: "Corporate",
    title: "Lytix Biopharma AS: Notice of Annual General Meeting on 29 April 2025",
    link: "https://newsweb.oslobors.no/message/643371",
  },
  {
    date: "Apr 09, 2025",
    category: "Financial",
    title: "Lytix Biopharma AS: Annual Report for 2024",
    link: "https://newsweb.oslobors.no/message/643356",
  },
  {
    date: "Feb 12, 2025",
    category: "Clinical",
    title: "Lytix Biopharma Q4 2024: Solid clinical results strengthen the path to Phase III and further advancements in 2025",
    link: "https://newsweb.oslobors.no/message/638545",
  },
  {
    date: "Feb 11, 2025",
    category: "Corporate",
    title: "Lytix Biopharma receives Notice of Allowance for U.S. patent application covering its LTX-315 clinical program",
    link: "https://newsweb.oslobors.no/message/638355",
  },
  {
    date: "Feb 06, 2025",
    category: "Corporate",
    title: "Lytix Biopharma: Invitation to Q4 2024 Results Presentation",
    link: "https://newsweb.oslobors.no/message/638017",
  },
  {
    date: "Jan 21, 2025",
    category: "Partnership",
    title: "Lytix Biopharma AS - Licensing partner Verrica Pharmaceuticals presents clinical data with LTX-315 at the 2025 Winter Clinical Dermatology Conference",
    link: "https://newsweb.oslobors.no/message/636903",
  },
  {
    date: "Jan 15, 2025",
    category: "Corporate",
    title: "Lytix Biopharma AS - New share capital registered",
    link: "https://newsweb.oslobors.no/message/636539",
  },
  {
    date: "Jan 07, 2025",
    category: "Corporate",
    title: "Lytix Biopharma AS - Cancellation of Subsequent Offering",
    link: "https://newsweb.oslobors.no/message/636078",
  },
  {
    date: "Jan 02, 2025",
    category: "Financial",
    title: "Finansiell kalender",
    link: "https://newsweb.oslobors.no/message/635859",
  },
  {
    date: "Jan 02, 2025",
    category: "Financial",
    title: "Financial calendar",
    link: "https://newsweb.oslobors.no/message/635860",
  },
  {
    date: "Dec 27, 2024",
    category: "Corporate",
    title: "Lytix Biopharma AS - Mandatory Notification of Trade - Redelivery of Lent Shares to Closely Associated Party of a Primary Insider",
    link: "https://newsweb.oslobors.no/message/635698",
  },
  {
    date: "Dec 23, 2024",
    category: "Corporate",
    title: "Lytix Biopharma AS - New share capital registered",
    link: "https://newsweb.oslobors.no/message/635634",
  },
  {
    date: "Dec 17, 2024",
    category: "Corporate",
    title: "Lytix Biopharma AS - Mandatory Notification of Trade - Share Lending by Closely Associated Party of a Primary Insider",
    link: "https://newsweb.oslobors.no/message/634985",
  },
  {
    date: "Dec 16, 2024",
    category: "Corporate",
    title: "Lytix Biopharma AS - Mandatory notification of trade by Primary Insiders and close associates",
    link: "https://newsweb.oslobors.no/message/634909",
  },
  {
    date: "Dec 16, 2024",
    category: "Financial",
    title: "Lytix Biopharma AS: Key information relating to potential subsequent offering",
    link: "https://newsweb.oslobors.no/message/634910",
  },
  {
    date: "Dec 16, 2024",
    category: "Financial",
    title: "Lytix Biopharma AS: Private placement and retail offer via PrimaryBid successfully completed",
    link: "https://newsweb.oslobors.no/message/634897",
  },
  {
    date: "Dec 16, 2024",
    category: "Financial",
    title: "Lytix Biopharma - Lytix launches Retail Offering via Primary Bid and Nordnet, in parallel with private placement",
    link: "https://newsweb.oslobors.no/message/634881",
  },
  {
    date: "Dec 16, 2024",
    category: "Financial",
    title: "Lytix Biopharma - Lytix lanserer emisjon for småinvestorer via PrimaryBid og Nordnet, parallelt med en rettet emisjon",
    link: "https://newsweb.oslobors.no/message/634882",
  },
  {
    date: "Dec 16, 2024",
    category: "Financial",
    title: "Lytix Biopharma AS: Contemplated private placement and retail offer via PrimaryBid",
    link: "https://newsweb.oslobors.no/message/634879",
  },
  {
    date: "Nov 26, 2024",
    category: "Scientific",
    title: "Lytix Biopharma presents updated phase II results from skin cancer study (BCC) at the DNB Nordic Healthcare Conference",
    link: "https://newsweb.oslobors.no/message/633177",
  },
  {
    date: "Nov 21, 2024",
    category: "Partnership",
    title: "Lytix Biopharma - Licensing partner Verrica Pharmaceuticals announces the pricing of a underwritten public offering, raising approximately USD 42 million upon completion",
    link: "https://newsweb.oslobors.no/message/632926",
  },
  {
    date: "Nov 18, 2024",
    category: "Clinical",
    title: "Lytix Biopharma Q3 2024: Positive clinical results and strategic advancements strengthen path to commercialization",
    link: "https://newsweb.oslobors.no/message/632574",
  },
  {
    date: "Nov 12, 2024",
    category: "Corporate",
    title: "Lytix Biopharma: Invitation to Q3 2024 Results Presentation",
    link: "https://newsweb.oslobors.no/message/631916",
  },
  {
    date: "Nov 06, 2024",
    category: "Clinical",
    title: "Lovende fase II-studie i pasienter med tidligfase føflekkreft startet opp ved Radiumhospitalet - første pasient behandlet med Lytix' kreftbehandling",
    link: "https://newsweb.oslobors.no/message/631412",
  },
  {
    date: "Nov 06, 2024",
    category: "Clinical",
    title: "First patient treated in new phase II clinical trial at Radiumhospitalet in Oslo - promising use of Lytix cancer treatment in patients with early-stage melanoma",
    link: "https://newsweb.oslobors.no/message/631413",
    featured: true,
  },
  {
    date: "Nov 04, 2024",
    category: "Partnership",
    title: "Lytix Biopharma - Oppdatering fra lisensieringspartner Verrica Pharmaceuticals",
    link: "https://newsweb.oslobors.no/message/631207",
  },
  {
    date: "Nov 04, 2024",
    category: "Partnership",
    title: "Lytix Biopharma - Update from licensing partner Verrica Pharmaceuticals",
    link: "https://newsweb.oslobors.no/message/631208",
  },
  {
    date: "Oct 31, 2024",
    category: "Financial",
    title: "Financial calendar",
    link: "https://newsweb.oslobors.no/message/630984",
  },
  {
    date: "Oct 31, 2024",
    category: "Financial",
    title: "Finansiell kalender",
    link: "https://newsweb.oslobors.no/message/630983",
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
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredNews = activeCategory === "All"
    ? newsItems
    : newsItems.filter((item) => item.category === activeCategory);

  const featuredNews = filteredNews.filter((item) => item.featured).slice(0, 2);
  const regularNews = filteredNews.filter((item) => !item.featured);
  const displayedNews = showAll ? regularNews : regularNews.slice(0, 10);

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
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-[#40525C]">
                News & Events
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
                  onClick={() => setActiveCategory(category.name)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all hover:scale-105 ${activeCategory === category.name
                      ? category.color
                      : "bg-lytix-light text-lytix-navy/50 border border-lytix-ice hover:border-lytix-teal/30"
                    }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured News */}
        {featuredNews.length > 0 && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 lg:px-8">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-lytix-teal mb-4 block">Highlights</span>
              <h2 className="text-3xl font-bold tracking-tight text-lytix-navy mb-8">Featured News</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredNews.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group glass-card p-1 rounded-[2rem] glow-border overflow-hidden block"
                  >
                    <div className="bg-white rounded-[1.7rem] overflow-hidden h-full">
                      <div className="p-8">
                        <div className="flex items-center gap-3 mb-4">
                          <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${getCategoryColor(item.category)}`}>
                            {item.category}
                          </span>
                          <span className="text-[10px] font-black uppercase tracking-widest text-lytix-navy/40">{item.date}</span>
                        </div>
                        <h3 className="text-xl font-bold text-lytix-navy leading-tight mb-3 group-hover:text-lytix-teal transition-colors">{item.title}</h3>
                        <span className="inline-flex items-center gap-2 text-lytix-teal font-bold text-sm group-hover:gap-3 transition-all">
                          Read on Oslo Børs
                          <ExternalLink className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All News */}
        <section className="py-16 bg-lytix-light relative">
          <div className="absolute inset-0 molecular-pattern opacity-50" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-lytix-navy/40 mb-4 block">Archive</span>
            <h2 className="text-3xl font-bold tracking-tight text-lytix-navy mb-8">All Press Releases</h2>
            <div className="space-y-4">
              {displayedNews.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group glass-card p-1 rounded-[2rem] glow-border block"
                >
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
                        <h3 className="font-bold text-lytix-navy group-hover:text-lytix-teal transition-colors">{item.title}</h3>
                      </div>
                      <div className="flex-shrink-0">
                        <span className="inline-flex items-center gap-2 text-lytix-teal font-bold text-sm group-hover:gap-3 transition-all">
                          Read More
                          <ExternalLink className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {regularNews.length > 10 && !showAll && (
              <div className="text-center mt-12">
                <button
                  onClick={() => setShowAll(true)}
                  className="px-8 py-4 bg-white text-lytix-navy rounded-2xl font-bold text-sm uppercase tracking-widest border-2 border-lytix-ice hover:border-lytix-teal hover:text-lytix-teal transition-all flex items-center gap-2 mx-auto"
                >
                  Load More News ({regularNews.length - 10} remaining)
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* CTA Section - Outside main for ribbon visibility */}
      <section className="py-16 bg-white border-y border-lytix-ice">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <Newspaper className="w-12 h-12 text-lytix-teal/30 mx-auto mb-4" />
          <p className="text-lytix-navy/60 font-light mb-6">
            For the complete archive of press releases, visit the Oslo Børs NewsWeb.
          </p>
          <a
            href="https://newsweb.oslobors.no/search?category=&issuer=7893&fromDate=&toDate=&market=&messageTitle="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-lytix-teal/10 text-lytix-teal rounded-xl font-bold text-sm hover:bg-lytix-teal hover:text-white transition-all"
          >
            Visit Oslo Børs NewsWeb
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
