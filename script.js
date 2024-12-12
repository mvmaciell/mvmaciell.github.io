// Inicialização das animações AOS
AOS.init({
  duration: 1200,
  once: true
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

