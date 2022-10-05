const form = document.querySelector("form");
const inputElement = document.querySelector(".email");
const inputStyle = inputElement.style;
const errorStyle = document.querySelector(".error").style;

form.addEventListener('submit', e => {
  e.preventDefault();
  const emailInput = document.querySelector(".email").value;
  const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (emailInput === "") {
    document.querySelector(".error").innerText = "Whoops! It looks like you forgot to add your email";
    errorStyle.display = "block";
    inputStyle.outline = "1px solid red";
  }
  else if (!regex.test(emailInput)) {
    errorStyle.display = "block";
    inputStyle.outline = "1px solid red";
    document.querySelector(".error").innerText = "Please provide a valid email address";
  }
})

const blue = getComputedStyle(document.documentElement).getPropertyValue("--clr-primary-blue");
inputElement.addEventListener('keypress', (e) => {
  errorStyle.display = "none";
  inputStyle.outline = "2px solid " + blue;
})