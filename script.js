let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  
  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }
  
  slides[currentSlide].classList.add('active');
}

document.querySelector('.next').addEventListener('click', () => {
  showSlide(currentSlide + 1);
});

document.querySelector('.prev').addEventListener('click', () => {
  showSlide(currentSlide - 1);
});

// Auto-advance slides every 5 seconds
setInterval(() => {
  showSlide(currentSlide + 1);
}, 5000);
