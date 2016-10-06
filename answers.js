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

//console.log(longestWord("Huuuuuuuugest word in this string"));


// Write a function called countVowels that takes a string and returns the number of 
// vowels in the string. You should use Array.prototype.reduce to do your work.
// For the string "The quick brown fox", the output should be 5 
// because there is one e, one u, one i and two os.

// Hint: You can use String.prototype.split again. There is a way to use it to split a 
// string by character. Try to Google it :)

// Hint 2: You can create an array of vowels and use Array.prototype.indexOf to check if 
// the current letter is a vowel.
function countVowels(string) {
    string = string.split("");
    var vowels = ["a", "e", "i", "o", "u", "y"];
    return string.reduce(function(counter, letter) {
        if(vowels.indexOf(letter) > -1) {
               counter+=1
            }
            return counter;
        }, 0) 
    }


//console.log(countVowels("ahis string has how many vowels?"));
















