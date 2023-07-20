const urlFruit = "https://brotherblazzard.github.io/canvas-content/fruit.json";

let data;

// Generate todays date and time
let dateNow = new Date();
let lastModified = dateNow[document.lastModified];

async function getFruitData() {
  const response = await fetch(urlFruit);
  data = await response.json();
  displayFruitNames(data);
}

getFruitData();

const displayFruitNames = (fruits) => {
  const selection1 = document.querySelector("#selection-1");
  const selection2 = document.querySelector("#selection-2");
  const selection3 = document.querySelector("#selection-3");
  fruits.forEach((fruit) => {
    // Create element option for the three dropdown lists
    let optionSelect1 = document.createElement("option");
    let optionSelect2 = document.createElement("option");
    let optionSelect3 = document.createElement("option");

    // Extract fruit's name from json file
    let fruitName = `${fruit.name}`;

    // Add attribute value to the option elements
    optionSelect1.setAttribute("value", fruit.name);
    optionSelect2.setAttribute("value", fruit.name);
    optionSelect3.setAttribute("value", fruit.name);

    // Add text content to option elements
    optionSelect1.textContent = `${fruitName}`;
    optionSelect2.textContent = `${fruitName}`;
    optionSelect3.textContent = `${fruitName}`;

    // Append option element to each select dropdown list
    selection1.appendChild(optionSelect1);
    selection2.appendChild(optionSelect2);
    selection3.appendChild(optionSelect3);
  });
};

const nameEl = document.querySelector('input[name="fname"]');
const phoneEl = document.querySelector('input[name="phone"]');
const emailEl = document.querySelector('input[name="email"]');
const messageEl = document.querySelector('textarea[name="user-message"]');
const selectEl1 = document.querySelector('select[name="fruit-1"]');
const selectEl2 = document.querySelector('select[name="fruit-2"]');
const selectEl3 = document.querySelector('select[name="fruit-3"]');
const quantityEl = document.querySelector('input[name="quantity"]');

// Select the elements where you want to inject data
const fName = document.querySelector(".yourName");
const tel = document.querySelector(".yourPhone");
const email = document.querySelector(".yourEmail");
const message = document.querySelector(".instructions");
const choice1 = document.querySelector(".choice1");
const choice2 = document.querySelector(".choice2");
const choice3 = document.querySelector(".choice3");
const quantity = document.querySelector(".quantity");
const dateTime = document.querySelector(".date-time-order");

const form = document.querySelector("#form");
form.addEventListener("submit", (e) => {
  // if all requirememnts are met then submit otherwise display error messages and prevent default
  if (!checkInputs()) {
    e.preventDefault();
  }
});

function checkInputs() {
  // Extract values from input, textarea, select elements and date & time;
  const nameValue = nameEl.value;
  const phoneValue = phoneEl.value;
  const emailValue = emailEl.value;
  const messageValue = messageEl.value;
  const select1Value = selectEl1.value;
  const select2Value = selectEl2.value;
  const select3Value = selectEl3.value;
  const quantityValue = Number(quantityEl.value);
  let isValid = true;

  if (nameValue === "") {
    // show error
    setErrorFor(nameEl, "First name cannot be blank");
    isValid = false;
  }

  if (emailValue === "") {
    // show error
    setErrorFor(emailEl, "Email cannot be blank");
    isValid = false;
  } else if (!isEmail(emailValue)) {
    setErrorFor(emailEl, "Not a valid email");
    isValid = false;
  }

  if (phoneValue === "") {
    // show error
    setErrorFor(phoneEl, "Phone number cannot be blank");
  }

  if (quantityValue === "" || quantityValue === 0) {
    // show error
    setErrorFor(quantityEl, "Quantity cannot be zero or null");
  }

  if (
    nameValue !== "" &&
    emailValue !== "" &&
    phoneValue !== "" &&
    quantityValue >= 1
  ) {
    // Remove class is-hidden to show the details card with nutritional information
    const detailsSection = document.querySelector(".card-details");
    detailsSection.classList.remove("is-hidden");

    // Remove class grid--1-cols and replace it with grid--2-cols to show both the form input and card with nutritional information on the same row.
    const inputForm = document.querySelector(".input-form");
    inputForm.classList.remove("grid--1-cols");
    inputForm.classList.add("grid--2-cols");

    // Remove leged when the order form is submitted
    const legend = document.querySelector("legend");
    legend.classList.add("is-hidden");

    // Inject data
    fName.textContent = nameValue;
    email.textContent = emailValue;
    tel.textContent = phoneValue;
    quantity.textContent = quantityValue;
    message.textContent = messageValue;
    choice1.textContent = select1Value;
    choice2.textContent = select2Value;
    choice3.textContent = select3Value;
    dateTime.textContent = new Intl.DateTimeFormat("en-GB", options).format(
      lastModified
    );
    getNutritionData(data);

    // Clear input fields after submission
    nameEl.value = "";
    phoneEl.value = "";
    emailEl.value = "";
    messageEl.value = "";
    selectEl1.value = "";
    selectEl2.value = "";
    selectEl3.value = "";
    quantityEl.value = "";

    // Get the stored VALUE for the numDrinks-ls KEY in localStorage if it exists.
    // If the numDrinks - ls KEY is missing, then assign 0 to the numDrinks variable.
    let numDrinks = Number(window.localStorage.getItem("numDrinks-ls")) || 0;
    // increment the number of drinks.
    numDrinks += quantityValue;
    // store the new number of drinks total into localStorage, key=numDrinks-ls
    localStorage.setItem("numDrinks-ls", `${numDrinks}`);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

const getNutritionData = (fruits) => {
  const carbs = document.querySelector(".carbs");
  const proteins = document.querySelector(".proteins");
  const fats = document.querySelector(".fats");
  const calories = document.querySelector(".calories");
  const sugars = document.querySelector(".sugars");

  const choice1 = document.querySelector('select[name="fruit-1"]');
  const choice2 = document.querySelector('select[name="fruit-2"]');
  const choice3 = document.querySelector('select[name="fruit-3"]');

  let totalCarbs = 0;
  let totalProteins = 0;
  let totalFats = 0;
  let totalCalories = 0;
  let totalSugars = 0;

  fruits.forEach((fruit) => {
    if (
      choice1.value === `${fruit.name}` ||
      choice2.value === `${fruit.name}` ||
      choice3.value === `${fruit.name}`
    ) {
      // Extract fruit carbohydrates value
      let carbs = Number(`${fruit.nutritions.carbohydrates}`);
      // Extract fruit proteins value
      let proteins = Number(`${fruit.nutritions.protein}`);
      // Extract fruit fats value
      let fats = Number(`${fruit.nutritions.fat}`);
      // Extract fruit calories value
      let calories = Number(`${fruit.nutritions.calories}`);
      // Extract fruit sugars value
      let sugars = Number(`${fruit.nutritions.sugar}`);
      // Extract fruit's name from json file
      let fruitName = `${fruit.name}`;
      totalCarbs += carbs;
      totalProteins += proteins;
      totalFats += fats;
      totalCalories += calories;
      totalSugars += sugars;
    }
  });
  carbs.textContent = totalCarbs.toFixed(0);
  proteins.textContent = totalProteins.toFixed(0);
  fats.textContent = totalFats.toFixed(1);
  calories.textContent = totalCalories.toFixed(0);
  sugars.textContent = totalSugars.toFixed(0);
};
