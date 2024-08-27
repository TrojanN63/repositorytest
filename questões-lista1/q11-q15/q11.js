function calculate(){
    var array = document.getElementById("array").value.split(",").map(function(item) {return parseInt(item)});
    var result = Math.max(...array)
    document.getElementById("result").innerHTML = result
}