let toggleBtn = document.querySelector('.fa-bars');
let contNav = document.querySelector('.cont-navbar');
let header = document.querySelector('header');

toggleBtn.addEventListener('click', (e) => {
    let navbar = document.getElementById('navbar');
    
    contNav.classList.toggle('navbar-active');
    
    contNav.style.height = contNav.classList.contains('navbar-active') ? `${navbar.getBoundingClientRect().height}px` : '0px';
    
    header.classList.toggle('header-radius');
    toggleBtn.classList.toggle('bars-active');
})

let footerYear = document.getElementById('footer-year');
footerYear.innerHTML = new Date().getFullYear();

window.addEventListener('scroll',(e) => {
    mainHeight = document.getElementById('main').getBoundingClientRect().height;
    headerHeight = document.querySelector('.header').getBoundingClientRect().height;
    
    let topBtn = document.querySelector('.top-btn');
    topBtn.style.display = window.pageYOffset > (mainHeight - (headerHeight + 80)) ? 'block' : 'none';
})

console.log(window.innerWidth);

window.addEventListener('resize', () => {
    if (window.innerWidth > 990) {
        header.classList.remove('header-radius');
        toggleBtn.classList.remove('bars-active');
        contNav.classList.remove('navbar-active');
        contNav.style.height = 'auto';
    }
})