const header = document.querySelector('.header');
const navbar = document.querySelector('.header .flex .navbar');
const menuBtn = document.querySelector('#menu-btn i');
const slides = document.querySelectorAll('.review .row .slider-container .slide');
const prevSlide = document.querySelector('#prev');
const nextSlide = document.querySelector('#next');

let index = 0;
menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-x');
    navbar.classList.toggle('active');

}

window.onscroll =() => {
    menuBtn.classList.remove('fa-x');
    navbar.classList.remove('active');

    if (window.scrollY > 0) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}

function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}
prevSlide.addEventListener('click', prev);
nextSlide.addEventListener('click', next);
