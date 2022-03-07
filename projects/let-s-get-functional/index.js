// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./rachel-tulin.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    var maleCount = _.filter(array, function(customer){
        return customer.gender === "male";
});
return maleCount.length;
};

var femaleCount = function(array){
    var femaleCount = _.reduce(array, function(accumulator, customer){
        accumulator += customer.gender === 'female';
        return accumulator;        
    }, 0);
    return femaleCount;
}

var oldestCustomer = function(array){
   
   var oldest = 0;
   var oldestName = "";
   for(var i = 0; i < array.length; i++){
     for(var age in array[i]){
         if(oldest < array[i].age) {
            oldest = array[i].age;
            oldestName = array[i].name;

        }
    }
}
    return oldestName;
}

var youngestCustomer = function(array){

   var youngest = 100;
   var youngestName = "";
   for(var i = 0; i < array.length; i++){
     for(var age in array[i]){
         if(youngest > array[i].age) {
            youngest = array[i].age;
            youngestName = array[i].name;

        }
    }
}
    return youngestName;
}

var averageBalance = function(array){
   
     var averageBal = 0.00;
     
     for(var i = 0; i < array.length; i++){
        averageBal += parseFloat( array[i].balance.substring(1).replace(',', '') );
     }
            return averageBal / array.length;
   
 }

var firstLetterCount = function(array, letter){
    var count = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i].name[0].toLowerCase() == letter.toLowerCase()){
            count++;
        }
    }
    return count;
}

var friendFirstLetterCount = function(array, customer, letter) {
    var count = 0;
    for(var i = 0; i < array.length; i++){
        if (array[i].name == customer) {
            for (var j=0;j < array[i].friends.length; j++) {
                if(array[i].friends[j].name[0].toLowerCase() == letter.toLowerCase()){
                    count++;
                }
            }
            
        }
        
    }
    return count;

}


var friendsCount = function(array, name){
    var friendsArr = [];
        for(var i = 0; i < array.length; i++){
            for(var j = 0; j < array[i].friends.length; j++){
            if(array[i].friends[j].name === name){
                friendsArr.push(array[i].name); 
      }
    }
 }
    return friendsArr;
}


var topThreeTags = function(array) {
    var tagsArray = []
    for(var i = 0; i < array.length; i++) {
        tagsArray.push(array[i].tags);
    }
    
    var allTags = tagsArray.flat();
    
    var tagsObj = allTags.reduce(function(object, value) {
        if (object[value]) {
          object[value] += 1;
        } else {
          object[value] = 1;
        }
        return object;
    }, {});
    
    var topThree = [];
    for (var val in tagsObj) {
      if (tagsObj[val] === 3) {
        topThree.push(val)
      }
    };
    return topThree;
};

var genderCount = function(array) {
    let counts = array.reduce(function(object, customer) {
        if (object[customer.gender]) {
            object[customer.gender] += 1;
        } else {
            object[customer.gender] = 1;
        }
        return object;
    }, {})
    return counts;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
