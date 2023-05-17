const button = document.querySelector("button");
const list = document.querySelector("ul");
const input = document.querySelector("input");

button.addEventListener("click", function () {
  if (input.value !== "") {
    const userScripture = input.value;
    input.value = "";

    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const listBtn = document.createElement("button");

    listItem.appendChild(listText);
    listItem.appendChild(listBtn);

    listText.textContent = userScripture;
    listBtn.textContent = "❌";
    list.appendChild(listItem);

    listBtn.addEventListener("click", function () {
      list.removeChild(listItem);
    });

    input.focus();
  } else {
    alert("Please enter Scripture name and chapter!");
  }
});
