const technologyLogout = async () => {
    const response = await fetch('/api/user/logout', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to log out.');
    }
};

const technologyLogoutButton = document.querySelector('#technology-logout');
if (technologyLogoutButton) {
    technologyLogoutButton.addEventListener('click', technologyLogout);
}