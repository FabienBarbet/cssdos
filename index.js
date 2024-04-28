var catArray = [
  Object.create(cat).create("chat-lunette.png", 0, 0),
  Object.create(cat).create("chat-mignon.png", 100, 0),
  Object.create(cat).create("chat-moustaches.png", 200, 0),
];

var selected = null;

window.onload = function () {
  var board = document.getElementById("board");

  catArray.forEach(function (cat) {
    var element = cat.render();
    board.appendChild(element);
    element.addEventListener("click", function () {
      selected = cat.select(catArray);
    });
  });

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

  catArray[0].select();
};
