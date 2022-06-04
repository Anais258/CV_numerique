const containerProfil = document.querySelector('.containerProfil');
let height = containerProfil.clientHeight;

window.addEventListener('scroll', () => {
    if(window.scrollY > height) {
        nav.classList.add('scroll');
    } else {
        nav.classList.remove('scroll');
    }
})
