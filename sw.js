// Service Worker mínimo do Maré.
//
// Ele existe só pra satisfazer o requisito técnico do navegador pra oferecer "Adicionar à tela de
// início" (instalar como app, com ícone próprio e tela cheia). De propósito, ele NÃO faz cache de
// nada e não intercepta nenhum pedido de rede (não tem listener de "fetch" aqui embaixo) — o Maré
// continua exigindo internet pra funcionar, e cada tela/dado sempre vem direto do servidor, nunca
// de uma cópia salva no aparelho. Isso é intencional: evita a pessoa ver (ou mexer em) dados
// desatualizados quando estiver offline.
self.addEventListener('install', () => {
  // ativa este SW imediatamente, sem esperar as abas antigas fecharem
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
