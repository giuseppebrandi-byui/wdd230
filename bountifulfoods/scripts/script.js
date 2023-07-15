// MAKE MOBILE NAVIGATION WORK
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// LAST MODIFIED DATE FOR FOOTER SECTION
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

// DISPLAY NUMBER OF DRINKS IN THE HOME PAGE
const numDrinksDisplay = document.querySelector(".num-drinks-display");
let numDrinks = Number(window.localStorage.getItem("numDrinks-ls")) || 0;

if (numDrinksDisplay !== null) {
  if (numDrinks !== 0) {
    numDrinksDisplay.innerHTML = `<p>According to our database, you have ordered <strong>${numDrinks}</strong> fruit mix from our website so far.</p>`;
  } else {
    numDrinksDisplay.innerHTML = `<p>According to our database, you have not made any orders so far.</p>`;
  }
}

// LAZY LOADING
const images = document.querySelectorAll("[data-src]");

function preloadImage(img) {
  const src = img.getAttribute("data-src");
  if (!src) {
    return;
  }
  img.src = src;
}

const imgOptions = {
  threshold: 0,
  rootMargin: "0px 0px 50px 0px",
};
const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      preloadImage(entry.target);
      imgObserver.unobserve(entry.target);
    }
  });
}, imgOptions);

images.forEach((image) => {
  imgObserver.observe(image);
});
