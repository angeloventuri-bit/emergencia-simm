"use client";

import React from "react";
import { motion } from "framer-motion";

export function Problem() {
  return (
    <section className="py-24 bg-[#0A0E14] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(14,42,48,0.6)_0%,transparent_65%)] pointer-events-none" />

      <div className="max-w-[860px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="font-['Orbitron'] text-[#136C72] uppercase tracking-[0.15em] text-sm mb-4 block">
            O que ninguém te conta depois da formatura
          </span>
          <h2 className="font-['Orbitron'] font-bold text-[28px] md:text-[44px] text-white text-shadow-neon leading-tight">
            Você sabe a teoria. Mas na hora que importa, o corpo trava.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="space-y-6 font-['Inter'] text-[16px] md:text-[17px] text-[#B9B7BA] leading-[1.8]"
        >
          <p>
            É 3h da manhã. O plantão está cheio. A enfermagem grita o nome do box 7. Você vai até lá e encontra
            um paciente em franca deterioração. O monitor alarma. A equipe olha para você.
          </p>
          <p>
            Você sabe o que é sepse. Estudou no Harrison. Passou na prova. Mas nesse momento — com o paciente
            desaturando, a equipe esperando e o relógio correndo — a teoria desaparece. O coração dispara. As
            mãos hesitam. A cabeça não organiza.
          </p>
          <p>
            Você segue um protocolo. Meio no automático. Meio na intuição. Meio na esperança de que esteja
            fazendo certo. E quando o plantão acaba, vai para casa com aquela sensação:{" "}
            <em className="text-[#E8E8EA]">&quot;Será que eu fiz tudo que podia?&quot;</em>
          </p>
          <p>
            Isso não é falta de inteligência. Não é falta de dedicação. É falta de um tipo de treinamento que a
            faculdade simplesmente não oferece — e que nenhum livro, por melhor que seja, consegue substituir.
          </p>
          <p>
            A distância entre saber o que fazer e conseguir fazer sob pressão é o gap mais perigoso da medicina.
            E é exatamente nesse espaço que a SIMM foi construída para atuar.
          </p>
        </motion.div>

        {/* Pull Quote */}
        <motion.blockquote
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 relative pl-6 border-l-2 border-[#20CAD8]"
        >
          <div className="absolute top-0 left-0 bottom-0 w-[2px] shadow-[0_0_12px_#20CAD8]" />
          <p className="font-['Inter'] text-[18px] md:text-[22px] text-white leading-relaxed italic">
            &quot;O paciente grave não espera você consultar o UpToDate.{" "}
            <span className="text-[#20CAD8] not-italic drop-shadow-[0_0_6px_#20CAD8]">
              Ele precisa que você já saiba.
            </span>&quot;
          </p>
        </motion.blockquote>

        {/* A Virada */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <h2 className="font-['Orbitron'] font-bold text-[26px] md:text-[38px] text-white text-shadow-neon mb-6">
            E se existisse um caminho entre a insegurança e a convicção?
          </h2>
          <div className="space-y-5 font-['Inter'] text-[16px] text-[#B9B7BA] leading-relaxed max-w-[700px] mx-auto">
            <p>
              Um caminho construído não por teóricos, mas por quem atende os pacientes mais graves do Brasil
              — todo dia, toda noite, todo plantão.
            </p>
            <p>
              Um caminho que transforma teoria em reflexo. Que treina não apenas o que você sabe, mas como você
              age quando o tempo está contra você.
            </p>
            <p>
              Um caminho que já transformou mais de{" "}
              <strong className="text-white">10.000 médicos</strong> em profissionais que voltam para o plantão
              com uma coisa que nenhuma prova de residência é capaz de dar: segurança clínica real.
            </p>
            <p className="text-[18px] text-[#20CAD8] drop-shadow-[0_0_6px_#20CAD8] font-medium">
              Esse caminho tem nome. Chama-se Emergência SIMM.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
