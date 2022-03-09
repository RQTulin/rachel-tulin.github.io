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

function deepEqual(obj1, obj2) {
  if (obj1 === obj2) { // if items are the same
    return true;
  } else if (typeof obj1 === 'object' && obj1 !== null && typeof obj2 === 'object' && obj2 !== null) {
  
    // join keys from both objects together in one array
    let keys = Object.keys(obj1).concat(Object.keys(obj2));
    // filter out duplicate keys
    keys = keys.filter(
      function (value, index, self) { 
        return self.indexOf(value) === index;
	  }
    );
    for (obj of keys) {
      if (typeof obj1[obj] === 'object' && typeof obj2[obj] === 'object') {
        if (deepEqual(obj1[obj], obj2[obj]) === false) {
          return false;
        }
      } else if (obj1[obj] !== obj2[obj]) {
        return false;
      }
    }
    return true;
  } else {
   return false; 
  }
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
