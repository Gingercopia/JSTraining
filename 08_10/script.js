/**
 * Using a callback function.
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
 */

// Helper function to format currency numbers. Used by tipCalculator
const formatter = (locale = "en-US", currency = "USD", value) => {
  let formattedValue = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);

  return formattedValue;
};

// Callback receives finalTip object, creates and outputs table on the DOM.
const printHTML = (finalTip) => {
  //outtputs html table that appends to main in doc; calls in after tipCalculator method runs
  const tipTable = document.createElement("table");
  tipTable.innerHTML = `
    <tr>
      <td>Sum before tip:</td>
      <td>${finalTip.sum}</td>
    </tr>
    <tr>
      <td>Tip percentage:</td>
      <td>${finalTip.percentage}</td>
    </tr>
    <tr>
      <td>Tip:</td>
      <td>${finalTip.tip}</td>
    </tr>
    <tr>
      <td>Total:</td>
      <td>${finalTip.total}</td>
    </tr>
  `;
  document.querySelector("main").append(tipTable);
};

// Create a finalTip object with all the data. Send it to the printHTML callback.
const tipCalculator = (sum, percentage, locale, currency, callback) => {
  let tip = sum * (percentage / 100);
  let total = sum + tip;

  const finalTip = {
    sum: formatter(locale, currency, sum),
    percentage: percentage + "%",
    tip: formatter(locale, currency, tip),
    total: formatter(locale, currency, total),
  };

  //callback(finalTip); //call the exact fx want into other fx. SPECIFIC fx to use after using right now but later it could be a different function
  printHTML(finalTip); //this gives the same output as callback(finalTip) but not SPECIFIC FX to callback. Put a fx inside a fx VERY COMMON
};

tipCalculator(29.95, 18, "de-DE", "EUR", printHTML);
