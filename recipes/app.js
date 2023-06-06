const API_KEY = "2c777b31838b4b2ca07278e675b38525";

const recipeList = document.getElementById("recipe-list");

 

function displayRecipes(recipes) {

  recipeList.innerHTML = "";

  recipes.forEach(recipe => {

    const recipeItemEl = document.createElement("li");

    recipeItemEl.classList.add("recipe-item");

    recipeImageEl = document.createElement("img");

    recipeImageEl.src = recipe.image;

    recipeImageEl.alt = "recipe image";

    recipeTitle = document.createElement("h2");

    recipeTitle.innerText = recipe.title;

    recipeIngredients = document.createElement("p");

    recipeIngredients.innerHTML = `

            <strong>Ingredients:</strong> ${recipe.extendedIngredients

              .map(ingredient => ingredient.original)

              .join(", ")}

        `;

    recipeLink = document.createElement("a");

    recipeLink.href = recipe.sourceUrl;

    recipeLink.innerText = "View Recipe";

    recipeList.appendChild(recipeItemEl);

    recipeItemEl.appendChild(recipeImageEl);

    recipeItemEl.appendChild(recipeTitle);

    recipeItemEl.appendChild(recipeIngredients);

    recipeItemEl.appendChild(recipeLink);

  });

}

 

async function getRecipes() {

  const response = await fetch(

    `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`

  );

  const data = await response.json();

  return data.recipes;

}

 

async function init() {

  const recipes = await getRecipes();

  displayRecipes(recipes);

}

init();