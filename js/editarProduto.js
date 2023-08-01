import { ValidarCampos } from "./editarValidacao.js";



document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const idProduto = urlParams.get("id");

  // Use o ID do produto para carregar os detalhes do produto no formulário
  carregarDetalhesProduto(idProduto);
});

function carregarDetalhesProduto(idProduto) {
  // Aqui, você pode fazer uma requisição ao servidor para obter os detalhes do produto com o ID fornecido
  // e, em seguida, preencher os campos do formulário com as informações do produto.
  // Por exemplo:
  fetch(`http://localhost:3000/produtos/${idProduto}`)
    .then((response) => response.json())
    .then((produto) => {
      document.getElementById("nome").value = produto.nome;
      document.getElementById("preco").value = produto.preco;
      document.getElementById("categoria").value = produto.categoria;
      document.getElementById("descricao").value = produto.descricao;
      // Preencha os outros campos do formulário conforme necessário
    })
    .catch((erro) => {
      console.error("Erro ao carregar detalhes do produto:", erro);
      // Lide com o erro ou exiba uma mensagem para o usuário, se necessário
    });
}




document.getElementById("form-editar").addEventListener("submit", async (event) => {


  if (ValidarCampos()) {
  event.preventDefault();
  const urlParams = new URLSearchParams(window.location.search);
  const idProduto = urlParams.get("id");

  // Obtenha os valores dos campos do formulário
  const nomeProduto = document.getElementById("nome").value;
  const precoProduto = document.getElementById("preco").value;
  const categoriaProuto = document.getElementById("categoria").value;
  const descricaoProduto = document.getElementById("descricao").value;

  // Obtenha o arquivo de imagem do produto
  const arquivoInput = document.getElementById("arquivo");
  const file = arquivoInput.files[0];

  // Verifique se foi selecionado um novo arquivo de imagem
  if (file) {
    // Se um novo arquivo foi selecionado, atualize a imagem do produto
    const reader = new FileReader();

    reader.onloadend = async function (event) {
      const imagemProduto = reader.result;

      // Aqui, você pode fazer uma requisição ao servidor para atualizar a imagem do produto com a nova imagem.
      // Por exemplo:
      try {
 

        // Depois de atualizar a imagem, você pode chamar a função para atualizar os outros detalhes do produto
        atualizarDetalhesProduto(idProduto, nomeProduto, precoProduto, categoriaProuto, descricaoProduto, imagemProduto);
      } catch (erro) {
        console.error("Erro ao atualizar imagem do produto:", erro);
        // Lide com o erro ou exiba uma mensagem para o usuário, se necessário
      }
    };

    reader.readAsDataURL(file);
  } else {
    // Se nenhum novo arquivo foi selecionado, apenas atualize os outros detalhes do produto
    atualizarDetalhesProduto(idProduto, nomeProduto, precoProduto, categoriaProuto, descricaoProduto);
  }
} else {
  alert("Opa");
  event.preventDefault();
}
});



async function atualizarDetalhesProduto(idProduto, nomeProduto, precoProduto, categoriaProuto, descricaoProduto, imagemProduto) {
  // Faça uma requisição ao servidor para atualizar os detalhes do produto com os novos valores
  // fornecidos pelo usuário. Por exemplo:
  fetch(`http://localhost:3000/produtos/${idProduto}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      imagem: imagemProduto,
      nome: nomeProduto,
      preco: precoProduto,
      categoria: categoriaProuto,
      descricao: descricaoProduto
      // Inclua outros campos do produto, caso necessário
    }),
  })
    .then((response) => response.json())
    .then((resultado) => {
      console.log("Produto atualizado:", resultado);
      // Faça algo após a atualização do produto, como redirecionar o usuário ou exibir uma mensagem de sucesso
      window.location.href = "../adm.html"
    })
    .catch((erro) => {
      console.error("Erro ao atualizar produto:", erro);
      // Lide com o erro ou exiba uma mensagem para o usuário, se necessário
    });
}