/** Exemple 1 :
 * Écrivez une boucle qui parcourt les nombres de 1 à 100.
 * Pour les multiples de 3, affichez Fizz,
 * pour les multiples de 5, affichez Buzz, et
 * pour les multiples de 3 et 5, affichez FizzBuzz.
 */

/*for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        document.write('FizzBuzz ');
    } else if (i % 3 === 0) {
        document.write('Fizz ');
    } else if (i % 5 === 0) {
        document.write('Buzz ');
    } else {
        document.write(i + '\n');
    }
}*/

// Exemple 2 : Crée une table et un élément tbody
/* let table = document.createElement('table');
 let tbody = document.createElement('tbody');

 for (let i = 1; i <= 100; i++) {
     let result = '';

     // Si le nombre est un multiple de 3, ajoute 'Fizz' au résultat
     if (i % 3 === 0) {
         result += 'Fizz';
     }

     // Si le nombre est un multiple de 5, ajoute 'Buzz' au résultat
     if (i % 5 === 0) {
         result += 'Buzz';
     }

     // Si le résultat est vide, utilise le nombre lui-même
     if (!result) {
         result = i;
     }

     // Crée une nouvelle ligne et une cellule pour le résultat
     let row = document.createElement('tr');
     let cell = document.createElement('td');
     cell.textContent = result;

     // Ajoute la cellule à la ligne et la ligne au tbody
     row.appendChild(cell);
     tbody.appendChild(row);
 }*/

// Exemple 3 : Ajoute le tbody à la table et la table au document
 table.appendChild(tbody);
 document.body.appendChild(table);

 // Applique un peu de style pour une meilleure visibilité
 table.style.borderCollapse = 'collapse';
 table.style.width = '200px';
 table.style.textAlign = 'center';
 table.style.marginTop = '20px';

// Crée une table
let table = document.createElement('table');

// Crée et ajoute l'en-tête avec les numéros de 1 à 100
let thead = document.createElement('thead');
let headerRow = document.createElement('tr');
for (let i = 1; i <= 100; i++) {
    let cell = document.createElement('th');
    cell.textContent = i;
    headerRow.appendChild(cell);
}
thead.appendChild(headerRow);
table.appendChild(thead);

// Crée et ajoute le corps du tableau avec 'Fizz', 'Buzz', 'FizzBuzz', ou le numéro
let tbody = document.createElement('tbody');
let row = document.createElement('tr');
for (let i = 1; i <= 100; i++) {
    let result = '';

    if (i % 3 === 0) {
        result += 'Fizz';
    }
    if (i % 5 === 0) {
        result += 'Buzz';
    }
    if (!result) {
        result = i;
    }

    let cell = document.createElement('td');
    cell.textContent = result;
    row.appendChild(cell);
}
tbody.appendChild(row);
table.appendChild(tbody);

// Ajoute la table au document et applique un peu de style pour la visibilité
document.body.appendChild(table);
table.style.borderCollapse = 'collapse';
table.style.width = '100%';
table.style.textAlign = 'center';
table.style.marginTop = '20px';

// Applique des styles aux en-têtes et aux cellules pour les distinguer
let ths = document.querySelectorAll('th');
for (let th of ths) {
    th.style.border = '1px solid black';
    th.style.padding = '5px';
}

let tds = document.querySelectorAll('td');
for (let td of tds) {
    td.style.border = '1px solid black';
    td.style.padding = '5px';
}

