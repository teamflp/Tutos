// Afficher nom et prénom
let prenom = prompt("Veuillez entrer votre prénom :");
let nom = prompt("Veuillez entrer votre nom :");

//console.log("Prénom : " + prenom + ", Nom : " + nom);
// Si vous souhaitez utiliser alert() à la place, décommentez la ligne suivante :
alert("Prénom : " + prenom + ", Nom : " + nom);

/***************************************************************************************/
// Changement de couleur

// Option 1 : en utilisant la fonction onclick
/*function changerCouleur() {
    // Sélectionne le paragraphe par son ID
    let paragraphe = document.getElementById("monParagraphe");

    // Change la couleur du paragraphe
    paragraphe.style.color = "red"; // Ici, la couleur est définie sur "red", mais vous pouvez choisir n'importe quelle autre couleur.
}*/

// Option 2 : en utilisant la fonction addEventListener
/*
let bouton = document.querySelector("button");
bouton.addEventListener("click", changerCouleur);
*/

// Option 3 : en utilisant la fonction addEventListener

let bouton = document.querySelector("button");
let paragraphe = document.getElementById("monParagraphe");
bouton.addEventListener("click", function() {
    // Change la couleur du paragraphe
    paragraphe.style.color = "red"; // Ici, la couleur est définie sur "red", mais vous pouvez choisir n'importe quelle autre couleur.
});