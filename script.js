function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'admin' && password === 'admin123') {
        alert('Login successful! Welcome, Admin.');
    } else if ((username === 'user1' || username === 'user2') && password === 'user123') {
        alert(`Login successful! Welcome, ${username}.`);
    } else {
        alert('Invalid credentials, please try again.');
    }
}