/**
 * STRING MANIPULATION
 * 
 * 0. Strings need to be manipulated to display a desired result. String methods are needed for validation, 
 * displaying the correct information to the end user. Let's take a look at some examples of string methods
 * and string manipulation with operators.
 */

/* 1. When we use the "+"" operator with a string, it is called the concatenation operator. With this, we can 
 * merge or concatenate more than one string and build a new string out of those strings. 
 */
let myName = "My name is " + 'Rachel Tulin. ' + "I am a Student.";
console.log(myName);// output: My name is Rachel Tulin. I am a Student.

/* 2. We can also use the " += operator " to concatenate a string onto the end of an existing string variable. 
 */ 

 let fullName = "My name is Rachel Tulin ";

fullName += "and I am a fulltime Student.";
console.log(fullName); // output: My name is Rachel Tulin and I am a fulltime Student.

/*
 * 2.  string methods
 */
 // str.length() - This simple command returns the length of the string.
 let str = "Rachel";
console.log(str.length); // this outputs 6

// charAt(index) - This function treats the string as an array of characters. It retrieves the character at the 
// index you provide
let strs = 'Hello World';
console.log(strs.charAt(0)); // this outputs H
console.log(strs.charAt(4)); // this outputs o

// concat(string) - This method concatenates two strings together into one.
const string1 = 'beautiful ';
const string2 = 'girls'
console.log(string1.concat(string2)); // This returns 'beautiful girls'

// includes(string) - This functions check whether or not a string contains a substring.
const strr = 'beautiful girls';
console.log(strr.includes('beautiful')); // true
console.log(strr.includes('girl')); // false

// split()
const hello = "Hello World";
const helloWorldSplit = hello.split(' ');
console.log(helloWorldSplit); //  ["Hello", "World"];

// substring(index, index) - this function, you pass in the index of the element you want to start at, as well 
// as the index in the string you want the substring to end at. 
const greetings = 'Hello World';
console.log(greetings.substring(1, 4)); // ell

// toLowercase()/toUppercase() - These methods take a string and convert it to all uppercase or all lowercase.
//  This can be helpful if you want to make sure the string you are looking at isn’t case-sensitive.
const firstName = "Rachel";
console.log(firstName.toUpperCase()); // RACHEL
console.log(firstname.toLowerCase()); // rachel

//