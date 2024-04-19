/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const desk = {
  name: "Office Desk",
  storage: 8,
  folders: 12,
  drawerOpen: false,
  writingTools: {
    pens: 10,
    pencils: 3,
    markers: 5,
  },
};

console.log("Desk Properties:", desk);
console.log("Pens in Desk:", desk.writingTools.pens);

var markers = "drawerOpen";

console.log("Anything Open?:", desk["drawerOpen"]);

const laptop = {
  //object of laptop
  backlit: true, //property: value
  powerLeft: 20,
  browsersOpen: true,
  wifiSpeed: 80,
  browsers: {
    //object within the laptop object
    google: "chrome",
    mozzila: "firefox",
    microsoft: "edge",
  },
};

console.log("Speeds", laptop.wifiSpeed); //. declaration

var life = "powerLeft";

console.log("Time until Dead:", laptop["powerLeft"]); //[] declaration to call on variableA
