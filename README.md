# 🐝 Hive Group - Website Institucional

Website institucional multiidioma da Hive Group Portugal com gestão de conteúdo via MySQL.

## ⚠️ AVISO IMPORTANTE

**Antes de qualquer alteração, SEMPRE ler:**
1. [`docs/I18N_DB_RULES.md`](./docs/I18N_DB_RULES.md) - Regras obrigatórias i18n+DB
2. [`docs/CONTENT_MODEL.md`](./docs/CONTENT_MODEL.md) - Estrutura de dados
3. [`docs/CHANGE_WORKFLOW.md`](./docs/CHANGE_WORKFLOW.md) - Workflow de alterações
4. [`docs/AI_CONTENT_WORKFLOW.md`](./docs/AI_CONTENT_WORKFLOW.md) - **Workflow de conteúdo para agentes IA** (seed / deploy)

**Regra de Ouro**: Nunca criar blocos de conteúdo sem tradução. Todo o conteúdo longo vem do MySQL.

---

## 🚀 Stack Tecnológica

- **Framework**: Next.js 14 (App Router)
- **TypeScript**: Type-safe
- **Styling**: Tailwind CSS
- **Database**: MySQL 8.0
- **ORM**: Prisma
- **i18n**: next-intl
- **Idiomas**: pt-PT, en-GB, fr-FR, es-ES, it-IT

---

## 📋 Pré-requisitos

- Node.js 18+
- MySQL 8.0+ instalado e em execução
- npm ou yarn

---

## 🛠️ Setup Inicial

### 1. Instalar dependências
```bash
npm install
```

### 2. Configurar MySQL

Certifique-se de que o MySQL está em execução:
```bash
# macOS (Homebrew)
brew services start mysql@8.0

# Verificar status
brew services list | grep mysql
```

### 3. Configurar variáveis de ambiente

Copie o ficheiro `.env.example` para `.env`:
```bash
cp .env.example .env
```

Edite `.env` com as suas credenciais MySQL:
```env
DATABASE_URL="mysql://root@localhost:3306/hivegroup"
```

### 4. Criar base de dados

```bash
mysql -u root -e "CREATE DATABASE IF NOT EXISTS hivegroup CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
```

### 5. Executar migrations

```bash
npm run prisma:migrate
```

### 6. Popular base de dados (seed)

```bash
npm run prisma:seed
```

Este comando cria:
- Página Home com conteúdo em 5 idiomas
- 12 páginas de serviços (Contabilidade, Agente Autorizado, Finance, etc.)
- Página de Contactos
- 3 posts de blog (Insights)
- Tudo com traduções completas em pt, en, fr, es, it

### 7. Iniciar servidor de desenvolvimento

```bash
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000)

---

## 📁 Estrutura do Projeto

```
├── app/
│   ├── [locale]/               # Rotas por idioma
│   │   ├── layout.tsx          # Layout com Header + Footer
│   │   ├── page.tsx            # Homepage
│   │   ├── [slug]/page.tsx     # Páginas de serviços
│   │   ├── contactos/page.tsx  # Página de contactos
│   │   └── insights/           # Blog
│   ├── globals.css             # CSS global + Tailwind
│   ├── robots.ts               # robots.txt dinâmico
│   └── sitemap.ts              # Sitemap XML com hreflang
├── components/                 # Componentes reutilizáveis
│   ├── Header.tsx              # Header com navegação
│   ├── Footer.tsx              # Footer com links
│   ├── LanguageSelector.tsx    # Selector de idioma
│   ├── Hero.tsx                # Hero section
│   ├── ServicesGrid.tsx        # Grid de serviços
│   ├── ContactCTA.tsx          # Call-to-action
│   └── FeaturesSection.tsx     # Secção de features
├── lib/
│   ├── prisma.ts               # Cliente Prisma
│   └── pages.ts                # Funções helper para buscar dados
├── messages/                   # UI strings por idioma
│   ├── pt.json
│   ├── en.json
│   ├── fr.json
│   ├── es.json
│   └── it.json
├── prisma/
│   ├── schema.prisma           # Schema da base de dados
│   ├── seed.ts                 # Seed com conteúdo inicial
│   └── migrations/             # Migrations do Prisma
├── docs/                       # Documentação obrigatória
│   ├── I18N_DB_RULES.md        # ⚠️ Ler antes de qualquer alteração
│   ├── CONTENT_MODEL.md        # Estrutura de dados
│   ├── CHANGE_WORKFLOW.md      # Workflow de alterações
│   └── AI_CONTENT_WORKFLOW.md  # Seed/export/deploy para agentes IA
├── i18n.ts                     # Configuração next-intl
├── middleware.ts               # Middleware i18n (deteção de idioma)
└── README.md                   # Este ficheiro
```

---

## 🌍 Sistema Multiidioma

### Deteção Automática de Idioma

O middleware (`middleware.ts`) detecta automaticamente o idioma do utilizador:

1. **Cookie** (prioridade máxima): Se o utilizador já escolheu um idioma
2. **Accept-Language header**: Do browser/OS do utilizador
3. **Default**: Português (pt)

### Trocar de Idioma

O componente `LanguageSelector` no header permite trocar de idioma. A escolha é guardada num cookie.

### Rotas por Idioma

- `/pt` - Português de Portugal
- `/en` - Inglês do Reino Unido
- `/fr` - Francês
- `/es` - Espanhol
- `/it` - Italiano

---

## 📊 Gestão de Conteúdo

### Via Prisma Studio (Interface Visual)

```bash
npm run prisma:studio
```

Abrir [http://localhost:5555](http://localhost:5555)

- Editar páginas: tabela `page_translations`
- Editar posts: tabela `post_translations`
- Filtrar por `locale` para ver traduções específicas

### Via Código

Ver exemplos em [`docs/CHANGE_WORKFLOW.md`](./docs/CHANGE_WORKFLOW.md)

---

## 🎨 Páginas Disponíveis

### Páginas Estáticas
- `/[locale]` - Homepage
- `/[locale]/contactos` - Contactos

### Páginas de Serviços
- `/[locale]/contabilidade` - Contabilidade Certificada
- `/[locale]/agente-autorizado` - Agente Autorizado (destaque)
- `/[locale]/finance` - Consultoria Financeira
- `/[locale]/credit` - Soluções de Crédito
- `/[locale]/insurance` - Seguros
- `/[locale]/real-estate` - Imobiliário
- `/[locale]/legal` - Serviços Jurídicos
- `/[locale]/marketing` - Marketing Digital
- `/[locale]/travel` - Agência de Viagens
- `/[locale]/it` - Serviços de IT
- `/[locale]/business-development` - Desenvolvimento de Negócio

### Blog (Insights)
- `/[locale]/insights` - Listagem de posts
- `/[locale]/insights/[slug]` - Detalhe do post

---

## 🔧 Comandos Úteis

### Desenvolvimento
```bash
npm run dev              # Servidor de desenvolvimento
npm run build            # Build de produção
npm start                # Servidor de produção
npm run lint             # Linting
```

### Prisma
```bash
npm run prisma:generate  # Gerar cliente Prisma
npm run prisma:migrate   # Criar/executar migrations
npm run prisma:seed      # Popular base de dados
npm run prisma:studio    # Interface visual (localhost:5555)
```

### Prisma Avançado
```bash
# Criar nova migration
npx prisma migrate dev --name descricao_da_alteracao

