const searchInput = document.getElementById('searchInput');
const userList = document.getElementById('userList');

async function searchUsers() {
    const searchTerm = searchInput.value;
    const response = await fetch(`/api/users?searchTerm=${searchTerm}`);
    const data = await response.json();
    displayUsers(data.result);
}

function displayUsers(users) {
    userList.innerHTML = '';
    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.className = 'user';
        userDiv.innerHTML = `
            <img src="${user.avatarUrl}" alt="${user.name}" width="50" height="50">
            <span>${user.name}</span>
        `;
        userList.appendChild(userDiv);
    });
}
