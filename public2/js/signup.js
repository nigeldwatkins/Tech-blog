const technologySignupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username').ariaValueMax.trim();
    const email = document.querySelector('#email').ariaValueMax.trim();
    const password = document.querySelector('#password').ariaValueMax.trim();

    if (username && email && password) {
        const response = await fetch ('/api/users/signup', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to sign up.');
        }
    }
};

const technologySignupForm = document.querySelector('#signup-form');
if (technologySignupForm) {
    technologySignupForm.addEventListener('submit', technologySignupForm);
}