# Reset completo da BD (⚠️ apaga tudo)
npx prisma migrate reset

# Push schema sem criar migration (dev only)
npx prisma db push
```

---

## 🔍 SEO

### Metadata por Página e Idioma

Cada página gera automaticamente:
- `title` e `description` únicos por idioma
- `keywords` específicas
- `canonical` URL
- `hreflang` alternates para todos os idiomas
- Open Graph tags

### Sitemap

Gerado dinamicamente em `/sitemap.xml`:
- Todas as páginas em todos os idiomas
- Todos os posts em todos os idiomas
- Com hreflang alternates
- Atualizado automaticamente

### robots.txt

Disponível em `/robots.txt` (gerado dinamicamente)

---

## 📧 Contactos da Empresa

**Telefone**: +351 212 433 909 (Chamada para rede móvel nacional)

**Emails Especializados**:
- Finanças: finance@hivegroup.pt
- Jurídico: legal@hivegroup.pt
- Imobiliário: realestate@hivegroup.pt
- Viagens: travel@hivegroup.pt
- Desenvolvimento de Negócio: business@hivegroup.pt
- Seguros: insurance@hivegroup.pt
- Crédito: credit@hivegroup.pt
- Marketing: marketing@hivegroup.pt

---

## 🐛 Troubleshooting

### Erro: "Can't reach database server"
```bash
# Verificar se MySQL está em execução
brew services list | grep mysql

# Iniciar MySQL
brew services start mysql@8.0
```

### Erro: "Database does not exist"
```bash
mysql -u root -e "CREATE DATABASE hivegroup;"
npm run prisma:migrate
```

### Erro: "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Conteúdo não atualiza
```bash
# Limpar cache Next.js
rm -rf .next
npm run dev
```

---

## 📚 Documentação Adicional

- **Regras i18n+DB**: [`docs/I18N_DB_RULES.md`](./docs/I18N_DB_RULES.md)
- **Modelo de Dados**: [`docs/CONTENT_MODEL.md`](./docs/CONTENT_MODEL.md)
- **Workflow**: [`docs/CHANGE_WORKFLOW.md`](./docs/CHANGE_WORKFLOW.md)
- **Conteúdo (agentes IA)**: [`docs/AI_CONTENT_WORKFLOW.md`](./docs/AI_CONTENT_WORKFLOW.md)
- **Next.js**: [nextjs.org/docs](https://nextjs.org/docs)
- **Prisma**: [prisma.io/docs](https://www.prisma.io/docs)
- **next-intl**: [next-intl-docs.vercel.app](https://next-intl-docs.vercel.app/)
- **Tailwind CSS**: [tailwindcss.com/docs](https://tailwindcss.com/docs)

---

## 🚀 Deploy

### Vercel (Recomendado)

1. Push para GitHub
2. Importar no Vercel
3. Configurar variável de ambiente `DATABASE_URL`
4. Deploy automático

### Outros Providers

1. Build: `npm run build`
2. Configurar variável `DATABASE_URL`
3. Executar migrations: `npx prisma migrate deploy`
4. Start: `npm start`

---

## 📝 Licença

© 2024-2026 Hive Group Portugal. Todos os direitos reservados.

---

## 👥 Suporte

Para questões ou suporte, contactar:
- Email: business@hivegroup.pt
- Telefone: +351 212 433 909
