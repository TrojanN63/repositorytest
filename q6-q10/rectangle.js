function calculate(){
    let heigth = document.getElementById("heigth").value
    let width = document.getElementById("width").value
    result = heigth * width
    document.getElementById("result").innerHTML = `${result} u²`
}