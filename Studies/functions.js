/**
 * FUNCTIONS
 * 
 * 0. A function allows us to encapsulate a block of code, and execute that block of code whenever we want. 
 * It's a set of statements that perform a task or calculate a value. 
 * 
 * 
 * 1. The first phase of function is to "create" the action, also known as function decleration or function 
 * definition. In this phase we want the action to be performed on multiple possible values, so we don't need
 * to put any concrete values. we only use placeholders or the "parameters" that act as stand-ins for the values.
 * 
 * 2. The second phase is we have to invoke our function by creating ang "function call". The function call/invocation
 * consist of two parts; the name of the function you would like to invoke, and "arguments" - the actual values you'd 
 * like to invoke the function on, enclosed in parenthesis (). 
 */

/*
 * 3. Function can be named, or assigned to variables or constant, or anonymous. Lets look at below how a named function
 * looks like. 
 */
 function multiply(x, y){ // function decleration, function name 'multiply'
     return x * y;
 }
const multi = multiply(2,2); //  multiply x and y (2 * 2) is a function call
console.log(multi); // prints 4

/* 
 * 4. The way we assign function to a variable is the same way we assign to any variable. In function, the
 * Function expression is formed when an anonymous Function is assigned to a variable or constant.
 */
const add = function(a, b){ 
    return a + b;
}
const sum = add(1, 2); 
console.log(sum); 

/*
 * 5. We specify inputs by what we put inside the function parenthesis, and outputs are specificied by return
 * statement or console logging. 
 */
 const plus = function (num1, num2){ // num1 and num2 are the inputs
     return num1 + num2; 
 }
 const add1 = plus(2, 3); // this is the argument inputs (2 + 3)
 console.log(add1); // => prints 5



/* 6. To apply this function, based on the function we created below. Function can access and reassign a variable 
 * from the global scope. 
 */
var x = 10;  // x is global variable and value is 2

myFunction();

function myFunction(){
   x = 20;  // x here is local variable and the value is 20
}
console.log(x); // => prints 20, because x is global and it can be access and reassign


/* 
 * 
 * 7. Closures: Functions form closures around the data they house. If an object returned from the Function
 *  and is held in memory somewhere (referenced), that closure stays ALIVE, and data can continue to exist in these closures! 
 * 
 * From what I'm understanding, closures is that the inner function still has access to the outer function’s variables even after
 * the outer function has returned. Let's take a look at one of the basic example given below.
 */
 // this inner function has access to the outer function's variables, including the parameters

function myName(firstName, lastName) {
var nameIntro = "Your name is ";
    
function fullName () {        
return nameIntro + firstName + " " + lastName;    
}

return fullName ();
}

myName("Rachel", "Tulin"); // Your name is Rachel Tulin

