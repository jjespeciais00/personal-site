"use client";

import { Award, Users, Clock, Star } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const certifications = [
  "CREF — Conselho Federal de Ed. Física",
  "Especialização em Musculação e Treinamento de Força",
  "Nutrição Esportiva Aplicada — USP",
  "CrossFit Level 1 Trainer",
  "Funcional Training — NSCA",
];

const stats = [
  { icon: Clock, value: "8+", label: "Anos de experiência" },
  { icon: Users, value: "500+", label: "Alunos transformados" },
  { icon: Star, value: "4.9", label: "Avaliação média" },
  { icon: Award, value: "5", label: "Certificações" },
];

export default function AboutSection() {
  return (
    <section id="sobre" className="relative py-28 bg-[#1A1A1A]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E50914]/50 to-transparent" />

      {/* Left red accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#E50914]/40 to-transparent hidden xl:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Photo */}
          <ScrollReveal>
            <div className="relative">
              {/* Main photo */}
              <div className="relative rounded-sm overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800&q=80"
                  alt="Carlos Silva - Personal Trainer"
                  className="w-full h-[500px] sm:h-[580px] object-cover"
                  style={{ objectPosition: "top center" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />
              </div>

              {/* Stats overlay */}
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-3">
                {stats.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <div
                      key={i}
                      className="bg-[#0D0D0D]/90 backdrop-blur-sm border border-[#2A2A2A] rounded-sm p-4 flex items-center gap-3"
                    >
                      <Icon size={16} className="text-[#E50914] flex-shrink-0" />
                      <div>
                        <p className="font-display text-xl text-white leading-none">{s.value}</p>
                        <p className="text-[#AAAAAA] text-[10px] font-body leading-tight mt-0.5">
                          {s.label}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Red corner accent */}
              <div className="absolute top-0 left-0 w-12 h-12 bg-[#E50914]" style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }} />
            </div>
          </ScrollReveal>

          {/* Right: Content */}
          <ScrollReveal delay={150}>
            <span className="badge-red mb-6 inline-block">Sobre o profissional</span>

            <h2 className="section-title text-white mb-6">
              CARLOS SILVA,
              <br />
              <span className="gradient-text">SEU PERSONAL</span>
            </h2>

            <p className="text-[#AAAAAA] font-body text-base leading-relaxed mb-4">
              Com <strong className="text-white">mais de 8 anos de experiência</strong> em treinamento personalizado,
              já transformei mais de 500 corpos — de sedentários a atletas, de pós-cirúrgicos
              a pessoas que nunca entraram em uma academia.
            </p>

            <p className="text-[#AAAAAA] font-body text-base leading-relaxed mb-4">
              Minha abordagem une <strong className="text-white">ciência e prática</strong>: cada treino é
              construído com base na sua avaliação física, seus objetivos reais e sua rotina de vida.
              Nada genérico. Tudo personalizado.
            </p>

            <p className="text-[#AAAAAA] font-body text-base leading-relaxed mb-10">
              Atendo presencialmente em São Paulo e online para todo o Brasil.
              Meu objetivo? Fazer você alcançar resultados que nunca acreditou que eram possíveis.
            </p>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="red-line" />
                <p className="text-white font-body font-semibold text-sm tracking-widest uppercase">
                  Certificações
                </p>
              </div>
              <ul className="space-y-3">
                {certifications.map((cert, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-sm bg-[#E50914]/15 flex items-center justify-center flex-shrink-0">
                      <Award size={11} className="text-[#E50914]" />
                    </div>
                    <span className="text-[#AAAAAA] font-body text-sm">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
