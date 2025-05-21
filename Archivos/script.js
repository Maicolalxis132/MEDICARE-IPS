// function mostrar() {
//   const boton = document.getElementById("boton-movil");
//   const menu = document.getElementById("menu-movil");

//   boton.addEventListener("click", function() {
//     menu.classList.toggle("hidden");
//   });
// }

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