function changeorder(){
    var array = document.getElementById("array").value.split(",").map(function(item) {return parseInt(item)});
    var order = document.getElementById("order").value;
    if (order === "crescente"){
        array.sort(function(a, b) { return a - b; });
    }
    else {array.sort(function(a,b) { return b - a; })}
    document.getElementById('result').innerHTML = array.join(', ');
}