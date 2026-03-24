"use client";

import { Star, Quote } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const transformations = [
  {
    id: 1,
    name: "Marcos P.",
    before: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=400&q=80",
    after: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=400&q=80",
    loss: "-18kg",
    time: "90 dias",
  },
  {
    id: 2,
    name: "Ana C.",
    before: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80",
    after: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=400&q=80",
    loss: "-12kg",
    time: "60 dias",
  },
  {
    id: 3,
    name: "Rafael T.",
    before: "https://images.unsplash.com/photo-1606902965551-dce093cda6e7?w=400&q=80",
    after: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80",
    loss: "+8kg massa",
    time: "120 dias",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Fernanda Lima",
    role: "Empresária · Online",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    rating: 5,
    text: "Nunca achei que fosse conseguir perder 15kg com 2 filhos pequenos. O Carlos adaptou o treino para minha realidade e hoje me sinto uma nova pessoa!",
  },
  {
    id: 2,
    name: "Ricardo Santos",
    role: "Engenheiro · Presencial",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 5,
    text: "Em 3 meses ganhei a massa muscular que tentava há anos. O método é diferente de tudo que já tentei. Vale cada centavo!",
  },
  {
    id: 3,
    name: "Juliana Melo",
    role: "Médica · Online",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    text: "Com minha rotina corrida, precisava de algo flexível. A consultoria online do Carlos é perfeita — treino na minha hora, com suporte sempre que preciso.",
  },
  {
    id: 4,
    name: "Bruno Alves",
    role: "Professor · Presencial",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 5,
    text: "Tinha lesão no joelho que me impedia de treinar. O Carlos montou um protocolo específico e hoje treino sem dor e com muito mais força.",
  },
];

export default function ResultsSection() {
  return (
    <section id="resultados" className="relative py-28 bg-[#0D0D0D]">
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E50914]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="badge-red mb-5 inline-block">Prova social</span>
          <h2 className="section-title text-white mb-4">
            RESULTADOS REAIS,
            <br />
            <span className="gradient-text">PESSOAS REAIS</span>
          </h2>
          <p className="text-[#AAAAAA] font-body text-lg max-w-2xl mx-auto">
            Mais de 500 alunos transformaram seus corpos com o método personalizado. Veja algumas histórias reais.
          </p>
        </ScrollReveal>

        {/* Transformations Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {transformations.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 120}>
              <div className="group bg-[#1A1A1A] border border-[#2A2A2A] rounded-sm overflow-hidden card-lift">
                {/* Before/After images */}
                <div className="relative grid grid-cols-2 h-56 sm:h-64">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.before}
                      alt={`${item.name} antes`}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#0D0D0D]/80 text-[#AAAAAA] text-[10px] font-mono font-medium px-2 py-1 rounded-sm tracking-widest uppercase">
                        Antes
                      </span>
                    </div>
                  </div>
                  <div className="relative overflow-hidden">
                    <img
                      src={item.after}
                      alt={`${item.name} depois`}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="bg-[#E50914] text-white text-[10px] font-mono font-medium px-2 py-1 rounded-sm tracking-widest uppercase">
                        Depois
                      </span>
                    </div>
                  </div>
                  {/* Center divider */}
                  <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-[#E50914]" />
                </div>

                {/* Card footer */}
                <div className="p-5 flex items-center justify-between">
                  <div>
                    <p className="text-white font-body font-semibold text-sm">{item.name}</p>
                    <p className="text-[#AAAAAA] text-xs font-body mt-0.5">{item.time} de treino</p>
                  </div>
                  <div className="text-right">
                    <span className="font-display text-2xl text-[#E50914] tracking-wide">
                      {item.loss}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Testimonials */}
        <ScrollReveal className="text-center mb-12">
          <h3 className="section-title text-white text-3xl">
            O QUE DIZEM OS <span className="gradient-text">ALUNOS</span>
          </h3>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.id} delay={i * 100}>
              <div className="bg-[#1A1A1A] border border-[#2A2A2A] p-6 rounded-sm card-lift group relative overflow-hidden">
                {/* Red accent on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#E50914] group-hover:w-1 transition-all duration-300" />

                {/* Quote icon */}
                <Quote size={28} className="text-[#E50914]/30 mb-4" />

                {/* Text */}
                <p className="text-[#AAAAAA] font-body text-base leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                  {t.text}
                </p>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover border-2 border-[#2A2A2A]"
                    />
                    <div>
                      <p className="text-white font-body font-semibold text-sm">{t.name}</p>
                      <p className="text-[#AAAAAA] text-xs font-body">{t.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} size={12} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
