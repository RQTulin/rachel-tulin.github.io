//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object and return its values in an array
function objectValues(object) {

var arr = [];
 
    for (var key in object){
    arr.push(object[key]);
}
    return arr;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object and return all its keys in a string each separated with a space

function keysToString(object) {
    var str = '';
    for (var key in object) {
        if (str == '') {
            str = key ;
        } else {
            str += ' ' + key;
        }
    }
    return str;
   
    //return Object.keys(object).map(key => key).join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//  Should take an object and return all its string values in a string each separated with a space.
function valuesToString(object) {
    var str = '';

    for (var key in object) { 
        if ( (typeof object[key]) == "string") {
            if (str == '') {
                str = object[key];
            } else {
                str += ' ' + object[key];
            }
        } 
       
    }
    return str;
    
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take one argument and return 'array' if its an array and 'object' if its an object.
function arrayOrObject(collection) {
    if (Array.isArray(collection)) {
        return "array";
    } else {
        return "object";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a string of one word, and return the word with its first letter capitalized
function capitalizeWord(string) {
    var firstLetter = string.charAt(0).toUpperCase();
    return firstLetter + string.substring(1);
}
//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////
//  Should take a string of words and return a string with all the words capitalized.
function capitalizeAllWords(string) {
        
   
    var result = string[0].toUpperCase(); // capitalizing the first letter of the word
  
    for (var i = 1; i < string.length; i++ ){ //using for loop starting i = 1 since we already capitalized the first letter above
      if (string[i -1] === ' '){
        result += string[i].toUpperCase();
      } else{
        result += string[i];
      }
    }
  return result;

}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object with a name property and return 'Welcome <Name>!
function welcomeMessage(object) {
  return `Welcome ${capitalizeWord( object["name"] )}!`;
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object with a name an a species and return '<Name> is a <Species>
function profileInfo(object) {
    
    return `${capitalizeWord( object["name"] )} is a ${capitalizeWord( object['species'] )}`;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/* Should take an object, 
if this object has a noises array return them 
as a string separated by a space, 
if there are no noises return 'there are no noises'" */
function maybeNoises(object) {

    if (Array.isArray(object['noises'])) { // using Array.isArray to check if object is array
        if (object['noises'].length > 0) {
            var r = "";
            for(var i=0; i < object['noises'].length; i++) {
               if (i == 0) {  
                r = object['noises'][i]; // returning the object array to string
               } else {
                r += " " + object['noises'][i];// returning the the object with spaces
               }
            }
            return r;
        } else {
            return "there are no noises";
        }

    } else {
        return "there are no noises";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false.", function(assert){
    
function hasWord(string, word) {
 
    var word = string.includes(word);

    return word;
       
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
//Should take a name and an object and add the name to the object's friends array then return the object"

object["friends"].push(name);
return object;

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a name and an object and return true if <name> is a friend of <object> and false otherwise",
//assert.equal(isFriend("jimmy",{friends:["bobby", "ralf"]}), false);
//assert.equal(isFriend("ralf",{friends:["bobby", "ralf"]}), true);

function isFriend(name, object) {
    if (object["friends"] != undefined){
        return object["friends"].includes(name);
    } else {
        return false;
    }
    
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a name and a list of people, and return a list of all the names that <name> is not friends with"

function nonFriends(name, array) {
    var r = [];
    for(var i=0; i < array.length; i++) {
        if ( !array[i].friends.includes(name) ) {
            if (array[i].name != name) {
                r.push(array[i].name);
            }
        }
    }
    return r;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
 //Should take an object, a key and a value. Should update the property <key> on <object> with new <value>. If <key> does not exist on <object> create it.
    
function updateObject(object, key, value) {
        
    if(!object.hasOwnProperty(key)){ //using hasOwnProperty to find if key exist on the object (if key does not exist) 
        object[key] = value; // object will be added a new key and value
    } else {
        for (var i = 0; i < Object.keys(object).length; i++) {
            if (Object.keys(object)[i] == key) { // if keys exists on the object
                  object[key] = value; // it will replace the key value
            }
        }
    }
  return object;


}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>", function
function removeProperties(object, array) {

    for(var i=0; i < array.length; i++) {
        if (object.hasOwnProperty(array[i])) {
            delete object[array[i]]; 
        }
    }

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an array and return an array with all the duplicates removed.
function dedup(array) {

    var uniqueArray = [];
    for (var i=0; i < array.length; i++) {
       if (uniqueArray.indexOf(array[i]) === -1) {
           uniqueArray.push(array[i]);
       }
    }
    return uniqueArray;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}