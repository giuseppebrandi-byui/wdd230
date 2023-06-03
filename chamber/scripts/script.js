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

// Get all images with data-src attribute
let imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
  threshold: 1,
  rootMargin: "0px 0px 900px 0px",
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

//* Calculate Number of days between visits *//
// milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
const msToDays = 84600000;

// initialize display elements
const daysElapsedDisplay = document.querySelector(".days-elapsed");
const secondsElapsedDisplay = document.querySelector(".seconds-elapsed");

// ms today since 1 Jan 1970
const msToday = Date.now();

// Get the stored VALUE for the msLastVisit-ls KEY in localStorage if it exists. If the msLastVisit KEY is missing, then assign 0 to the msLastVisit variable.
let msLastVisit = Number(window.localStorage.getItem("msLastVisit-ls")) || 0;

// Time elapsed in ms between last visit and today
let msElapsed = msToday - msLastVisit;

msLastVisit = msToday;

// Compute number of days since last visit
const daysElapsed = Math.round(msElapsed / msToDays);
// Compute number of seconds since last visit
const secElapsed = Math.round(msElapsed / 1000);

// Determine if this is the first visit or display the number of days since the user last visited the site.
if (msLastVisit !== 0) {
  daysElapsedDisplay.textContent = daysElapsed;
  secondsElapsedDisplay.textContent = secElapsed;
} else {
  daysElapsedDisplay.textContent = `This is your first visit on our website. 🥳 Welcome!`;
  secondsElapsedDisplay.textContent = "n/a";
}

// Store the new msLastVisit into localStorage, key=msLastVisit-ls
localStorage.setItem("msLastVisit-ls", msLastVisit);
