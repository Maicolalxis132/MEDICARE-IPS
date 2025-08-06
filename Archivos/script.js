// MENU DESPLEGABLE
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
const btninfo = document.getElementById('btn-info');
const menuinfo = document.getElementById('menu-info');
let infoabierto = false;

btninfo.addEventListener('click', (e) => {
  e.stopPropagation();
  infoabierto = !infoabierto;

  if (infoabierto) {
    menuinfo.classList.remove('hidden');
    setTimeout(() => {
      menuinfo.classList.remove('max-h-0', 'opacity-0');
      menuinfo.classList.add('max-h-[350px]', 'opacity-100');
      btninfo.classList.add('bg-primary', 'rounded-full', 'text-white', 'py-1');
    }, 100);
  } else {
    cerrarMenu();
  }
});

document.addEventListener('click', (e) => {
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

/// ✅ CARRUSEL DE FOTOS Y VIDEOS (PRINCIPAL - ID: carousel1)
document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector("#carousel1 > div");
  const carouselContainer = document.querySelector("#carousel1");
  const toggleAudioBtn = document.getElementById("toggle-audio");
  const iconoSonido = document.getElementById("icon-sonido");
  const iconoSilencio = document.getElementById("icon-silencio");

  if (!slider) return;

  let index = 0;
  let autoplayInterval;
  let totalSlides = 0;
  let videoManualmentePausado = false;
  let videoSilenciado = false;

  fetch('./Archivos/json/index.json')
    .then(res => res.json())
    .then(data => {
      const fotos = data.fotos;
      slider.innerHTML = "";

      fotos.forEach(url => {
        const isVideo = url.endsWith('.mp4') || url.endsWith('.webm');
        const media = isVideo ? document.createElement('video') : document.createElement('img');
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

      actualizarBotonAudio();

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

  document.getElementById("prev").addEventListener("click", () => {
    prevSlide();
    startAutoplay();
  });

  document.getElementById("next").addEventListener("click", () => {
    nextSlide();
    startAutoplay();
  });

  function actualizarBotonAudio() {
    const current = slider.children[index];
    if (current && current.tagName === "VIDEO") {
      toggleAudioBtn.classList.remove("hidden");
      if (videoSilenciado) {
        iconoSonido.classList.add("hidden");
        iconoSilencio.classList.remove("hidden");
      } else {
        iconoSonido.classList.remove("hidden");
        iconoSilencio.classList.add("hidden");
      }
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
      actualizarBotonAudio();
    }
  });
});

// ANIMACIÓN DE BOTONES
function animar(elemento) {
  elemento.classList.add('scale-50', 'shadow');
  setTimeout(() => {
    elemento.classList.remove('scale-50', 'shadow');
  }, 200);
}

// CAJAS DE CITAS MÉDICAS (sin cambios)
document.addEventListener('DOMContentLoaded', function () {
  const cardCitas = document.querySelector('.card');
  if (!cardCitas) return;
  const botones = cardCitas.querySelectorAll('.boton1');
  const menu = cardCitas.querySelector('.menu1');

  botones.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      menu.classList.toggle('hiddenCard');
    });
  });

  document.addEventListener('click', function (e) {
    if (!cardCitas.contains(e.target)) {
      menu.classList.add('hiddenCard');
    }
  });
});

// Mostrar/ocultar el menú de CITAS MEDICAS
document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const botones = card.querySelectorAll('.boton1');
    if (botones.length < 2) return;
    const botonAbrir = botones[0];
    const botonCerrar = botones[1];
    const menu = card.querySelector('.menu1');

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

    botonCerrar.addEventListener('click', function (e) {
      e.stopPropagation();
      animar(this);
      setTimeout(() => {
        botonAbrir.classList.remove('hidden');
        menu.classList.remove('xs:scale-y-100');
        menu.classList.add('xs:scale-y-0');
      }, 200);
    });

    document.addEventListener('click', function (e) {
      if (!card.contains(e.target)) {
        menu.classList.remove('xs:scale-y-100');
        menu.classList.add('xs:scale-y-0');
        botonCerrar.classList.add('hidden');
        botonAbrir.classList.remove('hidden');
      }
    });
  });
});

// ENLACES
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
    e.stopPropagation();
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

/// ✅ CARRUSELES AUTOMÁTICOS (Capacidad instalada)
document.addEventListener("DOMContentLoaded", () => {
  function startCarousel(carousel, speed, reverse = false) {
    let offset = 0;
    const updateCardWidth = () => carousel.children[0].offsetWidth + 24;
    let cardWidth = updateCardWidth();

    function move() {
      offset += reverse ? speed : -speed;
      carousel.style.transform = `translateX(${offset}px)`;

      cardWidth = updateCardWidth();
      if (!reverse && Math.abs(offset) >= cardWidth) {
        offset += cardWidth;
        carousel.appendChild(carousel.children[0]);
      } else if (reverse && offset >= 0) {
        offset -= cardWidth;
        carousel.prepend(carousel.lastElementChild);
      }

      requestAnimationFrame(move);
    }

    if (document.readyState === "complete") move();
    else window.addEventListener("load", move);
  }

  startCarousel(document.getElementById("carousel2"), 0.5, false);
  startCarousel(document.getElementById("carousel3"), 0.5, true);
  startCarousel(document.getElementById("carousel4"), 0.5, false);
});

document.querySelectorAll('[data-dropdown1]').forEach(dropdown => {
  const button1 = dropdown.querySelector('.btn-dropdown1');
  const menu1 = dropdown.querySelector('.dropdown-menu1');
  const title1 = dropdown.querySelector('.titlepreguntas');
  const icon1 = dropdown.querySelector('.svgvalores');

  let isOpen = false;

  button1.addEventListener('click', (e) => {
    e.stopPropagation();

    icon1.classList.toggle('rotate-90');
    icon1.classList.toggle('text-secondary-heavy');
    title1.classList.toggle('text-secondary-heavy');
    button1.classList.toggle('border-secondary-heavy');
    setTimeout(() => {
      menu1.classList.toggle('overflow-hidden');
      menu1.classList.toggle('overflow-visible');
    }, 200);

    if (!isOpen) {
      menu1.style.maxHeight = menu1.scrollHeight + "px";
    } else {
      menu1.style.maxHeight = "0px";
    }

    isOpen = !isOpen;
  });
});

