function appendContact(el) {
  const compContact = document.createElement("div");
  compContact.innerHTML = `
    <section class="contact">
      <h2 class="contact__subtitle">Escribime</h2> 
      <form action="" class="contact__form">
        <div class="contact__fieldset">
          <label for="name"><h3 class="contact__label">Nombre</h3> </label>
          <input id="name" type="text" class="contact__input" />
        </div>
        <div class="contact__fieldset">
          <label for="email"><h3 class="contact__label">Email</h3> </label>
          <input id="email" type="email" class="contact__input" />
        </div>
        <div class="contact__fieldset">
          <label for="message"><h3 class="contact__label">Mensaje</h3> </label>
          <textarea id="message" class="contact__input"></textarea>
        </div>
        <div class="contact__button-container">
          <button class="contact__button">Enviar</button>
        </div>
      </form>
    </section>
    `;
  el.appendChild(compContact);
  enviarFormulario();
}
function enviarFormulario() {
  const formEl = document.querySelector(".contact__form");
  formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombreForm = e.target.name.value;
    const emailForm = e.target.email.value;
    const mensajeForm = e.target.message.value;
    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        to: "valen.9298@gmail.com",
        message: `
          Recibiste un mensaje de: ${nombreForm}. 

          Email: ${emailForm}. 

          Mensaje: ${mensajeForm}.
          `,
      }),
    });

    formEl.reset();
    setTimeout(function () {
      alert("el mensaje fue enviado");
    }, 250);
  });
}
