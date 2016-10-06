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

// Write a function called highLow that takes an array of numbers, and returns an 
// object with a property highest containing the highest number, and a property lowest 
// containing the lowest number, using Array.prototype.reduce.

// For example, starting with [1, -10, 20, 40, 5], your function should return 
// {highest: 40, lowest: -10}.

// Hint: Javascript has a special value called Infinity, which is higher than any 
// other number. See if you can initialize your reduce accumulator with Infinity and -Infinity :)
var arrayOfNumbers = [10, 3, 0, -2, 50, -8];

function highLow(array) {
    
    return array.reduce(function(acc, num) {
        if(num > acc.highest) {
            acc.highest = num;
        } 
        if (num < acc.lowest) {
            acc.lowest = num;
        }
        return acc;
    }, {
        highest: -Infinity,
        lowest: Infinity
    })
    
    
}

//console.log(highLow(arrayOfNumbers));

// Expanding on exercise 6, write a function called highLowTwo that takes an array 
// of numbers, and returns the higest, second highest, lowest, and second lowest numbers.

// For example, starting with [1, -10, 20, 40, 5], your function should return:

// {
//   "highest": 40,
//   "secondHighest": 20,
//   "lowest": -10,
//   "secondLowest": 5
// }
var arrayOfNumbers = [10, 3, 0, -2, 50, -8];
function highLowTwo(array) {
    return array.reduce(function(acc, num) {
        if (num > acc.highest) {
            acc.secondHighest = acc.highest;
            acc.highest = num;
        }
        
        if (num < acc.lowest) {
            acc.secondLowest = acc.lowest;
            acc.lowest = num;
        }
        return acc;
    }, {
        highest: -Infinity,
        secondHighest: -Infinity,
        lowest: Infinity,
        secondLowest: Infinity - 1
       })


}

//console.log(highLowTwo(arrayOfNumbers));


// Write a function called countChars that takes a string, and returns an object 
// where the keys are letters, and the value is the number of times that letter appears.

// For example, with input "hello world", the output should be:

// {
//   "h": 1,
//   "e": 1,
//   "l": 3,
//   "o": 2,
//   "w": 1,
//   "r": 1,
//   "d": 1
// }
// NOTE: Unlike arrays, objects don’t have any ordering on them. 
// When you print your object on the console, your keys may be displayed in a 
// different order, and it does not matter.



/*
    go through the array of single letters
    make every letter a property in the object
    next iteration, if letter === letter, + 1 to property value

*/
function countChars(string) {

    
    return string.split("").filter(function(l) {return (l !== " " && l !==  ",");}).reduce(function(obj, letter) {
      if(obj[letter]) {
          obj[letter] +=1;
      } else {
          obj[letter] = 1;
      } 
        return obj;
    }, {})
    
}

console.log(countChars("Lets see a sweet ass object, boy"));
