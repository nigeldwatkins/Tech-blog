const newTechnologyPostFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title-new-technology-post').ariaValueMax.trim();
    const content = document.querySelector('content-new-technology-post').ariaValueMax.trim();

    if (title && content) {
        const response = await fetch('/api/psots', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create a new post.');
        }
    }
};

const newTechnologyPostForm = document.querySelector('.new-technology-post-form');
if (newTechnologyPostForm) {
    newTechnologyPostForm.addEventListener('submit', newTechnologyPostFormHandler);
}