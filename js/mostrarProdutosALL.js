import { conectaAPI } from "./conexaoAPI.js";

const listaHome = document.querySelector("[data-lista-geralALL]");

function constroiCardHomeALL (imagem, nome, preco, id) {
    const produto = document.createElement("li");
    produto.className = "produtosLista__element";
    produto.innerHTML =  `   
    <img src="${imagem}" alt="Produto/Console">
    <h1>${nome}</h1>
    <p>R$${preco}</p>
    <a href="#">#${id}</a> `

    return produto;
}


async function listaProdutosALL() {
    const listaApi = await conectaAPI.listaProdutos();
    listaApi.forEach(elemento => listaHome.appendChild(
        constroiCardHomeALL(elemento.imagem, elemento.nome, elemento.preco, elemento.id)))
}

listaProdutosALL()