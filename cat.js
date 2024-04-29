var cats = [];
var step = 100;

var cat = {
  /**
   * Propriété
   * ----------------------------------------------
   */
  filename: "",
  positionX: 0,
  positionY: 0,

  /**
   * Création du chat
   * ----------------------------------------------
   */
  create(filename, positionX, positionY) {
    this.filename = filename;
    this.positionX = positionX;
    this.positionY = positionY;
    cats.push(this);
    return this;
  },

  render() {
    var element = document.createElement("img");
    element.src = "./images/" + this.filename;
    element.style.left = this.positionX + "px";
    element.style.top = this.positionY + "px";
    element.classList.add("cat");
    this.element = element;
    return element;
  },

  /**
   * Selection du chat
   * ----------------------------------------------
   */

  select() {
    cats.forEach(function (otherCat) {
      if (otherCat !== this) {
        otherCat.selected = false;
        otherCat.element.removeAttribute("active");
      }
    });

    this.selected = true;
    this.element.setAttribute("active", "");

    return this;
  },

  /**
   * Déplacement du chat dans chaque direction
   * ----------------------------------------------
   */
  moveUp() {
    var newY = this.positionY - step;
    if (newY >= 0 && canMove(this.positionX, newY)) {
      this.positionY = newY;
      this.element.style.top = newY + "px";
      return true;
    } else {
      return false;
    }
  },

  moveDown() {
    var newY = this.positionY + step;
    if (newY <= 400 && canMove(this.positionX, newY)) {
      this.positionY = newY;
      this.element.style.top = newY + "px";
      return true;
    } else {
      return false;
    }
  },

  moveLeft() {
    var newX = this.positionX - step;
    if (newX >= 0 && canMove(newX, this.positionY)) {
      this.positionX = newX;
      this.element.style.left = newX + "px";
      return true;
    } else {
      return false;
    }
  },

  moveRight() {
    var newX = this.positionX + step;
    if (newX <= 400 && canMove(newX, this.positionY)) {
      this.positionX = newX;
      this.element.style.left = newX + "px";
      return true;
    } else {
      return false;
    }
  },
};

/**
 * Fonction qui determine si on peut encore déplacer le chat:
 * 1. si il dépasse pas le damier
 * 2. si la place n'est pas occupé par un autre chat
 * ----------------------------------------------
 */
function canMove(x, y) {
  for (var i = 0; i < cats.length; i++) {
    if (cats[i].positionX === x && cats[i].positionY === y) {
      return false;
    }
  }
  return true;
}
