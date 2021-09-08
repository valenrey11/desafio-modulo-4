function appendFooter(el) {
  const compFooter = document.createElement("div");
  compFooter.innerHTML = `
    <section class="footer">
      <img src="./media/logo-listo.png" alt="logo" class="footer__logo" />
      <div class="footer_links">
        <a href="https://www.instagram.com/valenrey11/" class="footer__red">
          <p class="footer__red-text">Instagram</p>
          <img class="footer__red-img" src="./media/instagram.png" alt="ig" />
        </a>
        <a href="https://www.linkedin.com" class="footer__red">
          <p class="footer__red-text">linkedin</p>
          <img class="footer__red-img" src="./media/linkedin.png" alt="ig" />
        </a>
        <a href="https://github.com/valenrey11" class="footer__red">
          <p class="footer__red-text">GitHub</p>
          <img class="footer__red-img" src="./media/github.png" alt="ig" />
        </a>
      </div>
    </section>
    `;
  el.appendChild(compFooter);
}
