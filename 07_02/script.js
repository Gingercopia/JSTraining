/**
 * Working with arrays
 * @link https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
 */

let item = "flashlight";

const collection = ["Piggy", item, 5, true]; //Piggy has index value of 0, item = 1, 5 =2....

collection[collection.length] = "new item"; //returns current length of array and adds to end of it
collection[9] = " at the end";

console.log(collection[8]); //returns as undefined since no value is associated with that index yet
console.log(collection[9]); //returns value "at the end" since it has a value assigned"
console.log(collection);
