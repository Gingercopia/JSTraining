/**
 * Scope and the var statement
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
 */

var color = "purple"; //hex value also works here

document.querySelector(".left").style.backgroundColor = color; //style attribute populated with the color variable for the property value of backgroundColor of first .left class
document.querySelector(".left .color-value").innerHTML = color; //populates html of class color-value of left class

color = "skyblue"; //if reassign color variable to new value. JS is read top down so new color only applies to the right class element box

function headingColor() {
  color = "blue"; //this will overwrite color variable outside fx. this occurs since vars are globally scoped. chaning var value inside fx but new assignment applies everywhere. only happens if have the fx call over a call.
  document.querySelector(".title").style.color = color;
} //sets color varibale to blue then finds title and sets text color to value of color

headingColor(); //this functions color variable overrides the color = "skyblue" since it runs before the document statements below that set the color of the .right classes

document.querySelector(".right").style.backgroundColor = color;
document.querySelector(".right .color-value").innerHTML = color;

// headingColor(); //invoked only after set color of right box
