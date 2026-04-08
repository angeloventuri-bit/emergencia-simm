"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useTranslation } from "../i18n/LanguageContext";

export function ForWho() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-[#0D1C24] relative overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1600&auto=format&fit=crop"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-[0.06] saturate-0 pointer-events-none"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(14,42,48,0.6)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="font-['Orbitron'] text-[#136C72] uppercase tracking-[0.15em] text-sm mb-4 block">
            {t.forWho.label}
          </span>
          <h2 className="font-['Orbitron'] font-bold text-[28px] md:text-[42px] text-white text-shadow-neon leading-tight">
            {t.forWho.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Para quem E */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0A0E14] border border-[#20CAD830] rounded-[16px] p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-[#20CAD815] border border-[#20CAD840] flex items-center justify-center">
                <Check size={16} className="text-[#20CAD8]" strokeWidth={2.5} />
              </div>
              <h3 className="font-['Orbitron'] font-bold text-[16px] text-[#20CAD8] uppercase tracking-wide drop-shadow-[0_0_5px_#20CAD8]">
                {t.forWho.forYouTitle}
              </h3>
            </div>
            <ul className="space-y-4">
              {t.forWho.forYou.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <Check
                    size={16}
                    className="text-[#20CAD8] mt-0.5 shrink-0 drop-shadow-[0_0_4px_#20CAD8]"
                    strokeWidth={2.5}
                  />
                  <span className="font-['Inter'] text-[14px] text-[#B9B7BA] leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Para quem NAO E */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            <div className="bg-[#0A0E14] border border-[#FF475730] rounded-[16px] p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#FF475710] border border-[#FF475740] flex items-center justify-center">
                  <X size={16} className="text-[#FF4757]" strokeWidth={2.5} />
                </div>
                <h3 className="font-['Orbitron'] font-bold text-[16px] text-[#FF4757] uppercase tracking-wide">
                  {t.forWho.notForYouTitle}
                </h3>
              </div>
              <ul className="space-y-4">
                {t.forWho.notForYou.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                    className="flex items-start gap-3"
                  >
                    <X
                      size={16}
                      className="text-[#FF475780] mt-0.5 shrink-0"
                      strokeWidth={2.5}
                    />
                    <span className="font-['Inter'] text-[14px] text-[#868E92] leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-[#111B22] border border-[#3A4248] rounded-[16px] p-8"
            >
              <p className="font-['Inter'] text-[14px] text-[#636A6F] mb-3">{t.forWho.statLabel}</p>
              <p className="font-['Orbitron'] font-bold text-[36px] text-[#20CAD8] drop-shadow-[0_0_10px_#20CAD8] mb-1">
                {t.forWho.statValue}
              </p>
              <p className="font-['Inter'] text-[14px] text-[#B9B7BA] leading-relaxed">
                {t.forWho.statText}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
