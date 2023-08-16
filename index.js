import Dog from "./Dog.js";
import dogs from "./data.js";

const likeBtn = document.getElementById("heart");
const dislikeBtn = document.getElementById("cross");

document.addEventListener("click", function (e) {
  const likeDislikeImg = document.getElementById("like-dislike");
  if (e.target.id === "cross") {
    likeDislikeImg.src = "./images/badge-nope.png";
    likeDislikeImg.style.display = "block";
    dislikeBtn.classList.add("disliked");
    renderNextDog();
  }

  if (e.target.id === "heart") {
    likeDislikeImg.src = "./images/badge-like.png";
    likeDislikeImg.style.display = "block";
    likeBtn.classList.add("liked");
    renderNextDog();
  }
});

const renderNextDog = function () {
  if (dogs.length === 0) {
    likeBtn.disabled = true;
    dislikeBtn.disabled = true;

    setTimeout(function () {
      document.querySelector("main").innerHTML = "No more dogs left.";
    }, 1500);

    return;
  }

  dog = new Dog(getNextDog());
  console.log(dog);
  likeBtn.disabled = true;
  dislikeBtn.disabled = true;

  setTimeout(function () {
    render();

    likeBtn.disabled = false;
    dislikeBtn.disabled = false;
    dislikeBtn.classList.remove("disliked");
    likeBtn.classList.remove("liked");
  }, 1500);
};

const getNextDog = () => dogs.shift();

const render = () =>
  (document.querySelector("main").innerHTML = dog.getDogHtml());

const shuffleArray = function (array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

shuffleArray(dogs);

let dog = new Dog(getNextDog());
render();
