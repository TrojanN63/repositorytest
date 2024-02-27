function submit(){
    let confirm = confirm("confirm? ");
    if (confirm == true){
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        document.getElementById("result").innerHTML = 
        '<h3>Informações Recebidas</h3>'+
        "<p>Nome: " + name + "</p>"+
        '<p>E-mail:' + email + '</p>'
    }
    else {
        document.getElementById("result").innerHTML =
        "<h2>Ação cancelada</h2>"
    }
}