window.onload = function() {
    var monJson = {
        //Propriétés
        'nom': "chat-lunette",
        'x': 50,
        'y': 50,
        image: "images/chat-lunette",
        //attribuer les propriétés des personnages
        setAll: function (n, cX, cY) {
            this.nom = n;
            this.x = cX;
            this.y = cY;
        },
        toString: function () {
            return this.nom + " " + this.x + " " + this.y;
        },
        creerImage: function () {
            this.image = document.createElement("IMG");
            this.image.setAttribute('src', this.nom + ".jpg");/* src = va chercher l'image*/
            this.image.style.width = "100px";
            this.image.style.left = this.x + "px";
            this.image.style.top = this.y + "px";
            document.querySelector("body > section:nth-of-type(2) ").appendChild(this.image); /*affecte l'image*/ 
        },
        deplacerH: function (v) {/*unité rajoutée pour déplacer à droite ou à gauche*/
            this.x = this.x + v;
            this.image.style.left = this.x + "px";
            
        }
    }
}