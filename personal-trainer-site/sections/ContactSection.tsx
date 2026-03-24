"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const WHATSAPP_NUMBER = "5511999999999";

interface FormData {
  nome: string;
  objetivo: string;
  peso: string;
  altura: string;
  limitacoes: string;
}

const objectives = [
  "Emagrecer",
  "Ganhar massa muscular",
  "Definição corporal",
  "Condicionamento físico",
  "Reabilitação / saúde",
  "Performance esportiva",
];

export default function ContactSection() {
  const [form, setForm] = useState<FormData>({
    nome: "",
    objetivo: "",
    peso: "",
    altura: "",
    limitacoes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  const buildWhatsAppMessage = () => {
    const lines = [
      `Olá! Acabei de preencher o formulário de avaliação gratuita no seu site.`,
      ``,
      `*Nome:* ${form.nome}`,
      `*Objetivo:* ${form.objetivo}`,
      `*Peso atual:* ${form.peso} kg`,
      `*Altura:* ${form.altura} cm`,
      `*Limitações físicas:* ${form.limitacoes || "Nenhuma"}`,
      ``,
      `Aguardo o contato para começar minha transformação! 💪`,
    ];
    return encodeURIComponent(lines.join("\n"));
  };

  return (
    <section id="contato" className="relative py-28 bg-[#0D0D0D] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E50914]/50 to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#E50914] rounded-full opacity-[0.04] blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-14">
          <span className="badge-red mb-5 inline-block">Avaliação gratuita</span>
          <h2 className="section-title text-white mb-4">
            DÊ O PRIMEIRO
            <br />
            <span className="gradient-text">PASSO AGORA</span>
          </h2>
          <p className="text-[#AAAAAA] font-body text-lg max-w-xl mx-auto">
            Preencha o formulário abaixo e receba uma avaliação personalizada — sem custo, sem compromisso.
          </p>
        </ScrollReveal>

        {/* Form Card */}
        <ScrollReveal delay={100}>
          <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-sm p-8 sm:p-10">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-white font-body font-medium text-sm mb-2">
                    Seu nome <span className="text-[#E50914]">*</span>
                  </label>
                  <input
                    type="text"
                    name="nome"
                    value={form.nome}
                    onChange={handleChange}
                    placeholder="Ex: João Silva"
                    required
                    className="input-field"
                  />
                </div>

                {/* Objective */}
                <div>
                  <label className="block text-white font-body font-medium text-sm mb-2">
                    Seu objetivo principal <span className="text-[#E50914]">*</span>
                  </label>
                  <select
                    name="objetivo"
                    value={form.objetivo}
                    onChange={handleChange}
                    required
                    className="input-field appearance-none cursor-pointer"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}
                  >
                    <option value="">Selecione seu objetivo...</option>
                    {objectives.map((obj) => (
                      <option key={obj} value={obj}>
                        {obj}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Weight + Height */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-white font-body font-medium text-sm mb-2">
                      Peso atual (kg) <span className="text-[#E50914]">*</span>
                    </label>
                    <input
                      type="number"
                      name="peso"
                      value={form.peso}
                      onChange={handleChange}
                      placeholder="Ex: 75"
                      required
                      min={30}
                      max={300}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-body font-medium text-sm mb-2">
                      Altura (cm) <span className="text-[#E50914]">*</span>
                    </label>
                    <input
                      type="number"
                      name="altura"
                      value={form.altura}
                      onChange={handleChange}
                      placeholder="Ex: 170"
                      required
                      min={100}
                      max={250}
                      className="input-field"
                    />
                  </div>
                </div>

                {/* Physical limitations */}
                <div>
                  <label className="block text-white font-body font-medium text-sm mb-2">
                    Limitações físicas ou lesões
                    <span className="text-[#AAAAAA] font-normal ml-1">(opcional)</span>
                  </label>
                  <textarea
                    name="limitacoes"
                    value={form.limitacoes}
                    onChange={handleChange}
                    placeholder="Ex: Dor no joelho, hérnia de disco, cirurgia recente..."
                    rows={3}
                    className="input-field resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-3 bg-[#E50914] hover:bg-[#B20710] disabled:opacity-70 disabled:cursor-not-allowed text-white font-body font-bold text-base py-4 rounded-sm transition-all duration-200 hover:shadow-xl hover:shadow-red-600/30"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Receber avaliação gratuita
                    </>
                  )}
                </button>

                <p className="text-center text-[#666] font-body text-xs">
                  🔒 Seus dados são confidenciais. Sem spam, prometido.
                </p>
              </form>
            ) : (
              /* Success state */
              <div className="text-center py-8">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-[#E50914]/15 flex items-center justify-center">
                    <CheckCircle size={40} className="text-[#E50914]" />
                  </div>
                </div>
                <h3 className="font-display text-3xl text-white mb-3">
                  FORMULÁRIO ENVIADO!
                </h3>
                <p className="text-[#AAAAAA] font-body text-base mb-8 max-w-sm mx-auto">
                  Incrível, <strong className="text-white">{form.nome}</strong>! Agora dá o próximo passo e
                  inicia a conversa diretamente no WhatsApp para agendar sua avaliação.
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${buildWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1dac55] text-white font-body font-bold text-base px-10 py-4 rounded-sm transition-all duration-200 hover:shadow-xl hover:shadow-green-500/30"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Iniciar conversa no WhatsApp
                </a>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
