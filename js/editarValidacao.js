

const nomeInput = document.querySelector("[data-nome]");
const precoInput = document.querySelector("[data-preco]");
const categoriaInput = document.querySelector("[data-categoria]");
const descricaoInput = document.querySelector("[data-descricao]");
const imagemFileInput = document.querySelector("[data-imagemFile]");








const formSubmit = document.querySelector("[data-submit]");

const areaErrorSubmit = document.getElementById("error-FormSubmit");

const areaError = document.getElementsByClassName("errorStyle-text");

const Formulario = document.querySelector("[data-formulario]");









export function ValidarCampos () {
    var nomeValor = nomeInput.value;
    var precoValor = precoInput.value;
    var descricaoValor = descricaoInput.value;
    var categoriaValor = categoriaInput.value;
    var imagemFileValor = imagemFileInput.files;
    console.log(imagemFileValor)


 if (imagemFileValor === "" || nomeValor === "" || precoValor === "" || categoriaValor === "" || descricaoValor === "") {
    areaErrorSubmit.innerHTML = "Preencha todos os campos!";
    areaErrorSubmit.classList.add("errorStyle-text");

    setTimeout (function() {
        areaErrorSubmit.innerHTML = "";
        areaErrorSubmit.classList.remove("errorStyle-text");

    }, 4000);

    console.log(false)
    return false;
 } else {
  console.log(true)
    return true;
 }
}