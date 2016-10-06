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

//console.log(printPositives(arrayOfNumbers));

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

//console.log(getPositives(arrayOfNumbers));


// Re-do exercise 1 by first filtering the input array, and then printing the numbers
// from the filtered array. Your code will look something like: 
// return arr.filter(...).forEach(...).

function filteredArray(array) {
    array.filter(function(num) {
        return num >= 0
    }).forEach(function(item) {
        console.log(item);
    })    
    
}

//console.log(filteredArray(arrayOfNumbers));


// Write a function called filterArray that takes a callback function and an array as arguments. 
// Your filterArray function should return a new array that contains only the elements where the 
// callback function returns true.
var array = [0, 3, -4, -6, 5];

function filterArray(callback, array) {
    return array.filter(onlyPos)
    }


function onlyPos(num) {
   return num >= 0;
}



//console.log(filterArray(onlyPos, array));


// Write a function called longestWord that takes a string as argument, 
// and returns the longest word in the string. 
// You should use Array.prototype.reduce to do your work.
function longestWord(string) {
    string = string.split(" ");
    return string.reduce(function(prevWord, word) {
        if(prevWord.length > word.length) {
            return prevWord;
            } else {
            return word;
            }
    })
}

console.log(longestWord("Huuuuuuuugest word in this string"));

















