
'use strict'

//Cocktail Object stored in an array.
var cocktailNames = ['Classic Martini', 'Manhattan', 'Margarita', 'Japanese Cocktail', 'Great Gatsby', 'Dark & Stormy', 'Campari Spritz', 'Adriatique', 'Mint Julep', 'Brandy Alexander', 'Adult Hot Chocolate', 'White Sangria', 'Cuba Libre', 'Raspberry Prosecco Bellini', 'Rum & Coke', 'Almond Joy Cocktail', 'Sparkling Suze', 'Man About Town', 'Bahia Breeze', 'The Spitfire', 'Angry Balls', 'Chrysanthemum Cocktail', 'The Obituary', 'The Old Fashioned', 'Frisco Sour Recipe', 'Boulevardier', 'Gold Rush', 'Grapefruit & Ginger Sparkler', 'Blushing Betty', 'Daiquiri'];

//Ingredients have to be in same order as drink
var ingredient1Array = ['Gin', 'Whiskey', 'White Tequila', 'Cognac', 'Vodka', 'Rum', 'Sparkling Wine', 'Amaro Montenegro', 'Bourbon', 'Brandy', 'Peppermint Snapps', 'White Wine', 'Rum', 'Prosecco','Rum', 'Coconut Rum', 'Suze', 'Rye Whiskey', 'Gold Tequila', 'Mezcal', 'Fireball Whiskey', 'Bénédictine', 'Gin', 'Rye Whiskey', 'Rye Whiskey', 'Bourbon', 'Bourbon', 'Ginger Liqueur', 'Bourbon', 'Light Rum'];

var ingredient2Array = ['White Vermouth', 'Red Vermouth', 'Cointreau', 'Orgeat', 'Lillet Blanc', 'Ginger Beer', 'Campari', 'Aperol', 'Mint Leaves', 'Dark Créme De Liquer', 'Hot Chocolate', 'Calvados', 'Coke', 'Raspberry liqueur', 'Coke', 'Amaretto', 'St Germain\'s', 'Cynar', 'Pineapple Juice', 'Green Chartreuse', 'Hard Cider', 'Absinthe', 'Dry Vermouth', 'Angostura', 'Benedictine', 'Campari', 'Lemon Juice', 'Prosecco', 'Simple Syrup', 'Lime Juice'];

var ingredient3Array = ['None', 'Bitters', 'Lime Juice', 'Angostura Bitters', 'Grapefruit Juice', 'Lime', 'Club Soda', 'Orange Juice', 'Sugar', 'Single Cream', 'Whip Cream', 'Fruit', 'Lime', 'Basil', 'None', 'Crème de Cacao', 'Cava', 'Sweet Vermouth', 'Cranberry', 'Tabasco Sauce', 'None', 'Dry Vermouth', 'Absinthe', 'Sugar', 'Lemon Juice', 'Sweet Vermouth', 'Honey', 'Grapefruit Juice', 'Pink Grapefruit', 'Sugar'];

var linkArray = ['http://www.telegraph.co.uk/food-and-drink/cocktails/10-classic-mad-men-era-cocktails/martini/', 'http://www.telegraph.co.uk/food-and-drink/cocktails/10-classic-mad-men-era-cocktails/manhattan/', 'http://www.seriouseats.com/recipes/2015/04/classic-margarita-recipe-tequila-cocktail.html', 'http://www.seriouseats.com/recipes/2011/11/japanese-cocktail-recipe.html', 'http://www.seriouseats.com/recipes/2012/01/frank-stitts-great-gatsby-vodka-grapefruit-cocktail-recipe.html', 'http://www.seriouseats.com/recipes/2011/06/dark-and-stormy-cocktail-the-spotted-pig-recipe.html', 'http://www.seriouseats.com/recipes/2011/06/campari-spritz-recipe.html', 'http://www.seriouseats.com/recipes/2012/01/jackson-cannons-adriatique-aperitif-aperol-orange-juice-amaro-cocktail-recipe.html','http://www.telegraph.co.uk/food-and-drink/cocktails/10-classic-mad-men-era-cocktails/mint-julep/', 'http://www.telegraph.co.uk/food-and-drink/cocktails/10-classic-mad-men-era-cocktails/brandy-alexander/', 'http://www.drinksmixer.com/drinkn1m2540.html',
,'http://www.foodnetwork.com/recipes/rachael-ray/white-sangria-recipe', 'http://www.seriouseats.com/recipes/2012/01/cuba-libre-rum-coke-cocktail-recipe.html',  'http://www.liquidgolddrinks.com/cocktails/prosecco-cocktails/raspberry-prosecco-bellini/',
'https://www.thespruce.com/rum-and-coke-recipe-760560',
'http://allrecipes.com/recipe/234754/almond-joy-cocktail/',
'http://www.seriouseats.com/recipes/2014/08/suze-cava-st-germain-cocktail-aperitif-drink.html',
'http://www.seriouseats.com/recipes/2012/10/gramercy-tavern-man-about-town-cocktail-rye-boulevardier-cynar-recipe.html',
'http://www.drinksmixer.com/drink7265.html',
'http://www.barnonedrinks.com/drinks/t/the-spitfire-7751.html',
'http://fireballwhisky.com/recipes/angry-balls/',
'http://imbibemagazine.com/chrysanthemum-cocktail-recipe/',
'http://www.seriouseats.com/recipes/2011/02/the-obituary-cocktail-gin-absinthe-vermouth.html',
'http://www.seriouseats.com/recipes/2008/06/traditional-old-fashioned-recipe.html',
'http://www.seriouseats.com/recipes/2013/02/frisco-sour-simple-rye-cocktail-lemon-benedictine-recipe.html',
'http://www.seriouseats.com/recipes/2008/09/boulevardier-recipe.html',
'http://www.seriouseats.com/recipes/2015/03/gold-rush-bourbon-honey-cocktail-drink-recipe.html',
'http://www.seriouseats.com/recipes/2012/02/drinking-in-season-grapefruit-ginger-sparkling-wine-cocktail-recipe.html',
'http://www.seriouseats.com/recipes/2014/03/simple-cocktail-blushing-betty-bourbon-grapefruit-easy-drink-recipe.html',
'http://www.seriouseats.com/recipes/2008/05/daiquiri-recipe.html']

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
