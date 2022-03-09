/**
* 0. Control flow is the order in which the computer executes statements in a script.
* It refers to how we can make decisions in our code by asking true or false questions.
*
* For example, if you are developing an e-commerce application, you may want to ask a
* user to enter a credit card number until a valid credit card is entered. On the other
* hand, you may want your script to loop a specific number of times through a task before
* moving on to the next part of the script. All of this logic and control flow is achieved
* using some simple structures. These are: 
*/

// 1. If - Statements //
// First, we are going to create a variable that stores a value that we'll use as our testing
// condition in our if statement. This variable will be placed inside the parenthesis () next
// to the if keyword. Inside the curly braces, if the test condition is true, the code will
// run. 
var condition = true;
if (condition){
  // code block => perform the action
}
// Use the if statement to specify a block of code to be executed if a condition is true. 

var age = 18;
if (age == 18){
    console.log('You can sign up'); // => prints You can sign up
}

// 2. If - else statements //
// An else statement is a fallback from an if statement and will only get executed if the
// previous if statement is false.

var age = 18;
if (age < 18) { // condition is false hence code is not executed
  console.log('You can sign up')
} else {
  console.log('You have to be 18 to sign up!'); // code to be executed because previous code is false
}

// 3. If/else if statements
// An if statement can also be combined with an else if clause. Just like an else statement,
// but with its own condition. It will only run if its condition is true, and the previous
// condition is false.

var age = 18;
if (age < 18) {
  console.log('You can sign up');  // condition is false hence code is not executed
} else if (age > 18) {
  console.log('You are over 18, you may sign up!'); // execute this code if previous statement is false
} else {
  console.log('You have to be 18 to sign up!'); // execute this code if the 2 conditions above are false
}

// 4. Switch statements
// Switch statements acts like a big if/else if/else chain. The switch expression is evaluated once and 
// the value of the expression is compared with the values of each case. If there is a match, the 
// associated block of code is executed.
// A break statement should end the case. We have to make sure we add a break at the end of the block
// associated with a case.

switch (expression) {
  case a:
      // code to be executed if case a is true
      break; // break out of switch statement once code executed
  case b:
      // code to be executed if case b is true
      break; // break out of switch statement once code executed
  default:  // all other cases
      // code to be executed if case a and case b false
}
// example
var mood = "hungry"
switch(mood){
  case "happy":
    console.log("Dance to Dance Monkey!");
    break;
  case "sad":
    console.log("You should eat chocolat cake!");
    break;
  case "anxious":
    console.log("Take some deep breaths");
    break;
  case "hungry":
    console.log("You should eat a double cheese burger!");
    break;
  default: 
    console.log("We don't support that mood!");
}

