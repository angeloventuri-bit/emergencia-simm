"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./Button";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "../i18n/LanguageContext";

const teacherMeta = [
  {
    photo: "https://simmacademy.emergenciasimm.com.br/wp-content/uploads/2026/03/Ahmed.png",
    initials: "AA",
  },
  {
    photo: "https://simmacademy.emergenciasimm.com.br/wp-content/uploads/2026/03/Armando.png",
    initials: "AM",
  },
  {
    photo: "https://simmacademy.emergenciasimm.com.br/wp-content/uploads/2026/03/Luiz.png",
    initials: "WR",
  },
];

export function Teachers() {
  const { t } = useTranslation();

  const teachers = t.teachers.list.map((teacher, i) => ({
    ...teacher,
    photo: teacherMeta[i]?.photo ?? "",
    initials: teacherMeta[i]?.initials ?? "",
  }));

  return (
    <section id="quem-ensina" className="py-24 bg-[#0A0E14] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(14,42,48,0.5)_0%,transparent_65%)] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-['Orbitron'] text-[#136C72] uppercase tracking-[0.15em] text-sm mb-4 block">
            {t.teachers.label}
          </span>
          <h2 className="font-['Orbitron'] font-bold text-[28px] md:text-[44px] text-white text-shadow-neon mb-5 leading-tight">
            {t.teachers.title}
          </h2>
          <p className="font-['Inter'] text-[15px] text-[#868E92] max-w-2xl mx-auto leading-relaxed">
            {t.teachers.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {teachers.map((teacher, i) => (
            <motion.div
              key={teacher.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="group bg-[#111B22] border border-[#3A4248] rounded-[16px] p-8 hover:bg-[#1A2730] hover:border-[#20CAD840] hover:shadow-[0_0_24px_rgba(32,202,216,0.12)] transition-all duration-400 flex flex-col"
            >
              {/* Photo + Name */}
              <div className="flex flex-col items-center mb-6">
                <div className="w-24 h-24 rounded-full bg-[#0D1C24] border-2 border-[#20CAD840] group-hover:border-[#20CAD8] transition-colors overflow-hidden shadow-[0_0_12px_rgba(32,202,216,0.1)] group-hover:shadow-[0_0_20px_rgba(32,202,216,0.25)] mb-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={teacher.photo}
                    alt={teacher.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <p className="font-['Inter'] font-semibold text-[16px] text-white group-hover:text-[#20CAD8] transition-colors text-center">
                  {teacher.name}
                </p>
                <p className="font-['Inter'] text-[13px] text-[#636A6F] text-center mt-1">{teacher.title}</p>
              </div>

              <ul className="font-['Inter'] text-[12px] text-[#868E92] leading-relaxed mb-5 flex-1 space-y-1.5">
                {teacher.bio.map((item, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="text-[#20CAD8] mt-1 shrink-0 text-[8px]">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-auto justify-center">
                {teacher.areas.map((area) => (
                  <span
                    key={area}
                    className="font-['JetBrains_Mono'] text-[11px] text-[#20CAD8] bg-[#20CAD810] border border-[#20CAD820] px-2.5 py-1 rounded-full"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-['Inter'] text-[14px] text-[#636A6F] mb-5">
            {t.teachers.footnote}
          </p>
          <a href="https://simmacademy.emergenciasimm.com.br/#professores" target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" className="gap-2 flex items-center mx-auto">
              {t.teachers.cta} <ArrowRight size={16} />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
