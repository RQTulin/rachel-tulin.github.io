/**
 * DATA TYPES
 * 
 * 0. Data types refers to the types of values we use in our program. There are two categories in data types,
 * simple/primitive and complex. Primitive/simple data types includes, Number, String, Boolean, NaN, undefined,
 * and null. Complex data types includes Arrays, Objects, and Functions. 
 */

 /*
 * 1. Number - The number data type is used to represent positive or negative numbers with or without decimal
 * place, or numbers written using exponential notation.
 */
 var age = 30;
 console.log(age); // => print 30

/* 2. String - String data refers to any string of characters you want to create as a value in your code. Strings
 * are created using single or double quotes surrounding one or more characters.
 */
 var firstName = 'Rachel';
 console.log(firstName); // => prints 'Rachel


/* 3. Boolean - The Boolean data type can hold only two values: true or false. It is typically used to store 
 * values like yes (true) or no (false), on (true) or off (false).
 */ 
 var isName = true;
 console.log(isName); // => prints true

/* 4. Array -  An array is a zero - indexed list. A collection that allows us to store a list of values in any data
 * type, and store them as one variable. The array index starts from 0, so that the first array element is arr[0] 
 * not arr[1].
 */
var arr = [1, 2, 3, 4, 5];
console.log(arr[0]);// => prints 1

/* 5. Object - An object contains properties, defined as a key-value pair. A property key (name) is always a string,
 * but the value can be any data type, like strings, numbers, booleans, or complex data types like arrays, function 
 * and other objects. 
 */
var info = {name: 'Rachel', age: 30, city: 'New Orleans', student: true}
console.log(info); // => prints { name: 'Rachel', age: 30, city: 'New Orleans', student: true }

/* 6. Function - The function is callable object that executes a block of code. Functions can be stored in variables,
 * objects, and arrays. Functions can be passed as arguments to other functions, and functions can be returned from
 * functions.
 */
function add(x, y){
     return x + y;
 }
console.log(add(1, 2)); // => prints 3 

/* 7. Undefined - The undefined data type can only have one value-the special value undefined. If a variable 
 * has been declared, but has not been assigned a value, has the value undefined.
 */
 var a;
 var b = 'hello';
 console.log(a); // prints undefined because we did not assign a value to a
 console.log(b); // prints hello

 
/* 8. Null - The null data type is a special data type that can have only one value-the null value. A null value
 * means that there is no value. It is not equivalent to an empty string ("") or 0, it is simply nothing.
 */
 var a = null;
 console.log(a); // prints => null

/* 9. NaN - NaN represents a special Not-a-Number value. It is a result of an invalid or an undefined mathematical
 * operation.
 */
var a = 'hello' / 2;
console.log(a);// => prints NaN

/* 10.Infinity-and-Infinity - The positive infinity is a number which is constant and represents a value which is
 * highest available. While, negative infinity is a constant value which is used to represent a value which is the 
 * lowest available. This means that no other number is lesser than this value. 
 */

//Infinity
var num = 16 / 0;
console.log(num); // prints Infinity
// - Infinity
var num = -16 / 0;
console.log(num); // prints => -Infinity

/* 11. What is the difference between primitive/simple and complex data types?
 * Simple/primitive data types are immutable. They do not hold, collect, or aggregate other values, and operations 
 * on simple values return simple values, they do not alter the original value. When assigning, simple data types are
 * copies from one variable to the next. Complex data types are complex values aggregate other values and are of
 * indifinite size. Wheen assigning or passing, complex data-types are passed by reference. 
 * 
 */

/* 12. Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. What 
 * does that mean, how are they different?
 * Primitive types has a fixed size in memory. The largest primitive, a Number takes up to eight bytes of memory
 * allocated for a variable. Complex types do not have a fixed size, and so their values cannot be stored directly 
 * in the eight bytes of memory associated with each variable. One of the characteristics of complex types is that
 * they can be of any size. 
 */
 