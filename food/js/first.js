let imageURLDIV = document.getElementById("imageURLDIV");
let overlayDivId = document.getElementById("overlayDivId");
let array = [];
let myRecipeRow = document.getElementById("myRecipeRow");
searchBtn.addEventListener("click", searchingInput);
function searchingInput() {
  API(searchInput.value);
}
API("pizza");
let value;
async function API(value) {
  let apiResponse = await fetch(
    `https://forkify-api.herokuapp.com/api/search?&q=${value}`
  );
  let allRecipes = await apiResponse.json();
  array = allRecipes.recipes;
  display(array);
}

function display(myArray) {
  kobaya = ``;
  for (let i = 0; i < myArray.length; i++) {
    kobaya += `  <div class="col-md-4">
        <img onclick="details('${myArray[i].recipe_id}')" class="w-100" height="200" src="${myArray[i].image_url}" alt="">
        <h5>${myArray[i].title}</h5>
        <p>${myArray[i].publisher}</p>
      </div>`;
  }
  document.getElementById("recipesRow").innerHTML = kobaya;
}
async function details(id) {
  let apiResponse = await fetch(
    `https://forkify-api.herokuapp.com/api/get?rId=${id}`
  );
  let jsonOfResponse = await apiResponse.json();
  displayIngridientsDiv(jsonOfResponse);
}
function displayIngridientsDiv(jsonOfResponse) {
  let everyLI = jsonOfResponse.recipe.ingredients;
  let cartoona = ` 
  <h2>${jsonOfResponse.recipe.title}</h2>
  <img src="${jsonOfResponse.recipe.image_url}"class="w-100 my-3" alt="">
  <h5>${jsonOfResponse.recipe.publisher}</h5>
  <ul>`;
  for (let x of everyLI) {
    cartoona += `<li>${x}</li>`;
  }

  cartoona += `</ul>
</div>`;
  imageURLDIV.innerHTML = cartoona;
}
