url_users = "https://jsonplaceholder.typicode.com/users"

fetch(url_users)
  .then(response => response.json())
  .then(users => list_users(users));

function list_users(users) {
  let select = document.getElementById('users');
  for (let user of users) {
    let option = new Option(user.name, user.id);
    select.options[select.options.length] = option;
  }
}

function show(){
    userr = document.getElementById('users').value

    url = `https://jsonplaceholder.typicode.com/users/${userr}/todos`

    fetch(url)
    .then(response => response.json())
    .then(data => show_todos(data))

    function show_todos(todos) {  
        const list = document.getElementById("list");
        list.innerHTML = '';
        todos.forEach(todo => {
            const element = document.createElement("div");
            if (todo.completed){
                element.style.color = 'green'
                element.style.textDecoration = 'line-through'
            }
            else {element.style.color = 'red'}
            element.innerHTML = `
            <li>${todo.title}</li>` 
            list.appendChild(element);
        })
    };
    }
