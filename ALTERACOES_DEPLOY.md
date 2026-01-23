# 🔧 Alterações para Deploy no CloudPanel

## 📝 Resumo do Problema

Durante o build do Next.js no servidor CloudPanel, a aplicação estava tentando fazer **static generation (SSG)** das páginas, mas não conseguia acessar o banco de dados no momento do build, resultando em erro:

```
TypeError: Cannot read properties of undefined (reading 'title')
```

## ✅ Solução Implementada

Forçamos **renderização dinâmica (SSR)** em todas as páginas que consultam o banco de dados, garantindo que a conexão ocorra apenas em **runtime** (quando o usuário acessa), não durante o build.

## 📄 Arquivos Modificados

### 1. `app/[locale]/page.tsx` (Homepage)
**Adicionado:**
```typescript
// Force dynamic rendering to ensure database connection at runtime
export const dynamic = 'force-dynamic';
export const revalidate = 0;
```

### 2. `app/[locale]/[slug]/page.tsx` (Páginas de Serviços)
**Adicionado:**
```typescript
// Force dynamic rendering to ensure database connection at runtime
export const dynamic = 'force-dynamic';
export const revalidate = 0;
```

### 3. `app/[locale]/insights/page.tsx` (Listagem de Posts)
**Adicionado:**
```typescript
// Force dynamic rendering to ensure database connection at runtime
export const dynamic = 'force-dynamic';
export const revalidate = 0;
```

### 4. `app/[locale]/insights/[slug]/page.tsx` (Detalhe do Post)
**Adicionado:**
```typescript
// Force dynamic rendering to ensure database connection at runtime
export const dynamic = 'force-dynamic';
export const revalidate = 0;
```

## 🆕 Arquivos Criados

### 5. `test-connection.js`
Script para testar conexão com o banco de dados:
- Verifica se `DATABASE_URL` está correto
- Lista páginas e traduções no banco
- Mostra estatísticas

**Uso:**
```bash
node test-connection.js
```

### 6. `deploy-to-server.sh`
Script automático de deploy via SCP/SSH:
- Envia arquivos alterados
- Testa conexão
- Faz build
- Reinicia PM2

**Uso:**
```bash
# Editar SERVER_HOST no arquivo
./deploy-to-server.sh
```

## 🔄 Impacto das Alterações

### ✅ Vantagens:
- ✅ Build funciona sem acesso ao banco
- ✅ Conexão com banco apenas em runtime
- ✅ Conteúdo sempre atualizado (não cacheado)
- ✅ Sem erros de undefined

### ⚠️ Considerações:
- ⚠️ Páginas não são pré-renderizadas (SSR em vez de SSG)
- ⚠️ Cada requisição consulta o banco (mais carga no servidor)
- ⚠️ LCP pode ser ligeiramente maior (mas imperceptível)

### 💡 Otimizações Futuras (Opcional):
- Implementar cache Redis
- Usar ISR (Incremental Static Regeneration) com revalidate maior
- Implementar CDN para assets estáticos

## 📋 Checklist de Deploy

- [ ] Arquivos enviados para o servidor
- [ ] Teste de conexão executado (`node test-connection.js`)
- [ ] Build concluído sem erros
- [ ] PM2 reiniciado
- [ ] Site acessível no navegador
- [ ] Todas as páginas carregando corretamente
- [ ] Logs sem erros (`pm2 logs hivegroup`)

## 🐛 Troubleshooting

### Se ainda der erro de conexão:
```bash
# Verificar DATABASE_URL
cat .env | grep DATABASE_URL

# Testar MySQL diretamente
mysql -u [usuario] -p -h localhost [database] -e "SHOW TABLES;"

# Regenerar Prisma Client
npx prisma generate
```

### Se o build falhar:
```bash
# Limpar cache
rm -rf .next node_modules/.cache

# Reinstalar dependências
npm install

# Build novamente
npm run build
```

## 📞 Suporte

Se precisar de ajuda adicional, verifique:
- Logs do PM2: `pm2 logs hivegroup`
- Logs do MySQL: `/var/log/mysql/error.log`
- Logs do Nginx: `/var/log/nginx/error.log`
