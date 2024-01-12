const questionBtns = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");

questionBtns.forEach((btn, btnIndex) => {
  btn.addEventListener("click", () => {
    answers.forEach((answer, answerIndex) => {
      if (answerIndex === btnIndex) {
        answer.classList.toggle("visible");
      } else {
        answer.classList.remove("visible");
      }
    });
  });
});
