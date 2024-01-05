// select form
const form = document.querySelector("form");

// pass a submit event listener to the form
form.addEventListener("submit", (event) => submitForm(event));

function submitForm(event) {
  event.preventDefault();

  // select inputs
  const firstName = document.getElementById("firstname").value;
  const lastName = document.getElementById("lastname").value;
  const email = document.getElementById("email").value;

  const userDetails = {
    firstName,
    lastName,
    email,
  };

  console.log(userDetails);
}
