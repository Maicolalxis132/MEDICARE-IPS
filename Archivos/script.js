
// MENU DESPLEGABLE
// Este código es para el menú desplegable en dispositivos móviles

const boton = document.getElementById('boton-movil');
  const menu = document.getElementById('menu-movil');
  let abierto = false;

  boton.addEventListener('click', () => {
    abierto = !abierto;

    if (abierto) {
      menu.classList.remove('max-h-0', 'opacity-0');
      menu.classList.add('max-h-[300px]', 'opacity-100');
    } else {
      menu.classList.add('max-h-0', 'opacity-0');
      menu.classList.remove('max-h-[300px]', 'opacity-100');
    }
  });


// CARRUSEL DE FOTOS
// Este código es para el carrusel de fotos

const slider = document.querySelector("#carousel > div");
const totalSlides = slider.children.length;
let index = 0;

function showSlide() {
  slider.style.transform = `translateX(-${index * 100}%)`;
}

// Botones manuales
document.getElementById("prev").addEventListener("click", () => {
  index = (index - 1 + totalSlides) % totalSlides;
  showSlide();
});

document.getElementById("next").addEventListener("click", () => {
  index = (index + 1) % totalSlides;
  showSlide();
});

// Cambio automático cada 3 segundos
setInterval(() => {
  index = (index + 1) % totalSlides;
  showSlide();
}, 3000); // 3000 milisegundos = 3 segundos

  const card = document.getElementById("menu-card");
  const icon = document.getElementById("menu-icon");
  const content = document.getElementById("menu-content");

  let menuVisible = false;

  function toggleMenu() {
    // Solo aplica en xs: (798px o más)
    if (window.innerWidth >= 798) {
      menuVisible = !menuVisible;
      content.style.transform = menuVisible ? "scaleY(1)" : "scaleY(0)";
    }
  }

  card.addEventListener("click", toggleMenu);
  icon.addEventListener("click", (e) => {
    e.stopPropagation(); // evita doble disparo
    toggleMenu();
  });