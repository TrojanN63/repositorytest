urlposts = "https://jsonplaceholder.typicode.com/posts"
urlusers = "https://jsonplaceholder.typicode.com/users"



fetch(urlposts)
    .then(response => response.json())
    .then(data => displayPosts(data))
    .catch(error => displayError(error));

    function displayPosts(posts) {
        const postsList = document.getElementById('posts-list');
        postsList.innerHTML = '';
    
        posts.forEach(post => {
            const postElement = document.createElement('div');
            fetch(urlusers)
                .then(response => response.json())
                .then(data => displayUsers(data))
                .catch(error => displayError(error));

            function displayUsers(users){
                users.forEach(user => {
                    if (user.id == post.userId){
                        username = user.name
                    }
                })
                
            postElement.innerHTML = `
            <h2>User: @${username}</h2>
            <p>Post: #${post.id}</p>
            <p>Title: ${post.title}</p>
            <p>Body: ${post.body}</p>
            <p>______________________________________________________________________________________________________________________________________________________________________________________________________</p>
        `;
    postsList.appendChild(postElement);
            }
        });
    }
    
    function displayError(error) {
        const postsList = document.getElementById('posts-list');
        postsList.innerHTML = `<div class="error">Ocorreu um erro: ${error.message}</div>`;
    }