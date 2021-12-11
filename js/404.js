

let oh = document.querySelector('.circle.oh');

document.addEventListener('mousemove', event => {
  let domainX = [0, document.body.clientWidth],
  domainY = [0, document.body.clientHeight],
  range = [-10, 10];

  let translate = {
    x: range[0] + (event.clientX - domainX[0]) * (range[1] - range[0]) / (domainX[1] - domainX[0]),
    y: range[0] + (event.clientY - domainY[0]) * (range[1] - range[0]) / (domainY[1] - domainY[0]) };


  oh.style.animation = 'none';
  oh.style.transform = `translate(${translate.x}px, ${translate.y}px)`;
});

document.addEventListener('mouseleave', event => {
  oh.style.animation = 'floating 3s linear infinite';
});


const stars = document.querySelectorAll("#star");

stars.forEach((star) => {
  let duration = Math.random() * (1.2 - 0.6) + 0.6;
  star.style.animation = `stars ${duration}s infinite linear`;
});

window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  preloader.classList.add("preload-finish");
});



