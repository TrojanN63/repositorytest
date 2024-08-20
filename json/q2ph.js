url = "https://jsonplaceholder.typicode.com/comments"
function show() {
    fetch(url)
    .then(response => response.json())
    .then(data => displayComment(data))
    .catch(error => displayError(error));

    function displayComment(comments) {
        const postsList = document.getElementById('comment-list');
        postsList.innerHTML = '';
        postid = document.getElementById("postID").value
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