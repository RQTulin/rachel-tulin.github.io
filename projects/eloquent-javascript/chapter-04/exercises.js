////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step=1) { 
  let array = [];
    if(start === end){
      return array;
    }
    if (step > 0) {
      for (var i = start; i <= end; i += step)
        array.push(i);
    } else {
      for (var i = start; i >= end; i += step)
        array.push(i);
    }
    return array;
  }


////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(numbers) {
  total = 0;
  for (i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;

}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  var newArray = [];
	for (var i = array.length - 1; i >= 0; i--) {
		newArray.push(array[i])
	}
	return newArray;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  for (var i = 0; i < Math.floor(array.length/2); i++) {
    var newArr = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = newArr;
}
return array;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  var list = null;
   for (var i = array.length - 1; i >= 0; i--) {
     list = {value: array[i], rest: list};
   }
   return list;

}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(inputList) {
 
    currentArray = [inputList.value];
  if (inputList.rest) {
    currentArray = currentArray.concat(listToArray(inputList.rest));
  }
  return currentArray;


}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(element, list) {
  return {
    value: element,
    rest: list,
  };
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, number) {

    return listToArray(list)[number];
  
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


function deepEqual(x, y){

  if(typeof x !== 'object' && typeof y !== 'object'){
    return x === y;
  }
  if (typeof x !== 'object' || typeof y !== 'object'){
    return false;
  }
  
let xKeys = Object.keys(x);
let yKeys = Object.keys(y);

  if(xKeys.length !== yKeys.length){
    return false;
  }
  for (let i = 0; i < xKeys.length; i++){
    if(!yKeys.includes(xKeys[i]) || !deepEqual(x[xKeys[i]], y[xKeys[i]])){
      return false;
    
  }
}
return true;
}
 

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
