function add(){
    const nome = document.getElementById("nome").value;
    const preço = "R$"+document.getElementById("preço").value;
    const categoria = document.getElementById("categoria").value;
    const descrição = document.getElementById("descrição").value;

    let new_row = document.getElementById("table").insertRow();
    new_row.insertCell(0).textContent = nome;
    new_row.insertCell(1).textContent = preço;
    new_row.insertCell(2).textContent = categoria;
    new_row.insertCell(3).textContent = descrição;
}