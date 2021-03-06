/**
 * OPERATORS
 * 
 * 0. An operator performs some operation on single or multiple operands (data value) and produces a result.
 */ 
  
/* 
 * 1. Assignment Operators - An assignment operator assigns a value to its left operand based on the value of
 * its right operand. Operand are the values that act on. Examples of assignment operators symbols are:
 =	Assigns right operand value to the left operand.
 +=	Sums up left and right operand values and assigns the result to the left operand.
 -=	Subtract right operand value from the left operand value and assigns the result to the left operand.
 *=	Multiply left and right operand values and assigns the result to the left operand.
 /=	Divide left operand value by right operand value and assign the result to the left operand.
 %=	Get the modulus of left operand divide by right operand and assign resulted modulus to the left operand.
 */
// = 
 var x = 5, y = 10;

x = y; //x => 10

// =+

var add = 5;
num1 += 1; //num1 => 6

// -=
 var nums = 5;
nums -= 1; //nums => 4

// *=
var a = 5;
a *= 5; //a => 25

// /=
var divide = 5;
divide /= 5; //divide => 1

// %=
var mod = 5;
mod %= 2; //mod => 1


/* 2. Arithmetic Operators - Arithmetic operators are used to perform mathematical operations between numeric operands.
 * Arithmetic operators are symbols like plus (+), minus (-), multiply (*),  divide (/), and modulus operator(%).
 */
// + plus
var a = 5, b = 10;

var c = a + b; // => resolves to 15

// - minus
5 + 5; // => resolves to 5

// * multiply
2 * 2;  //=> resolves to 4

// / divide
4 / 2; // => resolves to 2

// % modulus 
5 % 2; // => resolves to remainder 1

/* 3. Comparison Operators - compare two operands and return a boolean value true or false.
 // example of comparison operators symbols are :
==  compare 
===	compare the left value strictly equal to the right value
!==	the left value strictly not equal to the right value
>	returns boolean true if the left value is greater than the right value
<	returns boolean true if the left value is less than the right value
>=	returns boolean true if the left value is greater than or equals to the right value
<=	returns boolean true if the left value is less than or equals to the right value
 */ 
var a = 10, b = 5;
if (a === b){
 console.log(false);
} 
if (a == b){
    console.log(false);
}
if (a !== b){
    console.log(true);
}

/*
 * 4. Logical Operators - 
 && - AND operator, both conditions must return true
 || - OR operator,  either of the condition returns true
 !  - Bang/not operator , is the equivalent of adding not to the equation
 */
 var firstName = 'Rachel';
if (firstName === 'Rachel' && lastName !== 'Quintanilla') {
    console.log('true');
}

/* 
 * 5. Unary operators(!, typeOf, -) - A unary operation is an operation with only one value.
 */
 let age = 30;
 console.log(typeof age); // "string"
 

/* 
 * 6. Ternary Operator (a ? b : c) - is just like an if statement.  If the condition preceding
 * the question mark evaluates to true, the expression before the colon is executed and returned.
 */
let animalOflegs = 4;
 let animal = numberOfLegs > 2 ? "mammal" : "bird"   // "mammal"

 