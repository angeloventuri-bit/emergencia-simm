"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./Button";
import { Stethoscope, Cpu, Clock } from "lucide-react";
import { useTranslation } from "../i18n/LanguageContext";

export function Products() {
  const { t } = useTranslation();

  return (
    <section id="cursos" className="py-24 bg-[#0A0E14] relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-['Orbitron'] text-[#136C72] uppercase tracking-[0.15em] text-sm mb-4 block">
            {t.products.label}
          </span>
          <h2 className="font-['Orbitron'] font-bold text-[28px] md:text-[44px] text-white text-shadow-neon mb-4">
            {t.products.title}
          </h2>
          <p className="font-['Inter'] text-[16px] text-[#868E92] max-w-2xl mx-auto">
            {t.products.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card ESC */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="group relative bg-[#111B22] border border-[#3A4248] rounded-[12px] p-8 overflow-hidden hover:bg-[#1A2730] hover:border-[#20CAD840] hover:shadow-[0_0_20px_rgba(32,202,216,0.15)] hover:-translate-y-1 transition-all duration-500 flex flex-col"
          >
            <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-[#20CAD8]" />
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#20CAD8] to-transparent -translate-x-full group-hover:animate-[ecgSweep_0.4s_ease-out_forwards]" />

            <span className="inline-block bg-[#20CAD815] border border-[#20CAD830] text-[#20CAD8] font-['Outfit'] font-medium text-xs uppercase tracking-[0.1em] px-3 py-1 rounded-full mb-6 self-start">
              {t.products.esc.tag}
            </span>

            <div className="w-full h-[180px] rounded-[8px] overflow-hidden mb-6 relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop"
                alt="Medical simulation training"
                className="w-full h-full object-cover opacity-60 saturate-50 contrast-125 brightness-90 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111B22] via-transparent to-transparent" />
            </div>

            <Stethoscope className="text-[#20CAD8] mb-5 drop-shadow-[0_0_5px_#20CAD8]" size={32} strokeWidth={1.5} />

            <h3 className="font-['Orbitron'] font-bold text-[22px] text-white mb-3 group-hover:text-shadow-neon transition-all">
              {t.products.esc.title}
            </h3>

            <p className="font-['Inter'] text-[15px] text-[#B9B7BA] mb-6 leading-relaxed flex-1">
              {t.products.esc.text}
            </p>

            <div className="flex items-center gap-2 mb-6">
              <Clock size={14} className="text-[#636A6F]" />
              <span className="font-['JetBrains_Mono'] text-[12px] text-[#636A6F]">
                {t.products.esc.meta}
              </span>
            </div>

            <Button variant="secondary" className="w-full sm:w-auto mt-auto">
              {t.products.esc.cta}
            </Button>
          </motion.div>

          {/* Card SIMM Academy */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative bg-[#111B22] border border-[#3A4248] rounded-[12px] p-8 overflow-hidden hover:bg-[#1A2730] hover:border-[#20CAD840] hover:shadow-[0_0_20px_rgba(32,202,216,0.15)] hover:-translate-y-1 transition-all duration-500 flex flex-col"
          >
            <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-gradient-to-b from-[#1DCEDE] to-[#087378]" />
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#20CAD8] to-transparent -translate-x-full group-hover:animate-[ecgSweep_0.4s_ease-out_forwards]" />

            <span className="inline-block bg-[#20CAD815] border border-[#20CAD830] text-[#20CAD8] font-['Outfit'] font-medium text-xs uppercase tracking-[0.1em] px-3 py-1 rounded-full mb-6 self-start">
              {t.products.academy.tag}
            </span>

            <div className="w-full h-[180px] rounded-[8px] overflow-hidden mb-6 relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop"
                alt="Doctor with tablet"
                className="w-full h-full object-cover opacity-60 saturate-50 contrast-125 brightness-90 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111B22] via-transparent to-transparent" />
            </div>

            <Cpu className="text-[#20CAD8] mb-5 drop-shadow-[0_0_5px_#20CAD8]" size={32} strokeWidth={1.5} />

            <h3 className="font-['Orbitron'] font-bold text-[22px] text-white mb-3 group-hover:text-shadow-neon transition-all">
              {t.products.academy.title}
            </h3>

            <p className="font-['Inter'] text-[15px] text-[#B9B7BA] mb-6 leading-relaxed flex-1">
              {t.products.academy.text}
            </p>

            <div className="flex items-center gap-2 mb-6">
              <Clock size={14} className="text-[#636A6F]" />
              <span className="font-['JetBrains_Mono'] text-[12px] text-[#636A6F]">
                {t.products.academy.meta}
              </span>
            </div>

            <Button variant="primary" className="w-full sm:w-auto mt-auto">
              {t.products.academy.cta}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
