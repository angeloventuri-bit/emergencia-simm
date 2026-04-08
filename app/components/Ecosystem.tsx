"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Cpu, Users, Wrench, RefreshCw } from "lucide-react";
import { useTranslation } from "../i18n/LanguageContext";

const icons = [Smartphone, Cpu, Users, Wrench, RefreshCw];

export function Ecosystem() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-[#0A0E14] relative overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1600&auto=format&fit=crop" alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.06] saturate-0 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,42,48,0.5)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="font-['Orbitron'] text-[#136C72] uppercase tracking-[0.15em] text-sm mb-4 block">
            {t.ecosystem.label}
          </span>
          <h2 className="font-['Orbitron'] font-bold text-[28px] md:text-[42px] text-white text-shadow-neon mb-5 leading-tight">
            {t.ecosystem.title}
          </h2>
          <p className="font-['Inter'] text-[16px] text-[#868E92] max-w-2xl mx-auto">
            {t.ecosystem.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {t.ecosystem.pillars.map((pillar, i) => {
            const Icon = icons[i];
            const isLast = i === t.ecosystem.pillars.length - 1;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className={`group relative bg-[#111B22] border border-[#3A4248] rounded-[14px] p-7 hover:bg-[#1A2730] hover:border-[#20CAD840] hover:shadow-[0_0_24px_rgba(32,202,216,0.12)] transition-all duration-400 ${
                  isLast ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-gradient-to-b from-[#20CAD8] to-transparent rounded-l-[14px] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="flex items-center justify-between mb-5">
                  <Icon
                    size={28}
                    strokeWidth={1.5}
                    className="text-[#20CAD8] drop-shadow-[0_0_6px_#20CAD8]"
                  />
                  <span className="font-['JetBrains_Mono'] text-[11px] text-[#636A6F] uppercase tracking-wider bg-[#20CAD808] border border-[#20CAD820] px-2.5 py-1 rounded-full">
                    {pillar.tag}
                  </span>
                </div>
                <h3 className="font-['Orbitron'] font-bold text-[16px] text-white mb-3 group-hover:text-shadow-neon transition-all leading-snug">
                  {pillar.title}
                </h3>
                <p className="font-['Inter'] text-[14px] text-[#868E92] leading-relaxed">
                  {pillar.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
