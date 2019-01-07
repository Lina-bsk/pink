var navMain = document.querySelector('.header__nav');
var navToggle = document.querySelector('.main-nav__toggle');

var surnameInput = document.querySelector("#last-name");
var nameInput = document.querySelector("#first-name");
var emailInput = document.querySelector("#mail");
var submitBtn = document.querySelector(".form__submit");
var popupFail = document.querySelector(".popup--error");
var popupSucces = document.querySelector(".popup--submitted");

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

submitBtn.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupFail.classList.add("popup--active");
});
