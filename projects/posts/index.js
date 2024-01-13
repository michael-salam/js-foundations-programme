const postArray = [];
let currentPost = 0;

const title = document.getElementById("title");
const body = document.getElementById("body");
// select buttons
const rightBtn = document.getElementById("right-btn");
const leftBtn = document.getElementById("left-btn");

function updateDOM() {
  title.textContent = postArray[currentPost].title;
  body.textContent = postArray[currentPost].body;
}

fetch("http://localhost:8080")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => postArray.push(item));
    updateDOM();
  });

rightBtn.addEventListener("click", () => {
  if (currentPost < postArray.length - 1) {
    currentPost++;
    updateDOM();
  }
});

leftBtn.addEventListener("click", () => {
  if (!currentPost <= 0) {
    currentPost--;
    updateDOM();
  }
});
