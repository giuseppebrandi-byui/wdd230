const dataJSON = "json/data.json";
const gridBtn = document.querySelector("#grid-btn");
const listBtn = document.querySelector("#list-btn");
const display = document.querySelector(".cards");

async function getCompaniesData() {
  const response = await fetch(dataJSON);
  const data = await response.json();
  displayCompanies(data.companies);
}

getCompaniesData();

const displayCompanies = (companies) => {
  const cards = document.querySelector("div.cards");

  companies.forEach((company) => {
    // Create elements to add to the div.cards element
    let card = document.createElement("section");
    let name = document.createElement("h2");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let weburl = document.createElement("p");
    let logo = document.createElement("img");
    let membership = document.createElement("p");

    // Build the h2,...........................
    name.textContent = `${company.name}`;
    address.textContent = `${company.address}`;
    phone.textContent = `${company.phone}`;
    weburl.textContent = `${company.url}`;
    membership.textContent = `${company.membership}`;

    // Build the image...........
    logo.setAttribute("src", company.logo);
    logo.setAttribute("alt", `${company.name}`);
    logo.setAttribute("loading", "lazy");

    // Add class "business-card" to the section element
    card.classList.add("business-card");
    // Add class "address" to the paragraph element for the company address
    address.classList.add("address");
    // Add class "phone" to the paragraph element for the company phone number
    phone.classList.add("phone");
    // Add class "weburl" to the paragraph element for the company domain name
    weburl.classList.add("weburl");
    // Add class "company-logo" to the company logos images
    logo.classList.add("company-logo");

    // Append the section(card) with the created elements
    cards.appendChild(card);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(weburl);
    card.appendChild(logo);
    card.appendChild(membership);
  });
};

gridBtn.addEventListener("click", () => {
  display.classList.add("grid");
  display.classList.add("grid-cols-2");
  display.classList.add("grid-cols-3");
  display.classList.remove("list");
});

listBtn.addEventListener("click", showList);

function showList() {
  display.classList.add("list");
  display.classList.remove("grid");
  display.classList.remove("grid-cols-2");
  display.classList.remove("grid-cols-3");
}
