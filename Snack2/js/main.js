// SNACK2 - TRACCIA//
// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array.
//  Continua a chiedere i numeri all'utente e a inserirli nell'array
//  fino a quando la somma degli elementi è minore di 50.
// --------------------------------------------------------------------------------//
//   NOTE  //
// Se l'utente inserisce al primo prompt un numero superiore a 50
//  il ciclo "while" non parte.
//---------------------------------------------------------------------------------//

// Crea un Array vuota
const number = [];
// console.log(number);
let addition_user_number = 0;

//chiedi un numero alll'utente
let user_number_el = parseInt(prompt("Inserisci un numero a scelta"));

// Inseriscilo nell'array
number.push(user_number_el);

addition_user_number += user_number_el;
// console.log(addition_user_number);


// continua a chiedere numeri all'utente FINCHè la somma degli elementi è minore di 50
while (addition_user_number < 50) {
    // continua a chiedere numeri all'utente
    let user_number_el = parseInt(prompt("Inserisci un altro numero"));
    // Inserisci numero nell'array
    number.push(user_number_el);
    //Somma i numeri inseriti
    addition_user_number += user_number_el;

    // console.log("Somma user Number" + addition_user_number);
}