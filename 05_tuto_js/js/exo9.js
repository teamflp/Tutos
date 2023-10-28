// Demandez à l'utilisateur d'entrer une chaîne de caractères
let chaine = prompt("Veuillez entrer une chaîne de caractères :");

// Fonction pour compter le nombre de voyelles dans une chaîne
function compterVoyelles(texte) {
    let count = 0;
    let voyelles = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'];

    for (let lettre of texte) {
        if (voyelles.includes(lettre)) {
            count++;
        }
    }
    return count;
}

// Affichez le nombre de voyelles
let nombreVoyelles = compterVoyelles(chaine); // Appel de la fonction
alert("Le nombre de voyelles dans la chaîne est : " + nombreVoyelles);
