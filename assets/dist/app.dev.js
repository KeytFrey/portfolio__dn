"use strict";

new Splide('.imgsplide').mount();
var splide = new Splide('.skillssplide', {
  perPage: 4,
  rewind: true
});
splide.mount();

if (window.innerWidth <= 1021) {
  var splide = new Splide('.skillssplide', {
    perPage: 3,
    width: 768
  });
}

if (window.innerWidth <= 748) {
  var splide = new Splide('.skillssplide', {
    perPage: 1,
    width: 166
  });
}

var burger = document.querySelector('.burger');
var header = document.querySelector('header');
window.addEventListener('click', function () {
  if (window.innerWidth <= 1021) {
    burger.classList.toggle('active');
    header.classList.toggle('active');
  }
});