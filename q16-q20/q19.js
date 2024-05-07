function arrumar(){
    array = document.getElementById("array").value.split(" ")
    result = array.sort()
    document.getElementById("trojan").innerHTML = result.join(" ")
}