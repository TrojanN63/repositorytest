function go(){
    number = document.getElementById("number").value.split(" ").join("").split("-").join("")
    if (number.length == 11 || number.length == 10){
        result = "valid"
    }
    else (result = "invalid")
    document.getElementById("result").innerHTML = result
}