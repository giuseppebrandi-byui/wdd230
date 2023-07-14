// Make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Last Modification Footer Section
let date = new Date();
let year = date.getFullYear();
let currentYear = document.querySelector("#current-year");
currentYear.textContent = year;
let lastModif = date[document.lastModified];

// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
options = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
};

document.getElementById("last-modified").textContent = new Intl.DateTimeFormat(
  "en-GB",
  options
).format(lastModif);

if (document.querySelector("#date-time")) {
  document.querySelector("#date-time").value = new Intl.DateTimeFormat(
    "en-GB",
    options
  ).format(lastModif);
}

// Initialize display element variable
const numDrinksDisplay = document.querySelector(".num-drinks-display");
console.log(numDrinksDisplay);
