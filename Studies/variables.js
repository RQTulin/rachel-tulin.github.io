/**
* VARIABLES:
*
* 0. Variables are containers for storing data. For any program that we create,
* we need a method to create and store values that we can use throughout the 
* application. Variables can contain just about anything, not just strings and
* numbers, anything can vary. In Javascript, a variable stores a data value that
* can be changed later on.
*
* 1. To create or declare a variable, we use the var, const or let keyword, and followed by the
* name of the variable that we chose. 
*
* 2. There are two other ways to declare a variable, by using constant and let.
*
* 3. Constants - are values can never change; they are block scoped, and not hoisted 
* to the top of their block scope.
*
* 4. Lets - containers for reassignable values; they are NOT hoisted to their code block.
* 
* 5. There are two phases of using variables: declaration and initialization. 
*/

// 1. Decleration //
// To use a variable, you have to create it first. Here we are creating one variable
// called myName. When you console log it, it will print undefined because it currently
// has no value.  
var myName;
console.log(myName); //prints => undefined

// 2. Initialization //
// Once we declared our variable, you can initialize it by assigning it to a value. You can
// do this by typing a variable name followed by an equals sign (=), followed by the value 
// you want to give it. Don't forget a semi colon at the end of the expression. 
myName = 'Mary';
console.log(myName); // prints => Mary

// 3. Re-assignment //
// After a variable has been initialized with a value, you can update a value by giving it a 
// different value.

myName = 'Maddy';
console.log(myName); // prints => Maddy

/** 
* 3. var, let, and const 
* 0. The var declerations are globally scoped or function/locally scoped. When a var variable is declared 
* outside the function, the scope is global. This means that variable that is declared with var 
* outside a function is available for use. var is function scoped when it is declared within the function.
* It is available and can be accessed within that function. var variables can be re-declared and updated as well.
*
* 1. The variable let is preferred for decleration. let is block scoped, and it is only available for us
* within that block. A block is a chunck of code bounded by {}, it lives in curly braces. Just like var variable
* let can be updated within its scope, but not re-declared.
*
* 2. The variable const is just like let variable, it can only be accessed within the block they were declared.
* cons cannot be updated or re-declared. The value of variable declared with const remains the same within its
* scope.
*
* 4. Hoisting
* 0. Hoisting allows you to use functions and variables before they are declared. In  JavaScript interpreter splits
* the declaration and assignment of functions and variables: it "hoists" your declarations to the top of their 
* containing scope before execution. 
*
* 1. Variable hoisting 
* Variable hoisting acts differently depending on how the variable is declared. Variable hoisting with var initializes
* its value to undefined. Variable hoisting with let and const are hoisted but not initialized with a default value.
* Accessing a let or const variable before it's declared will result in a 'ReferenceError:'.
* See examples below for var, let, const, and hoisting.
*/

//var example //
var city  = 'new orleans'; // city is globally scoped because it exists outside a function

function functionName() {

    var atlanta = 'atlanta';// atlanta is function scoped
}
console.log(atlanta); // => hello is not defined because of not being available outside the function

// let example //
let city = "new orleans";
let tourists = 10;

if (tourists > 9) {
    let atlanta = "atlanta georgia";
    console.log(atlanta); // "atlanta"
}
console.log(atlanta); // atlanta is not defined
//using atlanta outside its block returns an error, because let variables are block scoped

// const example //
const city = {
    parish: "Jefferson",
    tourists: 10
}
city = {
    state: "Louisiana",
    tourists: "ten"
} // error:  assignment to constant variable

// hoisting 
console.log(hello);
var hello = 'hello'; // => undefined
// this process called hoisting, it allows us to use hello before its declaration

// variable hoisting with var 
console.log(hello); // => undefined

var hello = 'hi';

console.log(hello); // => "hi"

// variable hoisting with let and const
console.log(hello); // => Uncaught ReferenceError: cannot access 'foo' before initialization

let hello = 'hi';  // => same result for variables declared with const
