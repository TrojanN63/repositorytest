function verify(){
    email = document.getElementById("email").value;
    if ((email.indexOf("@") > -1) && (email.indexOf(".")>-1)){
        result = "valid, motherfucker"
    }
    else {result = "not valid, motherfucker"}
    document.getElementById("result").innerHTML =
    `Da result is ${result}`
}
