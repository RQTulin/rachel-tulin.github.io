


// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(arrays) {
  var flat = 
    arrays.reduce(function(a, b) { 
      return a.concat(b);
    });
    return flat;
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}

loop(3, n => n > 0, n => n - 1, console.log);

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
  for (let element of array) {
    if (test(element) === false) {
      return false;
    }
  }
  return true;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(str) {
let newStr = str;


// create arrays for each direction
 let ltr = [];
 let rtl = [];
//iterate through input str
for (var i = 0; i < str.length; i++){
  let scriptName = characterScript(newStr.charCodeAt(i));
  console.log(scriptName);
  // check if the scriptName result is not equal to Null
  if (scriptName !== null){
    scriptName.direction === 'ltr' ? ltr.push(scriptName.name) : rtl.push(scriptName.name);
  }
}
if (ltr.length > rtl.length) {
  return 'ltr';
}else{
  return 'rtl';
}
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
