function confirm(){
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const senha2 = document.getElementById("senha2").value;

    if (nome.length == 0){document.getElementById("result").innerHTML = "Nome não preenchido."}
    else if (email.length == 0){document.getElementById("result").innerHTML = "Email não preenchido."}
    else if (email.indexOf("@") = -1){document.getElementById("result").innerHTML = "email inválido."}
    else if (email.indexOf(".") = -1){document.getElementById("result").innerHTML = "email inválido."}
    else if (senha.length == 0){document.getElementById("result").innerHTML = "Senha não preenchida."}
    else if (senha.length < 8){document.getElementById("result").innerHTML = "Senha precisa ter pelo menos 8 caractéres."}
    else if (senha !== senha2){document.getElementById("result").innerHTML = "Senha precisa ser igual à confirmação."}
    
}

