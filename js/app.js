let sidenav = document.querySelector('.sideIcon');
let sideMenu = document.querySelector('.sideBar');
let closeSide = document.querySelector('.close');
let links = document.querySelectorAll('.sideBar a');
console.dir(sideMenu);


sidenav.addEventListener("click", () => {

    sideMenu.style.display = 'block';

});

closeSide.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})
for (let link of links) {
    link.addEventListener('click', () => {
        sideMenu.style.display = 'none';
    })
}