"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Shield, Crosshair, Building2 } from "lucide-react";
import { useTranslation } from "../i18n/LanguageContext";

const icons = [Brain, Shield, Crosshair, Building2];

export function Difference() {
  const { t } = useTranslation();

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
            {t.difference.label}
          </span>
          <h2 className="font-['Orbitron'] font-bold text-[28px] md:text-[44px] text-white text-shadow-neon leading-tight">
            {t.difference.title}
          </h2>
        </motion.div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 rounded-2xl overflow-hidden relative h-[280px] lg:h-[360px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1551190822-a9ce113ac100?q=80&w=1600&auto=format&fit=crop" alt="" className="w-full h-full object-cover opacity-50 saturate-50 contrast-125" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1C24] via-[#0D1C24]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1C24]/60 via-transparent to-[#0D1C24]/60" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.difference.blocks.map((block, i) => {
            const Icon = icons[i];
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
