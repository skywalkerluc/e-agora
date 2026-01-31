# E agora?

Aplicação para pais de primeira viagem consultarem informações sobre bebês de 0-12 meses.

## Descrição

O app permite que pais busquem e consultem situações comuns do primeiro ano de vida do bebê. Para cada situação, o app fornece:

- O que é normal
- O que fazer
- Quando procurar pediatra
- Fonte da informação

## Funcionalidades

- Busca por texto com debounce
- 8 categorias de situações (Alimentação, Sono, Desenvolvimento Motor, etc.)
- Categorias expansíveis/colapsáveis
- Página de detalhe para cada situação
- PWA instalável e funciona 100% offline
- Design mobile-first e acessível

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Lucide React (ícones)
- vite-plugin-pwa (Workbox)

## Setup local

1. Instalar dependências:

```bash
npm install
```

2. Rodar em desenvolvimento:

```bash
npm run dev
```

3. Build de produção:

```bash
npm run build
```

4. Preview do build:

```bash
npm run preview
```

## Deploy na Vercel

O projeto está pronto para deploy imediato na Vercel:

1. Push para GitHub
2. Conectar repositório na Vercel
3. Deploy automático

Ou via CLI:

```bash
npm install -g vercel
vercel
```

O arquivo `vercel.json` já está configurado para suportar rotas client-side do React Router.

## Estrutura do projeto

```
src/
├── assets/data/situations.json  # Dados estáticos
├── components/
│   ├── ui/                      # Componentes genéricos
│   └── domain/                  # Componentes de domínio
├── hooks/                       # Custom hooks
├── pages/                       # Páginas principais
├── types/                       # Tipos TypeScript
└── utils/                       # Utilitários
```

## PWA

O app é um Progressive Web App completo:

- Instalável em Android e iOS
- Funciona offline após primeiro acesso
- Estratégia cache-first para assets
- Manifest configurado

**Nota sobre ícones:** O projeto inclui ícones placeholder PNG. Para produção, recomenda-se substituir os arquivos em `public/pwa-192x192.png` e `public/pwa-512x512.png` por ícones customizados de alta qualidade.

## Acessibilidade

- Navegável por teclado
- Labels em todos os inputs
- Contraste adequado (WCAG AA)
- Hierarquia de headings correta

## Licença

MIT
