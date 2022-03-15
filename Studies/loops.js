/**
 * LOOPS
 * 
 * O: Loops are used to perform repeated task based on a condition. Conditions are typically return true
 * or false. A loop will continue running until a defined conditions returns false. There are different
 * types of loops which we will discuss below. 
 */

/* 
 * 1. While loops are used if you want to loop based on whether or not a condition is true, or when you 
 * need to repeat in action but not for a definite number of times each times. While loops starts by evaluating
 * condition. If condition evaluates to true, the code in the code block gets executed. If condition is false, 
 * the code in the code block is not executed and the loop ends.
 */
let i = 1;
while (i < 10) {
  console.log(i); // => prints 1 2 3 4 5 6 7 8 9
  i++;
}

/*
 * 2. For loops are used to loop through a block of code until the counter reaches a specified number. It consists
 * of three optional expressions, followed by a code block. 
 * Initialization - runs before the execution of the first loop, and it's usually used to create a counter. 
 *
 * Condition - checks each time before the loop runs.  If it evaluates to true, the statement or code in the loop is
 * executed. If it's false, the loop stops.
 * 
 * Final expression - executed after each iteration of the loop. This is usually used to increment a counter, but can
 * be used to decrement a counter too.
 */
 // itirate integers from 0 - 9
 for (let i = 0; i < 10; i++) {
  console.log(i); // => prints 0 1 2 3 4 5 6 7 8 9 
}

/*
 * 3. For-in Loops -  loops through the properties of an object. It pulls out all the keys of an object, one by one.
 */
var person = {firstName: 'Rachel', lastName: 'Tulin', Age: 30 }
for (var key in person){
    console.log(person[key]); 
}
//output
//Rachel
//Tulin
//30

 
 //looping forward counting up and backward counting down to 0

 
for (var a = 0; a <= 10; a ++){
  console.log(a);
}
//output
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

for (var b = 10; b >= 0; b--){
  console.log(b);
}
//output
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

 // 3. Loop over an Array, forwards
var names = ['Rachel', 'May', 'Carolyn', 'Hazel'];

for (var j = 0; j < names.length; j++) {
  console.log(names[j]);
}
//output
// Rachel
// May
// Carolyn
// Hazel


//Loop over an Array backwards
 
var names = ['Rachel', 'May', 'Carolyn', 'Hazel'];

for (var k = names.length - 1; k >= 0; k--) {
  console.log(names[k]);
}

//output
// Hazel
// Carolyn
// May
// Rachel

 // Loop over an Object

var student = {firstName: 'Rachel', lastName: 'Tulin', Gender: 'Female', Age: 30}
   for (var key in student){
     console.log(key + ":", student[key]);
   }
 
//output
// firstName: Rachel
// lastName: Tulin
// Gender: Female
// Age: 30

 