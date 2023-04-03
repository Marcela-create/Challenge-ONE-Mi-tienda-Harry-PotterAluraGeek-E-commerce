// obtener el botón del menú y el menú de navegación
const menuButton = document.querySelector('button.menu');
const navList = document.querySelector('nav ul');

// añadir un evento de escucha de clic al botón del menú
menuButton.addEventListener('click', function() {
  // alternar la clase 'show' en el menú de navegación
  navList.classList.toggle('show');
});
