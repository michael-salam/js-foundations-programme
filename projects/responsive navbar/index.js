const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const mobileMenu = document.querySelector("ul");

openBtn.addEventListener("click", () => {
  mobileMenu.classList.add("visible");
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("visible");
});
