"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./Button";
import { Moon, Menu, Globe } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Cursos", href: "#cursos" },
    { name: "SIMM Academy", href: "https://simmacademy.emergenciasimm.com.br/", external: true },
    { name: "Professores", href: "#quem-ensina" },
    { name: "Ferramentas", href: "#ferramentas" },
    { name: "Blog", href: "#blog" },
  ];

  return (
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

        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-2 text-xs font-['JetBrains_Mono'] text-[#868E92]">
            <Globe size={14} className="text-[#636A6F]" />
            <span className="text-[#20CAD8] cursor-pointer drop-shadow-[0_0_5px_#20CAD8]">PT</span>
            <span className="text-[#636A6F]">·</span>
            <span className="cursor-pointer hover:text-[#20CAD8] transition-colors">ES</span>
            <span className="text-[#636A6F]">·</span>
            <span className="cursor-pointer hover:text-[#20CAD8] transition-colors">EN</span>
          </div>

          <Button variant="primary" className="!px-5 !py-2.5 !text-[13px]">
            Área do Aluno
          </Button>

          <button className="text-[#B9B7BA] hover:text-[#20CAD8] hover:drop-shadow-[0_0_8px_#20CAD8] transition-all p-2 rounded-full hover:bg-[#20CAD8]/10">
            <Moon size={20} strokeWidth={1.5} />
          </button>
        </div>

        <button className="lg:hidden text-[#B9B7BA] p-2 hover:bg-[#111B22] rounded-md">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
}
