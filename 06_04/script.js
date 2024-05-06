/**
 * The let statement
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
 */

var color = "purple";

document.querySelector(".left").style.backgroundColor = color;
document.querySelector(".left .color-value").innerHTML = color;

let color = "skyblue"; //this let is still a global scope since not inside a fx. same variable name inside function below but thats okay since fx let color is a new LOCAL scoped instance ONLY in fx.

function headingColor() {
  let titleColor = "blue";
  document.querySelector(".title").style.color = color;
  // console.log("inside:", titleColor);//console returns the title class style attributes color properties value of blue since inside local scope fx
}

headingColor();

console.log("outside:", titleColor); //calling locally scoped variable outside its scope gives an error and the default color ("green") is added instead of blue. titleColor is not defined at js21.

document.querySelector(".right").style.backgroundColor = color;
document.querySelector(".right .color-value").innerHTML = color;
