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

//-------- Progressive loading of an image ---------//

// Get all images with data-src attribute
let imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
  threshold: 1,
  rootMargin: "0px 0px 100px 0px",
};

const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

// First check to see if Intersection Observer is supported
if ("IntersectionObserver" in window) {
  const imgObserver = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  }, imgOptions);
  // Loop through each img and check status and load if necessary
  imagesToLoad.forEach((img) => {
    imgObserver.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}
