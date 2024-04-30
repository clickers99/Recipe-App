const recipesContainer = document.getElementById("recipes");
const API_ENDPOINT = "https://v1.appbackend.io/v1/rows/bZkxv7cdtB5B/";
/* const searchInput = document.getElementById("searchInput"); */
const addRecipe = document.getElementById("addRecipe");
addRecipe.href = "addRecipe.html";

addRecipe.addEventListener("click", () => {
  document.location.href = "addRecipe.html";
});

async function getRecipes() {
  const res = await fetch(API_ENDPOINT);
  const data = await res.json();
  return data;
}

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

async function buildApp() {
  const recipes = await getRecipes();
  /* dataRecipes = recipes; */

  recipes.data.forEach(recipe => {
    const recipeContainer = document.createElement("div");
    const recipeImage = document.createElement("img");
    const recipeName = document.createElement("h2");
    const recipeCategory = document.createElement("p");
    const recipeDesc = document.createElement("p");
    const recipeLook = document.createElement("a");
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
    recipeCategory.textContent = recipe.category;
    recipeCategory.classList.add(
      "text-center",
      "text-sm",
      "font-semibold",
      "rounded-lg",
      "p-2",
      "max-w-max",
      "bg-gray-600",
      "text-white",
      "m-auto"
    );
    recipeDesc.textContent = recipe.description;
    recipeDesc.classList.add("text-center");
    recipeLook.textContent = "Lihat Resep";
    recipeLook.href = `/recipe.html?id=${recipe._id}`;
    recipeLook.classList.add(
      "bg-blue-500",
      "text-white",
      "p-2",
      "rounded-lg",
      "block",
      "w-full",
      "text-center",
      "hover:bg-blue-600",
      "transition-all"
    );

    recipeDeleteBtn.textContent = "Hapus Resep";
    recipeDeleteBtn.classList.add(
      "bg-red-500",
      "text-white",
      "p-2",
      "rounded-lg",
      "block",
      "w-full",
      "text-center",
      "hover:bg-red-600",
      "transition-all"
    );
    recipeContainer.classList.add(
      "bg-slate-100",
      "p-6",
      "rounded-xl",
      "space-y-4"
    );
    recipeDeleteBtn.addEventListener("click", async () => {
      deleteRecipe(recipe._id);
    });
    recipeContainer.append(
      recipeImage,
      recipeName,
      recipeCategory,
      recipeDesc,
      recipeLook,
      recipeDeleteBtn
    );
    recipesContainer.append(recipeContainer);
  });
}

buildApp();
