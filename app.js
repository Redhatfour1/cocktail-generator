
'use strict'

//Cocktail Object stored in an array.
var cocktailNames = ['Classic Martini', 'Manhattan', 'Margarita', 'Japanese Cocktail', 'Great Gatsby', 'Dark & Stormy', 'Campari Spritz', 'Adriatique', 'Mint Julep', 'Brandy Alexander', 'Adult Hot Chocolate', 'White Sangria'];

//Ingredients have to be in same order as drink
var ingredient1Array = ['Gin', 'Whiskey', 'White Tequila', 'Cognac', 'Vodka', 'Rum', 'Sparkling Wine', 'Amaro Montenegro', 'Bourbon', 'Brandy', 'Peppermint Snapps', 'White Wine'];

var ingredient2Array = ['White Vermouth', 'Red Vermouth', 'Cointreau', 'Orgeat', 'Lillet Blanc', 'Ginger Beer', 'Campari', 'Aperol', 'Mint Leaves', 'Dark Créme De Liquer', 'Hot Chocolate', 'Calvados'];

var ingredient3Array = ['None', 'Bitters', 'Lime Juice', 'Angostura Bitters', 'Grapefruit Juice', 'Lime', 'Club Soda', 'Orange Juice', 'Sugar', 'Single Cream', 'Whip Cream', 'Fruit'];

var linkArray = ['http://www.telegraph.co.uk/food-and-drink/cocktails/10-classic-mad-men-era-cocktails/martini/', 'http://www.telegraph.co.uk/food-and-drink/cocktails/10-classic-mad-men-era-cocktails/manhattan/', 'http://www.seriouseats.com/recipes/2015/04/classic-margarita-recipe-tequila-cocktail.html', 'http://www.seriouseats.com/recipes/2011/11/japanese-cocktail-recipe.html', 'http://www.seriouseats.com/recipes/2012/01/frank-stitts-great-gatsby-vodka-grapefruit-cocktail-recipe.html', 'http://www.seriouseats.com/recipes/2011/06/dark-and-stormy-cocktail-the-spotted-pig-recipe.html', 'http://www.seriouseats.com/recipes/2011/06/campari-spritz-recipe.html', 'http://www.seriouseats.com/recipes/2012/01/jackson-cannons-adriatique-aperitif-aperol-orange-juice-amaro-cocktail-recipe.html','http://www.telegraph.co.uk/food-and-drink/cocktails/10-classic-mad-men-era-cocktails/mint-julep/', 'http://www.telegraph.co.uk/food-and-drink/cocktails/10-classic-mad-men-era-cocktails/brandy-alexander/', 'http://www.drinksmixer.com/drinkn1m2540.html', 'http://www.foodnetwork.com/recipes/rachael-ray/white-sangria-recipe']

var cocktailRecipeBox = [];
console.log(cocktailRecipeBox);


// Constructor Function
function Cocktail(name, imagePath, ingredient1, ingredient2, ingredient3, link){
  this.name = name;
  this.imagePath = imagePath;
  this.ingredient1 = ingredient1;
  this.ingredient2 = ingredient2;
  this.ingredient3 = ingredient3;
  this.link = link;
  cocktailRecipeBox.push(this);
}
(function() {

  for (var i in cocktailNames){
    var newCocktail = new Cocktail(cocktailNames[i], 'assets/' + cocktailNames[i] + '.jpg', ingredient1Array[i], ingredient2Array[i],
  ingredient3Array[i], linkArray[i])
  };
})()



