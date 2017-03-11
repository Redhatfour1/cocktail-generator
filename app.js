
'use strict'
// Object stored in an array.


var cocktailNames = ['Classic Martini', 'Manhattan', 'Margarita', 'Japanese Cocktail', 'Great Gatsby', 'Dark and Stormy', 'Campari Spritz', 'Adriatique', 'Mint Julep', 'Brandy Alexander'];

var cocktailRecipeBox = [];
console.log(cocktailRecipeBox);
// >>>>>>> 1ef420285a2014bfb0c4b01e1be6c90278e50298

// Constructor Function
function Cocktail(name, imagePath, ingredient1, ingredient2, ingredient3){
  this.name = name;
  this.imagePath = imagePath;
  cocktailRecipeBox.push(this);
}
(function() {

  for (var i in cocktailNames){
    var newCocktail = new Cocktail(cocktailNames[i], 'assets/' + cocktailNames[i] + '.jpg')
  };
})()


// 1.Classic Martini
cocktailRecipeBox[0].ingredient1 = 'Gin';
cocktailRecipeBox[0].ingredient2 = 'White Vermouth';
cocktailRecipeBox[0].ingredient3 = 'None';
cocktailRecipeBox[0].link = 'http://www.telegraph.co.uk/food-and-drink/cocktails/10-classic-mad-men-era-cocktails/whiskey-sour/';

// 2.Manhattan
 // 1ef420285a2014bfb0c4b01e1be6c90278e50298
cocktailRecipeBox[1].ingredient1 = 'Whiskey';
cocktailRecipeBox[1].ingredient2 = 'Red Vermouth';
cocktailRecipeBox[1].ingredient3 = 'Bitters';
cocktailRecipeBox[1].link = 'http://www.telegraph.co.uk/food-and-drink/cocktails/10-classic-mad-men-era-cocktails/manhattan/';


// 3.Margarita
cocktailRecipeBox[2].ingredient1 = 'White Tequila';
cocktailRecipeBox[2].ingredient2 = 'Cointreau';
cocktailRecipeBox[2].ingredient3 = 'Lime Juice';
cocktailRecipeBox[2].link = 'http://www.seriouseats.com/recipes/2015/04/classic-margarita-recipe-tequila-cocktail.html';

// 4.Japanese Cocktail
cocktailRecipeBox[3].ingredient1 = 'Cognac';
cocktailRecipeBox[3].ingredient2 = 'Orgeat';
cocktailRecipeBox[3].ingredient3 = 'Angostura Bitters';
cocktailRecipeBox[3].link = 'http://www.seriouseats.com/recipes/2011/11/japanese-cocktail-recipe.html';

// 5.Great Gatsby
cocktailRecipeBox[4].ingredient1 = 'Vodka';
cocktailRecipeBox[4].ingredient2 = 'Lillet Blanc';
cocktailRecipeBox[4].ingredient3 = 'Grapefruit Juice';
cocktailRecipeBox[4].link = 'http://www.seriouseats.com/recipes/2012/01/frank-stitts-great-gatsby-vodka-grapefruit-cocktail-recipe.html';

// 6.Dark and Stormy
cocktailRecipeBox[5].ingredient1 = 'Rum';
cocktailRecipeBox[5].ingredient2 = 'Ginger Beer';
cocktailRecipeBox[5].ingredient3 = 'Lime';
cocktailRecipeBox[5].link = 'http://www.seriouseats.com/recipes/2011/06/dark-and-stormy-cocktail-the-spotted-pig-recipe.html';

// 7.Campari Spritz
cocktailRecipeBox[6].ingredient1 = 'Sparkling Wine';
cocktailRecipeBox[6].ingredient2 = 'Campari';
cocktailRecipeBox[6].ingredient3 = 'Club Soda';
cocktailRecipeBox[6].link = 'http://www.seriouseats.com/recipes/2011/06/campari-spritz-recipe.html';

// 8.Adriatique
cocktailRecipeBox[7].ingredient1 = 'Amaro Montenegro';
cocktailRecipeBox[7].ingredient2 = 'Aperol';
cocktailRecipeBox[7].ingredient3 = 'Orange Juice';
cocktailRecipeBox[7].link = 'http://www.seriouseats.com/recipes/2012/01/jackson-cannons-adriatique-aperitif-aperol-orange-juice-amaro-cocktail-recipe.html';

// 9.Mint Julep
cocktailRecipeBox[8].ingredient1 = 'Bourbon';
cocktailRecipeBox[8].ingredient2 = 'Mint Leaves';
cocktailRecipeBox[8].ingredient3 = 'Sugar';
cocktailRecipeBox[8].link = 'http://www.telegraph.co.uk/food-and-drink/cocktails/10-classic-mad-men-era-cocktails/mint-julep/';

// 10.Brandy Alexander
cocktailRecipeBox[9].ingredient1 = 'Brandy';
cocktailRecipeBox[9].ingredient2 = 'Dark Créme De Liquer';
cocktailRecipeBox[9].ingredient3 = 'Single Cream';
cocktailRecipeBox[9].link = 'http://www.telegraph.co.uk/food-and-drink/cocktails/10-classic-mad-men-era-cocktails/brandy-alexander/';

