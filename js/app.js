

//navbar 

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

//functionality

let about = document.querySelector('.aboutBtn');
let aboutP = document.querySelector('.about-content p');
console.dir(about);
about.addEventListener('click', () => {


    if (about.classList.toggle('aboutBtn')) {
        aboutP.innerText = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, in quaerat! Dicta recusandae
    doloremque
    dolores deleniti est, dignissimos, itaque doloribus tempora hic libero laboriosam nesciunt culpa
    corrupti sint dolore sequi.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, in quaerat! Dicta recusandae
    doloremque`;

        about.innerText = 'read more';
        console.log(about.classList.toggle('aboutBtn'));

    }
    else {
        aboutP.innerText = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, in quaerat! Dicta recusandae
    doloremque
    dolores deleniti est, dignissimos, itaque doloribus tempora hic libero laboriosam nesciunt culpa
    corrupti sint dolore sequi.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, in quaerat! Dicta recusandae
    doloremque
    dolores deleniti est, dignissimos, itaque doloribus tempora hic libero laboriosam nesciunt culpa
    corrupti sint dolore sequi.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, in quaerat! Dicta recusandae
    doloremque
    dolores deleniti est, dignissimos, itaque doloribus tempora hic libero laboriosam nesciunt culpa
    corrupti sint dolore sequi.`;
        about.innerText = 'read less'
        console.log(about.classList.toggle('aboutBtn'));

    }


    about.classList.toggle('aboutBtn');

})

