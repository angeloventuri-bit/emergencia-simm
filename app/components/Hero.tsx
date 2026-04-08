"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./Button";
import CountUp from "react-countup";

const HEADLINE = "Medicina de Emergência. Dessa vez, em mãos de emergencistas.";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden bg-hero-gradient isolate">
      {/* Glow Radial */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-glow-radial rounded-full blur-[100px] -z-10" />

      {/* Particles Field Mock */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-screen bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

      {/* Pre-headline faixa */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mb-10 px-4 py-2 rounded-full border border-[#20CAD830] bg-[#20CAD808] text-center"
      >
        <span className="font-['JetBrains_Mono'] text-[11px] md:text-[12px] text-[#20CAD8] tracking-[0.12em] uppercase drop-shadow-[0_0_6px_#20CAD8]">
          Desde 2019 · Preceptores do HC-USP e InCor · +10.000 médicos formados · 16 cursos
        </span>
      </motion.div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-[860px] w-full px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src="/assets/c9158a0e89b98dc498a1227745e924d55e9157f7.png"
            alt="SIMM Icon"
            width={104}
            height={104}
            className="h-[72px] lg:h-[104px] w-auto mb-8 filter-neon-logo filter-neon-pulse"
          />
        </motion.div>

        <h1 className="font-['Orbitron'] font-extrabold text-[36px] leading-[44px] lg:text-[68px] lg:leading-[76px] text-white text-shadow-neon mb-6 uppercase tracking-[0.03em]">
          {HEADLINE.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.06,
                delay: index * 0.03 + 0.5,
              }}
            >
              {char}
            </motion.span>
          ))}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
            className="inline-block w-1 h-[36px] lg:h-[64px] bg-[#20CAD8] ml-2 align-middle shadow-[0_0_10px_#20CAD8]"
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.6 }}
          className="font-['Inter'] text-[16px] lg:text-[18px] text-[#B9B7BA] max-w-2xl mb-10 leading-relaxed"
        >
          Nascemos dentro do maior complexo hospitalar da América Latina. Desenvolvemos médicos
          que agem com convicção quando o paciente mais precisa — da teoria à beira do leito, do
          primeiro plantão à maestria clínica.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-6 w-full sm:w-auto"
        >
          <Button variant="primary" className="w-full sm:w-auto">
            Quero o curso presencial — ESC
          </Button>
          <Button variant="secondary" className="w-full sm:w-auto">
            Acessar a SIMM Academy — Online
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6, duration: 0.6 }}
          className="font-['Inter'] text-[13px] text-[#636A6F] mb-16"
        >
          +10.000 médicos treinados. Professores do HC-USP, InCor e Sírio-Libanês. Presente em todos os estados do Brasil.
        </motion.p>

        {/* Barra de Credibilidade */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.8, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-6 lg:gap-12"
        >
          {[
            { value: 10000, suffix: "+", label: "Médicos Treinados", prefix: "" },
            { value: 16, suffix: "", label: "Cursos Desenvolvidos", prefix: "" },
            { value: 27, suffix: "", label: "Estados Alcançados", prefix: "" },
            { value: 6, suffix: " anos", label: "De Operação", prefix: "" },
          ].map((stat, i) => (
            <div key={stat.label} className="contents">
              {i > 0 && <div className="w-[1px] h-10 bg-[#3A4248] hidden sm:block" />}
              <div className="flex flex-col items-center">
                <span className="font-['Orbitron'] font-bold text-[28px] lg:text-[32px] text-[#20CAD8] drop-shadow-[0_0_8px_#20CAD8]">
                  <CountUp end={stat.value} suffix={stat.suffix} duration={2.5} delay={3} separator="." />
                </span>
                <span className="font-['Inter'] text-[12px] text-[#868E92] uppercase tracking-[0.1em] mt-1 text-center max-w-[100px]">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ECG Line Decorator */}
      <div className="absolute bottom-[15%] left-0 w-full h-[2px] opacity-20 pointer-events-none overflow-hidden">
        <div className="w-full h-full animate-ecg bg-ecg-line shadow-[0_0_10px_#20CAD8]" />
      </div>
    </section>
  );
}
