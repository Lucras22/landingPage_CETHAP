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
  const navbar          = document.querySelector('.navbar');

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');

      if (!href || !href.startsWith('#')) return;

      e.preventDefault();
      const target = document.querySelector(href);
      if (!target) return;

      const doScroll = () => {
        const offset = navbar.offsetHeight;
        window.scrollTo({
          top: target.offsetTop - offset,
          behavior: 'smooth'
        });
      };

      if (window.innerWidth < 992) {
        const collapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse, { toggle: false });
        collapse.hide();

        setTimeout(doScroll, 350);
      } else {
        doScroll();
      }
    });
  });
});