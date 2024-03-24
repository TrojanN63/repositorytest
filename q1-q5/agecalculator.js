function submit(){
    var now = new Date();
    let borndate = document.getElementById("date").value
    var born = new Date(borndate)
    
    var age = now.getFullYear() - born.getFullYear()

    if ((born.getMonth()+1) > (now.getMonth()+1)) {
        age--
    }
    else if ((born.getMonth()+1) == (now.getMonth()+1)){
        if (born.getDate() > (now.getDate()-1)){
            age --
        }
    }
    document.getElementById("age").innerHTML =
    `<p> Your age is ${age}</p>`
}