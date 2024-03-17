function calculate(){
    let celsius = document.getElementById("celsius").value;
    let fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById("Fahrenheit").innerHTML =
    `${celsius}°C corresponde a ${fahrenheit}°F`;
}