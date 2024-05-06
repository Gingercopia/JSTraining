/**
 * Passing data to functions through parameters.
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 *
 *
 * List of ISO language codes:
 * @link http://www.lingoes.net/en/translator/langcode.htm
 */
const formatter = (locale, currency, value) => {
  //add 2 new parameters of locale and currency so need pass up from tipCalculator

  let formattedValue = new Intl.NumberFormat(locale, {
    //locale parameter above replaces "de-DE" with value from tipCalculator argument
    style: "currency",
    currency: currency, //currancy parameter replaces EUR since in argument
  }).format(value);
  return formattedValue;
};

const tipCalculator = (sum, percentage, locale, currency) => {
  //add formatter paramets to tipCalculator
  let tip = sum * (percentage / 100);
  let total = sum + tip;
  //add new parameters to template block below (locale, currency,value (i.e. sum, tip, total))
  console.log(`
      Sum before tip: ${formatter(locale, currency, sum)} 
      Tip percentage: ${percentage}%
      Tip:            ${formatter(locale, currency, tip)}
      Total:          ${formatter(locale, currency, total)}
    `);
};

tipCalculator(29.95, 18, "en-US", "USD"); //arguments of tipCalculator Method
