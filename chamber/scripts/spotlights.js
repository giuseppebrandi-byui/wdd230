const dataJSON = "json/data.json";

async function getCompaniesData() {
  const response = await fetch(dataJSON);
  const data = await response.json();
  displayCompanies(data.companies);
}

getCompaniesData();

// The Fisher-Yates algorith Ref: https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

const displayCompanies = (companies) => {
  const cards = document.querySelector("section.inner-grid");

  companies = shuffleArray(companies);

  companies.forEach((company) => {
    // Create elements to add to the section.inner-grid element
    let box = document.createElement("div");
    let membership = document.createElement("h2");
    let logo = document.createElement("img");
    let slogan = document.createElement("p");
    let learnMore = document.createElement("a");

    // Populate the built elements with the business information
    membership.textContent = `${company.membership}`;
    slogan.textContent = `${company.slogan}`;
    learnMore.textContent = "Learn More";

    // Build the companies logo images and website link
    logo.setAttribute("src", company.logo);
    logo.setAttribute("alt", `${company.name}`);
    logo.setAttribute("loading", "lazy");
    learnMore.setAttribute("href", `${company.url}`);
    learnMore.setAttribute("target", "_blank");

    // Add class "box" the div element
    box.classList.add("box");
    // Add class "card-title" to the h2 element
    membership.classList.add("card-title");
    // Add class "spotlight-logo" to the img element
    logo.classList.add("spotlight-logo");
    // Add class "info-text" to the p element
    slogan.classList.add("info-text");
    // Add class "more-info" to the a element
    learnMore.classList.add("more-info");

    // Append the section(box) with the created elements
    if (`${company.membership}` === "Gold Membership") {
      cards.appendChild(box);
      box.appendChild(membership);
      box.appendChild(logo);
      box.appendChild(slogan);
      box.appendChild(learnMore);
    }
  });
};
