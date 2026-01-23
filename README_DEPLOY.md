# 🚀 Deploy CloudPanel - Guia Rápido

## ✅ O que foi feito?

Configurei o projeto para funcionar no CloudPanel, resolvendo o problema de conexão com banco de dados durante o build.

### Arquivos alterados:
1. ✅ **4 páginas** - Adicionado renderização dinâmica (`export const dynamic = 'force-dynamic'`)
2. ✅ **Script de teste** - `test-connection.js` para verificar conexão com BD
3. ✅ **Script de deploy** - `deploy-to-server.sh` para automação completa

---

## 🎯 Próximos Passos (Execute no servidor)

### Opção A: Upload Automático (Recomendado)

1. **Edite o arquivo `deploy-to-server.sh`:**
   ```bash
   nano deploy-to-server.sh
   
   # Altere a linha:
   SERVER_HOST="seu-servidor.com"  
   # Para o IP ou hostname real do servidor
   ```

2. **Execute o script:**
   ```bash
   ./deploy-to-server.sh
   ```
   
   O script faz tudo automaticamente! ✨

### Opção B: Upload Manual (Via Git)

Se o projeto está no Git:

```bash
# No servidor CloudPanel (via SSH):
cd /home/tgoo-hivegroup/htdocs/hivegroup.tgoo.eu

# Puxar alterações
git pull origin main

# Testar conexão
node test-connection.js

# Build
rm -rf .next
npm run build

# Reiniciar
pm2 restart hivegroup

# Ver logs
pm2 logs hivegroup
```

### Opção C: Upload Manual (Via SCP)

Se não usa Git:

```bash
# Da sua máquina local, envie os arquivos:
scp app/\[locale\]/page.tsx tgoo-hivegroup@[servidor]:/home/tgoo-hivegroup/htdocs/hivegroup.tgoo.eu/app/\[locale\]/

scp app/\[locale\]/\[slug\]/page.tsx tgoo-hivegroup@[servidor]:/home/tgoo-hivegroup/htdocs/hivegroup.tgoo.eu/app/\[locale\]/\[slug\]/

scp app/\[locale\]/insights/page.tsx tgoo-hivegroup@[servidor]:/home/tgoo-hivegroup/htdocs/hivegroup.tgoo.eu/app/\[locale\]/insights/

scp app/\[locale\]/insights/\[slug\]/page.tsx tgoo-hivegroup@[servidor]:/home/tgoo-hivegroup/htdocs/hivegroup.tgoo.eu/app/\[locale\]/insights/\[slug\]/

scp test-connection.js tgoo-hivegroup@[servidor]:/home/tgoo-hivegroup/htdocs/hivegroup.tgoo.eu/

# Depois, no servidor:
cd /home/tgoo-hivegroup/htdocs/hivegroup.tgoo.eu
node test-connection.js
rm -rf .next
npm run build
pm2 restart hivegroup
```

---

## 🧪 Testar se Funcionou

```bash
# No servidor, via SSH:
pm2 logs hivegroup --lines 50

# Deve mostrar:
# ✓ Ready in XXXms
# Sem erros de "Cannot read properties of undefined"

# Testar no terminal:
curl http://localhost:3005/pt

# Deve retornar HTML da homepage
```

**No navegador:**
Acesse: `https://hivegroup.tgoo.eu`

---

## 📚 Documentação Completa

- **ALTERACOES_DEPLOY.md** - Detalhes técnicos das alterações
- **DEPLOY_INSTRUCTIONS.md** - Instruções completas passo a passo
- **test-connection.js** - Script de teste de conexão
- **deploy-to-server.sh** - Script automático de deploy

---

## 🆘 Problemas?

### Erro: "Cannot read properties of undefined"
```bash
# Verificar se tem dados no banco
node test-connection.js

# Se vazio, rodar seed:
npx tsx prisma/seed.ts
```

### Erro: "Module not found"
```bash
npm install
npx prisma generate
```

### Erro: PM2 não encontrado
```bash
npm install -g pm2
```

### Ver logs detalhados
```bash
pm2 logs hivegroup --lines 100
```

---

## ✅ Checklist Final

- [ ] Arquivos enviados para servidor
- [ ] `test-connection.js` executado com sucesso
- [ ] Build concluído sem erros
- [ ] PM2 rodando (green status)
- [ ] Site acessível via HTTPS
- [ ] Todas páginas carregando (pt, en, fr, es, it)
- [ ] Sem erros nos logs do PM2

---

## 🎉 Pronto!

Após seguir estes passos, o site estará online em:
**https://hivegroup.tgoo.eu**

Com suporte a 5 idiomas:
- 🇵🇹 Português: `/pt`
- 🇬🇧 Inglês: `/en`
- 🇫🇷 Francês: `/fr`
- 🇪🇸 Espanhol: `/es`
- 🇮🇹 Italiano: `/it`
