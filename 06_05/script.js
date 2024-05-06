/**
 * The const statement
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
 */

const color = "purple"; //results in constant error since const

document.querySelector(".left").style.backgroundColor = color;
document.querySelector(".left .color-value").innerHTML = color;

color = "skyblue"; //this tries to reassign a value inside the const color but cannot be done so script stopes rendering here causing headingColor fx to never run. reassigning this value causes script break

function headingColor() {
  let color = "blue"; //let ensures block i.e. local scope
  document.querySelector(".title").style.color = color;
}

headingColor();

document.querySelector(".right").style.backgroundColor = color;
document.querySelector(".right .color-value").innerHTML = color;
