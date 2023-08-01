import { conectaAPI } from "./conexaoAPI.js";
import constroiCardADM from "./mostrarProdutos.js";

const ulLista = document.getElementById("error-busca");

async function buscarProduto(evento) {
  evento.preventDefault();

  const dadosPesquisa = document.querySelector("[data-pesquisa]").value;
  const busca = await conectaAPI.buscaProduto(dadosPesquisa);

  const lista = document.querySelector("[data-lista-geral]");
  const divLista= document.querySelector("[data-lista-div]")

  console.log(busca);
  
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }

  if (busca.length === 0) {
    // If no results are found, show an alert
    const nenhumProdutoEncontrado = document.createElement("h2");
    nenhumProdutoEncontrado.textContent = "Nenhum produto encontrado";
    nenhumProdutoEncontrado.classList.add("error-buscaStyle")
    divLista.appendChild(nenhumProdutoEncontrado);

    
  } else {
    // If results are found, display them as cards
    busca.forEach(elemento =>
      lista.appendChild(
        constroiCardADM(elemento.imagem, elemento.nome, elemento.preco, elemento.id)
      )
    );
  }
}

const botaoDePesquisa = document.querySelector("[data-pesquisa-submit]");

botaoDePesquisa.addEventListener("click", evento => buscarProduto(evento));
