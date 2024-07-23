function imprimir(){
número = document.getElementById("número").value
for (n = 0; n <= número; n++){
g = 0
for (let i = 1; i <= n; i++){
    if (n%i == 0){
        g++
    }
}
if (g==2){
    document.getElementById("result").innerHTML += n + " "
}
}
}