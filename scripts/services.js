function getServicesInfo() {
  return fetch(
    "https://cdn.contentful.com/spaces/5i18vp8lv58c/environments/master/entries?access_token=r3w2mbTM__nAKJYaIxo-_FqtM83feKbc_Fvvtt3n0iI&content_type=services"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const fieldsCollection = data.items.map((item) => {
        return {
          titulo: item.fields.titulo,
          descripcion: item.fields.descripcion,
          elId: item.fields.imagen.sys.id,
          arrayAsset: data.includes.Asset,
        };
      });

      fieldsCollection.forEach((element) => {
        const encontrado = encontrar(element.arrayAsset, element.elId);
        element.imagen = encontrado.fields.file.url;
      });
      function encontrar(array, id) {
        const founded = array.find((x) => {
          return x.sys.id == id;
        });
        //find devuelve el objeto completo que cumple con lo buscado
        return founded;
      }
      return fieldsCollection;
    });
}
function addServiceCard(params) {
  const template = document.querySelector("#my-services-template");
  const serviceContainer = document.querySelector(
    ".my-services__content-cards"
  );

  template.content.querySelector(".my-services__card-title").textContent =
    params.titulo;
  template.content.querySelector(".my-services__card-description").textContent =
    params.descripcion;
  template.content.querySelector(".my-services__img").src = params.imagen;

  const clone = document.importNode(template.content, true);
  serviceContainer.appendChild(clone);
}

getServicesInfo().then((servicios) => {
  for (const s of servicios) {
    addServiceCard(s);
  }
});
const welcomeHeader = document.querySelector(".header-content");
appendHeader(welcomeHeader);
const footer = document.querySelector(".footer-content");
appendFooter(footer);
