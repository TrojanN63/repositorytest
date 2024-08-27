function calculate(){
    let n = document.getElementById("number").value
    var result = 1
    for (i = 1; i <= n; i++){
        result*=i
    }
    document.getElementById("result").innerHTML =
    `${n}! = ${result}`
}