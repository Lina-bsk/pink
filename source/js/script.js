'use strict';
var navMain = document.querySelector('.header__nav');
var navToggle = document.querySelector('.main-nav__toggle');

var surnameInput = document.querySelector("#last-name");
var nameInput = document.querySelector("#first-name");
var emailInput = document.querySelector("#mail");

navMain.classList.remove('header__nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('header__nav--closed')) {
    navMain.classList.remove('header__nav--closed');
    navMain.classList.add('header__nav--opened');
  } else {
    navMain.classList.add('header__nav--closed');
    navMain.classList.remove('header__nav--opened');
  }
});
