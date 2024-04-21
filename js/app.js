

//navbar 

let sidenav = document.querySelector('.sideIcon');
let sideMenu = document.querySelector('.sideBar');
let closeSide = document.querySelector('.close');
let links = document.querySelectorAll('.sideBar a');
let cvBtn = document.querySelector('.cv');




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
about.addEventListener('click', () => {

    aboutP.style.maxWidth= '1000px';
    aboutP.style.margin= '2rem 0 3rem';
    aboutP.style.fontSize=' 1.6rem';
    if (about.classList.toggle('aboutBtn')) {
        aboutP.innerText = '';
        aboutP.innerText = `Welcome to my about page! My name is Moropane Kutullo Innocent, and I hail from the vabrant country of south africa. My journey into the real of technology began in 2021 when I embarked on a Computer Systems engineering course at Tshwane University of Technology.`;
                
        about.style.textAline = 'centre';
        about.innerText = 'read more';
        let status2 = about.classList.toggle('aboutBtn');



    }
    else {
        aboutP.innerText = `Welcome to my about page! My name is Moropane Kutullo Innocent, and I hail from the vabrant country of south africa. My journey into the real of technology began in 2021 when I embarked on a Computer Systems engineering course at Tshwane University of Technology. However, it wasn't until 2022 that I discovered my true passion for web development. My initiation into this exciting field come through creating my first online store project using WordPress. Eager to expand my skill set, I delved into the world of HTML, CSS, and JavaScript through online resources like Youtube. In january 2023, I tooka significant step forwared by enrolling in a Fullstack course on Coursera, where I learned basics of developing a website from start to the end. In january 2024  I enrolled in a Fullstack bootcamp on Udemy, Where I honed my abilities in both front-end and back-end coding, bring projects to life from start to finish. Join me on this journey as I continue to grow and innovate in the ever-evolving landscape of technology`;
        about.innerText = 'read less'
        let status = about.classList.toggle('aboutBtn');


    }


    about.classList.toggle('aboutBtn');

})

