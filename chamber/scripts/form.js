const form = document.querySelector("#form");
const firstName = document.querySelector("#fname");
const lastName = document.querySelector("#lname");
const title = document.querySelector("#title");
const email = document.querySelector("#email");
const cellPhone = document.querySelector("#phone");
const businessName = document.querySelector("#bname");

form.addEventListener("submit", (e) => {
  // if all requirememnts are met then submit otherwise display error messages and prevent default
  if (!checkInputs()) {
    e.preventDefault();
  }
});

function checkInputs() {
  // get the values from the inputs
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const titleValue = title.value.trim();
  const emailValue = email.value.trim();
  const cellPhoneValue = cellPhone.value.trim();
  const businessNameValue = businessName.value.trim();
  let isValid = true;

  if (firstNameValue === "") {
    // show error
    // add error class
    setErrorFor(firstName, "First name cannot be blank");
    isValid = false;
  } else {
    // add success class
    setSuccessFor(firstName);
  }

  if (lastNameValue === "") {
    // show error
    // add error class
    setErrorFor(lastName, "Last name cannot be blank");
    isValid = false;
  } else {
    // add success class
    setSuccessFor(lastName);
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

  if (titleValue !== "") {
    if (!isTitle(titleValue)) {
      setErrorFor(
        title,
        "The title should have minimum of 7 characters including letters, spaces, and hyphens"
      );
      isValid = false;
    } else {
      // add success class
      setSuccessFor(title);
    }
  } else {
    // Remove class error when user decides to delete wrong entry
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
    isValid = false;
  } else {
    // add success class
    setSuccessFor(businessName);
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

function isTitle(title) {
  return /^[a-zA-Z -]{7,1024}$/.test(title);
}

const npBenefits = document.querySelector(".np-benefits");
const bronzeBenefits = document.querySelector(".bronze-benefits");
const silverBenefits = document.querySelector(".silver-benefits");
const goldBenefits = document.querySelector(".gold-benefits");

const radioButtons = document.querySelectorAll("[name='membership']");
const membershipWrapper = document.querySelector(".membership-wrapper");
const mediaQuery = window.matchMedia("(min-width: 768px)");

function displayMembershipPackage(e) {
  if (mediaQuery.matches) {
    let clickedValue = e.target.value;
    if (clickedValue === "np") {
      npBenefits.classList.remove("is-hidden");
    } else {
      npBenefits.classList.add("is-hidden");
    }
    if (clickedValue === "bronze") {
      bronzeBenefits.classList.remove("is-hidden");
    } else {
      bronzeBenefits.classList.add("is-hidden");
    }
    if (clickedValue === "silver") {
      silverBenefits.classList.remove("is-hidden");
    } else {
      silverBenefits.classList.add("is-hidden");
    }
    if (clickedValue === "gold") {
      goldBenefits.classList.remove("is-hidden");
    } else {
      goldBenefits.classList.add("is-hidden");
    }
  }
}

membershipWrapper.addEventListener("click", displayMembershipPackage);
