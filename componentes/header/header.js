function appendHeader(el) {
  const compHeader = document.createElement("div");
  compHeader.innerHTML = `
  <header class="header">
  <a class="header-redirect" href="./index.html">
      <img
        class="header__logo"
        src="./media/logo-listo.png"
        alt="logo-header"
      />
      </a>
      <div class="header__menu">
      <div class="header__opciones">
  <a class="header__opciones-redirect" href="./servicios.html">Servicios</a>
  <a class="header__opciones-redirect" href="./portfolio.html">Portfolio</a>
  <a class="header__opciones-redirect" href="./contacto.html">Contacto</a>
      </div>
        <button class="header__button--abre">
          <div class="header__line"></div>
          <div class="header__line"></div>
          <div class="header__line"></div>
        </button>
        <div class="header__ventana"> 
          <div class="header__ventana-content">
            <button class="header__button--cierra">
            <img class="header__close-img" src="./media/cancel.png" alt="close" />
            </button>
            <div class="header__ventana-links">
              <a href="./index.html">Home</a>
              <a href="./servicios.html">Servicios</a>
              <a href="./portfolio.html">Portfolio</a>
              <a href="./contacto.html">Contacto</a>
            </div>
          </div>
        </div>
      </div>
    </header>

  `;
  el.appendChild(compHeader);
  activeButton();
}
function activeButton() {
  const botonAbrir = document.querySelector(".header__button--abre");
  const botonCerrar = document.querySelector(".header__button--cierra");
  const ventanaEl = document.querySelector(".header__ventana");
  botonAbrir.addEventListener("click", () => {
    ventanaEl.style.display = "inherit";
  });
  botonCerrar.addEventListener("click", () => {
    ventanaEl.style.display = "";
  });
}
