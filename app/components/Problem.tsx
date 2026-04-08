"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "../i18n/LanguageContext";

export function Problem() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-[#0A0E14] relative overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1600&auto=format&fit=crop"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-[0.08] saturate-0 pointer-events-none"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(14,42,48,0.6)_0%,transparent_65%)] pointer-events-none" />

      <div className="max-w-[860px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="font-['Orbitron'] text-[#136C72] uppercase tracking-[0.15em] text-sm mb-4 block">
            {t.problem.label}
          </span>
          <h2 className="font-['Orbitron'] font-bold text-[28px] md:text-[44px] text-white text-shadow-neon leading-tight">
            {t.problem.title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="space-y-6 font-['Inter'] text-[16px] md:text-[17px] text-[#B9B7BA] leading-[1.8]"
        >
          {t.problem.paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </motion.div>

        {/* Pull Quote */}
        <motion.blockquote
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 relative pl-6 border-l-2 border-[#20CAD8]"
        >
          <div className="absolute top-0 left-0 bottom-0 w-[2px] shadow-[0_0_12px_#20CAD8]" />
          <p className="font-['Inter'] text-[18px] md:text-[22px] text-white leading-relaxed italic">
            &quot;{t.problem.quote}{" "}
            <span className="text-[#20CAD8] not-italic drop-shadow-[0_0_6px_#20CAD8]">
              {t.problem.quoteHighlight}
            </span>&quot;
          </p>
        </motion.blockquote>

        {/* A Virada */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <h2 className="font-['Orbitron'] font-bold text-[26px] md:text-[38px] text-white text-shadow-neon mb-6">
            {t.problem.turnTitle}
          </h2>
          <div className="space-y-5 font-['Inter'] text-[16px] text-[#B9B7BA] leading-relaxed max-w-[700px] mx-auto">
            {t.problem.turnParagraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
            <p className="text-[18px] text-[#20CAD8] drop-shadow-[0_0_6px_#20CAD8] font-medium">
              {t.problem.turnHighlight}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
