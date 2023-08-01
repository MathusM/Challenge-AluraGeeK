(function() {

const InputEmail = document.getElementById("input-email");
const InputSenha = document.getElementById("input-senha");

const email = "user123@gmail.com";
const senha = "user123"

const Submit = document.getElementById("Submit");


InputEmail.addEventListener("blur", ValidacaoEmail);








function ValidacaoEmail (email_fornecido) {
    var email_fornecido = document.querySelector("[data-email]").value;
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    var areaError = document.getElementById("email-error");
    var areaEmail = document.getElementById("input-email");

    if (email_fornecido !== "123@gmail.com") {
        areaEmail.classList.add("campo-invalido");
        areaError.classList.add("StyleErrorLogin");
        areaError.style.marginRight= "70%";
        areaError.style.width = "60%";
        areaError.innerText = "Digite seu email!";

        setTimeout(function() {
            areaEmail.classList.remove("campo-invalido");
            areaError.classList.remove("StyleErrorLogin");
            areaError.style.marginRight= ""
            areaError.style.width = ""
            areaError.innerHTML = "";

            
        }, 5000)
        return false;
    }




    if (regex.test(email_fornecido)) {
        return true;
    }else {
            areaEmail.classList.add("campo-invalido");
            areaError.classList.add("StyleErrorLogin");
            areaError.innerText = "O Formato do Email esta incorreto!";
            
            setTimeout(function() {
                areaEmail.classList.remove("campo-invalido");
                areaError.classList.remove("StyleErrorLogin");
                areaError.innerText = ("");
            }, 5000)
    
            return false;
    
    
        }
    


    }




InputSenha.addEventListener("blur", ValidacaoSenhaFormato);


function ValidacaoSenhaFormato (senha_fornecido) {
    var senha_fornecido = document.querySelector("[data-senha]").value;

    var areaError = document.getElementById("senha-error");
    var areaSenha = document.getElementById("input-senha");
    
    if (senha_fornecido != "user123") {
        areaSenha.classList.add("campo-invalido");
        areaError.classList.add("StyleErrorLogin");
        areaError.style.marginRight= "70%";
        areaError.style.width = "60%";
        areaError.innerText = "Digite sua senha!";

        setTimeout(function() {
            areaSenha.classList.remove("campo-invalido");
            areaError.classList.remove("StyleErrorLogin");
            areaError.style.marginRight= "";
            areaError.style.width = "";
            areaError.innerText = "";
        }, 5000);

        return false;
    } else {
        return true;
    }

}






Submit.addEventListener("click", ValidacaoLogin)

function ValidacaoLogin (event) {

    ValidacaoEmail();
    ValidacaoSenhaFormato();
    if (!ValidacaoSenhaFormato() || !ValidacaoEmail()) {
        event.preventDefault();
        ValidacaoEmail
        ValidacaoSenhaFormato
        



    } else {
        event.preventDefault();
        window.location.href = "./adm.html";
  


    }
}



})();




