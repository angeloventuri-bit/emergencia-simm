"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { useTranslation } from "../i18n/LanguageContext";

const seals = ["AHA", "ERC", "ASSET", "ACLS", "ATLS", "PALS"];

export function GlobalSeal() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-[#0A0E14] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(32,202,216,0.04)_0%,transparent_65%)] pointer-events-none" />

      <div className="max-w-[1000px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#111B22] border border-[#20CAD830] rounded-[20px] p-10 md:p-14 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#20CAD8] to-transparent opacity-60" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1576671081837-49000212a370?q=80&w=1200&auto=format&fit=crop" alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.05] saturate-0 pointer-events-none rounded-[20px]" />

          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-[#20CAD810] border border-[#20CAD830] flex items-center justify-center">
              <ShieldCheck size={32} className="text-[#20CAD8] drop-shadow-[0_0_10px_#20CAD8]" strokeWidth={1.5} />
            </div>
          </div>

          <span className="font-['Orbitron'] text-[#136C72] uppercase tracking-[0.15em] text-sm mb-4 block">
            {t.globalSeal.label}
          </span>
          <h2 className="font-['Orbitron'] font-bold text-[24px] md:text-[36px] text-white text-shadow-neon mb-6 leading-tight">
            {t.globalSeal.title}
          </h2>
          <p className="font-['Inter'] text-[15px] text-[#868E92] max-w-[640px] mx-auto leading-relaxed mb-10">
            {t.globalSeal.text}
          </p>

          {/* Seal badges */}
          <div className="flex flex-wrap justify-center gap-3">
            {seals.map((seal, i) => (
              <motion.div
                key={seal}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="bg-[#0D1C24] border border-[#20CAD840] rounded-[8px] px-5 py-2.5 shadow-[0_0_12px_rgba(32,202,216,0.08)]"
              >
                <span className="font-['Orbitron'] font-bold text-[14px] text-[#20CAD8] drop-shadow-[0_0_5px_#20CAD8] tracking-[0.1em]">
                  {seal}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
