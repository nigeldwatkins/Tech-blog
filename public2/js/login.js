const technologyLoginFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-technology-login').value.trim();
    const password = document.querySelector('#password-technology-login').value.trim();

    if (username && password) {

        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {

            alert('Failed to log in.')
        }
    }
};

const technologyLoginForm = document.querySelector('.technology-login-form');
if (technologyLoginForm) {
    technologyLoginForm.addEventListener('submit', technologyLoginFormHandler);
}