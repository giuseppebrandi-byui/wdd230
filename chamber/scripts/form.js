const form = document.querySelector("#form");
const firstName = document.querySelector("#fname");
const lastName = document.querySelector("#lname");
const title = document.querySelector("#title");
const email = document.querySelector("#email");
const cellPhone = document.querySelector("#phone");
const businessName = document.querySelector("#bname");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  // get the values from the inputs
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const titleValue = title.value.trim();
  const emailValue = email.value.trim();
  const cellPhoneValue = cellPhone.value.trim();
  const businessNameValue = businessName.value.trim();

  if (firstNameValue === "") {
    // show error
    // add error class
    setErrorFor(firstName, "First name cannot be blank");
  } else {
    // add success class
    setSuccessFor(firstName);
  }

  if (lastNameValue === "") {
    // show error
    // add error class
    setErrorFor(lastName, "Last name cannot be blank");
  } else {
    // add success class
    setSuccessFor(lastName);
  }

  if (emailValue === "") {
    // show error
    // add error class
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
  } else {
    // add success class
    setSuccessFor(email);
  }

  if (titleValue === "") {
    setSuccessFor(title);
    // show error
    // !isTitle(titleValue)
    // add error class
  } else if (!isTitle(titleValue)) {
    setErrorFor(
      title,
      "The title should have minimum of 7 characters including letters, spaces, and hyphens"
    );
  } else {
    // add success class
    setSuccessFor(title);
  }

  if (cellPhoneValue === "") {
    // show error
    // add error class
    setErrorFor(cellPhone, "Cellphone number cannot be blank");
  } else {
    // add success class
    setSuccessFor(cellPhone);
  }

  if (businessNameValue === "") {
    // show error
    // add error class
    setErrorFor(businessName, "Business name cannot be blank");
  } else {
    // add success class
    setSuccessFor(businessName);
  }
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

function isTitle(title) {
  return /^[a-z,A-Z, ,-]{7,25}$/.test(title);
}
