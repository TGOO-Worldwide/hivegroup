#!/bin/bash

# 🚀 Script de Deploy para Servidor CloudPanel
# ============================================

# Configurações - AJUSTE CONFORME SEU SERVIDOR
SERVER_USER="tgoo-hivegroup"
SERVER_HOST="seu-servidor.com"  # Substitua pelo IP ou hostname do servidor
SERVER_PATH="/home/tgoo-hivegroup/htdocs/hivegroup.tgoo.eu"

echo "🚀 Deploy para CloudPanel"
echo "========================="
echo ""

# Cores para output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Verificar se estamos no diretório correto
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Erro: Execute este script na raiz do projeto!${NC}"
    exit 1
fi

echo -e "${YELLOW}📦 Arquivos que serão enviados:${NC}"
echo "  - app/[locale]/page.tsx"
echo "  - app/[locale]/[slug]/page.tsx"
echo "  - app/[locale]/insights/page.tsx"
echo "  - app/[locale]/insights/[slug]/page.tsx"
echo "  - test-connection.js"
echo ""

read -p "Deseja continuar? (s/n) " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Ss]$ ]]; then
    echo "❌ Cancelado pelo usuário"
    exit 1
fi

echo ""
echo -e "${YELLOW}📤 Enviando arquivos...${NC}"

# Enviar arquivos alterados
scp app/\[locale\]/page.tsx ${SERVER_USER}@${SERVER_HOST}:${SERVER_PATH}/app/\[locale\]/
scp app/\[locale\]/\[slug\]/page.tsx ${SERVER_USER}@${SERVER_HOST}:${SERVER_PATH}/app/\[locale\]/\[slug\]/
scp app/\[locale\]/insights/page.tsx ${SERVER_USER}@${SERVER_HOST}:${SERVER_PATH}/app/\[locale\]/insights/
scp app/\[locale\]/insights/\[slug\]/page.tsx ${SERVER_USER}@${SERVER_HOST}:${SERVER_PATH}/app/\[locale\]/insights/\[slug\]/
scp test-connection.js ${SERVER_USER}@${SERVER_HOST}:${SERVER_PATH}/

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Arquivos enviados com sucesso!${NC}"
else
    echo -e "${RED}❌ Erro ao enviar arquivos${NC}"
    exit 1
fi

echo ""
echo -e "${YELLOW}🔧 Executando comandos no servidor...${NC}"

# Executar comandos no servidor
ssh ${SERVER_USER}@${SERVER_HOST} << 'ENDSSH'
cd /home/tgoo-hivegroup/htdocs/hivegroup.tgoo.eu

echo "🧪 Testando conexão com banco de dados..."
node test-connection.js

echo ""
echo "🌱 Sincronizando conteúdo (prisma seed upsert)..."
npx prisma generate
npm run prisma:seed

echo ""
echo "🗑️  Limpando cache..."
rm -rf .next

echo ""
echo "🏗️  Fazendo build..."
npm run build

if [ $? -eq 0 ]; then
    echo ""
    echo "🔄 Reiniciando aplicação com PM2..."
    pm2 restart hivegroup
    
    echo ""
    echo "📊 Status PM2:"
    pm2 status
    
    echo ""
    echo "✅ Deploy concluído com sucesso!"
    echo ""
    echo "🌐 Acesse: https://hivegroup.tgoo.eu"
    echo ""
    echo "📝 Para ver logs em tempo real:"
    echo "   pm2 logs hivegroup"
else
    echo ""
    echo "❌ Erro no build. Verifique os logs acima."
    exit 1
fi
ENDSSH

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}🎉 Deploy finalizado!${NC}"
else
    echo ""
    echo -e "${RED}❌ Erro durante execução no servidor${NC}"
    exit 1
fi
