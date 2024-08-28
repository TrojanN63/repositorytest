function displayteams(json) {
    json.groups.forEach(group => {
        let line = document.getElementById("tabela").insertRow();
        line.insertCell(0).textContent = group.teams.country;
    });
}