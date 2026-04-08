"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const forYou = [
  "Você faz plantão em PS e quer sentir mais segurança ao atender pacientes graves",
  "Você se formou recentemente e percebeu que a faculdade não te preparou para a realidade do plantão",
  "Você é residente e quer chegar ao R1 com uma base clínica que seus colegas não têm",
  "Você é médico experiente e quer se atualizar sem perder tempo com conteúdo superficial",
  "Você quer parar de depender do colega mais velho quando o caso complica",
  "Você quer liderar uma PCR com convicção — não apenas fazer compressões",
  "Você quer interpretar um ECG, uma gasometria ou um POCUS com velocidade e precisão",
  "Você quer dormir tranquilo depois de um plantão difícil — sabendo que fez tudo certo",
];

const notForYou = [
  "Você busca apenas um certificado para pendurar na parede",
  "Você quer um curso que \"passa rápido\" sem exigir engajamento",
  "Você acha que já sabe tudo e não precisa se atualizar",
];

export function ForWho() {
  return (
    <section className="py-24 bg-[#0D1C24] relative overflow-hidden">
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
            Qualificação de Audiência
          </span>
          <h2 className="font-['Orbitron'] font-bold text-[28px] md:text-[42px] text-white text-shadow-neon leading-tight">
            A SIMM foi construída para você se...
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Para quem É */}
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
                A SIMM é para você
              </h3>
            </div>
            <ul className="space-y-4">
              {forYou.map((item, i) => (
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

          {/* Para quem NÃO É */}
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
                  A SIMM provavelmente não é para você
                </h3>
              </div>
              <ul className="space-y-4">
                {notForYou.map((item, i) => (
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
              <p className="font-['Inter'] text-[14px] text-[#636A6F] mb-3">Sabia que...</p>
              <p className="font-['Orbitron'] font-bold text-[36px] text-[#20CAD8] drop-shadow-[0_0_10px_#20CAD8] mb-1">
                58%
              </p>
              <p className="font-['Inter'] text-[14px] text-[#B9B7BA] leading-relaxed">
                dos médicos experimentam síndrome do impostor clínico. Na emergência, essa hesitação pode
                custar uma vida. A SIMM existe para transformar isso.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
