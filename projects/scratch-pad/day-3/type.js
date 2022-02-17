// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
return Array.isArray(value);

    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
console.log("value: " , value)
//determine that values will retrurn to an object, not an array, not null, and not date

if (typeof value === 'object' && !Array.isArray(value) && value !== null && !(value instanceof Date)){
    //console.log(true)
    return true;
    }
  else {
      //console.log(false)
      return false;
    }
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //

    //console.log("value: " , value)

    if (!Array.isArray(value) === false || typeof value === 'object' && value !== null && !(value instanceof Date)){
        return true; //return true if value is either an array or an object
    }
    else { 
       // console.log(false)
        return false; // false is the value is not an array or an object
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    console.log(value);


        if (Array.isArray(value)){ // determine if value is an array, return "array"
          return "array";
        }
        else if(value === null){ // determine if value is null, return "null"
          return "null"
        } 
        else if (value instanceof Date){// determine if value is instance of, return "date"
          return "date";
        }
        else {
          return typeof value; // else it must be an object
        }
         
        
        
    
    //console.log('TYPEOF: ', typeof value);
    // YOUR CODE ABOVE HERE //

    }

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
