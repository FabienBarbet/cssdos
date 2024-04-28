window.onload = function () {
  /**
   * Creation d'un tableau de chats
   * ----------------------------------------------
   */
  // definition de l'object chat
  function Cat(filename, positionX, positionY) {
    this.filename = filename;
    this.positionX = positionX;
    this.positionY = positionY;
  }
  // tableau predefinie de chats
  var cats = [
    new Cat("chat-lunette.png", 0, 0),
    new Cat("chat-mignon.png", 100, 0),
    new Cat("chat-moustaches.png", 200, 0),
  ];

  /**
   * Ajout de l'attribut active sur l'élément sélectionné
   * ----------------------------------------------
   */
  // on initialyze la variable qui contiendra le chat selectionné
  var selected = null;

  // fonction qui gere la selection courrante
  function selectCat(cat) {
    // d'abord on reinitialize en retirant l'attribut precédant
    if (selected) {
      selected.removeAttribute("active");
    }
    // puis on l'assigne sur le nouvel element selectionné
    cat.setAttribute("active", "");
    selected = cat;
    // Réinitialiser les bouttons si `disabled`
    updateButtonStatus();
  }

  /**
   * Placement des chats dans le DOM
   * ----------------------------------------------
   */

  // on recupère le plateau dans le DOM
  var board = document.getElementById("board");

  // on ajoute chaque chats sur le plateau
  cats.forEach(function (cat) {
    // Creation de l'element <img>
    var image = document.createElement("img"); // <img></img>
    image.src = "../images/" + cat.filename; // src="./images/nomdufichier.png"
    image.style.left = cat.positionX + "px"; // left="XXpx"
    image.style.top = cat.positionY + "px"; // top="XXpx"
    image.classList.add("cat"); // class="chat"
    // Ajout de l'élement dans le plateau
    board.appendChild(image);
    // Ajout de l'attribut `active` sur l'évement `click`
    image.addEventListener("click", function () {
      selectCat(image); // si clické: <img active></img>
    });
  });

  /**
   * Fonction pour tester si le movement est possible
   * (si la position est occupé)
   * ----------------------------------------------
   */
  // on recupère tous les chats dans le DOM
  var cats = document.querySelectorAll(".cat");

  function isCatAtPosition(x, y) {
    // on ittère chaque élément pour tester si une position est occupé
    for (var i = 0; i < cats.length; i++) {
      var cat = cats[i];
      // on recupere la position du chat
      var catLeft = parseInt(cat.style.left);
      var catTop = parseInt(cat.style.top);
      // ... et on test avec les valeur en argument
      if (catLeft === x && catTop === y) {
        return true;
      }
    }
    // sinon, la position est libre, est on retourne false
    return false;
  }

  /**
   * Function pour gérer le movement
   * ----------------------------------------------
   */
  function moveCat(direction) {
    var step = 100; // valeur du pas de chaque déplacement
    // on récupere la position de l'élément actif
    var currentLeft = parseInt(selected.style.left);
    var currentTop = parseInt(selected.style.top);

    switch (direction) {
      // on teste si le mouvement est possible pour chaque direction
      case "up":
        // si la position est dans la limite du plateau
        // ... et que la position n'est pas occupé
        if (
          currentTop - step >= 0 &&
          !isCatAtPosition(currentLeft, currentTop - step)
        ) {
          // ... on déplace l'élément
          selected.style.top = currentTop - step + "px";
        }
        break;
      case "down":
        if (
          currentTop + step <= 400 &&
          !isCatAtPosition(currentLeft, currentTop + step)
        ) {
          selected.style.top = currentTop + step + "px";
        }
        break;
      case "left":
        if (
          currentLeft - step >= 0 &&
          !isCatAtPosition(currentLeft - step, currentTop)
        ) {
          selected.style.left = currentLeft - step + "px";
        }
        break;
      case "right":
        if (
          currentLeft + step <= 400 &&
          !isCatAtPosition(currentLeft + step, currentTop)
        ) {
          selected.style.left = currentLeft + step + "px";
        }
        break;
    }
    // Réinitialiser les bouttons si `disabled`
    updateButtonStatus();
  }

  /**
   * Fonction pour mettre à jour les bouttons selon la disponibilité
   * ----------------------------------------------
   */
  function updateButtonStatus() {
    var currentLeft = parseInt(selected.style.left);
    var currentTop = parseInt(selected.style.top);
    var step = 100; // value of each movement step

    // réinitialiser tout les boutons à `enable`
    document.getElementById("moveUp").disabled = false;
    document.getElementById("moveDown").disabled = false;
    document.getElementById("moveLeft").disabled = false;
    document.getElementById("moveRight").disabled = false;

    // Vérifier si le mouvement est possible et désactiver sinon
    if (
      currentTop - step < 0 ||
      isCatAtPosition(currentLeft, currentTop - step)
    ) {
      document.getElementById("moveUp").disabled = true;
    }
    if (
      currentTop + step > 400 ||
      isCatAtPosition(currentLeft, currentTop + step)
    ) {
      document.getElementById("moveDown").disabled = true;
    }
    if (
      currentLeft - step < 0 ||
      isCatAtPosition(currentLeft - step, currentTop)
    ) {
      document.getElementById("moveLeft").disabled = true;
    }
    if (
      currentLeft + step > 400 ||
      isCatAtPosition(currentLeft + step, currentTop)
    ) {
      document.getElementById("moveRight").disabled = true;
    }
  }

  /**
   * Ajout de l'évenement `click` sur chaque boutons pour déplacer
   * ... et assignation de la fonction approprier
   * ----------------------------------------------
   */
  document.getElementById("moveUp").addEventListener("click", function () {
    if (!document.getElementById("moveUp").disabled) {
      moveCat("up");
    }
  });

  document.getElementById("moveDown").addEventListener("click", function () {
    if (!document.getElementById("moveDown").disabled) {
      moveCat("down");
    }
  });

  document.getElementById("moveLeft").addEventListener("click", function () {
    if (!document.getElementById("moveLeft").disabled) {
      moveCat("left");
    }
  });

  document.getElementById("moveRight").addEventListener("click", function () {
    if (!document.getElementById("moveRight").disabled) {
      moveCat("right");
    }
  });

  /**
   * On initialize le premier chat selectionné par défaut
   * ----------------------------------------------
   */
  selectCat(cats[0]);
};
