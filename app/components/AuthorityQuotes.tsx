"use client";

import React from "react";
import { motion } from "framer-motion";

const quotes = [
  {
    text: "Enquanto cursos tradicionais focam em memorização, nós desenvolvemos sua capacidade de triagem mental e tomada de decisão sob pressão extrema.",
  },
  {
    text: "Nascemos dentro do maior complexo hospitalar da América Latina. Nosso ensino não é baseado apenas em livros, mas na experiência de quem trabalha nas salas de emergência mais críticas do país.",
  },
  {
    text: "O ACLS ensina a tratar uma parada cardiorrespiratória. Nós ensinamos você a evitar que ela aconteça.",
  },
  {
    text: "Do ultrassom à gasometria, cada ferramenta é ensinada com um único propósito: precisão diagnóstica imediata para aumentar a chance de sobrevida do seu paciente.",
  },
  {
    text: "Ao entrar para a SIMM, você não compra um curso; você passa a fazer parte de um ecossistema de médicos que buscam maestria técnica e segurança profissional.",
  },
];

export function AuthorityQuotes() {
  return (
    <section className="py-20 bg-[#0D1C24] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#20CAD830] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#20CAD830] to-transparent" />

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide snap-x snap-mandatory">
          {quotes.map((quote, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="snap-start shrink-0 w-[300px] md:w-[380px] bg-[#0A0E14] border border-[#20CAD830] rounded-[14px] p-7 shadow-[0_0_20px_rgba(32,202,216,0.06)] relative"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#20CAD8] via-[#087378] to-transparent rounded-t-[14px]" />
              <span className="font-['Orbitron'] text-[48px] text-[#20CAD820] leading-none mb-4 block">
                &ldquo;
              </span>
              <p className="font-['Inter'] text-[15px] text-[#B9B7BA] leading-relaxed">
                {quote.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {quotes.map((_, i) => (
            <div
              key={i}
              className={`rounded-full transition-all ${i === 0 ? "w-5 h-1.5 bg-[#20CAD8]" : "w-1.5 h-1.5 bg-[#3A4248]"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
