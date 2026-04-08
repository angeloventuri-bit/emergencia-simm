"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./Button";
import { ArrowRight } from "lucide-react";

const teachers = [
  {
    name: "Dr. Ahmed Abdallah M. El Assaad",
    title: "Preceptor de Medicina de Emergência · HC-FMUSP",
    bio: "Graduado em Medicina pela FAMERP. Residência em Medicina de Emergência pelo HCFMUSP. Preceptor da Residência de Medicina de Emergência do HCFMUSP (2025/2026). Fellowship de Emergências Cardiovasculares (InCor) e Trauma (HC-FMUSP). Médico assistente do Pronto-Socorro da Unidade de Emergência Referenciada do HC-FMUSP. Médico intervencionista em APH (SAMU). Professor da pós-graduação em Medicina de Emergência da ABRAMEDE. Autor de diversos livros de medicina de emergência.",
    areas: ["Emergências Cardiovasculares", "Trauma", "Via Aérea"],
    photo: "https://simmacademy.emergenciasimm.com.br/wp-content/uploads/2026/03/Ahmed.png",
    initials: "AA",
  },
  {
    name: "Dr. Armando Henrique R. Minucci",
    title: "Residente de Medicina de Emergência · HC-FMUSP",
    bio: "Graduado em Medicina pela UNICAMP. Residente de Medicina de Emergência no HCFMUSP. Fellowship de Trauma pelo HCFMUSP. 2º Tenente Médico da Aviação do Exército Brasileiro. Revisor do Latin American Journal of Emergency Care. Atuação em transporte e remoção de pacientes de alta complexidade em UTI Móvel. Experiência em prontos-socorros públicos e privados. Coautor de capítulos em publicações de medicina de emergência.",
    areas: ["Trauma", "APH · UTI Móvel", "Emergência"],
    photo: "https://simmacademy.emergenciasimm.com.br/wp-content/uploads/2026/03/Armando.png",
    initials: "AM",
  },
  {
    name: "Dr. William Simões Rangel Junior",
    title: "Médico Assistente UTI · HC-FMUSP",
    bio: "Graduado em Medicina pela UFRJ. Residência em Medicina de Emergência pelo HCFMUSP. Médico assistente da UTI da Emergência e Pronto-Socorro do HCFMUSP. ECMO Specialist certificado pela ELSO. Médico Intervencionista do SAMU-SP. Professor da pós-graduação em Medicina de Emergência. Coautor de livros e guias de medicina de emergência.",
    areas: ["ECMO · UTI", "Sepse", "Emergência"],
    photo: "https://simmacademy.emergenciasimm.com.br/wp-content/uploads/2026/03/Luiz.png",
    initials: "WR",
  },
];

export function Teachers() {
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
            Quem Ensina
          </span>
          <h2 className="font-['Orbitron'] font-bold text-[28px] md:text-[44px] text-white text-shadow-neon mb-5 leading-tight">
            Aprenda com quem atende e ensina<br className="hidden md:block" /> nos melhores serviços do Brasil.
          </h2>
          <p className="font-['Inter'] text-[15px] text-[#868E92] max-w-2xl mx-auto leading-relaxed">
            Nosso time nasceu dentro do maior complexo hospitalar da América Latina. São médicos que dividem o
            tempo entre a beira do leito e a sala de aula — porque acreditam que ensinar é salvar vidas em escala.
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

              <p className="font-['Inter'] text-[13px] text-[#868E92] leading-relaxed mb-5 flex-1">
                {teacher.bio}
              </p>

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
            Não são professores que só leem papers. São clínicos que tomam as mesmas decisões que você vai precisar
            tomar — todo plantão.
          </p>
          <a href="https://simmacademy.emergenciasimm.com.br/#professores" target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" className="gap-2 flex items-center mx-auto">
              Ver todos os professores <ArrowRight size={16} />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
