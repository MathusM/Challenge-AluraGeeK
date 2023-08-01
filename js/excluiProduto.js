import { conectaAPI } from "./conexaoAPI.js";

const btnDeletar = document.getElementById('botao-remove');

    btnDeletar.addEventListener('click', deletarProduto);

async function deletarProduto(event) {
    event.preventDefault();
    const id = event.currentTarget.dataset.id;
    removerProduto(id);
}

async function removerProduto(id) {
    conectaAPI.excluiProduto(id)
        .then(() => {
            const produtoParaRemover = document.getElementById(id);
            if (produtoParaRemover) {
                produtoParaRemover.remove();
            }
        })
        .catch((error) => {
            console.error("Erro ao deletar o produto:", error);
        });
}

