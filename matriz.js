const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const maltriz = [
    [17, 29, 30],
    [41, 57, 62],
    [7, 8089, 9]
];

function soma(matriz, maltriz){
    let result = [];
    for (let i = 0; i < matriz.length; i++){
        result[i] = [];
        for (let j = 0; j < matriz[i].length; j++){
            result[i][j] = matriz[i][j] + maltriz[i][j];
        }
    }
    return result
}
function sub(matriz, maltriz){
    let result = [];
    for (let i = 0; i < matriz.length; i++){
        result[i] = [];
        for (let j = 0; j < matriz[i].length; j++){
            result[i][j] = matriz[i][j] - maltriz[i][j];
        }
    }
    return result
}

console.table(sub(matriz, maltriz))
console.table(soma(matriz, maltriz))