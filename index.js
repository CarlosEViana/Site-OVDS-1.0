
// slider   


    const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('.slide');
const prevButton = document.querySelector('#prevButton');
const nextButton = document.querySelector('#nextButton');
let currentSlideIndex = 0;

function showSlide(index) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.add('hidden');
  }
  slides[index].classList.remove('hidden');
  currentSlideIndex = index;
}

prevButton.addEventListener('click', () => {
  let index = currentSlideIndex - 1;
  if (index < 0) {
    index = slides.length - 1;
  }
  showSlide(index);
});

nextButton.addEventListener('click', () => {
  let index = currentSlideIndex + 1;
  if (index >= slides.length) {
    index = 0;
  }
  showSlide(index);
});

showSlide(currentSlideIndex);

 