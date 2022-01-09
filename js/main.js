const formulario = document.querySelector(".formulario");
const entrada = document.querySelectorAll(".formulario input");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  entrada.forEach((input) => {
    if (!input.value) {
      input.parentElement.classList.add("error");
    } else {
      input.parentElement.classList.remove("error");
      if (input.type == "email") {
        if (validaemail(input.value)) {
          input.parentElement.classList.remove("error");
        } else {
          input.parentElement.classList.add("error");
        }
      }
    }
  });
});

function validaemail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
