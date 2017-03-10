'use strict'
//Object stored in an array.
var cocktailNames = ['classic-martini', 'manhattan'];

var cocktailIngredients = [''];
var cocktail = [];

// Constructor Function
function CocktailConstructor(name, imagePath, ingredients, recipe){
  this.name = name;
  this.imagePath = 'assets/' + name + '.jpg';
  this.ingredients = ingredients;
  this.recipe = recipe;
  cocktail.push(this);

}
