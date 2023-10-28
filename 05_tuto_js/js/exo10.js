// Demandez à l'utilisateur d'entrer un nombre entier
let nombre = parseInt(prompt("Veuillez entrer un nombre entier :"));

// Vérifiez si le nombre est pair ou impair
if (nombre % 2 === 0) {
    alert("Le nombre " + nombre + " est pair.");
} else {
    alert("Le nombre " + nombre + " est impair.");
}
