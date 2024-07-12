function calvificar(){
    let futuroscalvos = document.getElementById("futuroscalvos").value.split(" ")
    futuroscalvos.splice(-1,0,"e")
    let calvos = futuroscalvos.join(" ")
    alert(calvos)
}