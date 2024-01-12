const body = document.querySelector("body");
const bgColorInput = document.getElementById("bgcolor-input");
const colorInput = document.getElementById("color-input");

const bgChangeForm = document.querySelector("#bg-change");
const colorChangeForm = document.querySelector("#color-change");

bgChangeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // get the value of our input
  let bgColor = bgColorInput.value;
  // change the bg color of the body
  body.style.backgroundColor = bgColor;
});

colorChangeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let color = colorInput.value;
  body.style.color = color;
});
