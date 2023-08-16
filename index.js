import Dog from "./Dog.js";
import dogs from "./data.js";

document.addEventListener("click", function (e) {
  if (e.target.id === "cross") {
    document.getElementById("like-dislike").src = "./images/badge-nope.png";
    renderNextDog();
  }

  if (e.target.id === "heart") {
    document.getElementById("like-dislike").src = "./images/badge-like.png";
    renderNextDog();
  }
});

const renderNextDog = function () {
  dog = new Dog(getNextDog());
  console.log(dog);
  setTimeout(() => render(), 1500);
};

const getNextDog = () => dogs.shift();

const render = function () {
  document.querySelector("main").innerHTML = dog.getDogHtml();
};

const shuffleArray = function (array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

shuffleArray(dogs);

let dog = new Dog(getNextDog());
render();
