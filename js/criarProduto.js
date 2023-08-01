
import { conectaAPI } from "./conexaoAPI.js";


const formulario = document.querySelector("[data-formulario]");







async function criarProduto(evento) {
    evento.preventDefault();
    
    const imagem = document.querySelector("[data-imagemFile]").value;
    const nome = document.querySelector("[data-nome]").value;
    const preco = document.querySelector("[data-preco]").value;


    await conectaAPI.constroiProduto(imagem, nome, preco);

    window.location.href ="../adm.html"
}


formulario.addEventListener("submit", evento => criarProduto(evento));
