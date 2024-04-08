function remove(){
    let array = document.getElementById("array").value.split(" ").map(function(item) {return parseInt(item)});
    array.sort(function(a, b) { return a - b; });
    n = array.length
    for (let i = 0; i<array.length; i++){
        if (array[i] == array[i+1]){
            n--
        }
    }
    document.getElementById("result").innerHTML = n
}