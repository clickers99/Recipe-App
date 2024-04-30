const recipeContainer = document.getElementById("recipe");
const query = location.search;
const params = new URLSearchParams(query);
const id = params.get("id");
const editBtn = document.getElementById("editBtn");
const homeBtn = document.getElementById("homeBtn");

const API_ENDPOINT = `https://v1.appbackend.io/v1/rows/bZkxv7cdtB5B/${id}`;

editBtn.href = `/editRecipe.html?id=${id}`;
homeBtn.href = "/index.html";

async function getRecipes() {
  const res = await fetch(API_ENDPOINT);
  const data = await res.json();
  return data;
}

async function buildApp() {
  const recipe = await getRecipes();

  const recipeImage = document.createElement("img");
  const title = document.createElement("h2");
  const category = document.createElement("p");
  const ingredientsHeader = document.createElement("h2");
  const ingredients = document.createElement("p");
  const stepsHeader = document.createElement("h2");
  const steps = document.createElement("p");

  recipeImage.src = recipe.cover;
  recipeImage.classList.add(
    "object-cover",
    "rounded-lg",
    "w-full",
    "h-[200px]"
  );
  title.textContent = recipe.name;
  category.textContent = recipe.category;
  ingredients.textContent = recipe.ingredients;
  steps.textContent = recipe.steps;
  ingredientsHeader.textContent = "Ingredients";
  stepsHeader.textContent = "Cara Memasak";

  title.classList.add("text-4xl", "font-bold");
  category.classList.add(
    "text-xl",
    "font-semibold",
    "rounded-lg",
    "p-2",
    "max-w-max",
    "bg-gray-600",
    "text-white"
  );
  ingredients.classList.add("whitespace-pre-line");
  steps.classList.add("whitespace-pre-line");
  ingredientsHeader.classList.add("text-2xl", "font-bold");
  stepsHeader.classList.add("text-2xl", "font-bold");

  recipeContainer.append(
    recipeImage,
    title,
    category,
    ingredientsHeader,
    ingredients,
    stepsHeader,
    steps
  );
}

buildApp();
