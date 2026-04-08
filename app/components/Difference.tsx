"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Shield, Crosshair, Building2 } from "lucide-react";

const blocks = [
  {
    icon: Brain,
    title: "Raciocínio vs. Memorização",
    text: "Enquanto cursos tradicionais focam em memorização, nós desenvolvemos sua capacidade de triagem mental e tomada de decisão sob pressão extrema. Não basta saber o diagnóstico — você precisa saber o que fazer nos primeiros 60 segundos, com informação incompleta, equipe dependendo de você e o paciente deteriorando.",
  },
  {
    icon: Shield,
    title: "ACLS/ATLS vs. SIMM",
    text: "O ACLS ensina a tratar uma parada cardiorrespiratória. Nós ensinamos você a evitar que ela aconteça. Ocupamos o espaço entre a diretriz internacional e a complexidade real do paciente grave — aquele espaço onde o protocolo não dá conta e o raciocínio clínico precisa assumir.",
  },
  {
    icon: Crosshair,
    title: "Ferramentas com Propósito",
    text: "Do ultrassom à gasometria, cada ferramenta é ensinada com um único propósito: precisão diagnóstica imediata para aumentar a chance de sobrevida do seu paciente. Não ensinamos técnica por técnica. Ensinamos quando usar, por que usar e o que fazer com o resultado — em tempo real.",
  },
  {
    icon: Building2,
    title: "Nascidos no HC-USP",
    text: "Nascemos dentro do maior complexo hospitalar da América Latina. Nosso ensino não é baseado apenas em livros, mas na experiência de quem trabalha nas salas de emergência mais críticas do país. Cada caso ensinado aqui foi um paciente real, tratado por nossos preceptores, no nosso pronto-socorro.",
  },
];

export function Difference() {
  return (
    <section className="py-24 bg-[#0D1C24] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(14,42,48,0.6)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-['Orbitron'] text-[#136C72] uppercase tracking-[0.15em] text-sm mb-4 block">
            O que nos torna diferentes
          </span>
          <h2 className="font-['Orbitron'] font-bold text-[28px] md:text-[44px] text-white text-shadow-neon leading-tight">
            Não ensinamos você a passar em prova.<br className="hidden md:block" />
            Ensinamos você a salvar vidas.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blocks.map((block, i) => {
            const Icon = block.icon;
            return (
              <motion.div
                key={block.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className="group bg-[#111B22] border border-[#3A4248] rounded-[14px] p-8 hover:bg-[#1A2730] hover:border-[#20CAD840] hover:shadow-[0_0_24px_rgba(32,202,216,0.12)] transition-all duration-400 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#20CAD8] to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                <Icon
                  size={32}
                  strokeWidth={1.5}
                  className="text-[#20CAD8] mb-5 drop-shadow-[0_0_6px_#20CAD8]"
                />
                <h3 className="font-['Orbitron'] font-bold text-[18px] text-white mb-3 group-hover:text-shadow-neon transition-all">
                  {block.title}
                </h3>
                <p className="font-['Inter'] text-[15px] text-[#868E92] leading-relaxed">
                  {block.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
