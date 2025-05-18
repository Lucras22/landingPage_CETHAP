const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.85;

    item.forEach((Element) =>{
        if (windowTop > Element.offsetTop){
            Element.classList.add("animate");
        } else {
            Element.classList.remove("animate");
        };
    });
};

window.addEventListener("scroll", ()=>{
    animeScroll();
});

const btnEnviar = document.querySelector('#btn-enviar');
const btnEnviarLoader = document.querySelector('#btn-enviar-loader');

btnEnviar.addEventListener("click", ()=>{
    btnEnviarLoader.style.display = "block";
    btnEnviar.style.display = "none";
})

document.addEventListener("DOMContentLoaded", () => {
  const navLinks        = document.querySelectorAll('.nav-link[href^="#"]');
  const navbarCollapse  = document.getElementById('navbarNav');
  const navbar          = document.querySelector('.navbar');       // fixa

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');

      // Só âncoras internas
      if (!href || !href.startsWith('#')) return;

      e.preventDefault();                       // impede o salto automático
      const target = document.querySelector(href);
      if (!target) return;

      const doScroll = () => {
        const offset = navbar.offsetHeight;     // altura da barra fixa
        window.scrollTo({
          top: target.offsetTop - offset,
          behavior: 'smooth'
        });
      };

      // Telas pequenas: fecha o colapso, depois rola
      if (window.innerWidth < 992) {
        const collapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse, { toggle: false });
        collapse.hide();

        // Aguarda o fim da animação (350 ms = padrão do Bootstrap)
        setTimeout(doScroll, 350);
      } else {
        // Desktop: só rola
        doScroll();
      }
    });
  });
});