// // 13.Raspberry Prosecco Bellini
// cocktailRecipeBox[12].ingredient1 = 'Prosecco';
// cocktailRecipeBox[12].ingredient2 = 'Raspberry liqueur';
// cocktailRecipeBox[12].ingredient3 = 'Basil';
// cocktailRecipeBox[12].link = 'http://www.liquidgolddrinks.com/cocktails/prosecco-cocktails/raspberry-prosecco-bellini/';
//
// // 14.Almond Joy
// cocktailRecipeBox[13].ingredient1 = 'Coconut Rum';
// cocktailRecipeBox[13].ingredient2 = 'Amaretto';
// cocktailRecipeBox[13].ingredient3 = 'Crème de cacao';
// cocktailRecipeBox[13].link = 'http://allrecipes.com/recipe/234754/almond-joy-cocktail/';
//
// // 15.Sparkling Suze
// cocktailRecipeBox[14].ingredient1 = 'Suze';
// cocktailRecipeBox[14].ingredient2 = 'St Germain\'s';
// cocktailRecipeBox[14].ingredient3 = 'Cava';
// cocktailRecipeBox[14].link = 'http://www.seriouseats.com/recipes/2014/08/suze-cava-st-germain-cocktail-aperitif-drink.html';
//
// // 16.Man About Town 
// cocktailRecipeBox[15].ingredient1 = 'Rye Whiskey';
// cocktailRecipeBox[15].ingredient2 = 'Cynar';
// cocktailRecipeBox[15].ingredient3 = 'Sweet Vermouth';
// cocktailRecipeBox[15].link = 'http://www.seriouseats.com/recipes/2012/10/gramercy-tavern-man-about-town-cocktail-rye-boulevardier-cynar-recipe.html';
//
// // 17.Bahia Breeze
// cocktailRecipeBox[16].ingredient1 = 'Gold Tequila';
// cocktailRecipeBox[16].ingredient2 = 'Pineapple Juice';
// cocktailRecipeBox[16].ingredient3 = 'Cranberry';
// cocktailRecipeBox[16].link = 'http://www.drinksmixer.com/drink7265.html';
//
// // 18.The Spitfire
// cocktailRecipeBox[17].ingredient1 = 'Mezcal';
// cocktailRecipeBox[17].ingredient2 = 'Green Chartreuse';
// cocktailRecipeBox[17].ingredient3 = 'Tabasco Sauce';
// cocktailRecipeBox[17].link = 'http://www.barnonedrinks.com/drinks/t/the-spitfire-7751.html';
//
// // 19.Angry Balls
// cocktailRecipeBox[18].ingredient1 = 'Fireball Whiskey';
// cocktailRecipeBox[18].ingredient2 = 'Hard Cider';
// cocktailRecipeBox[18].ingredient3 = 'None';
// cocktailRecipeBox[18].link = 'http://fireballwhisky.com/recipes/angry-balls/';
//
// // 20.Chrysanthemum Cocktail
// cocktailRecipeBox[19].ingredient1 = 'Bénédictine';
// cocktailRecipeBox[19].ingredient2 = 'Absinthe';
// cocktailRecipeBox[19].ingredient3 = 'Dry Vermouth';
// cocktailRecipeBox[19].link = 'http://imbibemagazine.com/chrysanthemum-cocktail-recipe/';





var selectedIngredientsArray = [];

// ingredients that were selected get push into an array

function handleUserFormSubmit(event) {
  selectedIngredientsArray = [];
  // user^
  console.log(selectedIngredientsArray);

  var getIngredientOne = document.getElementById("ing1");
  var selectedNode1 = getIngredientOne.options[getIngredientOne.selectedIndex].value;
  selectedIngredientsArray.push(selectedNode1);

  var elem2 = document.getElementById("ing2");
  var selectedNode2 = elem2.options[elem2.selectedIndex].value;
  selectedIngredientsArray.push(selectedNode2);

  var elem3 = document.getElementById("ing3");
  var selectedNode3 = elem3.options[elem3.selectedIndex].value;
  selectedIngredientsArray.push(selectedNode3);
  return selectedIngredientsArray;
}

//
console.log(Object.values(cocktailRecipeBox[1]));

// This dynamically Creates arrays inside of arrays for all drinks
var cocktailArray = [];

function makeCocktailArrays(){
  for (var i in cocktailNames) {
      cocktailArray[i] = Object.values(cocktailRecipeBox[i]);
  }
  return cocktailArray;
}
//
// console.log(Object.values(cocktailRecipeBox[1]));
// Sad attempt at a logical operator


