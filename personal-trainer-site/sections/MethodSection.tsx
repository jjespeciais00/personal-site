"use client";

import { ClipboardCheck, Zap, TrendingUp, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Avaliação Corporal",
    description:
      "Analisamos seu biotipo, composição corporal, histórico de treinos, limitações físicas e objetivos. Essa etapa é fundamental para criar um plano 100% individualizado.",
    highlights: ["Bioimpedância", "Postura e mobilidade", "Histórico de saúde"],
  },
  {
    number: "02",
    icon: Zap,
    title: "Treino Personalizado",
    description:
      "Com base na avaliação, montamos um protocolo exclusivo para o seu corpo. Periodização científica, exercícios corretos e carga progressiva para máximos resultados.",
    highlights: ["Periodização científica", "Carga progressiva", "Vídeos de execução"],
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Acompanhamento Contínuo",
    description:
      "Monitoramos sua evolução semanalmente, ajustamos o treino conforme necessário e mantemos você motivado durante toda a jornada até o seu objetivo.",
    highlights: ["Check-in semanal", "Ajustes em tempo real", "Suporte permanente"],
  },
];

export default function MethodSection() {
  return (
    <section id="metodo" className="relative py-28 bg-[#0D0D0D] overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#E50914] rounded-full opacity-[0.03] blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-20">
          <span className="badge-red mb-5 inline-block">Como funciona</span>
          <h2 className="section-title text-white mb-4">
            MEU MÉTODO EM
            <br />
            <span className="gradient-text">3 PASSOS</span>
          </h2>
          <p className="text-[#AAAAAA] font-body text-lg max-w-2xl mx-auto">
            Um processo simples, estruturado e comprovado para entregar resultados reais em tempo recorde.
          </p>
        </ScrollReveal>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-[68px] left-[calc(16.66%+40px)] right-[calc(16.66%+40px)] h-px bg-gradient-to-r from-[#E50914]/0 via-[#E50914]/40 to-[#E50914]/0" />

          <div className="grid lg:grid-cols-3 gap-10 lg:gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={step.number} delay={i * 150}>
                  <div className="relative group">
                    {/* Step number and icon header */}
                    <div className="flex flex-col items-center mb-8">
                      <div className="relative">
                        {/* Outer ring */}
                        <div className="w-20 h-20 rounded-full border-2 border-[#2A2A2A] group-hover:border-[#E50914]/50 transition-all duration-300 flex items-center justify-center bg-[#1A1A1A]">
                          <Icon
                            size={28}
                            className="text-[#E50914] group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        {/* Number badge */}
                        <div className="absolute -top-2 -right-2 w-7 h-7 bg-[#E50914] rounded-full flex items-center justify-center">
                          <span className="text-white font-mono text-[10px] font-bold">
                            {step.number}
                          </span>
                        </div>
                      </div>

                      {/* Arrow (mobile only — between steps) */}
                      {i < steps.length - 1 && (
                        <ArrowRight size={16} className="text-[#E50914]/40 mt-4 lg:hidden rotate-90" />
                      )}
                    </div>

                    {/* Content card */}
                    <div className="bg-[#1A1A1A] border border-[#2A2A2A] group-hover:border-[#E50914]/30 rounded-sm p-6 transition-all duration-300 group-hover:bg-[#1A1A1A]/80">
                      <h3 className="font-display text-2xl text-white tracking-wide mb-3">
                        {step.title}
                      </h3>
                      <p className="text-[#AAAAAA] font-body text-sm leading-relaxed mb-5">
                        {step.description}
                      </p>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2">
                        {step.highlights.map((h) => (
                          <span
                            key={h}
                            className="inline-block bg-[#E50914]/10 border border-[#E50914]/20 text-[#E50914] text-[10px] font-mono font-medium px-3 py-1 rounded-sm tracking-wider uppercase"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA strip */}
        <ScrollReveal delay={200}>
          <div className="mt-20 bg-[#1A1A1A] border border-[#E50914]/30 rounded-sm p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-display text-3xl text-white mb-1">
                PRONTO PARA COMEÇAR?
              </p>
              <p className="text-[#AAAAAA] font-body text-base">
                A primeira avaliação é totalmente gratuita e sem compromisso.
              </p>
            </div>
            <a
              href="#contato"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex-shrink-0 inline-flex items-center gap-2 bg-[#E50914] hover:bg-[#B20710] text-white font-body font-bold px-8 py-4 rounded-sm transition-all duration-200 hover:shadow-lg hover:shadow-red-600/30 whitespace-nowrap"
            >
              Quero minha avaliação gratuita
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
