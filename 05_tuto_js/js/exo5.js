// Demandez à l'utilisateur d'entrer l'heure actuelle
let heure = parseInt(prompt("Veuillez entrer l'heure actuelle (un nombre entre 0 et 23) :"));

// Vérifiez l'heure entrée et affichez le message correspondant
if (heure >= 0 && heure < 12) {
    alert("Bonjour");
} else if (heure >= 12 && heure < 18) {
    alert("Bon après-midi");
} else if (heure >= 18 && heure <= 23) {
    alert("Bonsoir");
} else {
    alert("Veuillez entrer une heure valide.");
}
