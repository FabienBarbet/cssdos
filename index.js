//
/**
 * création des chats et placement directement sur le damier à des emplacement différents
 * ----------------------------------------------
 */

var catArray = [
  Object.create(cat).create("chat-lunette.png", 0, 0),
  Object.create(cat).create("chat-mignon.png", 100, 0),
  Object.create(cat).create("chat-moustaches.png", 200, 0),
];

var selected = null;

window.onload = function () {
  /**
   * Selection des chats sur le damier
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
   * Fonction permettant le déplacement via flèches clavier
   * ----------------------------------------------
   */

  document.onkeydown = checkKey;

  function checkKey(e) {
    e = e || window.event;

    if (e.keyCode == "38") {
      // flèche haut
      selected.moveUp();
    } else if (e.keyCode == "40") {
      // flèche bas
      selected.moveDown();
    } else if (e.keyCode == "37") {
      // flèche gauche
      selected.moveLeft();
    } else if (e.keyCode == "39") {
      // flèche droite
      selected.moveRight();
    }
  }
};
