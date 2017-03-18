
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


// Constructor Function to create Cocktail objects
function Cocktail(name, imagePath, ingredient1, ingredient2, ingredient3, link){
  this.name = name;
  this.imagePath = imagePath;
  this.ingredient1 = ingredient1;
  this.ingredient2 = ingredient2;
  this.ingredient3 = ingredient3;
  this.link = link;
  cocktailRecipeBox.push(this);
}
// This IFFE Creates the cocktail objects on load
(function() {

  for (var i in cocktailNames){
    var newCocktail = new Cocktail(cocktailNames[i], 'assets/assetspng/' + cocktailNames[i] + '.png', ingredient1Array[i], ingredient2Array[i],
    ingredient3Array[i], linkArray[i])
  };
})()

var Tracker = {
  userSelectedIngredientsArray: [],
  cocktailOptionsRound1: [],
  cocktailOptionsRound2: [],
  cocktailOptionsRound3: [],


  // ingredients that were selected get push into an array

  handleUserFormSubmit: function(event) {
    Tracker.userSelectedIngredientsArray = [];
    // user^
    var getIngredientOne = document.getElementById('ing1');
    var selectedNode1 = getIngredientOne.options[getIngredientOne.selectedIndex].value;
    Tracker.userSelectedIngredientsArray.push(selectedNode1);

    var elem2 = document.getElementById('ing2');
    var selectedNode2 = elem2.options[elem2.selectedIndex].value;
    Tracker.userSelectedIngredientsArray.push(selectedNode2);

    var elem3 = document.getElementById('ing3');
    var selectedNode3 = elem3.options[elem3.selectedIndex].value;
    Tracker.userSelectedIngredientsArray.push(selectedNode3);
    return Tracker.userSelectedIngredientsArray;
  },




  // this verifies what the user has selected against the cocktail objects in the cocktailRecipeBox array.
  getPossibleCocktails: function() {
    Tracker.handleUserFormSubmit();

    Tracker.cocktailOptionsRound1 = [];
    Tracker.cocktailOptionsRound2 = [];
    Tracker.cocktailOptionsRound3 = [];

    for(var i in cocktailRecipeBox){
      if(Tracker.userSelectedIngredientsArray[0] === cocktailRecipeBox[i].ingredient1){
        Tracker.cocktailOptionsRound1.push(cocktailRecipeBox[i]);
      }
    }

    for(var i in Tracker.cocktailOptionsRound1){
      if(Tracker.userSelectedIngredientsArray[1] === Tracker.cocktailOptionsRound1[i].ingredient2){
        Tracker.cocktailOptionsRound2.push(Tracker.cocktailOptionsRound1[i]);
      }
    }

    for(var i in Tracker.cocktailOptionsRound2){
      if(Tracker.userSelectedIngredientsArray[2] === Tracker.cocktailOptionsRound2[i].ingredient3) {
        Tracker.cocktailOptionsRound3.push(Tracker.cocktailOptionsRound2[i]);
      }
    }
  },

  renderCocktailOptions: function(){
    Tracker.getPossibleCocktails();
    console.log(Tracker.cocktailOptionsRound2);

    var elem3 = document.getElementById('ing3');
    var selectedNode3 = elem3.options[elem3.selectedIndex].value;

    // This creates and presents the drink in the dom
    if (selectedNode3 === 'None') {
      for (var i in Tracker.cocktailOptionsRound3) {
        var getRenderId = document.getElementById('render');
        var makeDiv = document.createElement('div');
        makeDiv.id = 'drinkCard';
        makeDiv.className ='drinkCard';
        var makeA = document.createElement('a');
        var makeImg = document.createElement('img');
        makeA.href = Tracker.cocktailOptionsRound3[i].link;
        makeA.id = 'drinkTitle';
        makeA.className = 'drinkTitle';
        makeA.target = '_blank';
        makeImg.src = Tracker.cocktailOptionsRound3[i].imagePath;
        makeImg.className = 'cocktailImg';
        makeA.textContent = Tracker.cocktailOptionsRound3[i].name;
        makeA.appendChild(makeImg);
        makeDiv.appendChild(makeA);
        getRenderId.appendChild(makeDiv);
      }
    }
    else if (Tracker.cocktailOptionsRound2[0] != null) {
      console.log('second');
      for (var i in Tracker.cocktailOptionsRound2) {
        var getRenderId = document.getElementById('render');
        var makeDiv = document.createElement('div');
        makeDiv.id = 'drinkCard';
        makeDiv.className ='drinkCard';
        var makeA = document.createElement('a');
        var makeImg = document.createElement('img');
        makeA.href = Tracker.cocktailOptionsRound2[i].link;
        makeA.id = 'drinkTitle';
        makeA.className = 'drinkTitle';
        makeA.target = '_blank';
        makeImg.src = Tracker.cocktailOptionsRound2[i].imagePath;
        makeImg.className = 'cocktailImg';
        makeA.textContent = Tracker.cocktailOptionsRound2[i].name;
        makeA.appendChild(makeImg);
        makeDiv.appendChild(makeA);
        getRenderId.appendChild(makeDiv);
      }
    }
    else {
      console.log('fail');
    }
  },

  // this method removes the last presented drink option to make room for the new ones
  removeDrinkCard: function(){
    var remove = document.getElementById("render");
    while (remove.firstChild) {
      remove.removeChild(remove.firstChild);
    }
  },
  //method to change images when different ingredients are selected
  changeIngredientImageIng1: function(){
    var getIngredientOneImageName = document.getElementById('ing1');
    console.log(getIngredientOneImageName);
    var getImagePath = 'url(assets/' + ing1.options[ing1.selectedIndex].value + '.png)';
    console.log(getImagePath);
    document.getElementById('imageSpot1').style.backgroundImage = getImagePath;
  },
  //method to make selecters go back to default
  ingredientsBackToDefault:function(){
    ing1.options[0].selected="selected";
    ing2.options[0].selected="selected";
    ing3.options[0].selected="selected";
  },

  //method to change ingredients back to cubes
  changeBackToCubes: function(){
    var getIngredientOneImageName = document.getElementById('ing1');
    console.log(getIngredientOneImageName);
    var getImagePath = 'url(assets/SqIceCube.png)';
    console.log('cubes: ', getImagePath);
    document.getElementById('imageSpot1').style.backgroundImage = getImagePath;
  },
};
// This is where the submit button is being tracked and starts the functionality.
ing1.addEventListener('change', Tracker.changeIngredientImageIng1, false);
document.getElementById('submit').addEventListener('click', Tracker.removeDrinkCard);
document.getElementById('submit').addEventListener('click', Tracker.renderCocktailOptions);
document.getElementById('submit').addEventListener('click', Tracker.changeBackToCubes);
document.getElementById('submit').addEventListener('click', Tracker.ingredientsBackToDefault);
