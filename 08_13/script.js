/**
 * Switch statement
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
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
  "December 5, 2018 15:00:00 PST",
  "../assets/images/everyday.svg"
);

const content = `
    <figure class="backpack__image">
      <img src=${everydayPack.image} alt="" loading="lazy" />
    </figure>
    <h1 class="backpack__name">${everydayPack.name}</h1>
    <ul class="backpack__features">
      <li class="feature backpack__volume">Volume:<span> ${
        everydayPack.volume
      }l</span></li>
      <li class="feature backpack__color">Color:<span> ${
        everydayPack.color
      }</span></li>
      <li class="feature backpack__age">Age:<span> ${everydayPack.backpackAge()} days old</span></li>
      <li class="feature backpack__pockets">Number of pockets:<span> ${
        everydayPack.pocketNum
      }</span></li>
      <li class="feature backpack__strap">Left strap length:<span> ${
        everydayPack.strapLength.left
      } inches</span></li>
      <li class="feature backpack__strap">Right strap length:<span> ${
        everydayPack.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        everydayPack.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>
  `;

const main = document.querySelector(".maincontent");

const newArticle = document.createElement("article");
newArticle.classList.add("backpack");
newArticle.setAttribute("id", "everyday");
newArticle.innerHTML = content;

main.append(newArticle);

const usedStatus = () => {
  let age = everydayPack.backpackAge();
  age = 523; //add this to test udedStatus fx by changing age value
  let description;
  switch (
    true //expression test against in parameter
  ) {
    case age < 30:
      description = "new";
      break; //stop switch statement from running
    case age >= 30 && age < 365: //only TRUE if between 30 and 364
      description = "lightly used";
      break;
    case age >= 365 && age < 1095: //#days in 3 years
      description = "used";
      break;
    case age >= 1095:
      description = "old";
      break;
    default:
      //this gives a default value if no condition is met as TRUE
      console.log("There is no description for ${age}"); //'this is a template literal'
  }

  console.log(`
  Age: ${age} days
  Status: ${description}
  `);
};

usedStatus();
