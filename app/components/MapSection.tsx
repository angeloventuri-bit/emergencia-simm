"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useTranslation } from "../i18n/LanguageContext";

const PINS = [
  { top: "22%", left: "25%", large: false },
  { top: "35%", left: "42%", large: true },
  { top: "55%", left: "55%", large: false },
  { top: "68%", left: "38%", large: true },
  { top: "45%", left: "30%", large: false },
  { top: "30%", left: "60%", large: false },
  { top: "60%", left: "62%", large: false },
  { top: "75%", left: "48%", large: true },
  { top: "20%", left: "70%", large: false },
  { top: "50%", left: "18%", large: false },
  { top: "40%", left: "72%", large: false },
  { top: "80%", left: "30%", large: false },
  { top: "15%", left: "50%", large: false },
  { top: "65%", left: "75%", large: false },
  { top: "28%", left: "35%", large: false },
  { top: "58%", left: "20%", large: false },
  { top: "85%", left: "60%", large: false },
  { top: "42%", left: "50%", large: true },
  { top: "72%", left: "44%", large: false },
  { top: "33%", left: "78%", large: false },
];

export function MapSection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-[#0D1C24] relative overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop" alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.15] saturate-0 pointer-events-none" />
      {/* Abstract map node field */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none flex items-center justify-center">
        <div className="w-full h-full max-w-[1200px] relative mx-auto">
          {PINS.map((pin, i) => (
            <motion.div
              key={i}
              className="absolute bg-[#20CAD8] rounded-full"
              style={{
                top: pin.top,
                left: pin.left,
                width: pin.large ? 12 : 6,
                height: pin.large ? 12 : 6,
              }}
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(32,202,216,0)",
                  "0 0 0 10px rgba(32,202,216,0.2)",
                  "0 0 0 0 rgba(32,202,216,0)",
                ],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 2 + (i % 3) * 0.5,
                repeat: Infinity,
                delay: (i * 0.17) % 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 max-w-[520px]"
          >
            <span className="font-['Orbitron'] text-[#136C72] uppercase tracking-[0.15em] text-sm mb-4 block">
              {t.map.label}
            </span>
            <h2 className="font-['Orbitron'] font-bold text-[32px] md:text-[40px] text-white text-shadow-neon mb-6">
              {t.map.title}
            </h2>
            <p className="font-['Inter'] text-[16px] text-[#B9B7BA] leading-relaxed mb-6">
              {t.map.text}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <MapPin size={14} className="text-[#20CAD8]" strokeWidth={2} />
              <span className="font-['JetBrains_Mono'] text-[12px] text-[#636A6F]">
                {t.map.pinNote}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-end text-center md:text-right gap-8"
          >
            {t.map.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center md:items-end">
                <span className="font-['Orbitron'] font-bold text-[48px] md:text-[56px] text-[#20CAD8] drop-shadow-[0_0_15px_#20CAD8] leading-none mb-1">
                  {stat.value}
                </span>
                <span className="font-['JetBrains_Mono'] text-[13px] text-[#868E92] uppercase tracking-[0.15em]">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
