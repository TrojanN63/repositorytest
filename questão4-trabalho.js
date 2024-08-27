url = "https://worldcupjson.net/teams"

fetch(url)
    .then(response => response.json())
    .then(data => displayteams(data))

function displayteams(teams) {
    let tabela = document.getElementById("tabela")
    teams.forEach(team => {
        const line = document.createElement("tr")
    });
}