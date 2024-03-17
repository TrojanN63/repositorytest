function submit(){
    var now = new Date();
    let date = document.getElementById("date").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    
    var age = now.getFullYear() - year

    if (month > (now.getMonth()+1)) {
        age--
    }
    else if (month == (now.getMonth()+1)){
        if (date > (now.getDate())){
            age --
        }
    }
    document.getElementById("age").innerHTML =
    `<p> Your age is ${age}</p>`
}