
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

var Tracker = {
  userSelectedIngredientsArray: [],

  // ingredients that were selected get push into an array

  handleUserFormSubmit: function(event) {
    Tracker.userSelectedIngredientsArray = [];
    // user^
    console.log(Tracker.userSelectedIngredientsArray);

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



  getPossibleCocktails: function() {
    Tracker.handleUserFormSubmit();

    var cocktailOptionsRound1 = [], cocktailOptionsRound2 = [], cocktailOptionsRound3 = [];

    for(var i in cocktailRecipeBox){
      if(Tracker.userSelectedIngredientsArray[0] === cocktailRecipeBox[i].ingredient1){
        cocktailOptionsRound1.push(cocktailRecipeBox[i]);
      }
    }

    for(var i in cocktailOptionsRound1){
      if(Tracker.userSelectedIngredientsArray[1] === cocktailOptionsRound1[i].ingredient2){
        cocktailOptionsRound2.push(cocktailOptionsRound1[i]);
      }
    }

    for(var i in cocktailOptionsRound2){
      if(Tracker.userSelectedIngredientsArray[2] === cocktailOptionsRound2[i].ingredient3) {
        cocktailOptionsRound3.push(cocktailOptionsRound2[i]);
      }
    }
    console.log('2: ',cocktailOptionsRound2);
    console.log('3: ', cocktailOptionsRound3);
    return cocktailOptionsRound2;
  },

};

  // roundOne = [];
  // for (var i in cocktailRecipeBox) {
  //   if (userSelectedIngredientsArray[0] === cocktailArray[i][2] && userSelectedIngredientsArray[1] === cocktailArray[i][3]){
  //
  //     roundOne.push(cocktailArray[i]);
  //     drinkCard.remove();
  //
  //     var getRenderId = document.getElementById('render');
  //     var makeDiv = document.createElement('div');
  //     makeDiv.id = 'drinkCard';
  //     makeDiv.className ='drinkCard';
  //     var makeA = document.createElement('a');
  //     var makeImg = document.createElement('img');
  //     makeA.href = cocktailRecipeBox[i].link;
  //     makeA.id = 'drinkTitle';
  //     makeA.className = 'drinkTitle';
  //     makeA.target = '_blank';
  //     makeImg.src = cocktailRecipeBox[i].imagePath;
  //     makeA.textContent = cocktailRecipeBox[i].name;
  //     makeA.appendChild(makeImg);
  //     makeDiv.appendChild(makeA);
  //     getRenderId.appendChild(makeDiv);
  //     break;
  //   }
  //
  //   else{
  //
  //
  //     drinkCard.remove();
  //
  //     var getRenderId = document.getElementById('render');
  //     var makeDiv = document.createElement('div');
  //     makeDiv.id = 'drinkCard';
  //     makeDiv.className ='drinkCard';
  //     var makeP = document.createElement('p');
  //
  //     makeP.textContent = 'NO DRINK!';
  //     makeDiv.appendChild(makeP);
  //     getRenderId.appendChild(makeDiv);
  //
  //     console.log('fail: ' + i);
  //   };
  // };
// };


document.getElementById('submit').addEventListener('click', Tracker.getPossibleCocktails);
