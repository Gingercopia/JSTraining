/**
 * A standard function
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */

const greenPack = {
  //standard object named greenPack
  name: "Frog Pack",
  color: "green",
  volume: 8,
  pocketNum: 3,
};
//fx expression: constent > name it > assign value of fx > uses single parameter (can pass any value in and reuse fx repeatedly on different values. Pass in greenPack object but could pass many objects.)
const addPack = function (currentPack) {
  const newArticle = document.createElement("article"); //creates element of article and populates with innerhtml below using currentPack property and getting name, volume, color, pocketNum.
  newArticle.innerHTML = `
    <h1>${currentPack.name}</h1> 
    <ul>
      <li>Volume: ${currentPack.volume}</li>
      <li>Color: ${currentPack.color}</li>
      <li>Number of pockets: ${currentPack.pocketNum}</li>
    </ul>
  `;
  return newArticle; //returns value back to where we called it ie. appending to new object of Article which has html
};

const theArticle = addPack(greenPack);
console.log(theArticle); //

const main = document.querySelector("main"); //contains main element of document object
main.append(addPack(greenPack)); //appends content to main element. displays using addPack fx express
