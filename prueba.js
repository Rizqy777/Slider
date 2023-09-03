const buttonRight = document.querySelector(".btn-next");
const buttonLeft = document.querySelector(".btn-prev");
const slider = document.querySelector(".slider");
const sliderContainer = document.querySelector(".slider__container");
let sliderSection = document.querySelectorAll('.slider__section');
let sliderSectionLast = sliderSection[sliderSection.length -1];


slider.insertAdjacentElement("afterbegin", sliderSectionLast);

function next(){
let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
slider.style.marginLeft = "-200%";
slider.style.transition= "all 1s";
setTimeout(function(){
// slider.insertAdjacentElement("beforeend", sliderSectionLast);
  slider.style.transition = "none";
  slider.insertAdjacentElement("beforeend", sliderSectionFirst);
  slider.style.marginLeft = "0%"
},1000);
}


function prev() {

  let sliderSectionLast = document.querySelectorAll(".slider__section")[1];
  slider.style.marginRight = "-200%";
  slider.style.transition = "all 1s";
  setTimeout(function () {
    slider.insertAdjacentElement("afterbegin", sliderSectionLast);
    slider.style.transition = "none";
    slider.style.marginRight = "200%";
  }, 1000);
}

buttonRight.addEventListener("click", function(){
  next();
})

buttonLeft.addEventListener("click", function(){
  prev();
})