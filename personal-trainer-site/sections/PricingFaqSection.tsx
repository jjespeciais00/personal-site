"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const faqs = [
  {
    question: "Como funciona a avaliação gratuita?",
    answer:
      "Você envia mensagem pelo WhatsApp, responde algumas perguntas e recebe sua análise inicial em 24h. Sem compromisso.",
  },
  {
    question: "Preciso de equipamento ou posso treinar em casa?",
    answer:
      "Montamos planos para academia, home gym e até sem equipamento. Seu programa é 100% adaptado ao seu estilo de vida.",
  },
  {
    question: "Qual a diferença entre Online, Mentoria e VIP?",
    answer:
      "Online: orientações semanais + treino nutrido por app. Mentoria: mais suporte 1:1 e ajustes diários. VIP: atendimento exclusivo, nutricionista, avaliação corporal e agenda prioritária.",
  },
  {
    question: "Posso pausar o plano se viajar?",
    answer:
      "Sim, temos política flexível com intervalos de até 2 semanas em planos semestrais e anuais.",
  },
];

const plans = [
  {
    name: "Online",
    price: "R$ 397/mês",
    subtitle: "Seu treino no app",
    features: ["Avaliação inicial", "Planos mensais", "Ajustes quinzenais", "Suporte via chat"],
    accent: "bg-[#1A1A1A] border border-[#2A2A2A]",
  },
  {
    name: "Mentoria",
    price: "R$ 697/mês",
    subtitle: "Acompanhamento próximo",
    popular: true,
    features: ["Avaliação corporal completa", "Ajustes semanais", "Consultoria de nutrição", "Feedback diário"],
    accent: "bg-[#111111] border border-[#FFD700] shadow-[0_10px_35px_rgba(255,215,0,0.3)]",
  },
  {
    name: "VIP",
    price: "R$ 1297/mês",
    subtitle: "Elite total",
    features: ["Atendimento 24/7", "Check-ins personalizados", "Aulas presenciais", "Estratégia de performance"],
    accent: "bg-[#1A1A1A] border border-[#2A2A2A]",
  },
];

export default function PricingFaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="planos" className="relative py-24 bg-gradient-to-b from-[#040404] to-[#0D0D0D]">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1400&q=80')] bg-center bg-cover" />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <span className="badge-red inline-flex items-center justify-center mb-4">OPORTUNIDADE EXCLUSIVA</span>
          <h2 className="section-title text-white mb-4">PLANOS PREMIUM</h2>
          <p className="text-[#BBBBBB] max-w-3xl mx-auto">Escolha o plano que mais combina com seu objetivo e ative resultados rápidos com suporte financeiro e operacional de verdade.</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {plans.map((plan, index) => (
            <ScrollReveal key={plan.name} delay={index * 120}>
              <div
                className={`relative p-8 rounded-2xl ${plan.accent} ${plan.popular ? "scale-105" : ""} transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(0,255,210,0.2)]`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#FFD700] via-[#00e6a1] to-[#00bfff] text-black text-xs font-bold uppercase px-3 py-1 rounded-full shadow-lg">Mais Popular</span>
                )}
                <h3 className="text-xl text-[#FAF5D5] font-semibold mb-1">{plan.name}</h3>
                <p className="text-sm text-[#AAAAAA] mb-5">{plan.subtitle}</p>
                <p className="text-4xl font-black tracking-tight gradient-text mb-6">{plan.price}</p>
                <ul className="space-y-3 mb-6 text-sm text-[#CCCCCC]">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="inline-flex h-2 w-2 rounded-full bg-[#00e6a1]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-block w-full text-center text-black bg-gradient-to-r from-[#FFD700] via-[#00e6a1] to-[#00bfff] font-bold py-3 rounded-lg hover:opacity-95 transition-opacity duration-200"
                >
                  Quero esse plano
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mb-8">
          <h3 className="section-title text-white text-3xl text-center mb-4">Perguntas Frequentes</h3>
          <p className="text-center text-[#AAAAAA] max-w-3xl mx-auto">Tire suas dúvidas antes de iniciar. Nosso processo é claro e sem surpresas.</p>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = open === idx;
            return (
              <div key={faq.question} className="bg-[#111111] border border-[#2A2A2A] rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full flex justify-between items-center px-6 py-4 text-left text-white font-medium border-b border-[#2A2A2A] transition-colors duration-200 hover:bg-[#1C1C1C]"
                >
                  <span>{faq.question}</span>
                  <span className="text-[#00e6a1] text-lg">{isOpen ? "−" : "+"}</span>
                </button>
                <div
                  className={`px-6 text-[#CCCCCC] overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 py-4" : "max-h-0"}`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
