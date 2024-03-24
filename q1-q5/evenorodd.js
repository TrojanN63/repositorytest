function verify(){
    n = document.getElementById("number").value
    if (n%2==0){
        result = "Even"
    }
    else {result = "Odd"}
    document.getElementById("result").innerHTML = result
}