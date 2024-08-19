url = "https://jsonplaceholder.typicode.com/comments"
function show() {
    fetch(url)
    .then(response => response.json())
    .then(data => displayComment(data))
    .catch(error => displayError(error));

    function displayComment(comments) {
        const postsList = document.getElementById('posts-list');
        postsList.innerHTML = '';
        postid = document.getElementById("postID").value
        comments.forEach(comment => {
            if (comment.postId == postid){
                const postElement = document.createElement('div');
                postElement.innerHTML = `
                        <h2>Post ID: ${comment.postId}</h2>
                        <h2>Comment ID: ${comment.id}</h2>
                        <h2>Name: ${comment.postId}</h2>
                        <h2>Email: ${comment.postId}</h2>
                        <h2>Body: ${comment.postId}</h2>
                        `;
                postsList.appendChild(postElement);
            }
        });
    }
    
    function displayError(error) {
        const postsList = document.getElementById('posts-list');
        postsList.innerHTML = `<div class="error">Ocorreu um erro: ${error.message}</div>`;
    }
}