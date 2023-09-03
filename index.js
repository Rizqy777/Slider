const buttonRight = document.querySelector(".btn-next");
const buttonLeft = document.querySelector(".btn-prev");
const slider = document.querySelector(".slider");
const sliderContainer = document.querySelector(".slider__container");
let sliderSection = document.querySelectorAll('.slider__section');
let sliderSectionLast = sliderSection[sliderSection.length -1];
let infinite = document.querySelector(".infinite");
const tania = document.querySelector(".tania")
slider.insertAdjacentElement("afterbegin", sliderSectionLast);


function moveInfiniteBeforeTania() {
  const taniaElement = document.querySelector(".tania");
  const infiniteElement = document.querySelector(".infinite");
  const parentElement = taniaElement.parentElement;

  // Verificar que tanto "tania" como "infinite" existan en el DOM
  if (taniaElement && infiniteElement && parentElement) {
    parentElement.insertBefore(infiniteElement, taniaElement);
  }
}
function next(){
let sliderSectionFirst = document.querySelectorAll(".slider__section")[1];
slider.style.marginLeft = "-400%";
slider.style.transition= "all 1s";
setTimeout(function(){
// slider.insertAdjacentElement("beforeend", sliderSectionLast);
  slider.style.transition = "none";
  slider.insertAdjacentElement("beforeend", sliderSectionFirst);
  slider.style.marginLeft = "-200%"
moveInfiniteBelowTania();

},1000);
}


function prev() {

  let sliderSectionLast = document.querySelectorAll(".slider__section")[0];
  slider.style.marginRight = "-200%";
  slider.style.transition = "all 1s";
  setTimeout(function () {
    slider.insertAdjacentElement("beforeend", sliderSectionLast);
    slider.style.transition = "none";
    slider.style.marginRight = "0%";
  }, 1000);
  moveInfiniteBelowTania();
}


buttonRight.addEventListener("click", function(){
  next();
})

buttonLeft.addEventListener("click", function(){
  prev();
})



// Llama a esta función en el momento adecuado para actualizar la posición de "infinite"
