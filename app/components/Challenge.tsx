"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeartPulse, Zap, CircleCheck, CircleX } from "lucide-react";
import { Button } from "./Button";

export function Challenge() {
  const [status, setStatus] = useState<"idle" | "playing" | "success" | "fail">("idle");

  const handleStart = () => setStatus("playing");
  const handleSuccess = () => setStatus("success");
  const handleFail = () => setStatus("fail");
  const handleReset = () => setStatus("idle");

  return (
    <section className="py-24 bg-[#0A0E14] relative flex justify-center items-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,42,48,0.4)_0%,transparent_70%)] pointer-events-none" />
      <div className="max-w-[640px] w-full px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="font-['Orbitron'] text-[#136C72] uppercase tracking-[0.15em] text-sm mb-3 block">
            Desafio da Semana
          </span>
          <h2 className="font-['Orbitron'] font-bold text-[28px] md:text-[36px] text-white text-shadow-neon mb-4">
            Você consegue salvar este paciente?
          </h2>
          <p className="font-['Inter'] text-[15px] text-[#B9B7BA] leading-relaxed max-w-lg mx-auto">
            Todo domingo, um novo caso clínico curto e interativo. Baseado em pacientes reais atendidos no
            HC-USP. Você recebe os dados, toma as decisões e vê as consequências — em tempo real.
          </p>
          <p className="font-['Inter'] text-[13px] text-[#636A6F] mt-3">
            Leva 3 minutos. Não precisa de login. E pode mudar como você pensa sobre o próximo caso grave que
            cruzar a porta do seu PS.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#0E2A30] border border-[#20CAD830] rounded-[16px] p-8 md:p-10 shadow-[0_0_30px_rgba(32,202,216,0.15)] text-center relative overflow-hidden min-h-[400px]"
        >
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#20CAD8] to-transparent opacity-50" />

          <AnimatePresence mode="wait">
            {status === "idle" && (
              <motion.div
                key="idle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col items-center"
              >
                <HeartPulse
                  size={48}
                  strokeWidth={1.5}
                  className="text-[#20CAD8] mb-6 drop-shadow-[0_0_10px_#20CAD8] filter-neon-pulse"
                />
                <span className="font-['JetBrains_Mono'] text-[12px] text-[#20CAD8] uppercase tracking-[0.1em] mb-4 bg-[#20CAD810] px-3 py-1 rounded">
                  Desafio #42 · HC-USP
                </span>
                <h3 className="font-['Orbitron'] font-bold text-[20px] md:text-[24px] text-white text-shadow-neon mb-4 uppercase">
                  Caso Clínico
                </h3>
                <p className="font-['Inter'] text-[15px] text-[#B9B7BA] mb-8 leading-relaxed max-w-[420px]">
                  Homem, 58 anos, relata dor torácica opressiva irradiando para braço esquerdo há 40 minutos.
                  Sudorese fria. PA: 160×90. FC: 102. SatO₂: 96%. ECG ainda não realizado. O que você faz primeiro?
                </p>
                <Button variant="primary" onClick={handleStart} className="gap-2 flex items-center shadow-[0_0_30px_rgba(32,202,216,0.5)]">
                  <Zap size={18} />
                  Aceitar o Desafio
                </Button>
              </motion.div>
            )}

            {status === "playing" && (
              <motion.div
                key="playing"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col items-center w-full"
              >
                <h3 className="font-['Orbitron'] font-bold text-[18px] md:text-[20px] text-white mb-6 uppercase">
                  Qual é a conduta imediata?
                </h3>
                <div className="flex flex-col gap-4 w-full">
                  <button
                    onClick={handleSuccess}
                    className="w-full text-left bg-[#0D1C24] border border-[#3A4248] rounded-[8px] p-4 text-[#E8E8EA] hover:border-[#20CAD8] hover:bg-[#20CAD810] transition-all font-['Inter']"
                  >
                    A. Realizar ECG em até 10 minutos
                  </button>
                  <button
                    onClick={handleFail}
                    className="w-full text-left bg-[#0D1C24] border border-[#3A4248] rounded-[8px] p-4 text-[#E8E8EA] hover:border-[#20CAD8] hover:bg-[#20CAD810] transition-all font-['Inter']"
                  >
                    B. Administrar morfina imediatamente para analgesia
                  </button>
                  <button
                    onClick={handleFail}
                    className="w-full text-left bg-[#0D1C24] border border-[#3A4248] rounded-[8px] p-4 text-[#E8E8EA] hover:border-[#20CAD8] hover:bg-[#20CAD810] transition-all font-['Inter']"
                  >
                    C. Aguardar resultado das enzimas cardíacas
                  </button>
                  <button
                    onClick={handleFail}
                    className="w-full text-left bg-[#0D1C24] border border-[#3A4248] rounded-[8px] p-4 text-[#E8E8EA] hover:border-[#20CAD8] hover:bg-[#20CAD810] transition-all font-['Inter']"
                  >
                    D. Solicitar ecocardiograma de urgência
                  </button>
                </div>
              </motion.div>
            )}

            {status === "success" && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col items-center w-full"
              >
                <CircleCheck
                  size={48}
                  strokeWidth={1.5}
                  className="text-[#2ED573] mb-4 drop-shadow-[0_0_10px_#2ED573]"
                />
                <h3 className="font-['Orbitron'] font-bold text-[22px] text-white mb-2 uppercase text-shadow-neon text-center">
                  Parabéns. Você salvou o paciente.
                </h3>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="w-full flex flex-col items-center border-t border-[#2ED57340] pt-6 mt-4"
                >
                  <p className="font-['Inter'] text-[14px] text-[#B9B7BA] mb-5 text-center leading-relaxed">
                    Mas esse foi <strong className="text-white">UM</strong> caso. Na emergência, você precisa acertar{" "}
                    <strong className="text-white">TODOS</strong>. No curso ESC, você pratica dezenas de cenários como
                    esse — com debriefing de quem atende no HC-USP todo dia. Na SIMM Academy, você tem 16 cursos
                    completos para construir a base que transforma intuição em raciocínio sistemático.
                  </p>
                  <Button variant="primary" className="w-full">
                    Quero treinar de verdade → Conhecer a SIMM Academy
                  </Button>
                  <button onClick={handleReset} className="mt-4 text-[#868E92] hover:text-[#20CAD8] text-[13px] font-['Outfit'] transition-colors">
                    Tentar outro desafio
                  </button>
                </motion.div>
              </motion.div>
            )}

            {status === "fail" && (
              <motion.div
                key="fail"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col items-center w-full"
              >
                <CircleX
                  size={48}
                  strokeWidth={1.5}
                  className="text-[#FF4757] mb-4 drop-shadow-[0_0_10px_#FF4757]"
                />
                <h3 className="font-['Orbitron'] font-bold text-[22px] text-white mb-2 uppercase text-shadow-neon text-center">
                  Dessa vez o paciente não sobreviveu.
                </h3>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="w-full flex flex-col items-center border-t border-[#FF475740] pt-6 mt-4"
                >
                  <p className="font-['Inter'] text-[14px] text-[#B9B7BA] mb-5 text-center leading-relaxed">
                    Dói ler isso? Imagine viver isso. Por isso a SIMM existe: para que o erro aconteça aqui — num
                    ambiente seguro, com feedback de quem já cometeu os mesmos erros e aprendeu com cada um deles —
                    e nunca no plantão, com um paciente real.
                  </p>
                  <Button variant="primary" className="w-full">
                    Quero treinar de verdade → Conhecer a SIMM Academy
                  </Button>
                  <button onClick={handleReset} className="mt-4 text-[#868E92] hover:text-[#FF4757] text-[13px] font-['Outfit'] transition-colors">
                    Tentar novamente
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
