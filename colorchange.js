function change_color(){
    let string = document.getElementById("string").value;
    var cor = document.getElementById("color").value;
    document.getElementById("text").innerHTML = string
    document.getElementById("text").style.color = cor
}
