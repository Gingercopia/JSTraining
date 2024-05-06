/**
 * Assignment vs comparison
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Relational_operators
 */

let a = "five";
let b = "Five";

console.log(`let a: ${a} (${typeof a})`); //prints to console upon load value of a and variable type
console.log(`let b: ${b} (${typeof b})`); //prints to console upon load value of a and variable type

//(a == b) looking to see if a value equal to b value. SAME or NOT?
if (a === b) {
  //this look for ABSOLUTE EQUALITY (five != Five)
  console.log(`Match! let a and let b are the same value.`); //if the same value then console shows string inside method
} else {
  console.error(`No match: let a and let b are NOT same value.`); //if DIFFERENT value then console shows string inside method
}
