/**
* VARIABLES:
*
* 0. Variables are containers for storing data. For any program that we create,
* we need a method to create and store values that we can use throughout the 
* application. Variables can contain just about anything, not just strings and
* numbers, anything can vary. In Javascript, a variable stores a data value that
* can be changed later on.
*
* 1. To create or declare a variable, we use the var keyword, and followed by the
* name of the variable that we chose. 
*
* 2. There are two phases of using variables: declaration and initialization. 
*/

// 1. Decleration //
// To use a variable, you have to create it first. Here we are creating one variable
// called myName. When you console log it, it will print undefined because it currently
// has no value.  
var myName;
console.log(myName);// prints => undefined

// 2. Initialization //
// Once we declared our variable, you can initialize it by assigning it to a value. You can
// do this by typing a variable name followed by an equals sign (=), followed by the value 
// you want to give it. Don't forget a semi colon at the end of the expression. 
myName = 'Mary';
console.log(myName); // prints => Mary

// 3. Re-assignment
// After a variable has been initialized with a value, you can update a value by giving it a 
// different value.
myName = 'Maddy';
console.log(myName); // prints => Maddy

