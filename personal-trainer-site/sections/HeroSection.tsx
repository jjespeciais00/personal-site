"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Star, Users, Trophy } from "lucide-react";

const WHATSAPP_NUMBER = "5511999999999";
const WHATSAPP_CTA = encodeURIComponent("Olá! Quero começar minha transformação agora!");

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <span className="stat-number red-glow-text">
      {count}
      {suffix}
    </span>
  );
}

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0D0D0D]"
    >
      {/* Background Image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=1600&q=80"
          alt="Personal Trainer"
          className="w-full h-full object-cover opacity-20"
          style={{ objectPosition: "center 20%" }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/80 to-[#0D0D0D]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-[#0D0D0D]/50" />
      </div>

      {/* Red accent light */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[#E50914] rounded-full opacity-5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#E50914] rounded-full opacity-5 blur-[100px] pointer-events-none" />

      {/* Diagonal red accent bar */}
      <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-[#E50914]/40 to-transparent hidden xl:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div>
            {/* Badge */}
            <div
              className={`transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: "0ms" }}
            >
              <span className="badge-red mb-6 inline-flex items-center gap-2">
                <Star size={10} fill="white" />
                Avaliado 4.9/5 por +500 alunos
              </span>
            </div>

            {/* Main Title */}
            <div
              className={`transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: "100ms" }}
            >
              <h1 className="hero-title text-white mb-4">
                TRANSFORME
                <br />
                SEU CORPO
                <br />
                <span className="gradient-text">EM 90 DIAS</span>
              </h1>
            </div>

            {/* Subtitle */}
            <div
              className={`transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: "200ms" }}
            >
              <p className="text-[#AAAAAA] text-lg sm:text-xl font-body font-light mb-8 max-w-xl leading-relaxed">
                Treino 100% personalizado para o seu corpo e objetivo.
                Mais de <strong className="text-white font-semibold">500 alunos transformados</strong> com método comprovado — online ou presencial.
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: "300ms" }}
            >
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_CTA}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#E50914] hover:bg-[#B20710] text-white font-body font-bold text-base px-8 py-4 rounded-sm transition-all duration-200 hover:shadow-xl hover:shadow-red-600/30 hover:scale-105 active:scale-95"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Começar agora
              </a>
              <a
                href="#resultados"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#resultados")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 border border-[#3A3A3A] hover:border-[#E50914] text-white font-body font-semibold text-base px-8 py-4 rounded-sm transition-all duration-200 hover:bg-[#E50914]/10"
              >
                Ver resultados
              </a>
            </div>

            {/* Stats Row */}
            <div
              className={`flex flex-wrap gap-8 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <AnimatedNumber target={500} suffix="+" />
                </div>
                <span className="text-[#AAAAAA] text-xs font-body tracking-widest uppercase mt-1">Alunos atendidos</span>
              </div>

              <div className="w-px bg-[#2A2A2A] self-stretch hidden sm:block" />

              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <AnimatedNumber target={90} suffix=" dias" />
                </div>
                <span className="text-[#AAAAAA] text-xs font-body tracking-widest uppercase mt-1">Para resultados</span>
              </div>

              <div className="w-px bg-[#2A2A2A] self-stretch hidden sm:block" />

              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="stat-number red-glow-text">4.9</span>
                  <div className="flex gap-0.5 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
                <span className="text-[#AAAAAA] text-xs font-body tracking-widest uppercase mt-1">Avaliação média</span>
              </div>
            </div>
          </div>

          {/* Right: Hero image card */}
          <div
            className={`hidden lg:flex justify-end transition-all duration-1000 ${loaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="relative">
              {/* Main photo */}
              <div className="relative w-[420px] h-[560px] rounded-sm overflow-hidden red-glow">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"
                  alt="Carlos Silva - Personal Trainer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />
              </div>

              {/* Floating achievement card */}
              <div className="absolute -left-12 top-12 bg-[#1A1A1A] border border-[#2A2A2A] p-4 rounded-sm shadow-2xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#E50914]/20 rounded-sm flex items-center justify-center">
                    <Trophy size={18} className="text-[#E50914]" />
                  </div>
                  <div>
                    <p className="text-white font-body font-semibold text-sm">CREF certificado</p>
                    <p className="text-[#AAAAAA] text-xs">Conselho Federal de Ed. Física</p>
                  </div>
                </div>
              </div>

              {/* Floating users card */}
              <div className="absolute -right-8 bottom-20 bg-[#1A1A1A] border border-[#2A2A2A] p-4 rounded-sm shadow-2xl animate-float" style={{ animationDelay: "1.5s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#E50914]/20 rounded-sm flex items-center justify-center">
                    <Users size={18} className="text-[#E50914]" />
                  </div>
                  <div>
                    <p className="text-white font-body font-semibold text-sm">+500 alunos</p>
                    <p className="text-[#AAAAAA] text-xs">Transformados com sucesso</p>
                  </div>
                </div>
              </div>

              {/* Red corner accent */}
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-[#E50914]" style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#AAAAAA] animate-bounce">
        <span className="text-xs font-body tracking-widest uppercase">Rolar</span>
        <ChevronDown size={16} />
      </div>
    </section>
  );
}
