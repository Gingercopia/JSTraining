/**
 * Use the global Date() object to transform dates.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 */

import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST" //added as a string
);

const content = `
  <main>
    <article>
      <h1>Everyday Backpack</h1>
      <ul>
        <li>Volume:</li>
        <li>Color:</li>
        <li>Age:</li>
        <li>Number of pockets:</li>
        <li>Left strap length:</li>
        <li>Right strap length:</li>
        <li>Lid status:</li>
      </ul>
    </article>
  </main>`;

document.body.innerHTML = content;

console.log("The everydayPack object:", everydayPack);
console.log("Date acquired:", everydayPack.dateAcquired);
console.log("Days since acquired:", everydayPack.backpackAge()); //add the function parenthesis!!!()

window.everydayPack = everydayPack;
