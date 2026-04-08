"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./Button";
import { MailOpen, Check } from "lucide-react";

export function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 bg-[#0A0E14] relative border-y border-[#20CAD820]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0E2A3040] to-transparent pointer-events-none" />
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <div className="flex items-center gap-4 mb-5">
              <MailOpen size={32} className="text-[#20CAD8] drop-shadow-[0_0_8px_#20CAD8]" strokeWidth={1.5} />
              <span className="font-['Orbitron'] text-[#20CAD8] text-[12px] uppercase tracking-[0.15em] drop-shadow-[0_0_5px_#20CAD8]">
                Plantão SIMM
              </span>
            </div>
            <h2 className="font-['Orbitron'] font-bold text-[28px] md:text-[38px] text-white text-shadow-neon mb-5 leading-tight">
              Uma vez por semana. Direto ao ponto.<br className="hidden md:block" />
              O que você precisa saber para o próximo plantão.
            </h2>
            <p className="font-['Inter'] text-[15px] text-[#B9B7BA] leading-relaxed mb-5">
              Sem enrolação. Sem teoria inútil. Sem spam. Só o que faz diferença na sala de emergência.
            </p>
            <ul className="space-y-2">
              {[
                "Caso clínico da semana com raciocínio guiado",
                "Curadoria das principais revistas internacionais",
                "Ferramenta ou score em destaque",
                "Recomendações de leitura além da medicina",
                "Novidades do ecossistema SIMM",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[#20CAD8] mt-0.5 drop-shadow-[0_0_4px_#20CAD8]">
                    <Check size={15} strokeWidth={2.5} />
                  </span>
                  <span className="font-['Inter'] text-[14px] text-[#868E92]">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full bg-[#111B22] p-8 rounded-[16px] border border-[#3A4248] shadow-[0_0_30px_rgba(10,14,20,0.5)]"
          >
            {!submitted ? (
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Seu melhor email"
                  className="bg-[#0D1C24] border border-[#3A4248] rounded-[8px] h-[56px] px-6 font-['Inter'] text-[#E8E8EA] placeholder:text-[#636A6F] focus:border-[#20CAD8] focus:shadow-[0_0_0_3px_rgba(32,202,216,0.15)] focus:outline-none transition-all w-full"
                  required
                />
                <Button variant="primary" type="submit" className="w-full h-[56px]">
                  Quero receber o Plantão SIMM
                </Button>
                <span className="font-['Inter'] text-[13px] text-[#868E92] text-center mt-2">
                  +8.500 médicos já recebem. Grátis. Cancele quando quiser.
                </span>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center py-6"
              >
                <div className="w-16 h-16 rounded-full bg-[#20CAD815] border border-[#20CAD840] flex items-center justify-center mb-4">
                  <Check size={28} className="text-[#20CAD8] drop-shadow-[0_0_8px_#20CAD8]" strokeWidth={2.5} />
                </div>
                <h3 className="font-['Orbitron'] font-bold text-[20px] text-white text-shadow-neon mb-2">
                  Você está dentro!
                </h3>
                <p className="font-['Inter'] text-[14px] text-[#B9B7BA]">
                  Toda segunda-feira, direto na sua caixa de entrada.
                </p>
              </motion.div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