function selectDrinkRecipeRenderToDom() {
  handleUserFormSubmit();

  //this creates arrays based on objects this is now being complteted dynamically.
  // var classicMartini = Object.values(cocktailRecipeBox[0]);
  // var manhattan = Object.values(cocktailRecipeBox[1]);
  // var margarita = Object.values(cocktailRecipeBox[2]);
  // var japaneseCocktail = Object.values(cocktailRecipeBox[3]);
  // var greatGatsby = Object.values(cocktailRecipeBox[4]);
  // var darkAndStormy = Object.values(cocktailRecipeBox[5]);
  // var campariSpritz = Object.values(cocktailRecipeBox[6]);
  // var adriatique = Object.values(cocktailRecipeBox[7]);
  // var mintJulep = Object.values(cocktailRecipeBox[8]);
  // var brandyAlexander = Object.values(cocktailRecipeBox[9]);
  // var adultHotChocolate = Object.values(cocktailRecipeBox[10]);
  // var whiteSangria = Object.values(cocktailRecipeBox[11]);



//   // for (var i in selectedIngredientsArray){
//   // div class drinkCard
//   // h1 class drinkTitle
//   //
//   if (selectedIngredientsArray[0] === classicMartini[2] && selectedIngredientsArray[1] === classicMartini[3] && selectedIngredientsArray[2] === classicMartini[4]) {
//     console.log("martini");
//     var getRenderId = document.getElementById('render');
//     var makeDiv = document.createElement('div');
//     var makeA = document.createElement('a');
//     makeA.href = cocktailRecipeBox[0].link;
//     makeA.target = blank;
//     makeA.textContent = cocktailRecipeBox[0].name;
//     makeDiv.appendChild(makeA);
//     getRenderId.appendChild(makeDiv);
//
//   }
//   else if(selectedIngredientsArray[0] === manhattan[2] && selectedIngredientsArray[1] === manhattan[3] && selectedIngredientsArray[2] === manhattan[4]) {
//     var getRenderId = document.getElementById('render');
//     var makeDiv = document.createElement('div');
//     var makeA = document.createElement('a');
//     makeA.href = cocktailRecipeBox[1].link;
//     makeA.textContent = cocktailRecipeBox[1].name;
//     makeDiv.appendChild(makeA);
//     getRenderId.appendChild(makeDiv);
//
//
//     console.log("manhattan");
//   }
//   else if (selectedIngredientsArray[0] === margarita[2] && selectedIngredientsArray[1] === margarita[3] && selectedIngredientsArray[2] === margarita[4]) {
//     var getRenderId = document.getElementById('render');
//     var makeDiv = document.createElement('div');
//     var makeA = document.createElement('a');
//     makeA.href = cocktailRecipeBox[2].link;
//     makeA.textContent = cocktailRecipeBox[2].name;
//     makeDiv.appendChild(makeA);
//     getRenderId.appendChild(makeDiv);
//     console.log("margarita");
//   }
//   else if (selectedIngredientsArray[0] === japaneseCocktail[2] && selectedIngredientsArray[1] === japaneseCocktail[3] && selectedIngredientsArray[2] === japaneseCocktail[4]) {
//     var getRenderId = document.getElementById('render');
//     var makeDiv = document.createElement('div');
//     var makeA = document.createElement('a');
//     makeA.href = cocktailRecipeBox[3].link;
//     makeA.textContent = cocktailRecipeBox[3].name;
//     makeDiv.appendChild(makeA);
//     getRenderId.appendChild(makeDiv);
//     console.log("japaneseCocktail");
//   }
//   else if (selectedIngredientsArray[0] === greatGatsby[2] && selectedIngredientsArray[1] === greatGatsby[3] && selectedIngredientsArray[2] === greatGatsby[4]) {
//     var getRenderId = document.getElementById('render');
//     var makeDiv = document.createElement('div');
//     var makeA = document.createElement('a');
//     makeA.href = cocktailRecipeBox[4].link;
//     makeA.textContent = cocktailRecipeBox[4].name;
//     makeDiv.appendChild(makeA);
//     getRenderId.appendChild(makeDiv);
//     console.log("greatGatsby");
//   }
//   // else if (selectedIngredientsArray[0] === darkAndStormy[2] && selectedIngredientsArray[1] === darkAndStormy[3] && selectedIngredientsArray[2] === darkAndStormy[4]) {
//   //   console.log("darkAndStormy");
//   // }
//   // else if (selectedIngredientsArray[0] === campariSpritz[2] && selectedIngredientsArray[1] === campariSpritz[3] && selectedIngredientsArray[2] === campariSpritz[4]) {
//   //   console.log("campariSpritz");
//   // }
//   // else if (selectedIngredientsArray[0] === adriatique[2] && selectedIngredientsArray[1] === adriatique[3] && selectedIngredientsArray[2] === adriatique[4]) {
//   //   console.log("adriatique");
//   // }
//   // else if (selectedIngredientsArray[0] === mintJulep[2] && selectedIngredientsArray[1] === mintJulep[3] && selectedIngredientsArray[2] === mintJulep[4]) {
//   //   console.log("mintJulep");
//   // }
//   // else if (selectedIngredientsArray[0] === brandyAlexander[2] && selectedIngredientsArray[1] === brandyAlexander[3] && selectedIngredientsArray[2] === brandyAlexander[4]) {
//   //   console.log("brandyAlexander");
//   // }
//   // else if (selectedIngredientsArray[0] === adultHotChocolate[2] && selectedIngredientsArray[1] === adultHotChocolate[3] && selectedIngredientsArray[2] === adultHotChocolate[4]) {
//   //   console.log("adultHotChocolate");
//   // }
//   // else if (selectedIngredientsArray[0] === whiteSangria[2] && selectedIngredientsArray[1] === whiteSangria[3] && selectedIngredientsArray[2] === whiteSangria[4]) {
//   //   console.log("whiteSangria");
//   // }
//
//   else{
//     console.log("fail");
//   };
// };
//
//
// document.getElementById('submit').addEventListener('click', selectDrinkRecipeRenderToDom);
