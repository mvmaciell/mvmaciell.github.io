// Inicialização das animações AOS
AOS.init({
  duration: 1200, // Duração da animação
  once: true,    // As animações se repetem
  mirror: true,   // Permite que a animação aconteça ao rolar para cima
  offset: 100,    // Distância para iniciar a animação (opcional)
});

// Adicionar interação nos cartões de projetos
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.classList.add('hover-effect');
  });
  card.addEventListener('mouseleave', () => {
    card.classList.remove('hover-effect');
  });
});

// Adicionar animação ao texto do cabeçalho
window.addEventListener('load', () => {
  const fullscreenSection = document.querySelector('.fullscreen-section');
  fullscreenSection.classList.add('visible');
});
