/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

//function expression

//function declaration

let a = 2;
let b = 10;

// function simpleMath(a, b) {
//   let c = a + b;
//   return c;
// }

const simpleMath = function (a, b) {
  let c = b / a;
  return c;
};

const newH1 = document.createElement("h1");
newH1.innerHTML = `
    <h1>${simpleMath}</h1>
    `;
return newH1;

console.log("division: ", simpleMath(a, b));

//arrow function
