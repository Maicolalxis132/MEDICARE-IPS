// MENU DESPLEGABLE
// Este código es para el menú desplegable en dispositivos móviles

const boton = document.getElementById('boton-movil');
const menu = document.getElementById('menu-movil');
const svgMenu = boton.querySelector('.svgMenu');
const svgCerrar = boton.querySelector('.svgCerrar');

let abierto = false;

boton.addEventListener('click', () => {
  abierto = !abierto;

  if (abierto) {
    menu.classList.remove('max-h-0', 'opacity-0');
    menu.classList.add('max-h-[300px]', 'opacity-100');
    svgMenu.classList.add('hidden');
    svgCerrar.classList.remove('hidden');

  } else {
    menu.classList.add('max-h-0', 'opacity-0');
    menu.classList.remove('max-h-[300px]', 'opacity-100');
    svgMenu.classList.remove('hidden');
    svgCerrar.classList.add('hidden');
  }
});


// CAMBIO DE IMAGENES EN EL BOTON

 
// Mini menus con infos

const btninfo = document.getElementById('btn-info');
const menuinfo = document.getElementById('menu-info');
let infoabierto = false;

btninfo.addEventListener('click', (e) => {
  e.stopPropagation(); // Evita que el clic se propague al documento
  infoabierto = !infoabierto;

  if (infoabierto) {
    menuinfo.classList.remove('hidden');
    setTimeout(() => {
      menuinfo.classList.remove('max-h-0', 'opacity-0');
      menuinfo.classList.add('max-h-[300px]', 'opacity-100');
      btninfo.classList.add('bg-primary', 'rounded-full', 'text-white', 'py-1');
    }, 100);
  } else {
    cerrarMenu();
  }
});

// ▶️Escucha clics en todo el documento
document.addEventListener('click', (e) => {
  // Si el clic no fue en el botón ni en el menú
  if (infoabierto && !menuinfo.contains(e.target) && !btninfo.contains(e.target)) {
    cerrarMenu();
  }
});

function cerrarMenu() {
  infoabierto = false;
  menuinfo.classList.add('max-h-0', 'opacity-0');
  menuinfo.classList.remove('max-h-[300px]', 'opacity-100');
  btninfo.classList.remove('bg-primary', 'rounded-full', 'text-white');
  setTimeout(() => {
    menuinfo.classList.add('hidden');
  }, 300);
}


