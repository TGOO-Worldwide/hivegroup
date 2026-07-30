# Instruções para Deploy no Servidor CloudPanel

## Deploy automático (GitHub Actions) — recomendado

Cada push na branch `main` faz deploy automático via GitHub Actions: o código é enviado por **rsync/SSH** (sem `git` no servidor), depois corre `npm ci`, `prisma generate`, `npm run build` e `pm2 restart hivegroup`.

Também podes disparar manualmente em **Actions → Deploy to CloudPanel → Run workflow**.

### 1. Gerar chave SSH de deploy

Na tua máquina local:

```bash
ssh-keygen -t ed25519 -C "github-actions-hivegroup" -f ./hivegroup-deploy -N ""
```

Isto cria:
- `hivegroup-deploy` — chave **privada** (vai para o GitHub Secret)
- `hivegroup-deploy.pub` — chave **pública** (vai para o servidor)

### 2. Autorizar a chave no servidor

Como user `tgoo-hivegroup` (ou com sudo):

```bash
mkdir -p ~/.ssh
chmod 700 ~/.ssh
cat hivegroup-deploy.pub >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

Testa o login com a chave privada antes de configurar o GitHub:

```bash
ssh -i hivegroup-deploy tgoo-hivegroup@[HOST]
```

### 3. Secrets no GitHub

No repositório → **Settings → Secrets and variables → Actions → New repository secret**:

| Secret | Valor |
|--------|--------|
| `SSH_PRIVATE_KEY` | Conteúdo completo de `hivegroup-deploy` (incluindo as linhas `BEGIN`/`END`) |
| `SSH_HOST` | IP ou hostname do servidor |
| `SSH_USER` | `tgoo-hivegroup` |
| `SSH_PATH` | `/home/tgoo-hivegroup/htdocs/hivegroup.tgoo.eu` |
| `SSH_PORT` | `22` (ou a porta SSH real) |

### 4. Pré-requisitos no servidor

- Node/npm instalados
- Processo PM2 `hivegroup` já criado e a correr
- Ficheiro `.env` com `DATABASE_URL` (nunca é sobrescrito pelo deploy)
- User SSH com escrita em `SSH_PATH` e permissão para `pm2 restart`

### Fluxo

```
push main → GitHub Actions → rsync (sem .env / node_modules / .next)
         → npm ci → prisma generate → build → pm2 restart hivegroup
```

O workflow está em [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

**Nota:** migrations Prisma não correm automaticamente. O `.env` do servidor é preservado.

---

## Opção alternativa: script local SCP

```bash
# Edite SERVER_HOST em deploy-to-server.sh e execute:
./deploy-to-server.sh
```

Este script envia ficheiros pontuais via SCP, testa a BD, faz build e reinicia o PM2.

---

## Deploy manual (SSH)

```bash
# 1. Ir para o diretório do projeto
cd /home/tgoo-hivegroup/htdocs/hivegroup.tgoo.eu

# 2. Atualizar ficheiros (rsync/SCP a partir da máquina local — sem git no servidor)

# 3. Testar conexão com o banco
node test-connection.js

# 4. Limpar cache e rebuild
rm -rf .next
npm ci
npx prisma generate
npm run build

# 5. Reiniciar aplicação com PM2
pm2 restart hivegroup

# 6. Ver logs
pm2 logs hivegroup --lines 50

# 7. Testar
curl http://localhost:3005/pt
# https://hivegroup.tgoo.eu
```

---

## Se o teste de conexão falhar

```bash
cat .env | grep DATABASE_URL
mysql -u [usuario] -p -h localhost [database] -e "SELECT COUNT(*) FROM pages;"
npx prisma generate
```

---

## Comandos úteis PM2

```bash
pm2 status
pm2 logs hivegroup
pm2 restart hivegroup
pm2 stop hivegroup
pm2 delete hivegroup
pm2 save
```

---

## Resolver problemas comuns

### "Cannot read properties of undefined"

Banco vazio ou conexão falhando:

```bash
node test-connection.js
npx tsx prisma/seed.ts
```

### "Module not found"

```bash
npm ci
npx prisma generate
```

### Porta já em uso

```bash
lsof -i :3005
kill -9 [PID]
# Ou mudar a porta no ecosystem.config.js / PM2
```

### GitHub Actions falha no SSH

- Confirma que `SSH_PRIVATE_KEY`, `SSH_HOST`, `SSH_USER`, `SSH_PATH` e `SSH_PORT` estão corretos
- Confirma que a chave pública está em `~/.ssh/authorized_keys` no servidor
- Confirma firewall/porta SSH aberta para os runners do GitHub (ou usa IP allowlist se aplicável)
