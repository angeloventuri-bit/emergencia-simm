"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./Button";
import { FileText, Download } from "lucide-react";
import { useTranslation } from "../i18n/LanguageContext";
import { whatsappUrl } from "../lib/whatsapp";

export function Fluxogramas() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-[#0D1C24] relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-['Orbitron'] text-[#136C72] uppercase tracking-[0.15em] text-sm mb-4 block">
            {t.fluxogramas.label}
          </span>
          <h2 className="font-['Orbitron'] font-bold text-[32px] md:text-[48px] text-white text-shadow-neon">
            {t.fluxogramas.title}
          </h2>
          <p className="font-['Inter'] text-[#868E92] mt-4 max-w-lg mx-auto">
            {t.fluxogramas.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.fluxogramas.list.map((flux, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-[#111B22] border border-[#3A4248] rounded-[12px] p-6 hover:bg-[#1A2730] hover:border-[#20CAD840] hover:shadow-[0_0_20px_rgba(32,202,216,0.15)] hover:-translate-y-1 transition-all group"
            >
              <div className="h-[120px] bg-[#0A0E14] border border-[#3A4248] rounded-[8px] mb-6 flex items-center justify-center relative overflow-hidden">
                <FileText className="text-[#3A4248] group-hover:text-[#20CAD840] transition-colors" size={48} />
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#20CAD8] to-transparent -translate-x-full group-hover:animate-[ecgSweep_0.4s_ease-out_forwards]" />
              </div>

              <div className="mb-4">
                <span className="inline-block bg-[#20CAD815] border border-[#20CAD830] text-[#20CAD8] font-['Outfit'] font-medium text-[12px] uppercase tracking-[0.1em] px-3 py-1 rounded-full mb-3">
                  PDF
                </span>
                <h3 className="font-['Inter'] font-semibold text-[18px] text-white mb-1">
                  {flux.title}
                </h3>
                <p className="font-['Inter'] text-[14px] text-[#868E92]">
                  {flux.subtitle}
                </p>
              </div>

              <a
                href={whatsappUrl(
                  `Olá! Gostaria de receber o fluxograma "${flux.title}".`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button variant="secondary" className="w-full gap-2 flex items-center justify-center text-[14px] !py-2">
                  <Download size={16} />
                  {t.fluxogramas.downloadBtn}
                </Button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
