async function listaProdutos () {
    const conexao = await fetch("http://localhost:3000/produtos");
    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida;
}

async function constroiProduto(imagem, nome, preco, categoria, descricao) {
    const conexao = await fetch("http://localhost:3000/produtos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            imagem: imagem,
            nome: nome,
            preco: preco,
            categoria : categoria,
            descricao : descricao
    })
  });

  const conexaoConvertida = await conexao.json();

  return conexaoConvertida
}

async function buscaProduto(termoDeBusca) {
    const conexao = await fetch(`http://localhost:3000/produtos?q=${termoDeBusca}`);
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}

export async function excluiProduto(id) {
  try {
      const conexao = await fetch(`http://localhost:3000/produtos/${id}`, {
          method: "DELETE",
          headers: {
            'Content-type': 'application/json'
        }
      });

      if (conexao.ok) {
          const conexaoConvertida = await conexao.json();
          return conexaoConvertida;
      } else {
          // Caso a exclusão não seja bem-sucedida, lançamos um erro para ser tratado.
          throw new Error("Erro ao excluir produto");
      }
  } catch (erro) {
      // Tratar erro, caso ocorra.
      console.error("Erro ao excluir produto:", erro);
      throw erro; // Lançamos o erro novamente para ser tratado no local onde a função é chamada.
  }
}

export const conectaAPI = {
    listaProdutos,
    constroiProduto,
    buscaProduto,
    excluiProduto
}