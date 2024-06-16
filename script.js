const searchInput = document.getElementById('searchInput');
const userList = document.getElementById('userList');

const mockData = {
    result: [
        { id: '1', name: 'Alice', avatarUrl: 'https://via.placeholder.com/50' },
        { id: '2', name: 'Bob', avatarUrl: 'https://via.placeholder.com/50' },
        { id: '3', name: 'Charlie', avatarUrl: 'https://via.placeholder.com/50' }
    ]
};

function searchUsers() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredUsers = mockData.result.filter(user => user.name.toLowerCase().includes(searchTerm));
    displayUsers(filteredUsers);
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

document.addEventListener('DOMContentLoaded', () => displayUsers(mockData.result));
//СДЕЛАЛ С МОКОВЫМИ ДАННЫМИ - ТК API НЕ РАБОТАЕТ
