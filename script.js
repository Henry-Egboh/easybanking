// HAMBURGER MENU SCRIPT
const navMenu = document.querySelector('.nav-menu');
const hamburgerOpen = document.querySelector('.hamburger-open');
const hamburgerClose = document.querySelector('.hamburger-close');
const navLink = document.querySelectorAll('.nav-link');

// DISPLAYS THE NAV MENU WHEN CLICKED AND REPLACES THE OPEN SVG IMAGE WITH CLOSE SVG IMAGE
hamburgerOpen.addEventListener('click', () => {
        hamburgerOpen.replaceWith(hamburgerClose);
        hamburgerOpen.classList.remove('active');
        navMenu.classList.toggle('active');
        hamburgerClose.classList.toggle('active');
})
// ON CLICK HIDES THE NAV MENU AND THE CLOSE SVG IMG IS REPLACED BY THE OPEN SVG IMG
hamburgerClose.addEventListener('click', () => {
        hamburgerClose.replaceWith(hamburgerOpen);
        hamburgerClose.classList.remove('active');
        navMenu.classList.toggle('active');
        hamburgerOpen.classList.toggle('active');
})
// REMOVES THE NAV MENU WHEN ANY LINK IS CLICKED
navLink.forEach(x => x.addEventListener('click', () => {
    navMenu.classList.remove('active');
}))


// SET ACTIVE LINK FOR EACH PAGE
const currentPage = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-link');
// console.log(activePage);
navLinks.forEach(link => {
    const navLinkPathname = new URL(link.href).pathname;
    if((currentPage === navLinkPathname) || (currentPage === '/index.html' && navLinkPathname === '/')) {
        link.classList.add('active');
    }
});

// const navLinks = document.querySelectorAll('.nav-menu-wrapper .nav-link').forEach(link => {
//     if(link.href.includes(`${currentPage}`)){
//         link.classList.add('active');
//     }
// })