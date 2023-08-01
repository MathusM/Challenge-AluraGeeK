import { conectaAPI } from './conexaoAPI.js';


function filtrarProdutosPorCategoria(produtos, categoria) {
    return produtos.filter(produto => produto.categoria.toLowerCase() === categoria.toLowerCase()).slice(0, 6);
}


function constroiCardHomeDisplay (imagem, nome, preco,id) {
    const produto = document.createElement("li");
    produto.className = "produtosHomeProdutos__Lista-elemento";
    produto.innerHTML =  `   
    <img src="${imagem}" alt="Produto/Console">
    <h1>${nome}</h1>
    <p>R$${preco}</p>
    <a href="./produtoSecao.html?id=${id}">Ver Produto</a> `

    return produto;
}


function adicionarProdutosNaLista(lista, produtos) {
    produtos.forEach(produto => {
        const produtoLi = constroiCardHomeDisplay(produto.imagem, produto.nome, produto.preco, produto.id);
        lista.appendChild(produtoLi);
    });
}


const categoriasUlMap = {
    starwars: document.getElementById('starwars'),
    consoles: document.getElementById('consoles'),
    diversos: document.getElementById('diversos')
};

// Função principal para buscar os produtos na API, filtrar por categoria e adicionar às listas correspondentes
async function carregarListasCategorias() {
    try {
        const produtos = await conectaAPI.listaProdutos();
        const categorias = Object.keys(categoriasUlMap);

        categorias.forEach(categoria => {
            const listaCategoria = categoriasUlMap[categoria];
            const produtosFiltrados = filtrarProdutosPorCategoria(produtos, categoria);
            adicionarProdutosNaLista(listaCategoria, produtosFiltrados);
        });
    } catch (error) {
        console.error('Erro ao buscar os produtos:', error);
    }
}

// Chama a função para carregar os produtos e adicioná-los às listas correspondentes
carregarListasCategorias();