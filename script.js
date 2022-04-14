// create a variable to select menu button
const menuButton = document.querySelector('.openSidebarMenu')
// create a variable to make sure the menu is not open.  Set the variable's value to false
let menuOpen = false;
// on click toggle the checkbox 
menuButton.addEventListener('change', function() {
    menuButton.classList.toggle('open');
});