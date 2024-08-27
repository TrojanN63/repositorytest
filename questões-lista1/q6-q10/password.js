function confirm(){
    let password = document.getElementById("password").value
    if (password.length>=6){result = "Sucessfully created account"}
    else {result = "Invalid password"}
    document.getElementById("result").innerHTML = result
}