function change_color(){
    let string = document.getElementById("string").value;
    var cor = document.getElementById("color").value;
    var bkcor = document.getElementById("bkcolor").value;
    document.getElementById("text").innerHTML = string
    document.getElementById("text").style.color = cor
    document.getElementById("text").style.backgroundColor = bkcor
}
