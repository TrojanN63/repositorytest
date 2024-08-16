url = "https://jsonplaceholder.typicode.com/posts"

fetch(url)
    .then(response => response.json())
    .then(data => displayUsers(data))
    .catch(error => displayError(error));

    function displayUsers(posts) {
        const postsList = document.getElementById('posts-list');
        postsList.innerHTML = '';
    
        posts.forEach(post => {
            const postElement = document.createElement('div');
            //userElement.classList.add('user');
            postElement.innerHTML = `
                    <h2>${post.userId}</h2>
                    <p>Id: ${post.id}</p>
                    <p>Title: ${post.title}</p>
                    <p>Body: ${post.body}</p>
                `;
            postsList.appendChild(postElement);
        });
    }
    
    function displayError(error) {
        const postsList = document.getElementById('posts-list');
        postsList.innerHTML = `<div class="error">Ocorreu um erro: ${error.message}</div>`;
    }