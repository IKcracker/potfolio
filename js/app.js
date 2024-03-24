let sidenav = document.querySelector('.sideIcon');
let sideMenu = document.querySelector('.sideBar');
let closeSide = document.querySelector('.close');


sidenav.addEventListener("click", () => {

    sideMenu.style.display = 'block';

});

closeSide.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})