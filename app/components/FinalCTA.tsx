"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./Button";
import { Zap } from "lucide-react";
import { useTranslation } from "../i18n/LanguageContext";

export function FinalCTA() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-[#0A0E14] relative overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1600&auto=format&fit=crop"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-[0.06] saturate-0 pointer-events-none"
      />
      {/* Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse,rgba(32,202,216,0.08)_0%,transparent_65%)] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#20CAD840] to-transparent" />

      <div className="max-w-[860px] mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="font-['Orbitron'] text-[#136C72] uppercase tracking-[0.15em] text-sm mb-6 block">
            {t.finalCta.label}
          </span>
          <h2 className="font-['Orbitron'] font-bold text-[28px] md:text-[44px] text-white text-shadow-neon mb-8 leading-tight">
            {t.finalCta.title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-5 font-['Inter'] text-[16px] text-[#B9B7BA] leading-relaxed mb-12"
        >
          {t.finalCta.paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
        >
          <Button variant="primary" className="gap-2 flex items-center justify-center shadow-[0_0_40px_rgba(32,202,216,0.4)]">
            <Zap size={18} />
            {t.finalCta.ctaPrimary}
          </Button>
          <Button variant="secondary" className="flex items-center justify-center">
            {t.finalCta.ctaSecondary}
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="border-t border-[#20CAD820] pt-10 mt-4 space-y-2"
        >
          <p className="font-['Orbitron'] text-[13px] md:text-[15px] text-[#636A6F] uppercase tracking-[0.15em]">
            {t.finalCta.tagline1}
          </p>
          <p className="font-['Orbitron'] text-[14px] md:text-[16px] text-[#20CAD8] drop-shadow-[0_0_8px_#20CAD8] uppercase tracking-[0.1em]">
            {t.finalCta.tagline2}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
