const menu = document.querySelector('.slideOutNav');
const menuIcon = document.querySelector('.menuIcon');
const closeButton = document.querySelector('.closeMenuButton');

menuIcon.addEventListener('click', function() {
    menu.style.left = '0';
})

closeButton.addEventListener('click', function() {
    menu.style.left = '-506px';
    

});