import { conectaAPI } from "./conexaoAPI.js";

const listaHome = document.querySelector("[data-lista-star]");

export default function constroiCardHome(imagem, nome, preco,id) {
    const produto = document.createElement("li");
    produto.className = "produtosHomeProdutos__Lista-elemento";
    produto.innerHTML =  
    `    
    <img src="${imagem}" class= "imagemBuscada" alt="Produto/Console">
    <h1>${nome}</h1>
    <p>R$${preco}</p>
    <a href="./produtoSecao">#${id}</a> 
    `

    return produto;
}


async function listaProdutosHome() {
    const listaApi = await conectaAPI.listaProdutos();
    listaApi.forEach(elemento => listaHome.appendChild(
        constroiCardHome(elemento.imagem, elemento.nome, elemento.preco, elemento.id)))
}

listaProdutosHome()