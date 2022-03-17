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
 function multiply(x, y){ // the name of the function is 'multiply'
     return x * y;
 }
const multi = multiply(2,2); // 
console.log(multi); // prints 4

/* 
 * 4. The way we assign function to a variable is the same way we assign to any variable. In function, the
 * Function expression is formed when an anonymous Function is assigned to a variable or constant.
 */
const add = function(a, b){
    return a + b;
}
const sum = add(1, 2); // => prints 3
console.log(sum); 

/*
 * 5. We specify inputs by what we put inside the function parenthesis, and outputs are specificied by return
 * statement or console logging. 
 * 
/* 6. To apply this function, based on the function we created below, the parent scope is the parentFunction.
 * The variable "y" cannot be accessed outside the parent function because it's been declared inside the nested 
 * function childFunction1.
 * The variable "z" is being used inside the scope of function childFunction2, trying to manipulate the data
 * by passing the value of 10. However, it will still fail to modify the initial value of z because it's a constant 
 * variable. 
 */
// global scopes

var x = 0; // global variable

function parentFunction() { // main function
    const z = 90; 
    
    function childFunction1() {  // child function
      var y = 100;
      return x + 100 * y;
    }

    function childFunction2() {  
        z = 10; // => prints assignment to constant variable error
        return x + 30 + z + y; // => adding y variable throws undefined error
    }
   
    return childFunction1() + childFunction2();
}

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

