"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Depois do ESC, a primeira vez que entrei numa PCR no plantão, eu sabia exatamente o que fazer. Não tive que pensar — eu agia. O medo não desapareceu, mas a convicção apareceu. E isso muda tudo.",
    name: "Dra. Marina S.",
    role: "Clínica Geral",
    location: "São Paulo – SP",
    tag: "ESC",
  },
  {
    text: "Comecei a SIMM Academy no R1 e hoje me sinto outro médico. Os casos interativos mudaram meu raciocínio. Antes eu pensava em diagnóstico. Agora eu penso em conduta — e em tempo.",
    name: "Dr. Rafael O.",
    role: "Residente de Clínica",
    location: "Rio de Janeiro – RJ",
    tag: "SIMM Academy",
  },
  {
    text: "Fiz ACLS, ATLS, PALS. Todos bons. Nenhum me preparou de verdade para liderar um atendimento de emergência sob pressão real. O ESC fez isso em 2 dias.",
    name: "Dr. André P.",
    role: "Emergencista",
    location: "Belo Horizonte – MG",
    tag: "ESC",
  },
  {
    text: "A SIMM é o que eu queria que existisse quando me formei. Teria poupado 2 anos de insegurança.",
    name: "Dra. Camila F.",
    role: "Médica Plantonista",
    location: "Fortaleza – CE",
    tag: "SIMM Academy",
  },
];

const tagColors: Record<string, string> = {
  "ESC": "bg-[#20CAD815] border-[#20CAD830] text-[#20CAD8]",
  "SIMM Academy": "bg-[#087378]/20 border-[#087378]/40 text-[#1DCEDE]",
};

export function Testimonials() {
  return (
    <section className="py-24 bg-[#0D1C24] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(32,202,216,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="font-['Orbitron'] text-[#136C72] uppercase tracking-[0.15em] text-sm mb-4 block">
            Prova Social
          </span>
          <h2 className="font-['Orbitron'] font-bold text-[28px] md:text-[44px] text-white text-shadow-neon leading-tight">
            O que dizem os médicos<br className="hidden md:block" /> que passaram pela SIMM.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group bg-[#0A0E14] border border-[#3A4248] rounded-[16px] p-8 hover:bg-[#111B22] hover:border-[#20CAD840] hover:shadow-[0_0_20px_rgba(32,202,216,0.1)] transition-all duration-400 relative"
            >
              <div className="absolute top-6 right-6">
                <Quote size={24} className="text-[#20CAD820]" />
              </div>

              <span className={`inline-block font-['Outfit'] text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full border mb-5 ${tagColors[t.tag]}`}>
                {t.tag}
              </span>

              <p className="font-['Inter'] text-[15px] text-[#B9B7BA] leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-5 border-t border-[#3A4248]/50">
                <div className="w-10 h-10 rounded-full bg-[#1A2730] border border-[#3A4248] group-hover:border-[#20CAD840] transition-colors flex items-center justify-center">
                  <span className="font-['Orbitron'] text-[12px] text-[#20CAD8]">
                    {t.name.split(" ").map(w => w[0]).slice(0, 2).join("")}
                  </span>
                </div>
                <div>
                  <p className="font-['Inter'] font-semibold text-[14px] text-white">{t.name}</p>
                  <p className="font-['Inter'] text-[12px] text-[#636A6F]">
                    {t.role} · {t.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center font-['JetBrains_Mono'] text-[12px] text-[#636A6F] mt-8 uppercase tracking-wider"
        >
          +10.000 médicos já passaram pela SIMM · Depoimentos verificados
        </motion.p>
      </div>
    </section>
  );
}
