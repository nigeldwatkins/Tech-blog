const newTechnologyCommentFormHandler = async (event) => {
    event.preventDefault();

    const post_id = parseInt(window.location.pathname.split('/').pop());

    const content = document.querySelector('#content-new-technology-comment').value.trim();

    if (content) {
        const response = await fetch(`/api/comment`, {
            method: 'POST',
            body: JSON.stringify({ comment_text: content, post_id }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            console.log('Response status:', response.status);
            console.log('Response text:', await response.text());
            alert('Your comment was not created.');
        }
    }
};

const newTechnologyCommentForm = document.querySelector('.new-technology-comment-form');
if (newTechnologyCommentForm) {
    newTechnologyCommentForm.addEventListener('submit', newTechnologyCommentFormHandler);
}
