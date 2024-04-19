/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  colorChange: function (color) {
    this.color = color;
  },
};

console.log("Backpack Color Before", backpack.color); //print original color

backpack.colorChange("magenta");
//reassigns magenta as value for color parameter () inside function of the color Change METHOD
/*call fx to update fx with magenta. can also assign in console with -backpack.colorChange("purple")-
 */
console.log("Updated Backpack Color", backpack.color); //print newly assigned color
