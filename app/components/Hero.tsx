"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./Button";
import CountUp from "react-countup";
import { useTranslation } from "../i18n/LanguageContext";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 overflow-hidden isolate">
      {/* Background Image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1920&auto=format&fit=crop"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-[0.12] saturate-0 scale-105 pointer-events-none"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E14] via-[#0A0E14]/60 to-[#0A0E14] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0E14]/80 via-transparent to-[#0A0E14]/80 pointer-events-none" />

      {/* Glow Radial */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-glow-radial rounded-full blur-[120px] -z-10" />

      {/* Pre-headline */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mb-8 px-5 py-2.5 rounded-full border border-[#20CAD830] bg-[#20CAD808] text-center backdrop-blur-sm"
      >
        <span className="font-['JetBrains_Mono'] text-[10px] md:text-[12px] text-[#20CAD8] tracking-[0.12em] uppercase drop-shadow-[0_0_6px_#20CAD8]">
          {t.hero.preHeadline}
        </span>
      </motion.div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-[960px] w-full px-6">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src="/assets/c9158a0e89b98dc498a1227745e924d55e9157f7.png"
            alt="SIMM Icon"
            width={80}
            height={80}
            className="h-[56px] lg:h-[80px] w-auto mb-6 filter-neon-logo filter-neon-pulse"
          />
        </motion.div>

        {/* Headline — smaller, cleaner */}
        <h1 className="font-['Orbitron'] font-extrabold text-[28px] leading-[36px] md:text-[42px] md:leading-[52px] lg:text-[52px] lg:leading-[62px] text-white text-shadow-neon mb-5 uppercase tracking-[0.02em]">
          {t.hero.headline.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.04,
                delay: index * 0.02 + 0.4,
              }}
            >
              {char}
            </motion.span>
          ))}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
            className="inline-block w-[3px] h-[28px] md:h-[42px] lg:h-[52px] bg-[#20CAD8] ml-1.5 align-middle shadow-[0_0_10px_#20CAD8]"
          />
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="font-['Inter'] text-[15px] lg:text-[17px] text-[#B9B7BA] max-w-[640px] mb-8 leading-relaxed"
        >
          {t.hero.subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-5 w-full sm:w-auto"
        >
          <Button variant="primary" className="w-full sm:w-auto !px-6 !py-3 !text-[14px]">
            {t.hero.ctaPrimary}
          </Button>
          <Button variant="secondary" className="w-full sm:w-auto !px-6 !py-3 !text-[14px]">
            {t.hero.ctaSecondary}
          </Button>
        </motion.div>

        {/* Credibility micro-text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.6 }}
          className="font-['Inter'] text-[12px] text-[#636A6F] mb-12"
        >
          {t.hero.credibility}
        </motion.p>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.6 }}
          className="w-full max-w-[720px] bg-[#111B22]/70 backdrop-blur-md border border-[#3A4248]/50 rounded-[16px] px-6 py-5 flex flex-wrap items-center justify-center gap-4 lg:gap-0 lg:justify-between"
        >
          {[
            { value: 10000, suffix: "+", label: t.hero.stats.trained },
            { value: 16, suffix: "", label: t.hero.stats.courses },
            { value: 27, suffix: "", label: t.hero.stats.states },
            { value: 6, suffix: " anos", label: t.hero.stats.years },
          ].map((stat, i) => (
            <div key={stat.label} className="contents">
              {i > 0 && <div className="w-[1px] h-8 bg-[#3A4248]/60 hidden lg:block" />}
              <div className="flex flex-col items-center min-w-[100px]">
                <span className="font-['Orbitron'] font-bold text-[22px] lg:text-[26px] text-[#20CAD8] drop-shadow-[0_0_8px_#20CAD8]">
                  <CountUp end={stat.value} suffix={stat.suffix} duration={2.5} delay={2.6} separator="." />
                </span>
                <span className="font-['Inter'] text-[10px] text-[#868E92] uppercase tracking-[0.1em] mt-0.5 text-center">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ECG Line Decorator */}
      <div className="absolute bottom-[10%] left-0 w-full h-[2px] opacity-15 pointer-events-none overflow-hidden">
        <div className="w-full h-full animate-ecg bg-ecg-line shadow-[0_0_10px_#20CAD8]" />
      </div>
    </section>
  );
}
