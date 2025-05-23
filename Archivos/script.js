
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

    document.getElementById("prev").addEventListener("click", () => {
      index = (index - 1 + totalSlides) % totalSlides;
      showSlide();
    });

    document.getElementById("next").addEventListener("click", () => {
      index = (index + 1) % totalSlides;
      showSlide();
    });