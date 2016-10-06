//creating pull request

// Write a function called printPositives that takes an array and uses the forEach 
// method to print only the positive numbers.
var arrayOfNumbers = [10, -10, 0, 67, -5];

function printPositives(array) {
    var positives = [];
    array.forEach(function(number) {
        if(number >= 0) {
            positives.push(number);
        } 
    }) 
    
    return positives;
}

console.log(printPositives(arrayOfNumbers));

//Similar to the previous exercise, write a function called getPositives that 
// takes an array and uses the filter method to return a new array with only the positive numbers.

function getPositives(array) {
    var onlyPos = [];
    array.filter(function(number) {
        if(number >= 0) {
            onlyPos.push(number);
        }
        
    })
    
    return onlyPos;
}

console.log(getPositives(arrayOfNumbers));
