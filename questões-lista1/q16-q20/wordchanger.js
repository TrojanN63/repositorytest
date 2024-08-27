function change(){
    const text = document.getElementById("text").value;
    const p1 = document.getElementById("p1").value;
    const p2 = document.getElementById("p2").value;

    let vetor = text.split(' ');
    for (let i = 0; i<vetor.length; i++){
        if (vetor[i] == p1)
            vetor[i] = p2;
    }
    const nova = vetor.join(' ');
    document.getElementById("result").innerHTML = nova;
}