//Partie 1 :
function afficherValeurs() {
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    console.log("Nom:", nom);
    console.log("Prénom:", prenom);
    console.log("Âge:", age);
    console.log("E-mail:", email);
    console.log("Mot de passe:", password);

    // Pour utiliser alert() :
    // alert("Nom: " + nom + "\nPrénom: " + prenom + "\nÂge: " + age + "\nE-mail: " + email + "\nMot de passe: " + password);
}

/****************************************************************************/

// Option 1 : en utilisant innerHTML
function afficherBienvenue() {
    let nom = document.getElementById("nomDeBienvenue").value;
    let message = document.getElementById("messageBienvenue");
    message.innerHTML = "Bienvenue " + nom + " !";
}

// Option 2 : en utilisant textContent
function afficherBienvenue() {
    let nom = document.getElementById("nomDeBienvenue").value;
    document.getElementById("messageBienvenue").textContent = "Bienvenue, " + nom + "!";
}

// Option 3 : en utilisant querySelector

function afficherBienvenue() {
    let nom = document.getElementById("nomDeBienvenue").value;
    document.querySelector("h2").textContent = "Bienvenue, " + nom + "!";
}