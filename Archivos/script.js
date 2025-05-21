function mostrar() {
  const boton = document.getElementById("boton-movil");
  const menu = document.getElementById("menu-movil");

  boton.addEventListener("click", function() {
    menu.classList.toggle("hidden");
  });
}
