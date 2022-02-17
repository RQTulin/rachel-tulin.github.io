//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

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
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

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
//Hello
function capitalizeWord(string) {
    var firstLetter = string.charAt(0).toUpperCase();
    return firstLetter + string.substring(1);
}
//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

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

function welcomeMessage(object) {
  return `Welcome ${capitalizeWord( object["name"] )}!`;
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

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
    
    return object["friends"].includes(name);
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

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