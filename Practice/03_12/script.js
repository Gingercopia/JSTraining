/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Desk from "./Desk.js"; //this defines the class before anything runs but cannot interact with in browser class after initial loadout.
import Dresser from "./Dresser.js";
import Toolbox from "./Toolbox.js";
import Packing from "./Packing.js";

//const kidsDesk, adultDesk, adultDesk2 are OBJECTS
const kidsDesk = new Desk("kids Desk", 4, 3, true, 50, 40, 30);

const adultDesk = new Desk("Office Desk", 2, 4, false, 6, 8, 12);

console.log("kids Desk Properties:", kidsDesk);
console.log("adult desk properties", adultDesk);

const adultDesk2 = new Desk("adult2", 34, 43, true, 76, 67, 34);
console.log("adult desk2 properties", adultDesk2);

const kidsDresser = new Dresser(5, 3, 2, 1, 7, 12, 2);

const adultDresser = new Dresser(5, 2, 6, 9, 10, 11, 3, 8);
console.log("kids dresser Synopsis", kidsDresser);
console.log("adult dresser synopsis", adultDresser);

const kidToolbox = new Toolbox(2, 4, 6, 8, 10, 12, 1, 40, 50, 60, 80);

const adultToolbox = new Toolbox(90, 80, 70, 60, 50, 40, 30, 20, 10, -10, -20);

console.log("kids tools", kidToolbox);
console.log("adult tools", adultToolbox);

const kidsPacking = new Packing(
  "T",
  "T",
  "T",
  "T",
  "T",
  "T",
  "T",
  "T",
  "T",
  "T",
  "T",
  "T",
  "T",
  "T",
  "T",
  "T",
  "T"
);

const adultsPacking = new Packing(
  "F",
  "F",
  "F",
  "F",
  "F",
  "F",
  "F",
  "F",
  "F",
  "F",
  "F",
  "F",
  "F",
  "F",
  "F",
  "F",
  "F"
);

console.log("Kids Ready Items", kidsPacking);
console.log("Adults done packing?", adultsPacking);

/* <<<<<<<<<<DECLARING NEW OBJECTS SO CAN USE IN CONSOLE>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

window.kidsDesk = kidsDesk; //directions to define class https://stackoverflow.com/questions/68184070/how-to-call-or-access-a-class-method-in-javascript-from-the-browsers-console
window.adultDesk = adultDesk;
window.adultDesk2 = adultDesk2;
window.kidsDresser = kidsDresser;
window.adultDresser = adultDresser;
window.kidToolbox = kidToolbox;
window.adultToolbox = adultToolbox;
window.kidsPacking = kidsPacking;
window.adultsPacking = adultsPacking;
