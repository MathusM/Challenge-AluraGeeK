const email = "user123@gmail.com";
const senha = "user123"

const Form = document.getElementById("FormLogin");

const campoSenha = document.getElementById("input-senha");
const campoEmail = document.getElementById("input-email");

function RegistroForm (event) {
    if(campoEmail === email || campoSenha === senha) {
        return true;
    } else {
        event.preventDefault();
        return false;
    }
}