# 💪 Personal Trainer Site — Next.js 14

Site profissional one-page para Personal Trainer, construído com **Next.js 14**, **React**, **TailwindCSS** e **TypeScript**. Pronto para produção e fácil de personalizar.

![Preview](https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=1200&q=80)

---

## ✨ Seções

| Seção | Descrição |
|-------|-----------|
| **Hero** | Foto, título impactante, stats animados (alunos, dias, avaliação) |
| **Resultados** | Grid antes/depois + 4 depoimentos com avatar |
| **Serviços** | 3 cards de planos (Online, Presencial, Avaliação Física) |
| **Método** | 3 passos visuais com ícones e tags |
| **Sobre** | Foto, bio, certificações, stats |
| **Contato** | Formulário com estado de sucesso + botão WhatsApp |
| **WhatsApp Float** | Botão flutuante com pulse animation |

---

## 🎨 Identidade Visual

```
Preto principal  →  #0D0D0D
Cinza escuro     →  #1A1A1A
Vermelho destaque →  #E50914
Vermelho hover   →  #B20710
Branco           →  #FFFFFF
```

**Fontes:** Bebas Neue (display) + DM Sans (body) + JetBrains Mono (mono)

---

## 🚀 Como rodar

### 1. Clonar e instalar

```bash
git clone https://github.com/SEU_USUARIO/personal-trainer-site.git
cd personal-trainer-site
npm install
```

### 2. Rodar em desenvolvimento

```bash
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

### 3. Build para produção

```bash
npm run build
npm run start
```

---

## 🛠️ Estrutura do projeto

```
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
```

---

## ✏️ Como personalizar

### Trocar o Personal Trainer

1. **Nome e logo** → `components/Navbar.tsx` e `components/Footer.tsx`
2. **Número do WhatsApp** → Buscar `5511999999999` e substituir em todos os arquivos
3. **Foto Hero** → `sections/HeroSection.tsx` — trocar a URL da imagem
4. **Foto Sobre** → `sections/AboutSection.tsx` — trocar a URL da imagem
5. **Preços** → `sections/ServicesSection.tsx` — array `plans`
6. **Certificações** → `sections/AboutSection.tsx` — array `certifications`
7. **Depoimentos** → `sections/ResultsSection.tsx` — array `testimonials`
8. **Resultados antes/depois** → `sections/ResultsSection.tsx` — array `transformations`

### Trocar cores

Edite as variáveis em `app/globals.css`:

```css
:root {
  --red: #E50914;       /* cor de destaque */
  --red-hover: #B20710;
  --black: #0D0D0D;
  --gray-dark: #1A1A1A;
}
```

---

## 📦 Deploy recomendado

### Vercel (gratuito, recomendado)

```bash
npm i -g vercel
vercel
```

Ou conecte o repositório diretamente em [vercel.com](https://vercel.com).

---

## 📋 Tecnologias

- [Next.js 14](https://nextjs.org/) — App Router
- [React 18](https://react.dev/)
- [TailwindCSS 3](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Lucide React](https://lucide.dev/) — ícones
- [Google Fonts](https://fonts.google.com/) — Bebas Neue + DM Sans

---

## 📄 Licença

MIT — livre para uso comercial e adaptações.

---

Desenvolvido como template reutilizável para Personal Trainers 💪
