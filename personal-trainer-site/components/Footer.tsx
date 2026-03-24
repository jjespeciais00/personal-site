"use client";

import { Instagram, Youtube, MapPin, Phone } from "lucide-react";

const WHATSAPP_NUMBER = "5511999999999";
const WHATSAPP_MSG = encodeURIComponent("Olá! Quero saber mais sobre os seus serviços!");

export default function Footer() {
  const navLinks = [
    { label: "Resultados", href: "#resultados" },
    { label: "Serviços", href: "#servicos" },
    { label: "Método", href: "#metodo" },
    { label: "Sobre", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <footer className="bg-[#0D0D0D] border-t border-[#2A2A2A] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[#E50914] flex items-center justify-center rounded-sm">
                <span className="font-display text-white text-xl">CS</span>
              </div>
              <div>
                <p className="font-display text-white text-lg tracking-widest leading-none">CARLOS SILVA</p>
                <p className="text-[#AAAAAA] text-[10px] tracking-[0.2em] uppercase font-body font-medium">Personal Trainer</p>
              </div>
            </div>
            <p className="text-[#AAAAAA] font-body text-sm leading-relaxed max-w-sm mb-6">
              Transformando corpos e vidas há mais de 8 anos. Treino personalizado online e presencial em São Paulo.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#E50914] hover:text-[#E50914] text-[#AAAAAA] rounded-sm flex items-center justify-center transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#E50914] hover:text-[#E50914] text-[#AAAAAA] rounded-sm flex items-center justify-center transition-all duration-200"
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#25D366] hover:text-[#25D366] text-[#AAAAAA] rounded-sm flex items-center justify-center transition-all duration-200"
                aria-label="WhatsApp"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white font-body font-semibold text-sm tracking-widest uppercase mb-5">
              Navegação
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-[#AAAAAA] hover:text-[#E50914] font-body text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-body font-semibold text-sm tracking-widest uppercase mb-5">
              Contato
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-[#AAAAAA] font-body text-sm">
                <MapPin size={16} className="text-[#E50914] flex-shrink-0 mt-0.5" />
                <span>São Paulo, SP — Atendimento presencial e online</span>
              </li>
              <li className="flex items-center gap-3 text-[#AAAAAA] font-body text-sm">
                <Phone size={16} className="text-[#E50914] flex-shrink-0" />
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  (11) 99999-9999
                </a>
              </li>
            </ul>

            {/* CREF */}
            <div className="mt-6 inline-flex items-center gap-2 bg-[#1A1A1A] border border-[#2A2A2A] px-3 py-2 rounded-sm">
              <div className="w-2 h-2 rounded-full bg-[#E50914]" />
              <span className="text-[#AAAAAA] font-mono text-[10px] tracking-widest">CREF 000000-SP</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#2A2A2A] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#AAAAAA] font-body text-xs">
            © {new Date().getFullYear()} Carlos Silva Personal Trainer. Todos os direitos reservados.
          </p>
          <p className="text-[#666] font-body text-xs">
            Desenvolvido com dedicação para resultados reais
          </p>
        </div>
      </div>
    </footer>
  );
}
