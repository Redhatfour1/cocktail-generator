
'use strict'

//Cocktail Object stored in an array.
var cocktailNames = ['Classic Martini', 'Manhattan', 'Margarita', 'Japanese Cocktail', 'Great Gatsby', 'Dark & Stormy', 'Campari Spritz', 'Adriatique', 'Mint Julep', 'Brandy Alexander', 'Adult Hot Chocolate', 'White Sangria', 'Cuba Libre', 'Raspberry Prosecco Bellini', 'Rum & Coke'];

//Ingredients have to be in same order as drink
var ingredient1Array = ['Gin', 'Whiskey', 'White Tequila', 'Cognac', 'Vodka', 'Rum', 'Sparkling Wine', 'Amaro Montenegro', 'Bourbon', 'Brandy', 'Peppermint Snapps', 'White Wine', 'Rum', 'Prosecco','Rum'];

var ingredient2Array = ['White Vermouth', 'Red Vermouth', 'Cointreau', 'Orgeat', 'Lillet Blanc', 'Ginger Beer', 'Campari', 'Aperol', 'Mint Leaves', 'Dark Créme De Liquer', 'Hot Chocolate', 'Calvados', 'Coke', 'Raspberry liqueur', 'Coke'];

var ingredient3Array = ['None', 'Bitters', 'Lime Juice', 'Angostura Bitters', 'Grapefruit Juice', 'Lime', 'Club Soda', 'Orange Juice', 'Sugar', 'Single Cream', 'Whip Cream', 'Fruit', 'Lime', 'Basil', 'None'];

var linkArray = ['http://www.telegraph.co.uk/food-and-drink/cocktails/10-classic-mad-men-era-cocktails/martini/', 'http://www.telegraph.co.uk/food-and-drink/cocktails/10-classic-mad-men-era-cocktails/manhattan/', 'http://www.seriouseats.com/recipes/2015/04/classic-margarita-recipe-tequila-cocktail.html', 'http://www.seriouseats.com/recipes/2011/11/japanese-cocktail-recipe.html', 'http://www.seriouseats.com/recipes/2012/01/frank-stitts-great-gatsby-vodka-grapefruit-cocktail-recipe.html', 'http://www.seriouseats.com/recipes/2011/06/dark-and-stormy-cocktail-the-spotted-pig-recipe.html', 'http://www.seriouseats.com/recipes/2011/06/campari-spritz-recipe.html', 'http://www.seriouseats.com/recipes/2012/01/jackson-cannons-adriatique-aperitif-aperol-orange-juice-amaro-cocktail-recipe.html','http://www.telegraph.co.uk/food-and-drink/cocktails/10-classic-mad-men-era-cocktails/mint-julep/', 'http://www.telegraph.co.uk/food-and-drink/cocktails/10-classic-mad-men-era-cocktails/brandy-alexander/', 'http://www.drinksmixer.com/drinkn1m2540.html'
,'http://www.foodnetwork.com/recipes/rachael-ray/white-sangria-recipe', 'http://www.seriouseats.com/recipes/2012/01/cuba-libre-rum-coke-cocktail-recipe.html',  'http://www.liquidgolddrinks.com/cocktails/prosecco-cocktails/raspberry-prosecco-bellini/']

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
    var newCocktail = new Cocktail(cocktailNames[i], 'assets/' + cocktailNames[i] + '.jpeg', ingredient1Array[i], ingredient2Array[i],
    ingredient3Array[i], linkArray[i])
  };
})()




//
// // 14.
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





var userSelectedIngredientsArray = [];

// ingredients that were selected get push into an array

function handleUserFormSubmit(event) {
  userSelectedIngredientsArray = [];
  // user^
  console.log(userSelectedIngredientsArray);

  var getIngredientOne = document.getElementById('ing1');
  var selectedNode1 = getIngredientOne.options[getIngredientOne.selectedIndex].value;
  userSelectedIngredientsArray.push(selectedNode1);

  var elem2 = document.getElementById('ing2');
  var selectedNode2 = elem2.options[elem2.selectedIndex].value;
  userSelectedIngredientsArray.push(selectedNode2);

  var elem3 = document.getElementById('ing3');
  var selectedNode3 = elem3.options[elem3.selectedIndex].value;
  userSelectedIngredientsArray.push(selectedNode3);
  return userSelectedIngredientsArray;
}

console.log(Object.values(cocktailRecipeBox[1]));

// This dynamically Creates arrays inside of arrays for all drinks
var cocktailArray = [];
function makeCocktailArrays(){
  for (var i in cocktailNames) {
    cocktailArray[i] = Object.values(cocktailRecipeBox[i]);
  }
  return cocktailArray;
}

console.log('makeCocktailArrays: ',  makeCocktailArrays());

var roundOne = [];
function selectDrinkRecipeRenderToDom() {
  handleUserFormSubmit();
  makeCocktailArrays();

  //this creates arrays based on objects this is now being complteted dynamically.
 //  getPossibleOptions: function() {
 //
 //    var optionsRound1 = [], optionsRound2 = [], optionsRound3 = [];
 //
 //   for(var i=0; i<beers.length; i++){
 //     if(this.userHoppy === beers[i].hoppy){
 //       optionsRound1.push(beers[i]);
 //     }
 //   }
 //
 //   for(var i=0; i<optionsRound1.length; i++){
 //     if(this.userType === optionsRound1[i].type){
 //       optionsRound2.push(optionsRound1[i]);
 //     }
 //   }
 //
 //   for(var i=0; i<optionsRound2.length; i++){
 //     if(this.userFlavor === optionsRound2[i].flavor) {
 //       optionsRound3.push(optionsRound2[i]);
 //     }
 //   }
 //   return optionsRound3;
 // },
  roundOne = [];
  for (var i in cocktailRecipeBox) {
    if (userSelectedIngredientsArray[0] === cocktailArray[i][2] && userSelectedIngredientsArray[1] === cocktailArray[i][3]){

      roundOne.push(cocktailArray[i]);
      drinkCard.remove();

      var getRenderId = document.getElementById('render');
      var makeDiv = document.createElement('div');
      makeDiv.id = 'drinkCard';
      makeDiv.className ='drinkCard';
      var makeA = document.createElement('a');
      var makeImg = document.createElement('img');
      makeA.href = cocktailRecipeBox[i].link;
      makeA.id = 'drinkTitle';
      makeA.className = 'drinkTitle';
      makeA.target = '_blank';
      makeImg.src = cocktailRecipeBox[i].imagePath;
      makeA.textContent = cocktailRecipeBox[i].name;
      makeA.appendChild(makeImg);
      makeDiv.appendChild(makeA);
      getRenderId.appendChild(makeDiv);
      break;
    }

    else{


      drinkCard.remove();

      var getRenderId = document.getElementById('render');
      var makeDiv = document.createElement('div');
      makeDiv.id = 'drinkCard';
      makeDiv.className ='drinkCard';
      var makeP = document.createElement('p');

      makeP.textContent = 'NO DRINK!';
      makeDiv.appendChild(makeP);
      getRenderId.appendChild(makeDiv);

      console.log('fail: ' + i);
    };
  };
};


document.getElementById('submit').addEventListener('click', selectDrinkRecipeRenderToDom);
