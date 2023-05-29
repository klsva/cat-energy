const rangeBar = document.querySelector('.results__range');
const beforeImg = document.querySelector('.slider__before');
const afterImg = document.querySelector('.slider__after');
const clientWidth = document.documentElement.clientWidth;

rangeBar.addEventListener('input', () => {
    afterImg.style.width = `${+rangeBar.value}%`;   
  beforeImg.style.width = `${100-rangeBar.value}%`;
});
