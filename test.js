function factorial(){
    let limit = document.getElementById("number").value;
    let sum = 1
    for (i=1;i<=n;i++){
        sum*=i;
    }
    document.getElementById("result").innerHTML = 
    `Result for ${limit}! = ${sum}`;
}
