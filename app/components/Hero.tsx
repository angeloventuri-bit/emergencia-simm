"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./Button";
import CountUp from "react-countup";
import { useTranslation } from "../i18n/LanguageContext";
import { whatsappUrl } from "../lib/whatsapp";

const ESC_WA_URL = whatsappUrl(
  "Olá! Quero saber mais sobre o curso presencial ESC — Emergência Sob Controle."
);

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 md:pt-20 md:pb-16 overflow-hidden isolate">
      {/* Background Image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1920&auto=format&fit=crop"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E14] via-[#0A0E14]/30 via-40% to-[#0A0E14] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0E14]/90 via-transparent to-[#0A0E14]/90 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-[#0A0E14] via-[#0A0E14]/80 to-transparent pointer-events-none" />

      {/* Teal glow accent */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse,rgba(32,202,216,0.12)_0%,rgba(32,202,216,0.04)_40%,transparent_70%)] rounded-full blur-[60px] pointer-events-none" />

      {/* Pre-headline — hidden on very small screens, compact on mobile */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mb-6 md:mb-10 mx-4 px-4 py-2 rounded-full border border-[#20CAD830] bg-[#0A0E14]/60 backdrop-blur-md text-center max-w-[340px] md:max-w-none"
      >
        <span className="font-['JetBrains_Mono'] text-[8px] md:text-[12px] text-[#20CAD8] tracking-[0.08em] md:tracking-[0.12em] uppercase drop-shadow-[0_0_6px_#20CAD8] leading-tight">
          {t.hero.preHeadline}
        </span>
      </motion.div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-[960px] w-full px-5 md:px-6">
        {/* Headline */}
        <h1 className="font-['Orbitron'] font-extrabold text-[20px] leading-[28px] md:text-[40px] md:leading-[50px] lg:text-[50px] lg:leading-[60px] text-white text-shadow-neon mb-4 md:mb-6 uppercase tracking-[0.01em] md:tracking-[0.02em]">
          {t.hero.headline.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.04,
                delay: index * 0.02 + 0.3,
              }}
            >
              {char}
            </motion.span>
          ))}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
            className="inline-block w-[2px] h-[20px] md:h-[40px] lg:h-[50px] bg-[#20CAD8] ml-1 align-middle shadow-[0_0_10px_#20CAD8]"
          />
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="font-['Inter'] text-[14px] md:text-[15px] lg:text-[17px] text-[#D0D0D2] max-w-[640px] mb-6 md:mb-9 leading-relaxed px-2"
        >
          {t.hero.subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 mb-4 md:mb-5 w-full sm:w-auto"
        >
          <a
            href={ESC_WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button variant="primary" className="w-full sm:w-auto !px-5 !py-3 md:!px-7 md:!py-3.5 !text-[13px] md:!text-[14px]">
              {t.hero.ctaPrimary}
            </Button>
          </a>
          <Button variant="secondary" className="w-full sm:w-auto !px-5 !py-3 md:!px-7 md:!py-3.5 !text-[13px] md:!text-[14px]">
            {t.hero.ctaSecondary}
          </Button>
        </motion.div>

        {/* Credibility */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0, duration: 0.6 }}
          className="font-['Inter'] text-[11px] md:text-[12px] text-[#868E92] mb-8 md:mb-14 px-4"
        >
          {t.hero.credibility}
        </motion.p>

        {/* Stats Bar — glass card, 2x2 grid on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.6 }}
          className="w-full max-w-[740px] bg-[#0D1C24]/60 backdrop-blur-xl border border-[#20CAD8]/15 rounded-2xl px-4 py-5 md:px-8 md:py-6 grid grid-cols-2 md:flex md:flex-wrap md:items-center md:justify-between gap-4 md:gap-0 shadow-[0_0_40px_rgba(32,202,216,0.06),inset_0_1px_0_rgba(32,202,216,0.08)]"
        >
          {[
            { value: 10000, suffix: "+", label: t.hero.stats.trained },
            { value: 16, suffix: "", label: t.hero.stats.courses },
            { value: 27, suffix: "", label: t.hero.stats.states },
            { value: 6, suffix: " anos", label: t.hero.stats.years },
          ].map((stat, i) => (
            <div key={stat.label} className="md:contents">
              {i > 0 && <div className="w-[1px] h-8 bg-[#20CAD8]/10 hidden md:block" />}
              <div className="flex flex-col items-center">
                <span className="font-['Orbitron'] font-bold text-[20px] md:text-[22px] lg:text-[26px] text-[#20CAD8] drop-shadow-[0_0_8px_#20CAD8]">
                  <CountUp end={stat.value} suffix={stat.suffix} duration={2.5} delay={2.4} separator="." />
                </span>
                <span className="font-['Inter'] text-[9px] md:text-[10px] text-[#868E92] uppercase tracking-[0.08em] md:tracking-[0.1em] mt-0.5 text-center">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ECG Line */}
      <div className="absolute bottom-[8%] left-0 w-full h-[2px] opacity-10 pointer-events-none overflow-hidden">
        <div className="w-full h-full animate-ecg bg-ecg-line shadow-[0_0_10px_#20CAD8]" />
      </div>
    </section>
  );
}
