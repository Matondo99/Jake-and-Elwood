const openButton = document.querySelector('.open-btn');
const nav = document.querySelector('.navi');
const closeButton = document.querySelector('.close-btn');

openButton.addEventListener('click', () => {
    nav.classList.add('navi-opening')
});

closeButton.addEventListener('click', () => {
    nav.classList.remove('navi-opening')
});