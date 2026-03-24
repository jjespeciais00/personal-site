💪 Personal Trainer Site — Next.js 14
Site profissional one-page para Personal Trainer, construído com Next.js 14, React, TailwindCSS e TypeScript. Pronto para produção e fácil de personalizar.



✨ Seções
Seção	Descrição
Hero	Foto, título impactante, stats animados (alunos, dias, avaliação)
Resultados	Grid antes/depois + 4 depoimentos com avatar
Serviços	3 cards de planos (Online, Presencial, Avaliação Física)
Método	3 passos visuais com ícones e tags
Sobre	Foto, bio, certificações, stats
Contato	Formulário com estado de sucesso + botão WhatsApp
WhatsApp Float	Botão flutuante com pulse animation
🎨 Identidade Visual
Preto principal  →  #0D0D0D
Cinza escuro     →  #1A1A1A
Vermelho destaque →  #E50914
Vermelho hover   →  #B20710
Branco           →  #FFFFFF
Fontes: Bebas Neue (display) + DM Sans (body) + JetBrains Mono (mono)

🚀 Como rodar
1. Clonar e instalar
git clone https://github.com/SEU_USUARIO/personal-trainer-site.git
cd personal-trainer-site
npm install
2. Rodar em desenvolvimento
npm run dev
Acesse: http://localhost:3000

3. Build para produção
npm run build
npm run start
🛠️ Estrutura do projeto
personal-trainer-site/
├── app/
│   ├── globals.css       # Estilos globais, variáveis CSS, animações
│   ├── layout.tsx        # Layout raiz com metadata SEO
│   └── page.tsx          # Página principal — importa todas as seções
├── components/
│   ├── Navbar.tsx        # Navbar fixa com scroll behavior
│   ├── Footer.tsx        # Rodapé com links e contato
│   ├── WhatsAppFloat.tsx # Botão flutuante WhatsApp
│   └── ScrollReveal.tsx  # HOC para animação de entrada no scroll
├── sections/
│   ├── HeroSection.tsx       # Hero com stats animados e foto
│   ├── ResultsSection.tsx    # Antes/depois + depoimentos
│   ├── ServicesSection.tsx   # Cards de planos/preços
│   ├── MethodSection.tsx     # 3 passos do método
│   ├── AboutSection.tsx      # Bio + certificações
│   └── ContactSection.tsx    # Formulário + integração WhatsApp
├── tailwind.config.ts    # Cores, fontes e animações customizadas
├── next.config.js        # Configuração de imagens remotas
└── tsconfig.json
✏️ Como personalizar
Trocar o Personal Trainer
Nome e logo → components/Navbar.tsx e components/Footer.tsx
Número do WhatsApp → Buscar 5511999999999 e substituir em todos os arquivos
Foto Hero → sections/HeroSection.tsx — trocar a URL da imagem
Foto Sobre → sections/AboutSection.tsx — trocar a URL da imagem
Preços → sections/ServicesSection.tsx — array plans
Certificações → sections/AboutSection.tsx — array certifications
Depoimentos → sections/ResultsSection.tsx — array testimonials
Resultados antes/depois → sections/ResultsSection.tsx — array transformations
Trocar cores
Edite as variáveis em app/globals.css:

:root {
  --red: #E50914;       /* cor de destaque */
  --red-hover: #B20710;
  --black: #0D0D0D;
  --gray-dark: #1A1A1A;
}
📦 Deploy recomendado
Vercel (gratuito, recomendado)
npm i -g vercel
vercel
Ou conecte o repositório diretamente em vercel.com.

📋 Tecnologias
Next.js 14 — App Router
React 18
TailwindCSS 3
TypeScript
Lucide React — ícones
Google Fonts — Bebas Neue + DM Sans
📄 Licença
MIT — livre para uso comercial e adaptações.

Desenvolvido como template reutilizável para Personal Trainers 💪
