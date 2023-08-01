const BotaoEdita = document.getElementById("botao-edita");


document.getElementById("MobilePesquisaIcon").addEventListener("click", function() {
  var InputPesquisa = document.getElementById("BarraPesquisa")
  var MobilePesquisa = document.getElementById("MobilePesquisa")
  var buttonLogin = document.getElementById("ButtonLogin");
  var divPesquisa = document.getElementById("barraDePesquisa");
  inputSearch = document.getElementById("BarraPesquisa");

  MobilePesquisa.style.display = "none";
  buttonLogin.style.display = "none";
  InputPesquisa.classList.add ("BarraPesquisaMobileInputShow");
  
  divPesquisa.classList.add("BarraPesquisaMobileShow");
  inputSearch.focus();

  
  
}
)

function IrConsoles() {
  var destino = document.getElementById('secao-consoles');
  destino.scrollIntoView({ behavior: 'smooth' });
}

BotaoEdita.addEventListener("click", () => {
  BotaoEdita.innerHTML = "OOOO"
  window.href.location = "../editarProduto.html"
})

document.addEventListener("DOMContentLoaded", function() {
  // Encontre o elemento 'ul' que contém as li's geradas dinamicamente
  const listaProdutos = document.querySelector("[data-lista-geral]")

  // Adicione o evento de clique no elemento 'ul'
  listaProdutos.addEventListener("click", function(event) {
    // Verifique se o clique foi no botão 'BotaoEdita' dentro de uma li
    if (event.target.matches(".produtosLista__element-edit")) {
      const liPai = event.target.closest("li");
      const produtoId = liPai.getAttribute("data-product-id");
      window.location.href = `../editarProduto.html?id=${produtoId}`;
    }
  });
});