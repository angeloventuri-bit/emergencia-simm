"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./Button";
import { Terminal, ChevronDown } from "lucide-react";
import CountUp from "react-countup";
import { useTranslation } from "../i18n/LanguageContext";

export function Scores() {
  const { t } = useTranslation();
  const [age, setAge] = useState("");
  const [history, setHistory] = useState("");
  const [ecg, setEcg] = useState("");
  const [score, setScore] = useState<number | null>(null);

  const calculateScore = (e: React.FormEvent) => {
    e.preventDefault();
    if (!age || !history || !ecg) return;

    const calculated = (parseInt(age) > 65 ? 2 : 1) +
                       (history === "high" ? 2 : 0) +
                       (ecg === "st" ? 2 : 0);

    setScore(calculated);
  };

  return (
    <section id="ferramentas" className="py-24 bg-[#0A0E14]">
      <div className="max-w-[800px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-['Orbitron'] text-[#136C72] uppercase tracking-[0.15em] text-sm mb-4 block">
            {t.scores.label}
          </span>
          <h2 className="font-['Orbitron'] font-bold text-[32px] md:text-[48px] text-white text-shadow-neon">
            {t.scores.title}
          </h2>
          <p className="font-['Inter'] text-[#B9B7BA] mt-4">
            {t.scores.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#111B22] border border-[#3A4248] rounded-[16px] overflow-hidden"
        >
          <div className="bg-[#0D1C24] border-b border-[#3A4248] px-6 py-4 flex items-center gap-3">
            <Terminal size={20} className="text-[#20CAD8]" />
            <span className="font-['JetBrains_Mono'] text-[14px] text-[#868E92]">
              {t.scores.terminal}
            </span>
          </div>

          <div className="p-6 md:p-8">
            <form onSubmit={calculateScore} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-['Inter'] font-semibold text-[14px] text-[#B9B7BA]">
                    {t.scores.ageLabel}
                  </label>
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder={t.scores.agePlaceholder}
                    className="bg-[#0D1C24] border border-[#3A4248] rounded-[8px] h-[48px] px-4 font-['JetBrains_Mono'] text-[#E8E8EA] placeholder:text-[#636A6F] focus:border-[#20CAD8] focus:shadow-[0_0_0_3px_rgba(32,202,216,0.15)] focus:outline-none transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-['Inter'] font-semibold text-[14px] text-[#B9B7BA]">
                    {t.scores.historyLabel}
                  </label>
                  <div className="relative">
                    <select
                      value={history}
                      onChange={(e) => setHistory(e.target.value)}
                      className="w-full bg-[#0D1C24] border border-[#3A4248] rounded-[8px] h-[48px] px-4 font-['Inter'] text-[#E8E8EA] appearance-none focus:border-[#20CAD8] focus:shadow-[0_0_0_3px_rgba(32,202,216,0.15)] focus:outline-none transition-all"
                    >
                      {t.scores.historyOptions.map((opt) => (
                        <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#636A6F] pointer-events-none" />
                  </div>
                </div>

                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="font-['Inter'] font-semibold text-[14px] text-[#B9B7BA]">
                    {t.scores.ecgLabel}
                  </label>
                  <div className="relative">
                    <select
                      value={ecg}
                      onChange={(e) => setEcg(e.target.value)}
                      className="w-full bg-[#0D1C24] border border-[#3A4248] rounded-[8px] h-[48px] px-4 font-['Inter'] text-[#E8E8EA] appearance-none focus:border-[#20CAD8] focus:shadow-[0_0_0_3px_rgba(32,202,216,0.15)] focus:outline-none transition-all"
                    >
                      {t.scores.ecgOptions.map((opt) => (
                        <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#636A6F] pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button variant="secondary" type="submit" className="w-full h-[56px]">
                  {t.scores.calculate}
                </Button>
              </div>
            </form>

            <AnimatePresence>
              {score !== null && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: "auto", marginTop: 32 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  className="overflow-hidden"
                >
                  <div className={`rounded-[12px] p-6 border flex items-center justify-between ${
                    score >= 4 ? 'bg-[#FF475710] border-[#FF475740]' : score >= 2 ? 'bg-[#FFA50210] border-[#FFA50240]' : 'bg-[#2ED57310] border-[#2ED57340]'
                  }`}>
                    <div>
                      <span className="font-['JetBrains_Mono'] text-[14px] text-[#868E92] block mb-1">
                        {t.scores.resultLabel}
                      </span>
                      <span className={`font-['Inter'] font-medium text-[16px] ${
                        score >= 4 ? 'text-[#FF4757]' : score >= 2 ? 'text-[#FFA502]' : 'text-[#2ED573]'
                      }`}>
                        {score >= 4 ? t.scores.riskHigh : score >= 2 ? t.scores.riskMed : t.scores.riskLow}
                      </span>
                    </div>
                    <div className={`font-['Orbitron'] font-bold text-[48px] drop-shadow-[0_0_10px_currentColor] ${
                      score >= 4 ? 'text-[#FF4757]' : score >= 2 ? 'text-[#FFA502]' : 'text-[#2ED573]'
                    }`}>
                      <CountUp end={score} duration={1} />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
