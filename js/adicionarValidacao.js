import { conectaAPI } from "./conexaoAPI.js";

const nomeInput = document.querySelector("[data-nome]");
const precoInput = document.querySelector("[data-preco]");
const categoriaInput = document.querySelector("[data-categoria]");
const descricaoInput = document.querySelector("[data-descricao]");
const imagemFileInput = document.querySelector("[data-imagemFile]");








const formSubmit = document.querySelector("[data-submit]");

const areaErrorSubmit = document.getElementById("error-FormSubmit");

const areaError = document.getElementsByClassName("errorStyle-text");

const Formulario = document.querySelector("[data-formulario]");









function ValidarCampos () {
    var nomeValor = nomeInput.value;
    var precoValor = precoInput.value;
    var descricaoValor = descricaoInput.value;
    var categoriaValor = categoriaInput.value;
    var imagemFileValor = imagemFileInput.files;


 if (imagemFileValor === "" || nomeValor === "" || precoValor === "" || categoriaValor === "" || descricaoValor === "") {
    areaErrorSubmit.innerHTML = "Preencha todos os campos!";
    areaErrorSubmit.classList.add("errorStyle-text");

    setTimeout (function() {
        areaErrorSubmit.innerHTML = "";
        areaErrorSubmit.classList.remove("errorStyle-text")

    }, 4000);

    console.log(false)
    return false;
 } else {
  console.log(true)
    return true;
 }
}






async function EnviarDadosDB (e) {
    console.log("entrei")
    e.preventDefault();

    const NumeroI = numeroAleatorio

    const ListaRespota = {
      "nome" : e.target.elements["nome"].value,
      "categoria" : e.target.elements["categoria"].value,
      "preco" : e.target.elements["preco"].value,
      "descricao" : e.target.elements["descricao"].value
    };

    if (ValidarCampos()) {

    const arquivoInput = e.target.elements["arquivo"];
    const file = arquivoInput.files[0];
    console.log(file)


    const reader = new FileReader();

    reader.onloadend = async function (event) {
      event.preventDefault();
      ListaRespota.imagem = reader.result; 
      console.log(reader)

      localStorage.setItem("cadastro", JSON.stringify(ListaRespota));

      const resultado = await conectaAPI.constroiProduto(ListaRespota.imagem, ListaRespota.nome, ListaRespota.preco, ListaRespota.categoria, ListaRespota.descricao);
      console.log("Produto adicionado:", resultado);



   };


    
    reader.readAsDataURL(file)

   window.location.href = "../adm.html"
    
  } else {
    
    ValidarCampos();
  }

};


Formulario.addEventListener("submit", EnviarDadosDB);








 
















function gerarId () {
  var digitos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var numero = "";

  while (digitos.length > 3) {
      var index = Math.floor(Math.random() * digitos.length); // Gera um índice aleatório
      var digito = digitos.splice(index, 1)[0]; // Remove o dígito selecionado do array
      numero += digito.toString();
    }

    return numero;
}

var numeroAleatorio = gerarId();