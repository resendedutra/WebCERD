/* Esta função é chamada no CSS através dos .nav.scrolled */
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  
  // Se o usuário rolar mais de 50 pixels para baixo
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});