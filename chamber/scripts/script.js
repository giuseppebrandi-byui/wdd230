// Last Modification Footer Section

let date = new Date();
let year = date.getFullYear();
let fulldateUK = new Intl.DateTimeFormat("en-UK", {
  dateStyle: "full",
}).format(date);

let currentYear = document.querySelector("#current-year");
currentYear.textContent = year;

let datefieldUK = document.querySelector(".date p");

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

datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

document.getElementById("last-modified").textContent = new Intl.DateTimeFormat(
  "en-GB",
  options
).format(lastModif);

// Make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Display banner depending if it is a Monday or Tuesday
let bannerEl = document.querySelector(".banner");
let today = date.getDay();
if (today === 1 || today === 2) {
  bannerEl.style.display = "block";
} else {
  bannerEl.style.display = "none";
}