// 11.Adult Hot Chocolate
cocktailRecipeBox[10].ingredient1 = 'Peppermint Snapps';
cocktailRecipeBox[10].ingredient2 = 'Hot Chocolate';
cocktailRecipeBox[10].ingredient3 = 'Whip Cream';
cocktailRecipeBox[10].link = 'http://www.drinksmixer.com/drinkn1m2540.html';

// 12.White Sangria
cocktailRecipeBox[11].ingredient1 = 'White Wine';
cocktailRecipeBox[11].ingredient2 = 'Calvados';
cocktailRecipeBox[11].ingredient3 = 'Fruit';
cocktailRecipeBox[11].link = 'http://www.foodnetwork.com/recipes/rachael-ray/white-sangria-recipe';

// 13.Raspberry Prosecco Bellini
cocktailRecipeBox[12].ingredient1 = 'Prosecco';
cocktailRecipeBox[12].ingredient2 = 'Raspberry liqueur';
cocktailRecipeBox[12].ingredient3 = 'Basil';
cocktailRecipeBox[12].link = 'http://www.liquidgolddrinks.com/cocktails/prosecco-cocktails/raspberry-prosecco-bellini/';

// 14.Almond Joy
cocktailRecipeBox[13].ingredient1 = 'Coconut Rum';
cocktailRecipeBox[13].ingredient2 = 'Amaretto';
cocktailRecipeBox[13].ingredient3 = 'Crème de cacao';
cocktailRecipeBox[13].link = 'http://allrecipes.com/recipe/234754/almond-joy-cocktail/';

// 15.Sparkling Suze
cocktailRecipeBox[14].ingredient1 = 'Suze';
cocktailRecipeBox[14].ingredient2 = 'St Germain\'s';
cocktailRecipeBox[14].ingredient3 = 'Cava';
cocktailRecipeBox[14].link = 'http://www.seriouseats.com/recipes/2014/08/suze-cava-st-germain-cocktail-aperitif-drink.html';

// 16.Man About Town 
cocktailRecipeBox[15].ingredient1 = 'Rye Whiskey';
cocktailRecipeBox[15].ingredient2 = 'Cynar';
cocktailRecipeBox[15].ingredient3 = 'Sweet Vermouth';
cocktailRecipeBox[15].link = 'http://www.seriouseats.com/recipes/2012/10/gramercy-tavern-man-about-town-cocktail-rye-boulevardier-cynar-recipe.html';

// 17.Bahia Breeze
cocktailRecipeBox[16].ingredient1 = 'Gold Tequila';
cocktailRecipeBox[16].ingredient2 = 'Pineapple Juice';
cocktailRecipeBox[16].ingredient3 = 'Cranberry';
cocktailRecipeBox[16].link = 'http://www.drinksmixer.com/drink7265.html';

// 18.The Spitfire
cocktailRecipeBox[17].ingredient1 = 'Mezcal';
cocktailRecipeBox[17].ingredient2 = 'Green Chartreuse';
cocktailRecipeBox[17].ingredient3 = 'Tabasco Sauce';
cocktailRecipeBox[17].link = 'http://www.barnonedrinks.com/drinks/t/the-spitfire-7751.html';

// 19.Angry Balls
cocktailRecipeBox[18].ingredient1 = 'Fireball Whiskey';
cocktailRecipeBox[18].ingredient2 = 'Hard Cider';
cocktailRecipeBox[18].ingredient3 = 'None';
cocktailRecipeBox[18].link = 'http://fireballwhisky.com/recipes/angry-balls/';

// 20.Chrysanthemum Cocktail
cocktailRecipeBox[19].ingredient1 = 'Bénédictine';
cocktailRecipeBox[19].ingredient2 = 'Absinthe';
cocktailRecipeBox[19].ingredient3 = 'Dry Vermouth';
cocktailRecipeBox[19].link = 'http://imbibemagazine.com/chrysanthemum-cocktail-recipe/';


var selectedIngredientsArray = [];

// ingredients that were selected get push into an array

function handleFormSubmit(event) {
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


console.log(Object.values(cocktailRecipeBox[1]));
//
// console.log(Object.values(cocktailRecipeBox[1]));
// Sad attempt at a logical operator


function selectDrinkRecipeRenderToDom() {
  handleFormSubmit();

  //this creates arrays based on objects
  var classicMartini = Object.values(cocktailRecipeBox[0]);
  var manhattan = Object.values(cocktailRecipeBox[1]);


  for (var i in selectedIngredientsArray){
    if(selectedIngredientsArray[0] === manhattan[2] && selectedIngredientsArray[1] === manhattan[3] && selectedIngredientsArray[2] === manhattan[4]) {
      console.log("manhattan");
    }

    else if (selectedIngredientsArray[0] === classicMartini[2] && selectedIngredientsArray[1] === classicMartini[3] && selectedIngredientsArray[2] === classicMartini[4]) {

      console.log("martini");

    }
    else{
      console.log("fail");
      console.log(selectedIngredientsArray[i]);
    }
  };

}







document.getElementById('submit').addEventListener('click', selectDrinkRecipeRenderToDom);
console.log(selectedIngredientsArray);
console.log(event);
// >>>>>>> 1ef420285a2014bfb0c4b01e1be6c90278e50298
