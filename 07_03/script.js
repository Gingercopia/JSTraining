/**
 * Working with array methods
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods
 */

let backpackContents = ["piggy", "headlamp", "pen"]; //3items with index 0-2

let longItems = backpackContents.find(function (item) {
  //find 1st item meeting parameters of each item function.
  if (item.length >= 5) {
    return item; //if item has 5 or more characters than return the item. returns 1st item that meets requirement
  }
});
console.log("longItems:", longItems);

// backpackContents.forEach(function (item) {
//   //run function on each item with item as parameter.
//   item = `<li>${item}</li>`; //sets item = to li + item + /li.
//   console.log(item);
// });

//forEach can manipulate content in array then do something to array without touch array itself

// backpackContents.pop(); //pop last item off of array

// console.log(backpackContents.join(" | ")); //" | " creates tab deliminated output
