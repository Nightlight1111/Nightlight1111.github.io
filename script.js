document.addEventListener("DOMContentLoaded", function() {
  const loadingScreen = document.getElementById('loading-screen');
  const content = document.getElementById('content');

  // Simular um carregamento com um timeout (remover em produção)
  setTimeout(() => {
      loadingScreen.style.display = 'none';
      content.style.display = 'block';
  }, 1000); // 3 segundos de delay para simulação
});