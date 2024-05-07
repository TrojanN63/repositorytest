function confirm(){
    email = document.getElementById("email").value;
    senha = document.getElementById("senha").value;
    senha2 = document.getElementById("senha2").value;

    if (email == ""){
        document.getElementById("result").innerHTML += "email não preenchido <br>"
    }
    else if (email.indexOf("@") = -1) or (email.indexOf(".") = -1);{
        document.getElementById("result").innerHTML += "email inválido <br>"
    }
    if (senha == ""){
        document.getElementById("result").innerHTML += "senha não preenchida <br>"
    }
    else if (senha.length < 8){
        document.getElementById("result").innerHTML += "senha precisa de pelo menos 8 caracteres <br>"
    }
}
