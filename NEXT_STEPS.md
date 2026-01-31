# Próximos passos (opcional)

Este documento lista melhorias opcionais que podem ser feitas após o MVP.

## Ícones PWA customizados

Os ícones atuais são placeholders. Para produzir ícones de alta qualidade:

### Opção 1: Ferramenta online
1. Acesse [PWA Asset Generator](https://progressier.com/pwa-icons-and-ios-splash-screen-generator)
2. Faça upload do arquivo `public/icon.svg`
3. Baixe os ícones gerados
4. Substitua os arquivos em `public/pwa-*.png`

### Opção 2: Ferramentas de design
1. Crie um ícone 512x512px no Figma/Sketch/Illustrator
2. Exporte como PNG em 192x192px e 512x512px
3. Substitua os arquivos em `public/`

### Opção 3: ImageMagick (se disponível)
```bash
# Converter o SVG para PNG
convert -density 300 -background none public/icon.svg -resize 192x192 public/pwa-192x192.png
convert -density 300 -background none public/icon.svg -resize 512x512 public/pwa-512x512.png
cp public/pwa-192x192.png public/apple-touch-icon.png
```

## Outras melhorias possíveis

### Performance
- [ ] Lazy loading de categorias (se crescer muito)
- [ ] Implementar virtual scrolling para listas longas
- [ ] Otimizar bundle com code splitting por rota

### Funcionalidades
- [ ] Favoritos (com localStorage)
- [ ] Histórico de buscas recentes
- [ ] Modo escuro
- [ ] Compartilhar situação (Web Share API)
- [ ] Notificações para lembrar consultas médicas

### Dados
- [ ] Adicionar mais situações
- [ ] Sistema de versioning dos dados
- [ ] Permitir feedback dos usuários

### Analytics (opcional)
- [ ] Google Analytics ou Plausible
- [ ] Tracking de buscas mais comuns
- [ ] Tempo médio por página

### Testes
- [ ] Unit tests (Vitest)
- [ ] E2E tests (Playwright)
- [ ] Testes de acessibilidade (axe-core)

### SEO
- [ ] Meta tags por situação
- [ ] Schema.org markup
- [ ] Sitemap.xml

## Notas

O MVP atual já está completo e pronto para produção. Estas melhorias são **opcionais** e devem ser priorizadas conforme feedback real de usuários.
