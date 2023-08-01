const InputNome = document.getElementById("input-nome");
const InputMensagem = document.getElementById("input-mensagem");
const SubmitContato = document.getElementById("SubmitContato")

InputNome.addEventListener("blur", ValidacaoNome);


function ValidacaoNome () { 
    const InputNomeValor = document.getElementById("input-nome").value;
    const ErrorInput = document.getElementById("error-contatoInput")

    if (InputNomeValor === '' ) {
        InputNome.classList.add('contatoError');
        InputNome.classList.add('contatoError-Tremor');
        ErrorInput.innerHTML = "Digite seu nome!"

        setTimeout(function() {
            InputNome.classList.remove('contatoError');
            InputNome.classList.remove('contatoError-Tremor');
            ErrorInput.innerHTML = ""
        }, 4000)
        
        return false;
    }

    else {
        return true;
    }

}




InputMensagem.addEventListener("blur", ValidacaoMensagem);


function ValidacaoMensagem () {
    const InputMensagemValor = document.getElementById("input-mensagem").value;
    const ErrorMensagem = document.getElementById("error-contatoTextarea");
     
    
    if (InputMensagemValor === '') {
        InputMensagem.classList.add('contatoError');
        InputMensagem.classList.add('contatoError-Tremor');
        ErrorMensagem.innerHTML = "Deixe uma mensagem!"
        
        setTimeout(function(){
            InputMensagem.classList.remove('contatoError');
            InputMensagem.classList.remove('contatoError-Tremor');
            ErrorMensagem.innerHTML = ""
        }, 4000);

        return false;
    } else {
        return true;
    }
}

SubmitContato.addEventListener("click", ValidaContato);


function ValidaContato (event) {
    ValidacaoMensagem ();
    ValidacaoNome ();
    if (!ValidacaoMensagem()|| !ValidacaoNome()) {
        event.preventDefault();


    } else {
        return true;
    }
}


