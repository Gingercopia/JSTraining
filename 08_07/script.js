/**
 * Passing data to functions through parameters.
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */

//tip calculation function - need pass sum and percentage to return tip and total for us.

//add parameters of sum, percentage within fx
const tipCalculator = (sum, percentage, currency, prefix) => {
  let tip = sum * (percentage / 100);
  let total = sum + tip;
  if (prefix) {
    console.log(` 
    Sum before tip: ${currency}${sum} 
    Tip percentage: ${percentage}%
    Tip:            ${currency}${tip.toFixed(2)}
    Total:          ${currency}${total.toFixed(2)}
  `);
  } else
    console.log(` 
    Sum before tip: ${sum} ${currency}
    Tip percentage: ${percentage}%
    Tip:            ${tip.toFixed(2)}${currency}
    Total:          ${total.toFixed(2)}${currency}
  `);
};

tipCalculator(29.95, 18, "kr", true); //false boolean calls ELSE CONDITION - placing kr at end. true places at beginning
