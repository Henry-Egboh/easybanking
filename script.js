const currentPage = window.location.pathname;
// console.log(activePage);

const navLinks = document.querySelectorAll('.nav-menu-wrapper .nav-link').forEach(link => {
    if(link.href.includes(`${currentPage}`)){
        link.classList.add('active');
    }
})