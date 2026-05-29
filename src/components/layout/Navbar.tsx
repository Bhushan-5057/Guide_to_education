'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar, ChevronRight, ChevronDown } from 'lucide-react';
import { services, studentSupport, type Offering } from '../../data/siteOfferings';

type NavLink = {
  href: string;
  label: string;
  children?: Offering[];
};

const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services', children: services },
  { href: '/study-in-canada', label: 'Study in Canada' },
  { href: '/programs-guidance', label: 'Programs' },
  { href: '/student-support', label: 'Student Support', children: studentSupport },
  { href: '/contact', label: 'Contact' },
];

function isNavActive(pathname: string, href: string) {
  if (href === '/') {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({});
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
    setActiveDropdown(null);
    setMobileExpanded({});
  }, [pathname]);

  const toggleMobileSection = (href: string) => {
    setMobileExpanded((current) => ({
      ...current,
      [href]: !current[href],
    }));
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? 'glass-nav py-3 shadow-sm'
            : 'bg-white/90 xl:bg-white/72 xl:backdrop-blur-xl xl:border-b xl:border-white/45 xl:shadow-[0_12px_34px_rgba(15,36,62,0.08)] py-5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <Link href="/" className="group flex shrink-0 items-center">
              <div className="relative h-24 w-24 shrink-0 transition-all hover-lift sm:h-32 sm:w-32">
                <Image
                  src="/images/logo.png"
                  alt="GuideToEducation Consultancy logo"
                  fill
                  sizes="(min-width: 10rem) 100px, 80px"
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-3 2xl:gap-5" aria-label="Primary navigation">
              {navLinks.map((link) => {
                const isActive = isNavActive(pathname, link.href);
                const hasChildren = Boolean(link.children?.length);
                const isExpanded = activeDropdown === link.href;

                if (!hasChildren) {
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`relative whitespace-nowrap px-1 py-2 text-sm font-semibold tracking-wide transition-colors duration-200 hover:text-navy ${isActive ? 'text-navy font-bold' : 'text-charcoal-light'
                        }`}
                    >
                      {link.label}
                      {isActive && (
                        <motion.div
                          layoutId="activeNavIndicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-forest rounded-full"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  );
                }

                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(link.href)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    onFocus={() => setActiveDropdown(link.href)}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveDropdown(isExpanded ? null : link.href)}
                      onKeyDown={(event) => {
                        if (event.key === 'Escape') {
                          setActiveDropdown(null);
                        }
                      }}
                      className={`relative inline-flex items-center gap-1.5 whitespace-nowrap px-1 py-2 text-sm font-semibold tracking-wide transition-colors duration-200 hover:text-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 ${isActive ? 'text-navy font-bold' : 'text-charcoal-light'
                        }`}
                      aria-expanded={isExpanded}
                      aria-haspopup="menu"
                    >
                      {link.label}
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-forest' : ''}`} />
                      {isActive && (
                        <motion.div
                          layoutId="activeNavIndicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-forest rounded-full"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </button>

                    <AnimatePresence>
                      {isExpanded && link.children && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.98 }}
                          transition={{ duration: 0.18, ease: 'easeOut' }}
                          className="absolute left-1/2 top-full mt-4 w-72 -translate-x-1/2 overflow-hidden rounded-2xl border border-gray-200 bg-white p-2 shadow-2xl"
                          role="menu"
                        >
                          <div className="mb-1 flex items-center justify-between rounded-xl bg-navy/5 px-3 py-2">
                            <p className="text-xs font-bold uppercase tracking-widest text-forest">{link.label}</p>
                            <Link
                              href={link.href}
                              className="shrink-0 text-xs font-bold text-navy transition-colors hover:text-forest"
                              role="menuitem"
                            >
                              View all
                            </Link>
                          </div>

                          <div className="grid gap-1">
                            {link.children.map((child) => {
                              const ChildIcon = child.icon;
                              const childActive = pathname === child.href;

                              return (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  role="menuitem"
                                  className={`group flex min-h-11 w-full items-center gap-3 rounded-xl px-3 py-2.5 transition-colors ${childActive
                                      ? 'bg-forest/10 text-navy'
                                      : 'hover:bg-gray-50'
                                    }`}
                                >
                                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-forest/10 text-forest transition-colors group-hover:bg-forest group-hover:text-white">
                                    <ChildIcon className="h-4 w-4" />
                                  </span>
                                  <span className="min-w-0 flex-1 truncate text-sm font-bold leading-snug text-navy">{child.shortTitle}</span>
                                  <ChevronRight className="h-4 w-4 shrink-0 text-gray-300 transition-colors group-hover:text-forest" />
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            {/* CTA Button */}
            <div className="hidden xl:flex items-center">
              <Link
                href="/book-consultation"
                className="inline-flex items-center gap-2 whitespace-nowrap bg-gold hover:bg-gold-hover text-navy font-bold py-2.5 px-5 rounded-xl transition-all shadow-md hover:shadow-lg text-sm hover-lift"
              >
                <Calendar className="w-4 h-4" />
                Book Consultation
              </Link>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex xl:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-navy hover:text-navy-light p-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 transition-colors"
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile & Tablet Sidebar Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[55] xl:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 z-[60] flex w-[min(22rem,calc(100vw-2rem))] flex-col justify-between overflow-y-auto border-l border-border-grey bg-white p-5 shadow-2xl sm:p-6 xl:hidden"
            >
              <div>
                <div className="flex items-start justify-between gap-4 border-b border-border-grey pb-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gold">Menu</p>
                    <p className="mt-1 text-base font-bold text-navy">GuideToEducation</p>
                    <p className="mt-1 text-xs leading-relaxed text-charcoal-light">Study guidance for Canada-bound students</p>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border-grey bg-white text-charcoal transition-colors hover:text-navy focus:outline-none focus:ring-2 focus:ring-gold/60"
                    aria-label="Close navigation menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="mt-6 flex flex-col gap-2" aria-label="Mobile navigation">
                  {navLinks.map((link) => {
                    const isActive = isNavActive(pathname, link.href);
                    const hasChildren = Boolean(link.children?.length);
                    const isExpanded = Boolean(mobileExpanded[link.href]);

                    if (!hasChildren) {
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={`flex items-center justify-between p-3 rounded-xl transition-all ${isActive
                              ? 'bg-navy/5 text-navy font-bold border-l-4 border-forest pl-3'
                              : 'text-charcoal-light hover:bg-gray-50'
                            }`}
                        >
                          <span className="text-sm font-semibold">{link.label}</span>
                          <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-forest translate-x-1' : 'text-gray-300'}`} />
                        </Link>
                      );
                    }

                    return (
                      <div key={link.href} className="rounded-xl">
                        <button
                          type="button"
                          onClick={() => toggleMobileSection(link.href)}
                          className={`flex w-full items-center justify-between rounded-xl p-3 text-left transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 ${isActive
                              ? 'bg-navy/5 text-navy font-bold border-l-4 border-forest pl-3'
                              : 'text-charcoal-light hover:bg-gray-50'
                            }`}
                          aria-expanded={isExpanded}
                          aria-controls={`mobile-dropdown-${link.href.replace('/', '')}`}
                        >
                          <span className="text-sm font-semibold">{link.label}</span>
                          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-forest' : 'text-gray-300'}`} />
                        </button>

                        <AnimatePresence initial={false}>
                          {isExpanded && link.children && (
                            <motion.div
                              id={`mobile-dropdown-${link.href.replace('/', '')}`}
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.22, ease: 'easeOut' }}
                              className="overflow-hidden"
                            >
                              <div className="ml-3 mt-2 space-y-1 border-l border-gray-200 pl-3">
                                <Link
                                  href={link.href}
                                  className="flex items-center justify-between rounded-lg px-3 py-2 text-xs font-bold uppercase tracking-widest text-forest hover:bg-forest/5"
                                >
                                  View all {link.label}
                                  <ChevronRight className="h-3.5 w-3.5" />
                                </Link>

                                {link.children.map((child) => {
                                  const ChildIcon = child.icon;
                                  const childActive = pathname === child.href;

                                  return (
                                    <Link
                                      key={child.href}
                                      href={child.href}
                                      className={`flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all ${childActive
                                          ? 'bg-forest/10 text-navy'
                                          : 'text-charcoal-light hover:bg-gray-50 hover:text-navy'
                                        }`}
                                    >
                                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-forest/10 text-forest">
                                        <ChildIcon className="h-4 w-4" />
                                      </span>
                                      <span className="text-sm font-semibold leading-snug">{child.shortTitle}</span>
                                    </Link>
                                  );
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </nav>
              </div>

              <div className="mt-auto pt-6 border-t border-border-grey">
                <Link
                  href="/book-consultation"
                  className="flex items-center justify-center gap-2 bg-gold hover:bg-gold-hover text-navy font-bold py-3 px-4 rounded-xl transition-all shadow-md text-sm w-full text-center"
                >
                  <Calendar className="w-4 h-4" />
                  Book Strategy Session
                </Link>
                <div className="text-center mt-4">
                  <p className="text-xs text-charcoal-light">Mississauga Office</p>
                  <p className="text-[11px] text-gray-400 mt-1">Serving students in Canada & abroad</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
