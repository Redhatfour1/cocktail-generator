
'use strict'
// Object stored in an array.
var cocktailNames = ['Classic Martini', 'Manhattan'];

var cocktailRecipeBox = [];
console.log(cocktailRecipeBox);

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

// Classic Martini
cocktailRecipeBox[0].ingredient1 = 'Gin';
cocktailRecipeBox[0].ingredient2 = 'Vermouth';
cocktailRecipeBox[0].ingredient3 = 'None';
cocktailRecipeBox[0].link = 'http://www.telegraph.co.uk/food-and-drink/cocktails/10-classic-mad-men-era-cocktails/whiskey-sour/';

// Manhattan
cocktailRecipeBox[1].ingredient1 = 'Whiskey';
cocktailRecipeBox[1].ingredient2 = 'Red Vermouth';
cocktailRecipeBox[1].ingredient3 = 'Bitters';
cocktailRecipeBox[1].link = 'http://www.telegraph.co.uk/food-and-drink/cocktails/10-classic-mad-men-era-cocktails/manhattan/';

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


function crap() {
  handleFormSubmit();


  var manhattan = Object.values(cocktailRecipeBox[1]);

  console.log("USer: " + selectedIngredientsArray[0]);
  console.log("drinkobj: " + manhattan[2]);


  if(selectedIngredientsArray[0] === manhattan[2]){
    console.log("drunk");
  }
  else{
    console.log("poop");
  }
};







document.getElementById('submit').addEventListener('click', crap);
console.log(selectedIngredientsArray);
console.log(event);
