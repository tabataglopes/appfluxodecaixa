# Maré — fluxo de caixa em calendário

Protótipo de um app de finanças pessoais focado em fluxo de caixa: calendário mensal com entradas manuais, contas fixas/assinaturas que se repetem automaticamente, e saldo projetado dia a dia.

Hoje é um único arquivo (`index.html`) com HTML, CSS e JS embutidos — sem servidor, sem banco de dados. Todos os dados (as entradas e contas que você cadastrar) vivem só na memória do navegador de quem está usando: ao recarregar a página, tudo volta aos dados de exemplo. Isso é proposital nesta fase — é um protótipo pra testar a ideia antes de investir em conta de usuário e banco de dados de verdade.

## Como colocar no ar (Vercel)

**Opção 1 — arrastar e soltar (mais rápido, sem precisar de GitHub):**

1. Acesse https://vercel.com e crie uma conta (dá pra usar login do GitHub, GitLab ou e-mail).
2. No painel, clique em **Add New… → Project**.
3. Procure a opção de fazer upload direto de uma pasta (drag-and-drop) e arraste esta pasta inteira (`Aplicativo financas`) — ou pelo menos o arquivo `index.html`.
4. Confirme o deploy. Em menos de um minuto você recebe uma URL pública, tipo `mare-seu-usuario.vercel.app`.

**Opção 2 — via GitHub (melhor se você for continuar editando o projeto):**

1. Crie um repositório novo no GitHub e suba esta pasta para lá (pode usar o GitHub Desktop se preferir não usar linha de comando).
2. Em https://vercel.com, clique em **Add New… → Project** e escolha **Import Git Repository**.
3. Selecione o repositório. Como é um site estático (sem framework), a Vercel detecta sozinha — não precisa configurar build command nem output directory.
4. Clique em **Deploy**.

Qualquer novo commit que você subir no GitHub depois disso atualiza o site automaticamente.

## Sobre o próximo passo (virar uma plataforma de verdade)

Pra cada pessoa ter login e os lançamentos dela salvos de verdade (entre sessões e aparelhos), vai precisar de duas peças que este arquivo único ainda não tem:

- **Autenticação** — sistema de login/cadastro (ex.: NextAuth, Clerk, Supabase Auth).
- **Banco de dados** — pra guardar os lançamentos e contas fixas de cada usuário (ex.: Postgres, Supabase, PlanetScale).

O caminho mais comum pra isso na Vercel é migrar de HTML puro para um projeto em **Next.js**, que roda frontend e backend (via API routes / server actions) no mesmo projeto. Quando quiser seguir por esse caminho, é só chamar — a gente planeja essa etapa com calma.
