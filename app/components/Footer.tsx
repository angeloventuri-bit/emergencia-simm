"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Globe, Video, Link2, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0A0E14] border-t border-[#3A4248] pt-20 pb-10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          <div className="flex flex-col items-start gap-4">
            <Image
              src="/assets/f76c6f27494be7a9e5a3f016f1754b03de404378.png"
              alt="SIMM Emergência"
              width={160}
              height={40}
              className="h-8 md:h-10 w-auto filter drop-shadow-[0_0_5px_rgba(32,202,216,0.3)] mb-2"
            />
            <p className="font-['Inter'] text-[13px] text-[#636A6F] leading-relaxed max-w-[220px]">
              O maior porta-voz da Medicina de Emergência na América Latina.
            </p>
            <p className="font-['Orbitron'] text-[11px] text-[#20CAD8] uppercase tracking-[0.15em] drop-shadow-[0_0_5px_#20CAD8]">
              Desde 2019 · HC-USP · InCor
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-['Orbitron'] font-bold text-white mb-2 uppercase text-sm">Cursos</h4>
            <Link href="#" className="font-['Inter'] text-[14px] text-[#868E92] hover:text-[#20CAD8] transition-colors">ESC — Emergência Sob Controle</Link>
            <Link href="#" className="font-['Inter'] text-[14px] text-[#868E92] hover:text-[#20CAD8] transition-colors">SIMM Academy</Link>
            <Link href="#" className="font-['Inter'] text-[14px] text-[#868E92] hover:text-[#20CAD8] transition-colors">Próximas Turmas</Link>
            <Link href="#" className="font-['Inter'] text-[14px] text-[#868E92] hover:text-[#20CAD8] transition-colors">Certificações</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-['Orbitron'] font-bold text-white mb-2 uppercase text-sm">Recursos</h4>
            <Link href="#" className="font-['Inter'] text-[14px] text-[#868E92] hover:text-[#20CAD8] transition-colors">Calculadoras Clínicas</Link>
            <Link href="#" className="font-['Inter'] text-[14px] text-[#868E92] hover:text-[#20CAD8] transition-colors">Fluxogramas Open Access</Link>
            <Link href="#" className="font-['Inter'] text-[14px] text-[#868E92] hover:text-[#20CAD8] transition-colors">Global Insights</Link>
            <Link href="#" className="font-['Inter'] text-[14px] text-[#868E92] hover:text-[#20CAD8] transition-colors">Desafio da Semana</Link>
            <Link href="#" className="font-['Inter'] text-[14px] text-[#868E92] hover:text-[#20CAD8] transition-colors">Plantão SIMM (Newsletter)</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-['Orbitron'] font-bold text-white mb-2 uppercase text-sm">Institucional</h4>
            <Link href="#" className="font-['Inter'] text-[14px] text-[#868E92] hover:text-[#20CAD8] transition-colors">Sobre Nós</Link>
            <Link href="#" className="font-['Inter'] text-[14px] text-[#868E92] hover:text-[#20CAD8] transition-colors">Professores</Link>
            <Link href="#" className="font-['Inter'] text-[14px] text-[#868E92] hover:text-[#20CAD8] transition-colors">Contato</Link>
            <div className="flex gap-3 mt-2">
              <a href="#" className="text-[#636A6F] hover:text-[#20CAD8] hover:drop-shadow-[0_0_8px_#20CAD8] transition-all p-2 bg-[#111B22] rounded-full border border-[#3A4248] hover:border-[#20CAD8]">
                <Globe size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-[#636A6F] hover:text-[#20CAD8] hover:drop-shadow-[0_0_8px_#20CAD8] transition-all p-2 bg-[#111B22] rounded-full border border-[#3A4248] hover:border-[#20CAD8]">
                <Video size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-[#636A6F] hover:text-[#20CAD8] hover:drop-shadow-[0_0_8px_#20CAD8] transition-all p-2 bg-[#111B22] rounded-full border border-[#3A4248] hover:border-[#20CAD8]">
                <Link2 size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-[#636A6F] hover:text-[#20CAD8] hover:drop-shadow-[0_0_8px_#20CAD8] transition-all p-2 bg-[#111B22] rounded-full border border-[#3A4248] hover:border-[#20CAD8]">
                <Mail size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

        </div>

        {/* Frase final */}
        <div className="text-center py-8 border-t border-b border-[#20CAD818] mb-8">
          <p className="font-['Orbitron'] text-[14px] md:text-[16px] text-[#20CAD8] drop-shadow-[0_0_8px_#20CAD8] uppercase tracking-[0.12em]">
            A Emergência SIMM não vende cursos. Forma médicos.
          </p>
        </div>

        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#20CAD830] to-transparent mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-['Inter'] text-[13px] text-[#636A6F]">
            © {new Date().getFullYear()} Emergência SIMM. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="font-['Inter'] text-[13px] text-[#636A6F] hover:text-[#20CAD8] transition-colors">Termos de Uso</Link>
            <Link href="#" className="font-['Inter'] text-[13px] text-[#636A6F] hover:text-[#20CAD8] transition-colors">Política de Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
