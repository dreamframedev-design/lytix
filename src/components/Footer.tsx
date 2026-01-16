import Link from "next/link";
import Image from "next/image";
import { Mail, Linkedin, Twitter, ArrowRight, MapPin, Phone } from "lucide-react";

const footerLinks = {
  company: [
    { title: "About", href: "/about" },
    { title: "Management Team", href: "/about/management" },
    { title: "Board of Directors", href: "/about/board" },
    { title: "Clinical Advisory Board", href: "/about/clinical-advisory" },
  ],
  science: [
    { title: "Our Science", href: "/science" },
    { title: "Pipeline", href: "/pipeline" },
    { title: "Publications", href: "/science#publications" },
    { title: "Posters", href: "/science#posters" },
  ],
  resources: [
    { title: "Patient Resources", href: "/patient-resources" },
    { title: "Clinical Trials", href: "/clinical-trials" },
    { title: "News & Events", href: "/news" },
    { title: "Investor Relations", href: "/investor-relations" },
  ],
  connect: [
    { title: "Partnerships", href: "/partnerships" },
    { title: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy-gradient text-white relative overflow-hidden z-[2]">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-lytix-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-lytix-coral/5 rounded-full blur-3xl" />
      
      {/* Decorative top border */}
      <div className="h-1.5 bg-gradient-to-r from-lytix-teal via-lytix-cyan to-lytix-gold" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Main Footer */}
        <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-8 group">
              <Image
                src="/images/Lytix_logo-01.svg"
                alt="Lytix Biopharma"
                width={150}
                height={44}
                className="h-11 w-auto brightness-0 invert group-hover:opacity-80 transition-opacity"
              />
            </Link>
            <p className="text-sm text-lytix-ice/60 leading-relaxed mb-8 font-light">
              Redefining the standard of care in the neoadjuvant setting with first-in-class oncolytic molecule immunotherapies.
            </p>
            
            {/* Location Badge */}
            <div className="flex items-center gap-2 text-lytix-ice/50 text-sm mb-6">
              <MapPin className="h-4 w-4 text-lytix-teal" />
              <span>Oslo, Norway</span>
            </div>
            
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 hover:bg-lytix-teal text-lytix-cyan hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 hover:bg-lytix-teal text-lytix-cyan hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@lytixbiopharma.com"
                className="p-3 rounded-xl bg-white/5 hover:bg-lytix-teal text-lytix-cyan hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-6 text-lytix-gold">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-lytix-ice/60 hover:text-lytix-cyan transition-all duration-200 hover:translate-x-1 inline-block font-light"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Science Links */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-6 text-lytix-gold">
              Science
            </h4>
            <ul className="space-y-3">
              {footerLinks.science.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-lytix-ice/60 hover:text-lytix-cyan transition-all duration-200 hover:translate-x-1 inline-block font-light"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-6 text-lytix-gold">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-lytix-ice/60 hover:text-lytix-cyan transition-all duration-200 hover:translate-x-1 inline-block font-light"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-6 text-lytix-gold">
              Connect
            </h4>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-lytix-ice/60 hover:text-lytix-cyan transition-all duration-200 hover:translate-x-1 inline-block font-light"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* CTA in footer */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <Link 
                href="/partnerships"
                className="inline-flex items-center gap-2 text-sm font-bold text-lytix-coral hover:text-lytix-gold transition-all group"
              >
                Partner With Us 
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Authority Bar */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-wrap items-center justify-center gap-12 text-center">
            <div>
              <div className="text-[9px] font-black text-lytix-ice/40 uppercase tracking-[0.2em] mb-1">Stage</div>
              <div className="text-sm font-bold text-lytix-ice/80">Clinical Phase 2</div>
            </div>
            <div className="h-8 w-px bg-white/10 hidden md:block" />
            <div>
              <div className="text-[9px] font-black text-lytix-ice/40 uppercase tracking-[0.2em] mb-1">Platform</div>
              <div className="text-sm font-bold text-lytix-ice/80">Oncolytic Molecules</div>
            </div>
            <div className="h-8 w-px bg-white/10 hidden md:block" />
            <div>
              <div className="text-[9px] font-black text-lytix-ice/40 uppercase tracking-[0.2em] mb-1">Focus</div>
              <div className="text-sm font-bold text-lytix-ice/80">Immuno-Oncology</div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-lytix-ice/40 font-light">
            © {new Date().getFullYear()} Lytix Biopharma AS. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link href="/privacy" className="text-xs text-lytix-ice/40 hover:text-lytix-cyan transition-colors font-light">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-lytix-ice/40 hover:text-lytix-cyan transition-colors font-light">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
