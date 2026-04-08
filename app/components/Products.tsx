"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./Button";
import { Stethoscope, Cpu, Clock } from "lucide-react";

export function Products() {
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
            Nossos Produtos
          </span>
          <h2 className="font-['Orbitron'] font-bold text-[28px] md:text-[44px] text-white text-shadow-neon mb-4">
            Dois caminhos. Um único objetivo:<br className="hidden md:block" /> você no controle da emergência.
          </h2>
          <p className="font-['Inter'] text-[16px] text-[#868E92] max-w-2xl mx-auto">
            Seja presencial ou digital, tudo o que criamos tem uma premissa: fechar o gap entre o que a faculdade ensina e o que o plantão exige.
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
              Curso Presencial · São Paulo · Vagas limitadas
            </span>

            <Stethoscope className="text-[#20CAD8] mb-5 drop-shadow-[0_0_5px_#20CAD8]" size={32} strokeWidth={1.5} />

            <h3 className="font-['Orbitron'] font-bold text-[22px] text-white mb-3 group-hover:text-shadow-neon transition-all">
              Um final de semana que muda como você atende para sempre.
            </h3>

            <p className="font-['Inter'] text-[15px] text-[#B9B7BA] mb-6 leading-relaxed flex-1">
              Dois dias de imersão em simulações realísticas de alta fidelidade. Via aérea difícil, choque
              refratário, sepse fulminante, IAM com supra, PCR com decisões em cascata. Você lidera. A equipe
              depende de você. Os professores — que atendem diariamente no HC-USP — dissecam cada decisão no
              debriefing. O treinamento que o ACLS e o ATLS não oferecem.
            </p>

            <div className="flex items-center gap-2 mb-6">
              <Clock size={14} className="text-[#636A6F]" />
              <span className="font-['JetBrains_Mono'] text-[12px] text-[#636A6F]">
                Próxima turma: em breve · Vagas limitadas a 24 participantes
              </span>
            </div>

            <Button variant="secondary" className="w-full sm:w-auto mt-auto">
              Conhecer o ESC →
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
              Plataforma Digital · APP · IA integrada
            </span>

            <Cpu className="text-[#20CAD8] mb-5 drop-shadow-[0_0_5px_#20CAD8]" size={32} strokeWidth={1.5} />

            <h3 className="font-['Orbitron'] font-bold text-[22px] text-white mb-3 group-hover:text-shadow-neon transition-all">
              Tudo que a faculdade não te ensinou. Na palma da sua mão.
            </h3>

            <p className="font-['Inter'] text-[15px] text-[#B9B7BA] mb-6 leading-relaxed flex-1">
              16 cursos, centenas de aulas em vídeo, casos clínicos interativos e ferramentas de plantão —
              desenvolvidos por preceptores do HC-USP, InCor e Sírio-Libanês. Estude no seu ritmo. Aplique no
              próximo plantão. Com APP próprio para iOS e Android e Inteligência Artificial integrada para
              acelerar seu raciocínio clínico.
            </p>

            <div className="flex items-center gap-2 mb-6">
              <Clock size={14} className="text-[#636A6F]" />
              <span className="font-['JetBrains_Mono'] text-[12px] text-[#636A6F]">
                Garantia de 7 dias · +10.000 médicos já estão dentro
              </span>
            </div>

            <Button variant="primary" className="w-full sm:w-auto mt-auto">
              Acessar a SIMM Academy →
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
