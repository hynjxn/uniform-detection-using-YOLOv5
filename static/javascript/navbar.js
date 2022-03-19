let toggleBtn = document.querySelector(".navbar__toggleBtn");
let menu = document.querySelector(".navbar__menu");
toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});
