function confirm(){
    email = document.getElementById("email").value;
    senha = document.getElementById("senha").value;
    senha2 = document.getElementById("senha2").value;

    if (email == ""){
        document.getElementById("result").innerHTML = "email não preenchido"
    }
    else if (email.indexOf("@") = -1){
        document.getElementById("result").innerHTML = "email inválido"
    }
    else if (email.indexOf(".") = -1){
        document.getElementById("result").innerHTML = "email inválido"
    }
    else if (senha == ""){
        document.getElementById("result").innerHTML = "senha não preenchida"
    }
    else if (senha.length < 8){
        document.getElementById("result").innerHTML = "senha precisa de pelo menos 8 caracteres"
    }
    else if (senha !== senha2){
        document.getElementById("result").innerHTML = "senha não está igual à confirmação"
    }
    else {
        document.getElementById("result").innerHTML = "cadastro concluído, sua alma agora é minha..."
    }
}
