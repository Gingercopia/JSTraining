/**
 * How arrow functions help us with scoping.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#this_and_Arrow_Functions
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
 */

// Define a default volume for the window (the entire DOM):
window.volume = 20;

const greenPack = {
  name: "Frog Pack",
  color: "green",
  volume: 8,
  pocketNum: 3,
  newVolume: function (volume) {
    //arrow fx CANNOT be the declaration of method since arrow wouldn't know scope to use and would go to global rather than use this methods scope
    console.log("this.volume in the method:", this.volume); //
    this.volume = volume;
    console.log("this.volume after update:", this.volume);
    //instead of a function expression use arrow  function to avoid global scope issue (function (() => {

    (function () {
      //FUNCTION EXPRESSION WITH THIS
      console.log(
        "this.volume in nested FX Expression_Becomes global d/t hoisted:",
        this.volume
      );
    })();

    (() => {
      //ARROW FUNCTION - ignores the this keyword and refers to closest available scope ie the object.
      console.log(
        "this.volume in nested ARROW function_remains local:",
        this.volume
      );
    })();
  },
};

console.log(greenPack.newVolume(5));
