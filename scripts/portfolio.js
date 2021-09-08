function main() {
  const welcomeHeader = document.querySelector(".header-content");
  appendHeader(welcomeHeader);
  const footer = document.querySelector(".footer-content");
  appendFooter(footer);

  function getPortafolioInfo() {
    return fetch(
      "https://cdn.contentful.com/spaces/5i18vp8lv58c/environments/master/entries?access_token=r3w2mbTM__nAKJYaIxo-_FqtM83feKbc_Fvvtt3n0iI&content_type=portfolio"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        const arrayObjPortfolio = data.items.map((item) => {
          return (objetoADevolver = {
            titulo: item.fields.titulo,
            descripcion: item.fields.descripcion,
            idImg: item.fields.imagen.sys.id,
            generalId: data.includes.Asset,
            link: item.fields.url,
          });
        });
        // console.log(arrayObjPortfolio);
        arrayObjPortfolio.forEach((element) => {
          const encontrado = encontrar(element.generalId, element.idImg);
          element.imagen = encontrado.fields.file.url;
        });
        function encontrar(array, id) {
          const founded = array.find((x) => {
            return x.sys.id == id;
          });
          //find devuelve el objeto completo que cumple con lo buscado
          return founded;
        }
        return arrayObjPortfolio;
      });
  }
  getPortafolioInfo().then((portfolios) => {
    // console.log(info);
    for (const p of portfolios) {
      addPortfolioCard(p);
    }
  });

  function addPortfolioCard(card) {
    const template = document.querySelector("#portfolio__template");
    const portfolioContainer = document.querySelector(
      ".portfolio__content-cards"
    );

    template.content.querySelector(".portfolio__card-title").textContent =
      card.titulo;
    template.content.querySelector(".portfolio__card-description").textContent =
      card.descripcion;
    template.content.querySelector(".portfolio__card-link").href = card.link;
    template.content.querySelector(".portfolio__card-img").src = card.imagen;

    const clone = document.importNode(template.content, true);
    portfolioContainer.appendChild(clone);
  }
}
main();
