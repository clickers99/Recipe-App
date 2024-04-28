const recipeContainer = document.getElementById("recipe");
const query = location.search;
const params = new URLSearchParams(query);
const id = params.get("id");

homeBtn.href = "/index.html";

const API_ENDPOINT = `https://v1.appbackend.io/v1/rows/bZkxv7cdtB5B/${id}`;

const coverInput = document.getElementById("cover");
const nameInput = document.getElementById("name");
const ingredientsInput = document.getElementById("ingredients");
const categoryInput = document.getElementById("category");
const stepsInput = document.getElementById("steps");
const descriptionInput = document.getElementById("description");
const form = document.getElementById("form");

form.addEventListener("submit", async event => {
  event.preventDefault();

  await fetch("https://v1.appbackend.io/v1/rows/o86Ixoi40TXu", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      _id: id,
      cover: coverInput.value,
      name: nameInput.value,
      ingredients: ingredientsInput.value,
      category: categoryInput.value,
      steps: stepsInput.value,
      description: descriptionInput.value,
    }),
  });

  location.replace(`/recipe.html?id=${id}`);
});

async function getRecipe() {
  const res = await fetch(API_ENDPOINT);
  const data = await res.json();
  return data;
}

async function buildApp() {
  const recipe = await getRecipe();

  coverInput.value = recipe.cover;
  nameInput.value = recipe.name;
  ingredientsInput.value = recipe.ingredients;
  categoryInput.value = recipe.category;
  stepsInput.value = recipe.steps;
  descriptionInput.value = recipe.description;
}

buildApp();
