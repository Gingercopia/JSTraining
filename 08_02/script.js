/**
 * Working with functions
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */

// Function declaration: GLOBAL SCOPED. this is an advanced variable that can be redeclared. do SomeMath can be overriden with function declarations. occur in order declared in code. declare a before b or will not work

function doSomeMath(a, b) {
  //keyowrd then name fx then set parameters () or leave blank.
  //{} is the fx body
  let c = a + b; //inside fx body perform ax on data
  return c; //return that data which is sent back to where declare fx originally.
}

// Function expression: set variable (const)>name it> assign to annonymous fx > () possibly with parameters >{fx body}. fx behaves same but doesn't have a name so put inside a variable and call it.....PREFERRED WAY TO CALL a FUNCTION. Place inside a const. fx inside variable has same scope as variable type. Const = LOCAL scope ie BLOCK scoped. Cannot Redeclare.

const doMoreMath = function (a = 2, b = 3) {
  let c = a * b;
  return c;
};

console.log("Do some math:", doSomeMath(5, 6));
//function declaration variable called
console.log("Do more math:", doMoreMath());
//function expression variable called in with blank parameters() then receive NaN. Correct by assigning values to variables in parameter. (a=3, b=2) rather than (a,b)

// Immediately Invoked Function Expression (IIFE)
//wrap annonymous fx inside () > place() outside fx to immediately evoke and run
(function () {
  let a = 4;
  let b = 6;
  let c = doSomeMath(a, b);
  console.log(`The sum of a and b is: ${c}`);
})();
