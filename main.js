const recipesContainer = document.getElementById("recipes");
const API_ENDPOINT = "https://v1.appbackend.io/v1/rows/bZkxv7cdtB5B/";
/* const searchInput = document.getElementById("searchInput"); */
const addRecipe = document.getElementById("addRecipe");

addRecipe.addEventListener("click", () => {
  document.location.href = "addRecipe.html";
});

/* let dataRecipes = [];

searchInput.addEventListener("keyup", () => {
  const searchValue = searchInput.value;
  recipesContainer.innerHTML = "";

  const filteredRecipes = dataRecipes.data.filter(recipe =>
    recipe.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  filteredRecipes.forEach(recipe => {
    const recipeContainer = document.createElement("div");
    const recipeImage = document.createElement("img");
    const recipeName = document.createElement("h2");
    const recipeDesc = document.createElement("p");
    const recipeBtn = document.createElement("a");
    const recipeDeleteBtn = document.createElement("button");

    recipeImage.src = recipe.cover;
    recipeImage.classList.add(
      "object-cover",
      "rounded-lg",
      "w-full",
      "h-[200px]"
    );
    recipeName.textContent = recipe.name;
    recipeName.classList.add("text-xl", "font-bold", "text-center");
    recipeDesc.textContent = recipe.description;
    recipeDesc.classList.add("text-center");
    recipeBtn.textContent = "Lihat Resep";
    recipeBtn.href = `/recipe.html?id=${recipe._id}`;
    recipeBtn.classList.add(
      "bg-blue-500",
      "text-white",
      "p-2",
      "rounded-lg",
      "block",
      "w-full",
      "text-center"
    );

    recipeDeleteBtn.textContent = "Hapus Resep";
    recipeDeleteBtn.classList.add(
      "bg-red-500",
      "text-white",
      "p-2",
      "rounded-lg",
      "block",
      "w-full",
      "text-center"
    );
    recipeDeleteBtn.addEventListener("click", async () => {
      await deleteRecipe(recipe._id);
    });

    recipeContainer.classList.add(
      "bg-slate-100",
      "p-6",
      "rounded-xl",
      "space-y-4"
    );
    recipeContainer.append(
      recipeImage,
      recipeName,
      recipeDesc,
      recipeBtn,
      recipeDeleteBtn
    );
    recipesContainer.append(recipeContainer);
  });
}); */

async function deleteRecipe(id) {
  await fetch(API_ENDPOINT, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([id]),
  });
  location.reload();
}

async function getRecipes() {
  const res = await fetch(API_ENDPOINT);
  const data = await res.json();
  return data;
}

async function buildApp() {
  const recipes = await getRecipes();
  dataRecipes = recipes;

  recipes.data.forEach(recipe => {
    const recipeContainer = document.createElement("div");
    const recipeImage = document.createElement("img");
    const recipeName = document.createElement("h2");
    const recipeDesc = document.createElement("p");
    const recipeBtn = document.createElement("a");
    const recipeDeleteBtn = document.createElement("button");

    recipeImage.src = recipe.cover;
    recipeImage.classList.add(
      "object-cover",
      "rounded-lg",
      "w-full",
      "h-[200px]"
    );
    recipeName.textContent = recipe.name;
    recipeName.classList.add("text-xl", "font-bold", "text-center");
    recipeDesc.textContent = recipe.description;
    recipeDesc.classList.add("text-center");
    recipeBtn.textContent = "Lihat Resep";
    recipeBtn.href = `/recipe.html?id=${recipe._id}`;
    recipeBtn.classList.add(
      "bg-blue-500",
      "text-white",
      "p-2",
      "rounded-lg",
      "block",
      "w-full",
      "text-center"
    );

    recipeDeleteBtn.textContent = "Hapus Resep";
    recipeDeleteBtn.classList.add(
      "bg-red-500",
      "text-white",
      "p-2",
      "rounded-lg",
      "block",
      "w-full",
      "text-center"
    );
    recipeDeleteBtn.addEventListener("click", async () => {
      await deleteRecipe(recipe._id);
    });

    recipeContainer.classList.add(
      "bg-slate-100",
      "p-6",
      "rounded-xl",
      "space-y-4"
    );
    recipeContainer.append(
      recipeImage,
      recipeName,
      recipeDesc,
      recipeBtn,
      recipeDeleteBtn
    );
    recipesContainer.append(recipeContainer);
  });
}

buildApp();
