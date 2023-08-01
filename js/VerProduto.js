import { conectaAPI } from "./conexaoAPI.js";

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const idProduto = urlParams.get("id");

    // Use o ID do produto para carregar os detalhes do produto no formulário
    carregarDetalhesProduto(idProduto);
});

function filtrarProdutosPorCategoria(produtos, categoria) {
    return produtos.filter(produto => produto.categoria.toLowerCase() === categoria.toLowerCase()).slice(0, 6);
}

async function carregarDetalhesProduto(idProduto) {
    try {
        const response = await fetch(`http://localhost:3000/produtos/${idProduto}`);
        if (!response.ok) {
            throw new Error("Erro ao carregar detalhes do produto");
        }

        const produto = await response.json();
        console.log(produto);
        const { imagem, nome, preco, descricao, categoria } = produto;

        VerProduto(imagem, nome, preco, descricao);

        // Chama a função para carregar e exibir os produtos similares com a mesma categoria do produto principal
        carregarProdutosSimilaresPorCategoria(categoria);
    } catch (erro) {
        console.error("Erro ao carregar detalhes do produto:", erro);
        // Lide com o erro ou exiba uma mensagem para o usuário, se necessário
    }
}

function VerProduto(imagem, nome, preco, descricao) {
    const produto = document.querySelector("[data-pagina-produto]");
    produto.innerHTML = `   
    <img src="${imagem}" alt="Produto/Console" class="produtoSecao__imagem">
        <div class="produtoSecao__text">
            <h1 class="produtoSecao__textTitulo">${nome}</h1>
            <h3 class="produtoSecao__textPreco">R$${preco}</h3>
            <p class="produtoSecao__textDescricao">${descricao}</p>
            `;

    return produto;
}

function VerProdutoSimilar(imagem, nome, preco) {
    const produto = document.createElement("li");
    produto.className = "produtoSimilaresProdutos__Lista-elemento";
    produto.innerHTML = `
    <img src="${imagem}" alt="Produto/Console">
    <h1>${nome}</h1>
    <p>R$ ${preco}</p>
    <a href="#">Ver Produto</a>
    `;

    return produto;
}

function adicionarProdutosNaLista(lista, produtos) {
    produtos.forEach((produto) => {
        const produtoLi = VerProdutoSimilar(produto.imagem, produto.nome, produto.preco);
        lista.appendChild(produtoLi);
    });
}

async function carregarProdutosSimilaresPorCategoria(categoria) {
    try {
        const produtos = await conectaAPI.listaProdutos();
        const listaSimilares = document.getElementById("lista-similares");
        const produtosFiltrados = filtrarProdutosPorCategoria(produtos, categoria);
        adicionarProdutosNaLista(listaSimilares, produtosFiltrados);
    } catch (error) {
        console.error("Erro ao carregar produtos similares por categoria:", error);
        // Lide com o erro ou exiba uma mensagem para o usuário, se necessário
    }
}
