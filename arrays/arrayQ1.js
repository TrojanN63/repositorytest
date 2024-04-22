function reverse(){
    array = document.getElementById("array").value.split(" ").reverse()
    document.getElementById("result").innerHTML = array.join(" ")
}