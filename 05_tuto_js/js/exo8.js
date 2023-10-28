// Demandez à l'utilisateur d'entrer les deux nombres
let nombre1 = parseFloat(prompt("Veuillez entrer le premier nombre :"));
let nombre2 = parseFloat(prompt("Veuillez entrer le deuxième nombre :"));

// Affichez les nombres originaux
console.log("Nombre 1: " + nombre1);
console.log("Nombre 2: " + nombre2);

// Permutez les valeurs des deux nombres
let temp = nombre1;
nombre1 = nombre2;
nombre2 = temp;

// Affichez les nombres après permutation
console.log("Après permutation :");
console.log("Nombre 1: " + nombre1);
console.log("Nombre 2: " + nombre2);

// Si vous souhaitez utiliser alert() :
// alert("Nombres originaux :\nNombre 1: " + temp + "\nNombre 2: " + nombre2);
// alert("Après permutation :\nNombre 1: " + nombre1 + "\nNombre 2: " + nombre2);
