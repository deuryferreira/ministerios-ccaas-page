function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" }); // Desplazamiento suave
}

// Mostrar u ocultar el botón según la posición de desplazamiento
window.onscroll = function () {
  var button = document.getElementById("go-up-button");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
};
