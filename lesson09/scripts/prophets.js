const url =
  "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
  const cards = document.querySelector("div.cards");

  prophets.forEach((prophet) => {
    // Create elements to add to the div.cards element
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let daybirth = document.createElement("p");
    let birthplace = document.createElement("p");
    let death = document.createElement("p");
    let age = document.createElement("p");
    let portrait = document.createElement("img");

    // Estract prophet's date of birth and death
    let dob = `${prophet.birthdate}`;
    let dod = `${prophet.death}`;

    // Get year of prophet's birth and death
    let birthyear = dob.slice(-4);
    let deathyear = dod.slice(-4);

    // Compute prophet's age
    let prophetAge = Number(deathyear) - Number(birthyear);

    // Add class phophet-card to the section element
    card.classList.add("prophet-card");

    // Add class prophet-img to the image element
    portrait.classList.add("prophet-img");

    // Build the h2, Date of Birth, Place of Birth, Date of Death, and age content
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    daybirth.textContent = `Date of Birth: ${dob}`;
    birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;
    death.textContent = `Date of Death: ${dod}`;
    age.textContent = `Age: ${prophetAge}`;

    // Build the image portrait by setting all the relevant attribute
    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute(
      "alt",
      `Portrait of ${prophet.name} ${prophet.lastname}`
    );
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "340");
    portrait.setAttribute("height", "440");

    // Append the section(card) with the created elements
    cards.appendChild(card);
    card.appendChild(h2);
    card.appendChild(daybirth);
    card.appendChild(birthplace);

    // Get current year
    const d = new Date();
    let currentYear = d.getFullYear();

    // Compute current age for the living prophet
    let currentAge = Number(currentYear) - Number(birthyear);

    // Display the date of death and age for the deceased prophets
    if (death.textContent !== `Date of Death: null`) {
      card.appendChild(death);
      card.appendChild(age);
    } else {
      // Display the age of the living prophet
      age.textContent = `Age: ${currentAge}`;
      card.appendChild(age);
    }
    card.appendChild(portrait);
  });
};
