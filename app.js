
'use strict'
// Object stored in an array.
var cocktailNames = ['Classic Martini', 'Manhattan'];

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

// Classic Martini
cocktailRecipeBox[0].ingredient1 = 'Vermouth';
cocktailRecipeBox[0].ingredient2 = 'Gin';
cocktailRecipeBox[0].link = 'http://www.telegraph.co.uk/food-and-drink/cocktails/10-classic-mad-men-era-cocktails/whiskey-sour/';
// Manhattan

cocktailRecipeBox[1].ingredient1 = 'Whiskey';
cocktailRecipeBox[1].ingredient2 = 'Red Vermouth';
cocktailRecipeBox[1].ingredient3 = 'Bitters';
cocktailRecipeBox[1].link = 'http://www.telegraph.co.uk/food-and-drink/cocktails/10-classic-mad-men-era-cocktails/manhattan/';



function handleFormSubmit(event) {
  // event.preventDefault();
  var selectedIngredientsArray = [];

  var elem1 = document.getElementById("ing1");
  var selectedNode1 = elem1.options[elem1.selectedIndex].value;
  console.log(selectedNode1);
  selectedIngredientsArray.push(selectedNode1);

  var elem2 = document.getElementById("ing2");
  var selectedNode2 = elem2.options[elem2.selectedIndex].value;
  console.log(selectedNode2);
  selectedIngredientsArray.push(selectedNode2);

  var elem3 = document.getElementById("ing3");
  var selectedNode3 = elem3.options[elem3.selectedIndex].value;
  console.log(selectedNode3);
  selectedIngredientsArray.push(selectedNode3);

  console.log();
  return selectedIngredientsArray;

}

document.getElementById('submit').addEventListener('submit', handleFormSubmit);
console.log(event);
