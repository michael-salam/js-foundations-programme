let counterVal = 0;

const domCounter = document.getElementById("counter-val");
const incrementInput = document.getElementById("increment");
const incrementBtn = document.getElementById("increment-btn");

function updateDOMCounterContent() {
  domCounter.textContent = counterVal;
}

document.addEventListener("DOMContentLoaded", () => {
  updateDOMCounterContent();
});

document.getElementById("increase-btn").addEventListener("click", () => {
  counterVal++;
  updateDOMCounterContent();
});

document.getElementById("decrease-btn").addEventListener("click", () => {
  counterVal--;
  updateDOMCounterContent();
});

document.getElementById("reset-btn").addEventListener("click", () => {
  counterVal = 0;
  updateDOMCounterContent();
});

incrementBtn.addEventListener("click", () => {
  let incrementVal = parseInt(incrementInput.value);
  counterVal += incrementVal;
  updateDOMCounterContent();
});
