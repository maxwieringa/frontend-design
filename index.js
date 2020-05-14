const addButton = document.querySelector("#add_first_article");
const watchLaterNumber = document.querySelector("#little_number");

function toggleWatchList() {
  watchLaterNumber.classList.toggle("visible");
  addButton.innerHTML = "toegevoegd";
}

addButton.addEventListener("click", toggleWatchList);