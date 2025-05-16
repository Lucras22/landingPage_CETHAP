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

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.getElementById('navbarNav');

    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.innerWidth < 992) {
          const collapse = new bootstrap.Collapse(navbarCollapse, {
            toggle: false
          });
          collapse.hide();
        }
      });
    });
  });

  