// Write a function `isValidCC(ccnum)` that takes a string and
// returns `true` if the credit card entered is valid, `false` otherwise.

function isValid(ccnum) {

  var ccNoSpaces = ccnum.replace(/\s/g, '');
  if (ccNoSpaces.length != 16) {
    return false;
  }
  var digitString = '';
  for (var i = ccNoSpaces.length-1; i >= 0; i--) {     //done because of fiddle
    var digit = ccNoSpaces[i];
    if(i % 2) {
      digitString += '' + (digit*2) + '';
    } else {
      digitString += '' + digit + '';
    }
  }
  var arrayOfDigits = digitString.split('');
  var total = arrayOfDigits.reduce(function(a,b) {
    return parseInt(a) + parseInt(b);
  }, 0);
  var valid = total % 10 === 0;

  return valid;
}
console.assert(isValid("4408 0412 3456 7893") === true)
console.assert(isValid("5000000000000000") === false)

//----------------------------------------------------------------------------
/*
Make all the console.assert() statements pass by filling in the sections
marked with YOUR CODE HERE.
*/

/**
 * PART 0
 *
 * Write a function that calculates the sum of all the numbers in an array
 */


 function sumOfArray(arr){
   var sum = 0;
   for( var i = 0; i < arr.length; i++ ){
       sum += parseInt( arr[i], 10 );                          // DONE
   }
   var avg = sum/arr.length;
     return sum
 }


console.assert(sumOfArray([1, 2]) === 3);
console.assert(sumOfArray([]) === 0);
console.assert(sumOfArray([1, 2, 3]) === 6);
console.assert(sumOfArray([10, 9, 8]) === 27);

/**
 * PART 1  ----------------------------------------------------  DONE
 *
 * Write a function that takes two numbers as
 * arguments and computes the sum of those two numbers.
 */

function sum(a, b){
    return a + b
}

console.assert(sum(8, 11) === 19);
console.assert(sum(4, 100) === 104);

/**
 * PART 2  ---------------------------------------------------
 *
 * write a function that finds the Greatest Common Denominator of two numbers
 * - if no GCD exists, return 1
 */

function GCD(a, b){
     if (!b) {
         return a;
   }
    return GCD(b, a % b);             //done because of stack overflow
};


console.assert(GCD(5,1) === 1);
console.assert(GCD(15,3) === 3);
console.assert(GCD(15,5) === 5);
console.assert(GCD(50,20) === 10);

/**
 * PART 3



 *
 * write a function that prints out the Least Common Multiple of two numbers
 */

function LCM(a, b){
  var gcd = (a % b);    //-- I have no idea what I'm doing, but this
                        // explains my thought process, I just dont know how
  return (a * b / gcd)  // to word it with code.

}

console.assert(LCM(10,10) === 10)
console.assert(LCM(2,5) === 10)
console.assert(LCM(3,6) === 6)
console.assert(LCM(0,1) === 1)

/**
 * Part 4
 *
 * write a function that returns a FizzBuzz string for some number N (counting up from 1).
 * - for every number that isn't a multiple of 3 or 5, return a period "."
 * - for every number that is a multiple of 3 (but not 5), return "fizz"
 * - for every number that is a multiple of 5 (but not 3), return "buzz"
 * - for every number that is a multiple of 3 and 5, return "fizzbuzz"
 */

function fizzbuzz(N){

}                                             //I have no clue where to start

console.assert(fizzbuzz(1) === ".")
console.assert(fizzbuzz(2) === "..")
console.assert(fizzbuzz(3) === "..fizz")
console.assert(fizzbuzz(5) === "..fizz.buzz")
console.assert(fizzbuzz(10) === "..fizz.buzzfizz..fizzbuzz")
