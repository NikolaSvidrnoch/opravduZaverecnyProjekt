document.addEventListener('DOMContentLoaded', () => {
  const menuTlacitko = document.querySelector('#menu-tlacitko');
  const menuPolozky = document.querySelector('#menu-polozky');

  if (menuTlacitko && menuPolozky) {
      menuTlacitko.addEventListener('click', () => {
          menuPolozky.classList.toggle('show');
          menuTlacitko.innerHTML = menuPolozky.classList.contains('show')
              ? '<i class="fas fa-xmark"></i>'
              : '<i class="fas fa-bars"></i>';
      });
  }
});