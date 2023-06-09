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
