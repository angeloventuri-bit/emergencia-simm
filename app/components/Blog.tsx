"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./Button";
import { ArrowRight, User } from "lucide-react";

export function Blog() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const categories = ["Todos", "Casos Clínicos", "Protocolos", "Carreira", "Procedimentos"];

  const posts = [
    {
      id: 1,
      title: "Uso do POCUS na Parada Cardiorrespiratória",
      excerpt: "Como o ultrassom point-of-care pode mudar o desfecho em PCR, e os protocolos mais recentes (FEEL, CAUSE) — direto das evidências para o seu plantão.",
      author: "Dr. Roberto",
      date: "03 Abr 2026",
      category: "Procedimentos",
      featured: true,
      source: "NEJM",
    },
    {
      id: 2,
      title: "Atualizações AHA 2025: O que mudou?",
      excerpt: "Um resumo prático das últimas diretrizes para suporte avançado de vida cardiovascular. O que entra, o que sai e o que muda no próximo plantão.",
      author: "Dra. Letícia",
      date: "28 Mar 2026",
      category: "Protocolos",
      source: "AHA Circulation",
    },
    {
      id: 3,
      title: "Manejo da Cetoacidose Diabética no PS",
      excerpt: "Os 5 pilares fundamentais que você não pode esquecer na primeira hora de atendimento — análise crítica do que realmente funciona.",
      author: "Dr. Roberto",
      date: "15 Mar 2026",
      category: "Casos Clínicos",
      source: "The Lancet",
    },
    {
      id: 4,
      title: "Intubação em Sequência Rápida: Escolha de Drogas",
      excerpt: "Escolhendo o sedativo e bloqueador neuromuscular ideal baseado no perfil hemodinâmico do paciente — sem achismo, baseado em evidências.",
      author: "Dra. Letícia",
      date: "10 Mar 2026",
      category: "Procedimentos",
      source: "Annals of EM",
    },
  ];

  const filteredPosts = activeCategory === "Todos"
    ? posts.filter(p => !p.featured)
    : posts.filter(p => p.category === activeCategory && !p.featured);

  const featuredPost = posts.find(p => p.featured);

  return (
    <section id="blog" className="py-24 bg-[#0A0E14] relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6"
        >
          <div>
            <span className="font-['Orbitron'] text-[#136C72] uppercase tracking-[0.15em] text-sm mb-4 block">
              Global Insights
            </span>
            <h2 className="font-['Orbitron'] font-bold text-[32px] md:text-[48px] text-white text-shadow-neon mb-3">
              O que a ciência publicou<br className="hidden md:block" /> esta semana — mastigado para você.
            </h2>
            <p className="font-['Inter'] text-[15px] text-[#868E92] max-w-xl leading-relaxed">
              Curadoria semanal do que saiu de mais relevante nas principais revistas médicas do mundo.
              NEJM, The Lancet, JAMA, Annals of Emergency Medicine — traduzido para linguagem prática,
              com o que muda (ou não) no seu próximo plantão.
            </p>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-4 md:pb-0 w-full md:w-auto scrollbar-hide snap-x shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`snap-start whitespace-nowrap px-4 py-1.5 rounded-full font-['Outfit'] font-medium text-xs uppercase tracking-[0.1em] border transition-all ${
                  activeCategory === cat
                    ? "bg-[#20CAD820] text-[#20CAD8] border-[#20CAD830]"
                    : "bg-transparent text-[#868E92] border-[#3A4248] hover:text-[#E8E8EA]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Post */}
        {activeCategory === "Todos" && featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 group cursor-pointer relative overflow-hidden bg-[#111B22] border border-[#3A4248] rounded-[16px] hover:border-[#20CAD840] hover:shadow-[0_0_30px_rgba(32,202,216,0.1)] transition-all flex flex-col md:flex-row"
          >
            <div className="w-full md:w-1/2 aspect-video md:aspect-auto bg-[#0D1C24] relative overflow-hidden min-h-[300px]">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E14] via-transparent to-transparent z-10" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1600&auto=format&fit=crop"
                alt="Ultrasound POCUS"
                className="object-cover w-full h-full opacity-60 saturate-50 contrast-125 brightness-90 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700"
              />
              <div className="absolute top-6 left-6 z-20 flex gap-2">
                <span className="inline-block bg-[#20CAD815] border border-[#20CAD830] text-[#20CAD8] font-['Outfit'] font-medium text-[12px] uppercase tracking-[0.1em] px-3 py-1 rounded-full">
                  {featuredPost.category}
                </span>
                <span className="inline-block bg-[#20CAD830] border border-[#20CAD850] text-[#20CAD8] font-['JetBrains_Mono'] text-[11px] px-3 py-1 rounded-full">
                  {featuredPost.source}
                </span>
              </div>
            </div>

            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <span className="font-['JetBrains_Mono'] text-[11px] text-[#636A6F] uppercase tracking-wider mb-3">
                Destaque da semana
              </span>
              <h3 className="font-['Inter'] font-semibold text-[22px] md:text-[28px] text-white mb-4 group-hover:text-[#20CAD8] transition-colors leading-tight">
                {featuredPost.title}
              </h3>
              <p className="font-['Inter'] text-[15px] text-[#B9B7BA] mb-8 leading-relaxed max-w-lg">
                {featuredPost.excerpt}
              </p>

              <div className="flex items-center justify-between mt-auto pt-6 border-t border-[#3A4248]/50">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#1A2730] flex items-center justify-center border border-[#3A4248]">
                    <User size={14} className="text-[#868E92]" />
                  </div>
                  <div>
                    <p className="font-['Inter'] font-medium text-[14px] text-[#E8E8EA]">{featuredPost.author}</p>
                    <p className="font-['Inter'] text-[12px] text-[#868E92]">{featuredPost.date}</p>
                  </div>
                </div>

                <div className="text-[#20CAD8] group-hover:translate-x-2 transition-transform">
                  <ArrowRight size={20} />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#111B22] border border-[#3A4248] rounded-[12px] p-6 hover:bg-[#1A2730] hover:border-[#20CAD840] hover:shadow-[0_0_20px_rgba(32,202,216,0.1)] hover:-translate-y-1 transition-all group cursor-pointer flex flex-col h-full"
            >
              <div className="mb-4 flex-1">
                <div className="flex gap-2 mb-4">
                  <span className="inline-block bg-[#20CAD815] border border-[#20CAD830] text-[#20CAD8] font-['Outfit'] font-medium text-[10px] uppercase tracking-[0.1em] px-2.5 py-0.5 rounded-full">
                    {post.category}
                  </span>
                  {post.source && (
                    <span className="inline-block bg-[#20CAD810] border border-[#20CAD820] text-[#636A6F] font-['JetBrains_Mono'] text-[10px] px-2.5 py-0.5 rounded-full">
                      {post.source}
                    </span>
                  )}
                </div>
                <h3 className="font-['Inter'] font-semibold text-[18px] text-white mb-3 group-hover:text-[#20CAD8] transition-colors line-clamp-2 leading-tight">
                  {post.title}
                </h3>
                <p className="font-['Inter'] text-[13px] text-[#B9B7BA] line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex items-center gap-3 mt-auto pt-5 border-t border-[#3A4248]/50">
                <div className="w-8 h-8 rounded-full bg-[#1A2730] flex items-center justify-center border border-[#3A4248]">
                  <User size={14} className="text-[#868E92]" />
                </div>
                <div>
                  <p className="font-['Inter'] font-medium text-[13px] text-[#E8E8EA]">{post.author}</p>
                  <p className="font-['Inter'] text-[11px] text-[#868E92]">{post.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#868E92] font-['Inter']">Nenhum artigo encontrado nesta categoria.</p>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="secondary">
            Ver últimas publicações →
          </Button>
          <p className="font-['Inter'] text-[13px] text-[#636A6F] mt-4">
            Não é resumo de abstract. É análise crítica de quem vive a emergência.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
