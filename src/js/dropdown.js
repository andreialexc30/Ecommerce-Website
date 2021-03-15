const dropdown = document.querySelector('.dropdown__menu');

dropdown.addEventListener('click', () => {
    const dropdownMenu = document.getElementById('dropdown');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
})