import { conectaAPI } from "./conexaoAPI.js";
import constroiCardHome from "./mostrarProdutosHome.js";

const tituloHomeProdutos = document.getElementById("titulo-starwars")
const buscado = document.querySelector("[data-listaBusca]")

async function buscarProduto (evento) {
    evento.preventDefault();
    try{
    
        const dadosPesquisa = document.querySelector("[data-pesquisa]").value;
        const busca = await conectaAPI.buscaProduto(dadosPesquisa);
    
        const lista = document.querySelector("[data-lista-star]");
        const DivLISTA = document.querySelector("[data-lista-div]")
        
        
        while (lista.firstChild) {
            lista.removeChild(lista.firstChild);
        }

        if (busca.lenght === 0) {
            // If no results are found, show an alert
            const nenhumProdutoEncontrado = document.createElement("h2");
            nenhumProdutoEncontrado.textContent = "Nenhum produto encontrado";
            nenhumProdutoEncontrado.classList.add("error-buscaStyle")
            buscado.appendChild(nenhumProdutoEncontrado);
        } else {
        busca.forEach(elemento => lista.appendChild(
            constroiCardHome(elemento.imagem, elemento.nome, elemento.preco, elemento.id)));

            ocultarTresULs();
            buscado.style.display="block"

            tituloHomeProdutos.innerHTML="Resultado"
        }
        
        } catch {
            alert("Algo deu errado!")
        }
    }

    const botaoDePesquisa = document.querySelector("[data-pesquisa-submit]");

    botaoDePesquisa.addEventListener("click", evento => buscarProduto(evento))



function ocultarTresULs() {
    document.querySelector("[data-lista-starSection]").style.display = "none";
    document.querySelector("[data-lista-consolesSection]").style.display = "none";
    document.querySelector("[data-lista-diversosSection]").style.display = "none";
  }


listaProdutosHome();