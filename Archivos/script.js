
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

// ANIMACIÓN DE BOTONES

     function animar(elemento) {
    // esto modifica el botón directamente
    elemento.classList.add('scale-50', 'shadow',);

    setTimeout(() => {
      elemento.classList.remove('scale-50', 'shadow',);
    }, 200);
  }

// Solo para el primer cuadro de CITAS MEDICAS
document.addEventListener('DOMContentLoaded', function () {
  // Selecciona solo el primer card (CITAS MEDICAS)
  const cardCitas = document.querySelector('.card');
  if (!cardCitas) return;

  // Todos los botones dentro de ese card
  const botones = cardCitas.querySelectorAll('.boton1');
  const menu = cardCitas.querySelector('.menu1');

  botones.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      menu.classList.toggle('hiddenCard');
    });
  });

  // Opcional: cerrar el menú si se hace clic fuera
  document.addEventListener('click', function (e) {
    if (!cardCitas.contains(e.target)) {
      menu.classList.add('hiddenCard');
    }
  });
});

// Mostrar/ocultar el menú de CITAS MEDICAS al hacer clic en los botones
document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const botones = card.querySelectorAll('.boton1');
    if (botones.length < 2) return;
    const botonAbrir = botones[0];
    const botonCerrar = botones[1];
    const menu = card.querySelector('.menu1');

  // Al hacer clic en el botón de abrir
  botonAbrir.addEventListener('click', function (e) {
    e.stopPropagation();
    animar(this);
    setTimeout(() => {
      botonAbrir.classList.add('hidden');
      botonCerrar.classList.remove('hidden');
      menu.classList.remove('xs:scale-y-0');
      menu.classList.add('xs:scale-y-100');
    }, 200);
  });

  // Al hacer clic en el botón de cerrar
  botonCerrar.addEventListener('click', function (e) {
    e.stopPropagation();
    animar(this);
    setTimeout(() => {
      botonAbrir.classList.remove('hidden');
      menu.classList.remove('xs:scale-y-100');
      menu.classList.add('xs:scale-y-0');
    }, 200);
  });

  // Cerrar el menú si se hace clic fuera
  document.addEventListener('click', function (e) {
    if (!cardCitas.contains(e.target)) {
      menu.classList.remove('xs:scale-y-100');
      menu.classList.add('xs:scale-y-0');
      botonCerrar.classList.add('hidden');
      botonAbrir.classList.remove('hidden');
    }
  });
});
});


// Enlace

document.querySelectorAll('.enlace').forEach(enlaces => {
enlaces.addEventListener('click', function (e) {

  e.preventDefault();

  this.classList.add('bg-secondary', 'text-white');

  setTimeout(() => {
    this.classList.remove('bg-secondary', 'text-white');
    window.location.href = this.href;

  }, 200);
});
});


// Enlace1

document.querySelectorAll('.enlace1').forEach(enlaces1 => {
enlaces1.addEventListener('click', function (e) {

  e.preventDefault();

  this.classList.add('text-secondary', 'border-b-2', 'border-secondary', 'text-[18px]');
  this.classList.remove('group-hover:text-[16px]');

  setTimeout(() => {
    this.classList.remove('text-secondary', 'border-b-2', 'border-secondary', 'text-[18px]');
    this.classList.add('group-hover:text-[16px]');
    window.location.href = this.href;
  }, 200);
});
});