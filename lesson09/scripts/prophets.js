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
    let portrait = document.createElement("img");

    // Add class phophet-card to the section element
    card.classList.add("prophet-card");

    // Add class prophet-img to the image element
    portrait.classList.add("prophet-img");

    // Build the h2, Date of Birth, Place of Birth, and Date of Death content
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    daybirth.textContent = `Date of Birth: ${prophet.birthdate}`;
    birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;
    death.textContent = `Date of Death: ${prophet.death}`;

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
    // Display date of death only for deceased prophets
    if (death.textContent !== `Date of Death: null`) {
      card.appendChild(death);
    }

    card.appendChild(portrait);
  });
};
