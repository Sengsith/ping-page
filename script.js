const form = document.querySelector("form");
const inputElement = document.querySelector(".email");
const inputStyle = inputElement.style;
const errorStyle = document.querySelector(".error").style;

form.addEventListener('submit', e => {
  e.preventDefault();
  const emailInput = document.querySelector(".email").value;
  const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!regex.test(emailInput)) {
    errorStyle.display = "block";
    inputStyle.outline = "1px solid red";
  }
})

const paleBlue = getComputedStyle(document.documentElement).getPropertyValue("--clr-secondary-paleblue");
inputElement.addEventListener('keypress', (e) => {
  errorStyle.display = "none";
  inputStyle.outline = "1px solid " + paleBlue;
})