url = "https://jsonplaceholder.typicode.com/comments"
url_posts = "https://jsonplaceholder.typicode.com/posts"

fetch(url_posts)
  .then(response => response.json())
  .then(posts => list_posts(posts));

function list_posts(posts) {
  let select = document.getElementById('posts');
  for (let post of posts) {
    let option = new Option(post.title, post.id);
    select.options[select.options.length] = option;
  }
}

function show() {
    fetch(url)
    .then(response => response.json())
    .then(data => displayComment(data))
    .catch(error => displayError(error));

    function displayComment(comments) {
        const postsList = document.getElementById('comment-list');
        postsList.innerHTML = '';
        postid = document.getElementById("posts").value
        comments.forEach(comment => {
            if (comment.postId == postid){
                const postElement = document.createElement('div');
                postElement.innerHTML = `
                        <h2>Post ID: ${comment.postId}</h2>
                        <h1>Comment ID: ${comment.id}</h1>
                        <h1>Name: ${comment.name}</h1>
                        <p>Email: ${comment.email}</p>
                        <p>Body: ${comment.body}</p>
                        <h1>------------</h1>
                        `;
                postsList.appendChild(postElement);
            }
        });
    }
    
    function displayError(error) {
        const postsList = document.getElementById('comment-list');
        postsList.innerHTML = `<div class="error">Ocorreu um erro: ${error.message}</div>`;
    }
}