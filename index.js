import Dog from "./Dog.js";
import dogs from "./data.js";

let dog = new Dog(dogs[0]);

document.addEventListener("click", function (e) {
  if (e.target.id === "cross") {
    dog = new Dog(getNextDog());
    render();
  }
});

const getNextDog = () => dogs.shift();

const render = function () {
  document.querySelector("main").innerHTML = dog.getDogHtml();
};

render();

console.log(getNextDog());
