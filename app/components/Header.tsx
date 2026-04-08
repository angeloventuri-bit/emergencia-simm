"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./Button";
import { Moon, Menu, X } from "lucide-react";
import { useTranslation } from "../i18n/LanguageContext";
import { AnimatePresence, motion } from "framer-motion";

function BrazilFlag() {
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="rounded-[2px]">
      <rect width="20" height="14" rx="1" fill="#009739" />
      <path d="M10 2L18 7L10 12L2 7L10 2Z" fill="#FEDD00" />
      <circle cx="10" cy="7" r="2.5" fill="#012169" />
    </svg>
  );
}

function USFlag() {
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="rounded-[2px]">
      <rect width="20" height="14" rx="1" fill="#FFFFFF" />
      <rect width="20" height="2" fill="#B22234" />
      <rect y="4" width="20" height="2" fill="#B22234" />
      <rect y="8" width="20" height="2" fill="#B22234" />
      <rect y="12" width="20" height="2" fill="#B22234" />
      <rect width="9" height="8" fill="#3C3B6E" />
    </svg>
  );
}

function SpainFlag() {
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="rounded-[2px]">
      <rect width="20" height="14" rx="1" fill="#AA151B" />
      <rect y="3.5" width="20" height="7" fill="#F1BF00" />
    </svg>
  );
}

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { t, locale, setLocale } = useTranslation();

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu open
  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navLinks = [
    { name: t.header.nav.courses, href: "#cursos" },
    { name: t.header.nav.academy, href: "https://simmacademy.emergenciasimm.com.br/", external: true },
    { name: t.header.nav.teachers, href: "#quem-ensina" },
    { name: t.header.nav.tools, href: "#ferramentas" },
    { name: t.header.nav.blog, href: "#blog" },
  ];

  const flagActive = "drop-shadow-[0_0_8px_#20CAD8] ring-1 ring-[#20CAD8]";

  const handleNavClick = () => setMobileOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0A0E14]/90 backdrop-blur-[20px] saturate-150 border-b border-[#3A4248]/20 h-[72px]"
            : "bg-transparent h-[88px]"
        }`}
      >
        <div className="max-w-[1200px] mx-auto h-full px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group relative">
            <Image
              src="/assets/f76c6f27494be7a9e5a3f016f1754b03de404378.png"
              alt="SIMM Emergência"
              width={160}
              height={40}
              className="h-8 md:h-10 w-auto filter drop-shadow-[0_0_8px_rgba(32,202,216,0.6)] transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(32,202,216,0.8)]"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                {...("external" in link && link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={`font-['Outfit'] font-medium text-sm relative group py-2 ${
                  "external" in link && link.external
                    ? "text-[#20CAD8] drop-shadow-[0_0_5px_#20CAD8]"
                    : "text-[#B9B7BA]"
                }`}
              >
                <span className="group-hover:text-[#20CAD8] transition-colors duration-300">
                  {link.name}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#20CAD8] transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_#20CAD8]" />
              </a>
            ))}
          </nav>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-1.5">
              <button onClick={() => setLocale("pt")} className={`p-0.5 rounded-[3px] transition-all duration-200 hover:scale-110 ${locale === "pt" ? flagActive : "opacity-50 hover:opacity-80"}`} aria-label="Português">
                <BrazilFlag />
              </button>
              <button onClick={() => setLocale("en")} className={`p-0.5 rounded-[3px] transition-all duration-200 hover:scale-110 ${locale === "en" ? flagActive : "opacity-50 hover:opacity-80"}`} aria-label="English">
                <USFlag />
              </button>
              <button onClick={() => setLocale("es")} className={`p-0.5 rounded-[3px] transition-all duration-200 hover:scale-110 ${locale === "es" ? flagActive : "opacity-50 hover:opacity-80"}`} aria-label="Español">
                <SpainFlag />
              </button>
            </div>

            <Button variant="primary" className="!px-5 !py-2.5 !text-[13px]">
              {t.header.studentArea}
            </Button>

            <button className="text-[#B9B7BA] hover:text-[#20CAD8] hover:drop-shadow-[0_0_8px_#20CAD8] transition-all p-2 rounded-full hover:bg-[#20CAD8]/10">
              <Moon size={20} strokeWidth={1.5} />
            </button>
          </div>

          {/* Mobile: flags + hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            <div className="flex items-center gap-1">
              <button onClick={() => setLocale("pt")} className={`p-0.5 rounded-[2px] transition-all ${locale === "pt" ? flagActive : "opacity-40"}`} aria-label="Português">
                <BrazilFlag />
              </button>
              <button onClick={() => setLocale("en")} className={`p-0.5 rounded-[2px] transition-all ${locale === "en" ? flagActive : "opacity-40"}`} aria-label="English">
                <USFlag />
              </button>
              <button onClick={() => setLocale("es")} className={`p-0.5 rounded-[2px] transition-all ${locale === "es" ? flagActive : "opacity-40"}`} aria-label="Español">
                <SpainFlag />
              </button>
            </div>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-[#B9B7BA] p-2 hover:bg-[#111B22] rounded-md"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-[#0A0E14]/95 backdrop-blur-xl" onClick={handleNavClick} />

            {/* Menu Content */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute top-0 right-0 w-[280px] h-full bg-[#0D1C24] border-l border-[#3A4248]/30 pt-24 px-6 flex flex-col"
            >
              {/* Nav Links */}
              <div className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={handleNavClick}
                    {...("external" in link && link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className={`font-['Outfit'] font-medium text-[16px] py-3.5 px-3 rounded-lg transition-colors ${
                      "external" in link && link.external
                        ? "text-[#20CAD8] bg-[#20CAD8]/5"
                        : "text-[#E8E8EA] hover:text-[#20CAD8] hover:bg-[#20CAD8]/5"
                    }`}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>

              {/* Divider */}
              <div className="h-[1px] bg-[#3A4248]/40 my-6" />

              {/* CTA */}
              <a
                href="https://simmacademy.emergenciasimm.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
              >
                <Button variant="primary" className="w-full !text-[13px]">
                  {t.header.studentArea}
                </Button>
              </a>

              {/* Language label */}
              <div className="mt-6">
                <p className="font-['JetBrains_Mono'] text-[10px] text-[#636A6F] uppercase tracking-[0.15em] mb-3">
                  {locale === "pt" ? "Idioma" : locale === "en" ? "Language" : "Idioma"}
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setLocale("pt")}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all text-[13px] font-['Inter'] ${
                      locale === "pt"
                        ? "border-[#20CAD8]/40 bg-[#20CAD8]/10 text-[#20CAD8]"
                        : "border-[#3A4248]/40 text-[#868E92] hover:border-[#20CAD8]/20"
                    }`}
                  >
                    <BrazilFlag /> PT
                  </button>
                  <button
                    onClick={() => setLocale("en")}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all text-[13px] font-['Inter'] ${
                      locale === "en"
                        ? "border-[#20CAD8]/40 bg-[#20CAD8]/10 text-[#20CAD8]"
                        : "border-[#3A4248]/40 text-[#868E92] hover:border-[#20CAD8]/20"
                    }`}
                  >
                    <USFlag /> EN
                  </button>
                  <button
                    onClick={() => setLocale("es")}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all text-[13px] font-['Inter'] ${
                      locale === "es"
                        ? "border-[#20CAD8]/40 bg-[#20CAD8]/10 text-[#20CAD8]"
                        : "border-[#3A4248]/40 text-[#868E92] hover:border-[#20CAD8]/20"
                    }`}
                  >
                    <SpainFlag /> ES
                  </button>
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
