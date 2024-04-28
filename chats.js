
window.onload = function() {
    var form = document.getElementById("form");
        form.addEventListener("click", function(e) {
            var selected = e.target.value;
            console.log(selected);
        })
        var c = [];
        for (var i = 0; i < chats.length; i++) {
            c[i] = Object.create(monJson);
            c[i].setAll(chats[i].nom, chats[i].x, chats[i].y);
            c[i].creerImage();
        }
            //déplacer les personnages vers la droite
    document.querySelector("button:nth-of-type(3)").addEventListener("click", function () {
        for (var i = 0; i < c.length; i++) {
            c[i].deplacerH(10);
        }
    })
    //déplacer les personnages vers la gauche 
    document.querySelector("button:nth-of-type(2)").addEventListener("click", function () {
        for (var i = 0; i < c.length; i++) {
            c[i].deplacerH(-10);
        }
    })
};