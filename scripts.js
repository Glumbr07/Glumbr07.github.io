// filepath: /workspaces/Group-2-Mini-Website-/script.js
let currentSlideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) currentSlideIndex = 0;
    if (index < 0) currentSlideIndex = slides.length - 1;

    slides.forEach((slide, i) => {
        slide.style.display = i === currentSlideIndex ? 'block' : 'none';
    });
}

function changeSlide(step) {
    currentSlideIndex += step;
    showSlide(currentSlideIndex);
}

// Initialize the slideshow
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlideIndex);
});