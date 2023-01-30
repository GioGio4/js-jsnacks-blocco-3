// SNACK 5 - TRACCIA
// Genera un numero a caso compreso tra 1-100.
//  Chiedi all’utente un numero fino a quando non indovina quello generato casualmente. 
//  Ogni volta che l'utente inserisce un numero, digli se è maggiore o minore di quello generato. 
//  Alla fine stampa il numero di tentativi che ci sono voluti per indovinare il numero generato casualmente.
//---------------------------------------------------------------------------------------------------------------//


// Genera un numero randomico tra 1-100

const random_number = Math.floor(Math.random() * 100) + 1;
console.log("Numero randomico: " + random_number);

let user_number = 0;

let tentativi = 0;

debugger;
//Chiedi all'utente un numero casuale da 1 a 100 per indovinare il numero casuale
while (user_number != random_number) {

    user_number = parseInt(prompt("Inserisci un numero da 1 a 100"));

    if (user_number > random_number) {
        alert("Il numero inserito è maggiore di quello da indovinare");
    }

    else if (user_number == random_number) {
        alert("Complimenti hai indovinato il numero nascosto");
    }

    else {
        alert("Il numero inserito è minore di quello da indovinare");
    }

    tentativi += 1;
}

document.getElementById("tentativi").innerHTML = ("I tuoi tentativi: " + tentativi);
// FINCHè non indovina quello casuale.

// SE l'utente inserisce un numero maggiore di quello casuale, avvertilo che è maggiore

// ALTRIMENTI, avvertilo che è minore

//Stampa i tentativi che ci sono voluti per indovinare il numero casuale.
