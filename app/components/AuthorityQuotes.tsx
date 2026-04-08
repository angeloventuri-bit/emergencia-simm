"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "../i18n/LanguageContext";

export function AuthorityQuotes() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-[#0D1C24] relative overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1600&auto=format&fit=crop" alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.04] saturate-0 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#20CAD830] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#20CAD830] to-transparent" />

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide snap-x snap-mandatory">
          {t.authorityQuotes.quotes.map((quote, i) => (
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
                {quote}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {t.authorityQuotes.quotes.map((_, i) => (
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
