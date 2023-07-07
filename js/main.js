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
