# 🚀 Instruções para Deploy no Servidor CloudPanel

## ✅ Arquivos alterados localmente:
1. ✅ `app/[locale]/page.tsx` - Adicionado `export const dynamic = 'force-dynamic'`
2. ✅ `app/[locale]/[slug]/page.tsx` - Adicionado `export const dynamic = 'force-dynamic'`
3. ✅ `app/[locale]/insights/page.tsx` - Adicionado `export const dynamic = 'force-dynamic'`
4. ✅ `app/[locale]/insights/[slug]/page.tsx` - Adicionado `export const dynamic = 'force-dynamic'`
5. ✅ `test-connection.js` - Criado para testar conexão com BD
6. ✅ `deploy-to-server.sh` - Script automático de deploy

---

## 🚀 Opção 1: Deploy Automático (Recomendado)

```bash
# Edite o arquivo deploy-to-server.sh e configure:
# - SERVER_HOST (IP ou hostname do servidor)
# Depois execute:

./deploy-to-server.sh
```

Este script irá:
- Enviar todos os arquivos alterados via SCP
- Testar conexão com banco de dados
- Fazer build
- Reiniciar PM2
- Mostrar status

---

## 🔧 Opção 2: Deploy Manual

### Comandos para executar no SERVIDOR (via SSH):

```bash
# 1. Ir para o diretório do projeto
cd /home/tgoo-hivegroup/htdocs/hivegroup.tgoo.eu

# 2. Fazer upload dos arquivos alterados via Git ou SCP
# Se usar Git:
git pull origin main  # ou branch correspondente

# Se usar SCP da máquina local:
# Na sua máquina local, execute:
# scp app/[locale]/page.tsx tgoo-hivegroup@[servidor]:/home/tgoo-hivegroup/htdocs/hivegroup.tgoo.eu/app/[locale]/
# scp test-connection.js tgoo-hivegroup@[servidor]:/home/tgoo-hivegroup/htdocs/hivegroup.tgoo.eu/

# 3. Testar conexão com o banco
node test-connection.js

# 4. Se a conexão estiver OK, limpar cache e rebuild
rm -rf .next
npm run build

# 5. Reiniciar aplicação com PM2
pm2 restart hivegroup

# 6. Ver logs em tempo real
pm2 logs hivegroup --lines 50

# 7. Testar no browser
curl http://localhost:3005/pt

# 8. Acessar no navegador
# https://hivegroup.tgoo.eu
```

---

## Se o teste de conexão falhar:

```bash
# Verificar .env
cat .env | grep DATABASE_URL

# Testar conexão MySQL diretamente
mysql -u [usuario] -p -h localhost [database] -e "SELECT COUNT(*) FROM pages;"

# Verificar se o Prisma Client está atualizado
npx prisma generate
```

---

## Comandos úteis PM2:

```bash
pm2 status                    # Ver status de todos os processos
pm2 logs hivegroup           # Ver logs em tempo real
pm2 restart hivegroup        # Reiniciar
pm2 stop hivegroup           # Parar
pm2 delete hivegroup         # Remover
pm2 save                     # Salvar configuração
```

---

## Resolver problemas comuns:

### Problema: "Cannot read properties of undefined"
**Solução**: Banco de dados vazio ou conexão falhando
```bash
# Verificar se tem dados
node test-connection.js

# Se vazio, rodar seed novamente
npx tsx prisma/seed.ts
```

### Problema: "Module not found"
**Solução**: Instalar dependências
```bash
npm install
npx prisma generate
```

### Problema: Porta já em uso
**Solução**: Mudar porta ou matar processo
```bash
# Ver o que está na porta
lsof -i :3005

# Matar processo
kill -9 [PID]

# Ou mudar porta no ecosystem.config.js
```
