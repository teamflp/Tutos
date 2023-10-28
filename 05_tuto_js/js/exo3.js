/** EXO 3 : Addition, soustraction, multiplication et division
 * Créez deux variables a et b puis affichez avec alert() ou console.log() :
 * 1. la somme de ces deux nombres.
 * 2. la différence de ces deux nombres.
 * 3. le produit de ces deux nombres.
 * 4. le quotient de ces deux nombres.
 */

// Déclaration des deux variables a et b et affectation de leur valeur de départ
let a = 5; // vous pouvez changer cette valeur
let b = 3; // vous pouvez aussi changer cette valeur

// Calcul et affichage de la somme
let somme = a + b;
console.log("La somme de " + a + " et " + b + " est : " + somme);

// Calcul et affichage de la différence
let difference = a - b;
console.log("La différence entre " + a + " et " + b + " est : " + difference);

// Calcul et affichage du produit
let produit = a * b;
console.log("Le produit de " + a + " et " + b + " est : " + produit);

// Calcul et affichage du quotient
// Vérification que b n'est pas égal à zéro pour éviter une division par zéro
if (b !== 0) {
    let quotient = a / b;
    console.log("Le quotient de " + a + " divisé par " + b + " est : " + quotient);
} else {
    console.log("Division par zéro non autorisée.");
}
