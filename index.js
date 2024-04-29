//création des chats et placement directement sur le damier à des emplacement différents
var catArray = [
  Object.create(cat).create("chat-lunette.png", 0, 0),
  Object.create(cat).create("chat-mignon.png", 100, 0),
  Object.create(cat).create("chat-moustaches.png", 200, 0),
];

var selected = null;

window.onload = function () {
  /**
   * Selection des chat sur le damier
   * ----------------------------------------------
   */
  var board = document.getElementById("board");

  catArray.forEach(function (cat) {
    var element = cat.render();
    board.appendChild(element);
    element.addEventListener("click", function () {
      selected = cat.select(catArray);
    });
  });

  /**
   * Déplacement des chats dans le damier
   * ----------------------------------------------
   */
  document.getElementById("moveUp").addEventListener("click", function () {
    selected.moveUp();
  });
  document.getElementById("moveDown").addEventListener("click", function () {
    selected.moveDown();
  });
  document.getElementById("moveLeft").addEventListener("click", function () {
    selected.moveLeft();
  });
  document.getElementById("moveRight").addEventListener("click", function () {
    selected.moveRight();
  });

  selected = catArray[0].select();

  /**
   * Fonction permettent le déplacement via flèches clavier
   * ----------------------------------------------
   */

  document.onkeydown = checkKey;

  function checkKey(e) {
    e = e || window.event;

    if (e.keyCode == "38") {
      selected.moveUp();
      // up arrow
    } else if (e.keyCode == "40") {
      selected.moveDown();
      // down arrow
    } else if (e.keyCode == "37") {
      selected.moveLeft();
      // left arrow
    } else if (e.keyCode == "39") {
      selected.moveRight();
      // right arrow
    }
  }
};
