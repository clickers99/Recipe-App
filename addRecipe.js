const API_ENDPOINT = `https://v1.appbackend.io/v1/rows/bZkxv7cdtB5B/`;
const recipeContainer = document.getElementById("recipe");
const form = document.getElementById("form");

form.addEventListener("submit", async event => {
  event.preventDefault();

  const formdata = new FormData(event.target);
  const cover = formdata.get("cover");
  const name = formdata.get("name");
  const ingredients = formdata.get("ingredients");
  const category = formdata.get("category");
  const steps = formdata.get("steps");
  const description = formdata.get("description");

  await createData(cover, name, ingredients, category, steps, description);
  location.replace(`/`);
});

async function createData(
  cover,
  name,
  ingredients,
  category,
  steps,
  description
) {
  await fetch(API_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([
      { cover, name, ingredients, category, steps, description },
    ]),
  });
}

async function getData() {
  const res = await fetch(API_ENDPOINT);
  const data = await res.json();
  return data;
}
