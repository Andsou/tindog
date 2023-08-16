import dogs from "./data.js";

class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  getDogHtml() {
    return `
      <div class="dog flex-container" style="background-image: url(${this.avatar})">
      <img class="like-dislike" id="like-dislike" />
        <div class="dog-title-container">
          <h1 class="dog-title">${this.name}, ${this.age}</h1>
          <p>${this.bio}</p>
        </div>
      </div>
    `;
  }
}

export default Dog;
