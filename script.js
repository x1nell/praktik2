document.addEventListener('DOMContentLoaded', function() {
  const userList = document.getElementById('userList');
  const searchInput = document.getElementById('searchInput');

  async function fetchUsers(searchTerm = '') {
    try {
      const response = await fetch(`/api/users?searchTerm=${searchTerm}`);
      if (!response.ok) {
        throw new Error('Ошибка загрузки данных');
      }
      const data = await response.json();
      displayUsers(data.result);
    } catch (error) {
      console.error('Ошибка загрузки пользователей:', error);
    }
  }

  function displayUsers(users) {
    userList.innerHTML = '';
    users.forEach(user => {
      const userCard = document.createElement('div');
      userCard.classList.add('user-card');
      userCard.innerHTML = `
        <img src="${user.avatarUrl}" alt="Avatar">
        <p>${user.name}</p>
      `;
      userList.appendChild(userCard);
    });
  }

  searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.trim();
    fetchUsers(searchTerm);
  });
});
