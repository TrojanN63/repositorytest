function show(){
    user = document.getElementById("user").value

    url = `https://jsonplaceholder.typicode.com/users/${user}/todos`

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
