# Docker e Coolify

Este projeto agora está preparado para deploy em Docker com Next.js `standalone`, que é o formato mais indicado para VPS/Coolify.

## Build local

```bash
docker build -t massape-fascinante:latest .
docker run --env-file .env.example -p 3000:3000 massape-fascinante:latest
```

## Variáveis obrigatórias

Crie as variáveis no Coolify ou em um `.env`:

```env
NEXT_PUBLIC_API_URL=https://api.massapefascinante.com.br/api
```

Importante:

- `NEXT_PUBLIC_API_URL` é usada no build do frontend.
- Se mudar essa URL no Coolify, faça um novo deploy com rebuild.

## Como subir no Coolify

1. Crie um recurso do tipo `Application`.
2. Conecte o repositório Git deste projeto.
3. Escolha `Dockerfile` como método de build.
4. Use a porta `3000`.
5. Cadastre a variável `NEXT_PUBLIC_API_URL`.
6. Faça o deploy.

## O que foi ajustado

- `next.config.ts` usa `output: 'standalone'`.
- O `Dockerfile` gera uma imagem menor, própria para produção.
- O container sobe com `HOSTNAME=0.0.0.0`, que evita problema de bind dentro da VPS.

## Observações do projeto

- As imagens remotas já aceitam `https://api.massapefascinante.com.br/api/uploads/**`.
- Em desenvolvimento local também existe liberação para `http://localhost:4444/uploads/**`.
- Existe pelo menos um uso de URL hardcoded para vídeo em `src/paginas/videos/videoSingle/videoSingle.tsx`; o ideal é trocar isso para usar `NEXT_PUBLIC_API_URL` também.
