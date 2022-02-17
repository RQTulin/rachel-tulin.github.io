/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//const { snakeCase } = require("lodash");

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
// use dot notation to give the animal property name species
// use bracket notation to give animal a property  called 'name'
//use bracket notation to give animal a property called 'noises'
animal.species = "dog";
animal['name'] = "Ripley";
animal.noises= [];
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var noises = [];
noises[0] = 'aww'; // giving 'noises' first element
noises.push('woo'); // using push method to add another noise to the end of 'noises'
noises.unshift('ohh');//using unshift method to place another element to 'noises'
noises[noises.length] = 'ahh';// using .length to add another element to the end of 'noises'

console.log(noises.length);
console.log(noises.length -1); // using .length -1 to determine the last element in 'noises'
console.log(noises);





//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal.noises = noises; // using dot notation assigning 'noises' property on animal to the new noises array
animal.noises.push('waaw');// using push method to add another noise to the 'noises' property
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * // using bracket and dot notation
 * 2. What are the different ways of accessing elements on arrays?
 * // by referring index number on the item in square brackets.
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);// using push method to store animal on the animals array
console.log(animals);

var duck = {
  species: 'duck',
  name: 'Jerome',
  noises: ['quack', 'honk', 'sneeze', 'swoosh']
}

animals.push(duck); // using push method to store duck to animals array
console.log(animals);

var cat = {
  species: 'cat',
  name: 'Tony',
  noises: ['meoww', 'eoww']
}
animals.push(cat);// using push method to store cat to 'animals' array

var snake = {
  species: 'snake',
  name: 'Ana',
  noises: ['sisss', 'hisss']

}
animals.push(snake);// using push method to store snake to 'animals' array

console.log(animals); 
console.log(animals.length);



//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var friends = [];

function getRandom(arr){
// using math.random to determine the random index of 'animals' array
var random = Math.floor(Math.random() * arr.length);
return random ;

}
//using push method to add the random animal name to 'friends'
friends.push(animals[getRandom(animals)].name);

animals[0]['friends'] = friends;

console.log(animals);

console.log(friends);

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}