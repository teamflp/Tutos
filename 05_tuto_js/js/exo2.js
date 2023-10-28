/** EXO 2 : Votes municipaux
 * Pour les votes municipaux, vous devez créer un programme qui permet de calculer l'age d'un votant et de déterminer s'il est majeur ou non
 * Selon la loi, un votant est majeur s'il a 18 ans ou plus
 * Si le votant est majeur, le programme doit afficher "Vous êtes majeur, vous pouvez voter", sinon il doit afficher "Vous êtes mineur, vous ne pouvez pas voter"
 */

// Demandez à l'utilisateur de saisir son année de naissance
let anneeNaissance = parseInt(prompt("Veuillez entrer votre année de naissance :"));

// Calculez l'âge de l'utilisateur
let dateActuelle = new Date();
let anneeActuelle = dateActuelle.getFullYear();
let age = anneeActuelle - anneeNaissance;

// Vérifiez si l'utilisateur est majeur ou mineur et affichez le message correspondant
if (age >= 18) {
    alert("Vous êtes majeur, vous pouvez voter.");
} else {
    alert("Vous êtes mineur, vous ne pouvez pas voter.");
}