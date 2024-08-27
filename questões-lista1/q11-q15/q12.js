function sum(){
    var array = document.getElementById("array").value.split(",").map(function(item) {return parseInt(item)});
    var sum = 0
    for (i = 0;i<array.length;i++){
        sum += array[i]
    }
    document.getElementById("result").innerHTML = sum
}