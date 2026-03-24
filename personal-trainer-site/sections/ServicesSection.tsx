"use client";

import { Check, Wifi, Dumbbell, ClipboardList } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const WHATSAPP_NUMBER = "5511999999999";

const plans = [
  {
    id: 1,
    icon: Wifi,
    badge: "Mais popular",
    highlighted: true,
    title: "Consultoria Online",
    subtitle: "Treino personalizado de onde estiver",
    price: "R$ 297",
    period: "/mês",
    features: [
      "Treino 100% personalizado",
      "Acompanhamento semanal",
      "Suporte via WhatsApp",
      "Ajustes mensais de treino",
      "Vídeos de execução dos exercícios",
      "Planilha de evolução",
    ],
    cta: "Agendar avaliação",
    whatsappMsg: encodeURIComponent("Olá! Tenho interesse na Consultoria Online. Posso agendar uma avaliação?"),
  },
  {
    id: 2,
    icon: Dumbbell,
    badge: "Presencial",
    highlighted: false,
    title: "Treino Presencial",
    subtitle: "Acompanhamento ao seu lado",
    price: "R$ 597",
    period: "/mês",
    features: [
      "Acompanhamento completo na sessão",
      "Avaliação física completa",
      "Correção de execução em tempo real",
      "Periodização avançada",
      "Relatório mensal de progresso",
      "2–4 sessões por semana",
    ],
    cta: "Agendar avaliação",
    whatsappMsg: encodeURIComponent("Olá! Tenho interesse no Treino Presencial. Posso agendar uma avaliação?"),
  },
  {
    id: 3,
    icon: ClipboardList,
    badge: "Início",
    highlighted: false,
    title: "Avaliação Física",
    subtitle: "Conheça seu corpo a fundo",
    price: "Grátis",
    period: "1ª vez",
    features: [
      "Análise corporal completa",
      "Plano inicial de treino",
      "Definição de metas realistas",
      "Identificação de limitações",
      "Recomendação de protocolo",
    ],
    cta: "Agendar avaliação",
    whatsappMsg: encodeURIComponent("Olá! Quero agendar uma avaliação física gratuita!"),
  },
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="relative py-28 bg-[#1A1A1A]">
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E50914]/50 to-transparent" />

      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #E50914 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="badge-red mb-5 inline-block">Planos e serviços</span>
          <h2 className="section-title text-white mb-4">
            ESCOLHA O PLANO
            <br />
            <span className="gradient-text">IDEAL PARA VOCÊ</span>
          </h2>
          <p className="text-[#AAAAAA] font-body text-lg max-w-2xl mx-auto">
            Cada aluno tem um corpo diferente. Por isso, todos os planos são completamente personalizados para os seus objetivos.
          </p>
        </ScrollReveal>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            return (
              <ScrollReveal key={plan.id} delay={i * 130}>
                <div
                  className={`relative flex flex-col h-full rounded-sm overflow-hidden transition-all duration-300 ${
                    plan.highlighted
                      ? "bg-[#0D0D0D] border-2 border-[#E50914] shadow-2xl shadow-red-600/20 scale-105"
                      : "bg-[#0D0D0D] border border-[#2A2A2A] hover:border-[#E50914]/50"
                  } card-lift`}
                >
                  {/* Highlighted glow */}
                  {plan.highlighted && (
                    <div className="absolute inset-0 bg-gradient-to-b from-[#E50914]/5 to-transparent pointer-events-none" />
                  )}

                  {/* Badge */}
                  <div className="px-6 pt-6">
                    <span
                      className={`inline-block text-[10px] font-mono font-semibold tracking-[0.2em] uppercase px-3 py-1 rounded-sm mb-5 ${
                        plan.highlighted
                          ? "bg-[#E50914] text-white"
                          : "bg-[#2A2A2A] text-[#AAAAAA]"
                      }`}
                    >
                      {plan.badge}
                    </span>
                  </div>

                  {/* Icon + Title */}
                  <div className="px-6 mb-6">
                    <div
                      className={`w-12 h-12 rounded-sm flex items-center justify-center mb-4 ${
                        plan.highlighted ? "bg-[#E50914]" : "bg-[#2A2A2A]"
                      }`}
                    >
                      <Icon size={22} className={plan.highlighted ? "text-white" : "text-[#E50914]"} />
                    </div>
                    <h3 className="font-display text-2xl text-white tracking-wide mb-1">
                      {plan.title}
                    </h3>
                    <p className="text-[#AAAAAA] font-body text-sm">{plan.subtitle}</p>
                  </div>

                  {/* Price */}
                  <div className="px-6 mb-6">
                    <div className="flex items-end gap-1">
                      <span className="font-display text-4xl text-white tracking-wide">
                        {plan.price}
                      </span>
                      <span className="text-[#AAAAAA] font-body text-sm mb-1">{plan.period}</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="mx-6 h-px bg-[#2A2A2A] mb-6" />

                  {/* Features */}
                  <div className="px-6 flex-1">
                    <ul className="space-y-3">
                      {plan.features.map((feature, fi) => (
                        <li key={fi} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-sm bg-[#E50914]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check size={11} className="text-[#E50914]" />
                          </div>
                          <span className="text-[#AAAAAA] font-body text-sm leading-snug">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="px-6 pb-6 mt-8">
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${plan.whatsappMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full flex items-center justify-center gap-2 font-body font-bold text-sm py-4 rounded-sm transition-all duration-200 ${
                        plan.highlighted
                          ? "bg-[#E50914] hover:bg-[#B20710] text-white hover:shadow-lg hover:shadow-red-600/30"
                          : "border border-[#E50914] text-[#E50914] hover:bg-[#E50914] hover:text-white"
                      }`}
                    >
                      {plan.cta}
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
