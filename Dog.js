import dogs from "./data.js";

class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  getDogHtml() {
    return `
      <div class="dog flex-container" style="background-image: url(${this.avatar})">
        <h1 class="dog-title">${this.name}, ${this.age}</h1>
        <p>${this.bio}</p>
      </div>
    `;
  }
}

export default Dog;
