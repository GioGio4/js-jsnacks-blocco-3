// SNACK1 - TRACCIA

// Chiedi all'utente un valore minimo ed un valore massimo.
//  Genera un numero casuale all'interno del range fornito dall'utente.
// ------------------------------------------------------------------------//


const range_number = document.getElementById("range-user-number");
const number_low_el = document.getElementById("user-number-low");
const number_hig_el = document.getElementById("user-number-hig");


// Chiedi all'utente un numero minimo e stampalo
let user_number_low = parseInt(prompt("Inserisci un valore minimo"));
number_low_el.innerHTML = user_number_low;


// Chiedi all'utente un numero massimo e stampalo
let user_number_hig = parseInt(prompt("Inserisci un valore massimo"));
number_hig_el.innerHTML = user_number_hig

// Genera un numero compreso tra i due valori inseriti dall'utente e stampalo.

range_number.innerHTML = Math.floor(Math.random() * (user_number_hig - user_number_low)) + user_number_low;
