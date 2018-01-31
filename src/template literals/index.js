const petsData = [
  {
    name: "Purrsloud",
    species: "Cat",
    favFoods: ["wet food", "dry food", "<strong>any</strong> food"],
    birthYear: 2017,
    photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
  },
  {
    name: "Barksalot",
    species: "Dog",
    birthYear: 2008,
    photo: "https://learnwebcode.github.io/json-example/images/dog-1.jpg"
  },
  {
    name: "Meowsalot",
    species: "Cat",
    favFoods: ["tuna", "catnip", "celery"],
    birthYear: 2012,
    photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg"
  }
];

const age = birthYear => {
  let petAge = new Date().getFullYear() - birthYear;
  if (petAge == 1) {
    return "1 year old.";
  } else if (petAge == 0) {
    return "Baby.";
  } else return `${petAge} years old.`;
};

const foods = food => {
  return `<h4>Favourite Foods:</h4>
    <ul class="foods-list">
      ${food.map(foodItem => `<li>${foodItem}</li>`).join("")}
  </ul>
  `;
};

const petTemplate = item => ` <div class="animal">
                                  <img class="pet-photo" src="${item.photo}" />
                                  <h2 class="pet-name">${item.name}
                                     (<span class="species">${
                                       item.species
                                     }</span>)</h2>
                                  <p><strong>Age: </strong> ${age(
                                    item.birthYear
                                  )}</p>
                                  ${item.favFoods ? foods(item.favFoods) : ""}
                              </div>
                            `;

document.getElementById("app").innerHTML = `
<h1 class="app-title">Pets (${petsData.length} results)</h1>
    ${petsData.map(petTemplate).join("")}

<footer class="footer">These ${
  petsData.length
} pets were added recently. Check back to view more..</footer>
`;
