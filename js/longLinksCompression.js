const longLinks = document.querySelectorAll(".longLink"); // Selecciona todos los elementos con la clase .menu-item

function updateMenuItems() {
  // Media query para pantallas de menos de 500px
  const mediaQuery = window.matchMedia("(max-width: 500px)");

  // Verifica si la media query coincide
  if (mediaQuery.matches) {
    // Cambia el contenido de las <li> para pantallas pequeñas
    longLinks[0].textContent = "andrevlare...";
    longLinks[1].textContent = "andrevlare...";
  } else {
    // Restablece el contenido original para pantallas más grandes
    longLinks[0].textContent = "andrevlare.onrender.com";
    longLinks[1].textContent = "andrevlare.github.io/Portfolio/";
  }
}

// Llama a la función cuando la página se carga
updateMenuItems();

// Escucha cambios en el tamaño de la ventana
window.addEventListener("resize", updateMenuItems);
