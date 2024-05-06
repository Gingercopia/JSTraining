/**
 * Data types in JavaScript
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
 */

// String: use "xxx"
let stringDemo = "A string of text.";
console.log("String:", typeof stringDemo);

// Numbers:
let integerDemo = 4; //integers = numbers
console.log("Integer:", integerDemo);

let floatDemo = 5.6; //number with decimal. imagine number and float point between numbers to indicate decimal starts
console.log("Floating point number:", floatDemo);

// Boolean:
let booleanDemo = true; //T or F values
console.log("Boolean value:", booleanDemo);

// Null value (nothing):
let nullDemo = null; //this value contains nothing
console.log("Null value:", nullDemo);

// Undefined:
let undefinedDemo; //creates variable but don't assign anything it become undefined automatically
console.log("Undefined:", undefinedDemo);

let undefinedAssignedDemo = undefined; //assigns undefined to a variable
console.log("Undefined assigned:", undefinedAssignedDemo);

// Object: object defined by using {around properties: values;}

const objectDemo = {
  dance: "Mambo",
  number: 5,
};
console.log("Object:", objectDemo);

// Array: defined with [list of items , separated] these can be any combo of data types! [7,"my", objectDemo]
const arrayDemo = ["tango", "foxtrot", "waltz", "rumba", "bolero"];
console.log("Array:", arrayDemo);
