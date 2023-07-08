const url = "https://brotherblazzard.github.io/canvas-content/fruit.json";

async function getFruitData() {
  const response = await fetch(url);
  const data = await response.json();
  displayFruitNames(data);
  // getNutritionData(data);
  // checkEquality(data);
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

const btnEl = document.querySelector(".submitBtn");

// Add event listener to populate the Your Details content area.
btnEl.addEventListener("click", (event) => {
  event.preventDefault();
  const nameEl = document.querySelector('input[name="fname"]');
  const phoneEl = document.querySelector('input[name="phone"]');
  const emailEl = document.querySelector('input[name="email"]');
  const messageEl = document.querySelector('textarea[name="user-message"]');
  const selectEl1 = document.querySelector('select[name="fruit-1"]');
  const selectEl2 = document.querySelector('select[name="fruit-2"]');
  const selectEl3 = document.querySelector('select[name="fruit-3"]');
  const dateTimeEl = document.querySelector('input[name="date-time"]');

  // extract values from input, textarea and select elements
  const nameValue = nameEl.value;
  const phoneValue = phoneEl.value;
  const emailValue = emailEl.value;
  const messageValue = messageEl.value;
  const select1Value = selectEl1.value;
  const select2Value = selectEl2.value;
  const select3Value = selectEl3.value;
  const dateTimeValue = dateTimeEl.value;

  // Select the elements where you want to inject data
  const fName = document.querySelector(".yourName");
  const tel = document.querySelector(".yourPhone");
  const mail = document.querySelector(".yourEmail");
  const message = document.querySelector(".instructions");
  const choice1 = document.querySelector(".choice1");
  const choice2 = document.querySelector(".choice2");
  const choice3 = document.querySelector(".choice3");
  const dateTime = document.querySelector(".date-time-order");

  // Inject data
  fName.textContent = nameValue;
  tel.textContent = phoneValue;
  mail.textContent = emailValue;
  message.textContent = messageValue;
  choice1.textContent = select1Value;
  choice2.textContent = select2Value;
  choice3.textContent = select3Value;
  dateTime.textContent = dateTimeValue;

  function checkEquality(fruits) {
    const selectEl1 = document.querySelector('select[name="fruit-1"]');
    const selectEl2 = document.querySelector('select[name="fruit-2"]');
    const selectEl3 = document.querySelector('select[name="fruit-3"]');
    const select1Value = selectEl1.value;
    console.log(select1Value);
    const select2Value = selectEl2.value;
    console.log(select2Value);
    const select3Value = selectEl3.value;
    console.log(select3Value);
    // fruits.forEach((fruit) => {
    //   let fruitName = `${fruit.name}`;
    //   console.log(fruitName);
    // });
  }
  checkEquality();
});

// const getNutritionData = (fruits) => {
//   fruits.forEach((fruit) => {
//     // Extract fruit carbohydrates value
//     let carbs = `${fruit.nutritions.carbohydrates}`;
//     // Extract fruit proteins value
//     let proteins = `${fruit.nutritions.protein}`;
//     // Extract fruit fats value
//     let fats = `${fruit.nutritions.fat}`;
//     // Extract fruit calories value
//     let calories = `${fruit.nutritions.calories}`;
//     // Extract fruit sugars value
//     let sugars = `${fruit.nutritions.sugar}`;
//     // Extract fruit's name from json file
//     let fruitName = `${fruit.name}`;
//     console.log(fruitName);
//   });
// };
