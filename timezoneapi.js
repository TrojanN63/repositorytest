api = "http://worldtimeapi.org/api/timezone"

fetch(api)
    .then(response => response.json())
    .then(data => gettime(data))

    function gettime(fusos) {
        let select = document.getElementById('select');
        for (let fuso of fusos) {
          let option = new Option(fuso);
          select.options[select.options.length] = option;
        }
      }
      function exibir() {
      const timezone = document.getElementById('select').value
      const url = `http://worldtimeapi.org/api/timezone/${timezone}`
      fetch(url)
          .then(response => response.json())
          .then(ddata => show(ddata))
  
      function show(time){
          const fusohorario = (time.datetime).split("T")
          resposta = document.getElementById("resposta")
          resposta.innerHTML = `<p>${timezone}</p>
                                ${fusohorario[0]}
                                ${fusohorario[1]}`
      }
    }