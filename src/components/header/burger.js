let btn = document.querySelector(".burger__btn");
let menu = document.querySelector(".burger__menu");
btn.addEventListener("click", function () {
  btn.classList.toggle("active");
  menu.classList.toggle("active");
});
