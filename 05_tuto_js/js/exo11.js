//Partie  1

// Option 1 : Utilisation de la méthode sort()
// Demandez à l'utilisateur d'entrer une liste de nombres séparés par des virgules
/*let liste = prompt("Veuillez entrer une liste de nombres séparés par des virgules :");

// Convertissez la chaîne de caractères en tableau
let tableau = liste.split(",");
console.log("Tableau avant tri : " + tableau);

// Triez le tableau
tableau.sort(function(a, b) {
    return a - b;
});

// Affichez le tableau trié
console.log("Tableau après tri : " + tableau);*/

// Option 2 : Utilisation de la méthode sort() et de la fonction fléchée (arrow function) ES6
/*let nombres = prompt("Veuillez entrer une liste de nombres séparés par des virgules:");
let tableauNombres = nombres.split(',').map(Number).sort((a, b) => a - b);
alert("Nombres triés par ordre croissant : " + tableauNombres.join(', '));*/

/***********************************************************************************************/

//Partie  2 : Trier une liste de noms

// Demandez à l'utilisateur d'entrer une liste de noms séparés par des virgules
/*let liste = prompt("Veuillez entrer une liste de noms séparés par des virgules :");

// Convertissez la chaîne de caractères en tableau
let tableau = liste.split(",");
console.log("Tableau avant tri : " + tableau);

// Triez le tableau
tableau.sort();

// Affichez le tableau trié
console.log("Tableau après tri : " + tableau);*/

// Option 2 : Utilisation de la méthode sort() et de la fonction fléchée (arrow function) ES6
/*let noms = prompt("Veuillez entrer une liste de noms séparés par des virgules:");
let tableauNoms = noms.split(',').sort((a, b) => a.localeCompare(b));
alert("Noms triés par ordre alphabétique : " + tableauNoms.join(', '));*/

// Option 3 : Utilisation de la méthode map(), sort() et de la fonction fléchée (arrow function) ES6
/*let noms = prompt("Veuillez entrer une liste de noms séparés par des virgules:");
let tableauNoms = noms.split(',').map(nom => nom.trim()).sort();
alert("Noms triés par ordre alphabétique : " + tableauNoms.join(', '));*/

/***********************************************************************************************/

//Partie  3 : Trouver le plus grand nombre dans une liste

// Option 1:
/*let liste = prompt("Veuillez entrer une liste de nombres séparés par des virgules :");

// Convertissez la chaîne de caractères en tableau
let tableau = liste.split(",");
console.log("Tableau : " + tableau);

// Trouvez le plus grand nombre dans le tableau
let max = Math.max(...tableau);
console.log("Le plus grand nombre est : " + max);*/

// Option 2 : Utilisation de la méthode Math.max() et de map()

/*let nombres = prompt("Veuillez entrer une liste de nombres séparés par des virgules:");
let tableauNombres = nombres.split(',').map(Number);
let plusGrandNombre = Math.max(...tableauNombres);
alert("Le plus grand nombre est : " + plusGrandNombre);*/

// Option 3 : Utilisation d'une boucle for
/*let liste = prompt("Veuillez entrer une liste de nombres séparés par des virgules :");
let tableau = liste.split(",").map(Number); // Convertir chaque élément du tableau en nombre
console.log("Tableau : " + tableau);

let max = tableau[0];
for (let i = 1; i < tableau.length; i++) {
    if (tableau[i] > max) {
        max = tableau[i];
    }
}

console.log("Le plus grand nombre est : " + max); */

/***********************************************************************************************/