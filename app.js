
'use strict'
// Object stored in an array.
var cocktailNames = ['Classic Martini', 'Manhattan', 'Margarita', 'Japanese Cocktail', 'Great Gatsby', 'Dark and Stormy', 'Campari Spritz', 'Adriatique', 'Mint Julep', 'Brandy Alexander'];

var cocktailRecipeBox = [];

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
cocktailRecipeBox[0].ingredient2 = 'Vermouth';
cocktailRecipeBox[0].link = 'http://www.telegraph.co.uk/food-and-drink/cocktails/10-classic-mad-men-era-cocktails/whiskey-sour/';

// 2.Manhattan
cocktailRecipeBox[1].ingredient1 = 'Whiskey';
cocktailRecipeBox[1].ingredient2 = 'Red Vermouth';
cocktailRecipeBox[1].ingredient3 = 'Bitters';
cocktailRecipeBox[1].link = 'http://www.telegraph.co.uk/food-and-drink/cocktails/10-classic-mad-men-era-cocktails/manhattan/';

// 3.Margarita
cocktailRecipeBox[2].ingredient1 = 'Tequila';
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
cocktailRecipeBox[9].ingredient2 = 'Dark Cre`me De Liquer';
cocktailRecipeBox[9].ingredient3 = 'Single Cream';
cocktailRecipeBox[9].link = 'http://www.telegraph.co.uk/food-and-drink/cocktails/10-classic-mad-men-era-cocktails/brandy-alexander/';