/// CARRUSEL DE FOTOS Y VIDEOS
document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector("#carousel > div");
  const carouselContainer = document.querySelector("#carousel");

  if (!slider) return;

  let index = 0;
  let autoplayInterval;
  let totalSlides = 0;
  let videoManualmentePausado = false;
  let videoSilenciado = false; // ✅ Estado del mute

  // Cargar desde JSON
  fetch('./Archivos/json/index.json')
    .then(res => res.json())
    .then(data => {
      const fotos = data.fotos;

      slider.innerHTML = "";

      fotos.forEach(url => {
        const isVideo = url.endsWith('.mp4') || url.endsWith('.webm');

        const media = isVideo
          ? document.createElement('video')
          : document.createElement('img');

        media.src = url;
        media.className = "w-full max-h-[650px] h-auto flex-shrink-0 object-contain";

        if (isVideo) {
          media.setAttribute("playsinline", "");
          media.setAttribute("preload", "auto");
          media.muted = videoSilenciado;
          media.volume = videoSilenciado ? 0 : 1;
          media.defaultMuted = videoSilenciado;

          media.addEventListener('click', () => {
            if (media.paused) {
              videoManualmentePausado = false;
              media.play();
            } else {
              videoManualmentePausado = true;
              media.pause();
            }
          });
        }

        slider.appendChild(media);
      });

      totalSlides = fotos.length;

      showSlide();
      startAutoplay();
    })
    .catch(err => console.error("Error al cargar las imágenes:", err));

  function showSlide() {
    slider.style.transform = `translateX(-${index * 100}%)`;
  }

  function pausarVideoActual() {
    const current = slider.children[index];
    if (current && current.tagName === "VIDEO") {
      current.pause();
      current.currentTime = 0;
    }
  }

  function nextSlide() {
    pausarVideoActual();
    index = (index + 1) % totalSlides;
    showSlide();
  }

  function prevSlide() {
    pausarVideoActual();
    index = (index - 1 + totalSlides) % totalSlides;
    showSlide();
  }

  function startAutoplay() {
    clearTimeout(autoplayInterval);

    function handleSlide() {
      const currentSlide = slider.children[index];
      const isVideo = currentSlide.tagName === "VIDEO";

      actualizarBotonAudio(); // ✅ actualiza ícono según mute

      if (isVideo) {
        currentSlide.muted = videoSilenciado;
        currentSlide.volume = videoSilenciado ? 0 : 1;
        currentSlide.defaultMuted = videoSilenciado;

        if ((currentSlide.currentTime === 0 || currentSlide.ended) && !videoManualmentePausado) {
          currentSlide.currentTime = 0;
          currentSlide.play().catch(err => {
            console.warn("Error al reproducir video:", err);
          });
        }

        const esperarFin = () => {
          if (!videoManualmentePausado) {
            currentSlide.removeEventListener("ended", esperarFin);
            nextSlide();
            handleSlide();
          }
        };

        currentSlide.addEventListener("ended", esperarFin);

      } else {
        autoplayInterval = setTimeout(() => {
          nextSlide();
          handleSlide();
        }, 5000);
      }
    }

    handleSlide();
  }

  // Botones de navegación
  document.getElementById("prev").addEventListener("click", () => {
    prevSlide();
    startAutoplay();
  });

  document.getElementById("next").addEventListener("click", () => {
    nextSlide();
    startAutoplay();
  });

  // ANIMACIÓN DE BOTONES
  function animar(elemento) {
    elemento.classList.add('scale-50', 'shadow');
    setTimeout(() => {
      elemento.classList.remove('scale-50', 'shadow');
    }, 200);
  }

  // 🔊 BOTÓN DE AUDIO CON SVG PERSONALIZADO
  const toggleAudioBtn = document.getElementById("toggle-audio");

  function actualizarBotonAudio() {
    const current = slider.children[index];
    if (current && current.tagName === "VIDEO") {
      toggleAudioBtn.classList.remove("hidden");
      toggleAudioBtn.innerHTML = videoSilenciado
        ? `<svg class="w-6 h-6 text-primary dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
             d="M15.5 8.43A4.985 4.985 0 0 1 17 12c0 1.126-.5 2.5-1.5 3.5m2.864-9.864A8.972 8.972 0 0 1 21 12c0 2.023-.5 4.5-2.5 6M7.8 7.5l2.56-2.133a1 1 0 0 1 1.64.768V12m0 4.5v1.365a1 1 0 0 1-1.64.768L6 15H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1m1-4 14 14"/>
           </svg>`
        : `<svg class="w-6 h-6 text-primary dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
             d="M15.5 8.43A4.985 4.985 0 0 1 17 12a4.984 4.984 0 0 1-1.43 3.5m2.794 2.864A8.972 8.972 0 0 0 21 12a8.972 8.972 0 0 0-2.636-6.364M12 6.135v11.73a1 1 0 0 1-1.64.768L6 15H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2l4.36-3.633a1 1 0 0 1 1.64.768Z"/>
           </svg>`;
    } else {
      toggleAudioBtn.classList.add("hidden");
    }
  }

  toggleAudioBtn.addEventListener("click", () => {
    const current = slider.children[index];
    if (current && current.tagName === "VIDEO") {
      videoSilenciado = !videoSilenciado;
      current.muted = videoSilenciado;
      current.volume = videoSilenciado ? 0 : 1;

      toggleAudioBtn.innerHTML = videoSilenciado
        ? `<svg class="w-6 h-6 text-primary dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
             d="M15.5 8.43A4.985 4.985 0 0 1 17 12c0 1.126-.5 2.5-1.5 3.5m2.864-9.864A8.972 8.972 0 0 1 21 12c0 2.023-.5 4.5-2.5 6M7.8 7.5l2.56-2.133a1 1 0 0 1 1.64.768V12m0 4.5v1.365a1 1 0 0 1-1.64.768L6 15H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1m1-4 14 14"/>
           </svg>`
        : `<svg class="w-6 h-6 text-primary dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
             d="M15.5 8.43A4.985 4.985 0 0 1 17 12a4.984 4.984 0 0 1-1.43 3.5m2.794 2.864A8.972 8.972 0 0 0 21 12a8.972 8.972 0 0 0-2.636-6.364M12 6.135v11.73a1 1 0 0 1-1.64.768L6 15H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2l4.36-3.633a1 1 0 0 1 1.64.768Z"/>
           </svg>`;
    }
  });
});





// Solo para el primer cuadro de CITAS MEDICAS
  document.addEventListener('DOMContentLoaded', function () {
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

document.querySelectorAll('[data-dropdown]').forEach(dropdown => {
    const button = dropdown.querySelector('.btn-dropdown');
    const menu = dropdown.querySelector('.dropdown-menu');
    const title = dropdown.querySelector('.titlevalores');
    const icon = dropdown.querySelector('.svgvalores');

    button.addEventListener('click', (e) => {
      e.stopPropagation(); // evita que se dispare otro handler
      icon.classList.toggle('rotate-90');
      icon.classList.toggle('text-primary');
      icon.classList.toggle('text-secondary');
      title.classList.toggle('text-primary');
      title.classList.toggle('text-secondary');
      menu.classList.toggle('max-h-0');
      menu.classList.toggle('max-h-100');
      button.classList.toggle('border-secondary-light');
    });
  });