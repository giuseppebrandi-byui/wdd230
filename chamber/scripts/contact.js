// Inquiry form constants

// Contact us form  constants
const form = document.querySelector("#form");
const fullName = document.querySelector("#fullName");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const userMessage = document.querySelector("#user-message");

form.addEventListener("submit", (e) => {
  // if all requirememnts are met then submit otherwise display error messages and prevent default
  if (!checkInputs()) {
    e.preventDefault();
  }
});

function checkInputs() {
  // get the values from the inputs
  const fullNameValue = fullName.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const userMessageValue = userMessage.value.trim();
  let isValid = true;

  if (fullNameValue === "") {
    // show error
    // add error class
    setErrorFor(fullName, "Full name cannot be blank");
    isValid = false;
  } else {
    // add success class
    setSuccessFor(fullName);
  }

  if (emailValue === "") {
    // show error
    // add error class
    setErrorFor(email, "Email cannot be blank");
    isValid = false;
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
    isValid = false;
  } else {
    // add success class
    setSuccessFor(email);
  }

  if (phoneValue === "") {
    // show error
    // add error class
    setErrorFor(phone, "Cellphone number cannot be blank");
  } else {
    // add success class
    setSuccessFor(phone);
  }

  if (userMessageValue === "") {
    // show error
    // add error class
    setErrorFor(userMessage, "Message cannot be blank");
    isValid = false;
  } else {
    // add success class
    setSuccessFor(userMessage);
  }

  return isValid;
}

function setErrorFor(input, message) {
  const formControl = input.parentElement.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
