const dropdown = document.querySelector('.dropdown__menu');
const menDisplay = document.getElementById('display__product-Men');
const womenDisplay = document.getElementById('display__product-Women');
const childrenDisplay = document.getElementById('display__product-Children');
const burgerMenu = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
})

menDisplay.addEventListener('mouseenter', () => {
    const hiddenMen = document.getElementById('text__product-Men');
    hiddenMen.style.display = 'none';
})

menDisplay.addEventListener('mouseleave', () => {
    const hidden = document.getElementById('text__product-Men');
    hidden.style.display = 'block';
})

womenDisplay.addEventListener('mouseenter', () => {
    const hiddenWomen = document.getElementById('text__product-Women');
    hiddenWomen.style.display = 'none';
})

womenDisplay.addEventListener('mouseleave', () => {
    const hiddenWomen = document.getElementById('text__product-Women');
    hiddenWomen.style.display = 'block';
})

childrenDisplay.addEventListener('mouseenter', () => {
    const hiddenChildren = document.getElementById('text__product-Children');
    hiddenChildren.style.display = 'none';
})

childrenDisplay.addEventListener('mouseleave', () => {
    const hiddenChildren = document.getElementById('text__product-Children');
    hiddenChildren.style.display = 'block';
})

dropdown.addEventListener('click', () => {
    const dropdownMenu = document.getElementById('dropdown');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
})