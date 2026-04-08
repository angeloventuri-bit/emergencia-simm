"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Cpu, Users, Wrench, RefreshCw } from "lucide-react";

const pillars = [
  {
    icon: Smartphone,
    title: "APP SIMM Academy",
    text: "Estude de qualquer lugar, a qualquer hora. No intervalo do plantão. No trajeto para o hospital. Antes de dormir. O conhecimento que você precisa, no momento que você precisa, no formato que cabe na sua rotina.",
    tag: "iOS & Android",
  },
  {
    icon: Cpu,
    title: "Inteligência Artificial Integrada",
    text: "IA como aliada no seu raciocínio clínico — não como substituta do professor, mas como aceleradora do seu aprendizado. Tire dúvidas instantâneas, aprofunde temas complexos, revise conceitos na velocidade que o plantão exige. É como ter um preceptor do HC-USP no bolso.",
    tag: "IA · 24h",
  },
  {
    icon: Users,
    title: "Comunidade Exclusiva de Médicos",
    text: "Acesso direto a professores e a colegas que entendem sua realidade. Discussão de casos em tempo real. Networking com emergencistas de todo o Brasil. Porque nenhum médico evolui sozinho — e os melhores se cercam de quem os desafia.",
    tag: "+10.000 membros",
  },
  {
    icon: Wrench,
    title: "Ferramentas de Plantão Gratuitas",
    text: "Calculadoras de scores clínicos (SOFA, Glasgow, qSOFA, Wells, HEART, NIHSS), tabelas de diluição e fluxogramas de conduta — prontos para usar durante o atendimento. Sem login. Sem anúncio. Feitos por emergencistas, para emergencistas.",
    tag: "Open Access",
  },
  {
    icon: RefreshCw,
    title: "Atualização Contínua Baseada em Evidências",
    text: "A medicina muda. Nós mudamos junto. Novos módulos, atualizações de protocolos e curadoria das principais revistas internacionais — NEJM, Lancet, JAMA, Annals of Emergency Medicine — traduzidos para o que importa no seu plantão.",
    tag: "NEJM · JAMA · Lancet",
  },
];

export function Ecosystem() {
  return (
    <section className="py-24 bg-[#0A0E14] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,42,48,0.5)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="font-['Orbitron'] text-[#136C72] uppercase tracking-[0.15em] text-sm mb-4 block">
            Ecossistema SIMM
          </span>
          <h2 className="font-['Orbitron'] font-bold text-[28px] md:text-[42px] text-white text-shadow-neon mb-5 leading-tight">
            Ao entrar para a SIMM, você não compra um curso.<br className="hidden md:block" />
            Você passa a fazer parte de um ecossistema.
          </h2>
          <p className="font-['Inter'] text-[16px] text-[#868E92] max-w-2xl mx-auto">
            Médicos que buscam maestria técnica e segurança profissional. Uma comunidade que troca experiências,
            discute casos e evolui junta — dentro e fora do plantão.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            const isLast = i === pillars.length - 1;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className={`group relative bg-[#111B22] border border-[#3A4248] rounded-[14px] p-7 hover:bg-[#1A2730] hover:border-[#20CAD840] hover:shadow-[0_0_24px_rgba(32,202,216,0.12)] transition-all duration-400 ${
                  isLast ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-gradient-to-b from-[#20CAD8] to-transparent rounded-l-[14px] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="flex items-center justify-between mb-5">
                  <Icon
                    size={28}
                    strokeWidth={1.5}
                    className="text-[#20CAD8] drop-shadow-[0_0_6px_#20CAD8]"
                  />
                  <span className="font-['JetBrains_Mono'] text-[11px] text-[#636A6F] uppercase tracking-wider bg-[#20CAD808] border border-[#20CAD820] px-2.5 py-1 rounded-full">
                    {pillar.tag}
                  </span>
                </div>
                <h3 className="font-['Orbitron'] font-bold text-[16px] text-white mb-3 group-hover:text-shadow-neon transition-all leading-snug">
                  {pillar.title}
                </h3>
                <p className="font-['Inter'] text-[14px] text-[#868E92] leading-relaxed">
                  {pillar.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
