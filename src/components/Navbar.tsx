"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const aboutDropdownItems = [
  {
    title: "Management Team",
    href: "/about/management",
    description: "Meet our leadership driving innovation in oncology",
  },
  {
    title: "Board of Directors",
    href: "/about/board",
    description: "Strategic guidance from industry experts",
  },
  {
    title: "Clinical Advisory Board",
    href: "/about/clinical-advisory",
    description: "World-class clinical expertise shaping our research",
  },
];

const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about", dropdown: aboutDropdownItems },
  { title: "Science", href: "/science" },
  { title: "Pipeline", href: "/pipeline" },
  { title: "Patient Resources", href: "/patient-resources" },
  { title: "Clinical Trials", href: "/clinical-trials" },
  { title: "Partnerships", href: "/partnerships" },
  { title: "Investor Relations", href: "/investor-relations" },
  { title: "News", href: "/news" },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1.5 rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300 hover:bg-lytix-ice/80 hover:translate-x-1 hover:shadow-sm focus:bg-lytix-ice focus:text-lytix-navy-deep group border-l-2 border-transparent hover:border-lytix-teal",
            className
          )}
          {...props}
        >
          <div className="text-sm font-semibold leading-none text-lytix-navy group-hover:text-lytix-teal-dark transition-colors">{title}</div>
          <p className="line-clamp-2 text-xs leading-snug text-lytix-navy/50 font-light">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-lytix-ice"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex h-18 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src="/images/Lytix_logo-01.svg"
              alt="Lytix Biopharma"
              width={180}
              height={52}
              className="h-13 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.href}>
                    {link.dropdown ? (
                      <>
                        <Link href={link.href} legacyBehavior passHref>
                          <NavigationMenuTrigger className="bg-transparent text-lytix-navy hover:bg-lytix-ice/50 hover:text-lytix-teal-dark data-[state=open]:bg-lytix-ice/50">
                            {link.title}
                          </NavigationMenuTrigger>
                        </Link>
                        <NavigationMenuContent>
                          <ul className="grid w-[420px] gap-2 p-5 md:w-[500px] md:grid-cols-1 lg:w-[420px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-lytix-ice">
                            {link.dropdown.map((item) => (
                              <ListItem
                                key={item.title}
                                title={item.title}
                                href={item.href}
                              >
                                {item.description}
                              </ListItem>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link href={link.href} legacyBehavior passHref>
                        <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-lytix-navy hover:bg-lytix-ice/50 hover:text-lytix-teal-dark")}>
                          {link.title}
                        </NavigationMenuLink>
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden xl:flex items-center gap-4">
            <Link href="/contact">
              <Button className="bg-lytix-navy-deep hover:bg-lytix-cyan hover:text-lytix-navy text-white font-semibold px-6 shadow-md hover:shadow-lg transition-all">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="xl:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10 text-lytix-navy hover:bg-lytix-ice">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0 bg-white">
                <div className="flex flex-col h-full">
                  <div className="p-6 border-b border-lytix-ice">
                    <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                      <Image
                        src="/images/Lytix_logo-01.svg"
                        alt="Lytix Biopharma"
                        width={120}
                        height={35}
                        className="h-8 w-auto"
                      />
                    </Link>
                  </div>

                  <div className="flex-1 overflow-y-auto py-4">
                    <div className="flex flex-col space-y-1 px-4">
                      {navLinks.map((link) => (
                        <div key={link.href}>
                          {link.dropdown ? (
                            <MobileDropdown
                              title={link.title}
                              items={link.dropdown}
                              onClose={() => setMobileMenuOpen(false)}
                            />
                          ) : (
                            <SheetClose asChild>
                              <Link
                                href={link.href}
                                className="flex items-center py-3 px-3 text-base font-medium text-lytix-navy hover:bg-lytix-ice hover:text-lytix-teal-dark rounded-md transition-colors"
                              >
                                {link.title}
                              </Link>
                            </SheetClose>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 border-t border-lytix-ice bg-lytix-light">
                    <SheetClose asChild>
                      <Link href="/contact" className="block">
                        <Button className="w-full bg-lytix-navy-deep hover:bg-lytix-cyan hover:text-lytix-navy text-white font-semibold">
                          Contact Us
                        </Button>
                      </Link>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}

function MobileDropdown({
  title,
  items,
  onClose,
}: {
  title: string;
  items: { title: string; href: string; description: string }[];
  onClose: () => void;
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-3 px-3 text-base font-medium text-lytix-navy hover:bg-lytix-ice hover:text-lytix-teal-dark rounded-md transition-colors"
      >
        {title}
        <ChevronDown
          className={cn(
            "h-4 w-4 text-lytix-teal transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      {isOpen && (
        <div className="ml-4 space-y-1 border-l-2 border-lytix-teal/30 pl-4">
          {items.map((item) => (
            <SheetClose asChild key={item.href}>
              <Link
                href={item.href}
                onClick={onClose}
                className="block py-2 px-3 text-sm text-lytix-navy/70 hover:text-lytix-teal-dark hover:bg-lytix-ice/50 rounded-md transition-colors"
              >
                {item.title}
              </Link>
            </SheetClose>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;
