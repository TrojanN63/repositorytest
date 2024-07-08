function confirm(){
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const senha2 = document.getElementById("senha2").value;
    var camps = ""
    var resultemail = ""
    var resultpassword = ""

    if (email == ""){
        camps += "email não preenchido<br>"
    }
    else if (senha == ""){
        camps += "senha não preenchida<br>"
    }
    else if (senha2 == ""){
        camps += "senha não confirmada<br>"
    }
    else {camps = "todos os campos preenchidos<br>"}

    if (email.indexOf("@") = -1){
        resultemail = "email inválido<br>"
    }
    else if (email.indexOf(".") = -1){
        resultemail = "email inválido<br>"
    }
    else {resultemail = "email válido<br>"}

    if (senha.length < 8){
        resultpassword = "senha precisa de pelo menos 8 caracteres<br>"
    }
    else if (senha !== senha2){
        resultpassword = "senha não está igual à confirmação<br>"
    }
    else {
        document.getElementById("finalresult") = "cadastro concluído, sua alma agora é minha..."
    }

    document.getElementById("camps").innerHTML = camps
    document.getElementById("resultemail").innerHTML = resultemail
    document.getElementById("resultpassword").innerHTML = resultpassword
}

