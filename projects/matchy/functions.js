/*
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//const { animals, animal } = require("./data");

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(array, string) { 
//implementing function that takes two parameters , array and string
// determine how to perform a search by using a String name of an animal
//determine how to look through 'animals' array, and return animal's object 

    var index = array.findIndex(array => array.name === string);
    if (index > -1) {
        return array[index];
    } else {
        return null;
    }
}







//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// implementing a function that takes 3 parameters, 'string' for the animal name to perform search, 

function replace(animals, name, replacement) {
    //using for loop and animals.lenght to access the 'animals' objects
    for (var i=0; i < animals.length; i++) {
        if( animals[i] === search(animals, name)) { // using the search function created above to perform a search of 'animal' name
            animals.splice(i, 1, replacement);// using splice method to access the 'animal's' name searched and replace it's entire object with a new object
            return;
        }
    }
 
}

//console.log('complete: ', animals);
//replacement object
replace(animals, "Tony", {
    species: 'bird',
    name: 'Flappy',
    noises: ['chirp', 'tweet', 'flutter']
});
//console.log("replace completed: ", animals);


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name) {   
    for (var i=0; i < animals.length; i++) { 
        if( animals[i] === search(animals, name)) { // using if statement, strict comparison, and the search function created above to perform a search and determine if the name match on the animals array
            animals.splice(i,1);// using splice method to remove the name matched on search from 'animals' array
            return;
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal) {
    if (animal.name.length > 0 ) {
        if ( animal.hasOwnProperty('species') ) { //using hasOwnProperty to search animal Object that has 'species'
            if (animal.species.length > 0) {
                if (search(animals, animal.name) == null) { //using the search function created above to determine if name search has a unique name
                    animals.push(animal); // using push method to add the animal name searched to 'animals' array.
                }
            }
        }
    }
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
